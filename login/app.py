from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3
import hashlib

app = Flask(__name__)
app.secret_key = "f3949df589aa06842541d031052e0ea5"  # Change this to a secure secret key

# Function to create a connection to the SQLite database
def connect_db():
    return sqlite3.connect('users.db')

# Initialize the database and create the users table if it doesn't exist
def init_db():
    conn = connect_db()
    with app.open_resource('schema.sql', mode='r') as f:
        conn.cursor().executescript(f.read())
    conn.commit()
    conn.close()

# Hash the password using SHA-256
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Register route
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user_type = request.form['user_type']  # New field for user type
        hashed_password = hash_password(password)

        conn = connect_db()
        conn.execute('INSERT INTO users (username, password, user_type) VALUES (?, ?, ?)', (username, hashed_password, user_type))
        conn.commit()
        conn.close()

        return redirect(url_for('login'))

    return render_template('register.html')

# Login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed_password = hash_password(password)

        conn = connect_db()
        conn.row_factory = sqlite3.Row  # Set row factory to sqlite3.Row
        cursor = conn.cursor()

        # Execute the query and fetch the first row as a dictionary
        cursor.execute('SELECT * FROM users WHERE username = ? AND password = ?', (username, hashed_password))
        user = cursor.fetchone()

        conn.close()

        if user:
            session['logged_in'] = True
            session['username'] = user['username']
            session['user_type'] = user['user_type']
            return redirect(url_for('home'))
        else:
            return 'Invalid login credentials'

    return render_template('login.html')

# Home route
@app.route('/home')
def home():
    if 'logged_in' in session:
        user_type = session['user_type']
        return f'Welcome, {session["username"]}! You are a {user_type}.'
    return redirect(url_for('login'))

# Logout route
@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
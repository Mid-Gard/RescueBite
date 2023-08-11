# importing libraries
from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timedelta
import random

# creating app instance
app = Flask(__name__)

# adding configuration for using a sqlite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
 
# Creating an SQLAlchemy instance
db = SQLAlchemy(app)

# time difference function
def calculate_time_difference(date_str1, date_utc):
    try:
        date_format = "%Y-%d-%m"
        
        datetime1 = datetime.strptime(date_str1, date_format)
        datetime2 = datetime.utcnow()  # Get current UTC datetime
        
        time_difference = abs((datetime2 - datetime1).total_seconds())
        return time_difference
    except ValueError:
        return None

# DATABASE MODELS

# Model for buy/donate page
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    task = db.Column(db.Integer, unique=False, nullable=False)
    ctime = db.Column(db.String(20), unique=False, nullable=False)
    cat = db.Column(db.String(100), unique=False, nullable=False)
    note = db.Column(db.String(100), unique=False, nullable=False)
    shelf_life = db.Column(db.Integer, unique=False, nullable=False)
    validity = db.Column(db.Integer, unique=False, nullable=False)
    expiry = db.Column(db.Integer, unique=False, nullable=False) 
    status = db.Column(db.Integer, unique=False, nullable=False)
    date = db.Column(db.DateTime, default = datetime.utcnow)
 
    # repr method represents how one object of this datatable
    def __repr__(self):
        return f"name: {self.name}, task: {self.task}"


# ROUTES/ENDPOINTS

# home page route
@app.route('/')
def home():
    return render_template('index.html', title = "home page")


# dashboard page route
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', title = "dashboard page")


# details page route
@app.route('/detail', methods = ['POST', 'GET'])
def detail():

    if request.method == 'POST':

        fname = request.form['fname']
        ftask = request.form['ftask']
        fnote = request.form['fnote']
        fcat = request.form['fcat']
        ftime = request.form['ftime']

        # calculation for validity time
        date_str1 = ftime

        time_difference = calculate_time_difference(date_str1, datetime.utcnow())

        # calculation for expiry time
        shelf_life_sec = random.randrange(8, 30) * 3600
        exp_time = shelf_life_sec - time_difference

        if exp_time > 0:
            status_num = 1
        else:
            status_num = 0

        # converting the expiry time into string
        exp_time = timedelta(seconds=exp_time)
        exp_time = str(exp_time)
        
        # converting the validation time into string
        time_difference = timedelta(seconds=time_difference)
        time_difference = str(time_difference)

        todo = Todo(name = fname, task = ftask, cat = fcat ,note = fnote, shelf_life = random.randrange(8, 30), ctime = ftime, validity = time_difference, expiry = exp_time, status = status_num)
        db.session.add(todo)
        db.session.commit()


    allTodo = Todo.query.all()
    print(allTodo)

    if request.accept_mimetypes.best == 'application/json':
        todo_list = [{
            "id": item.id,
            "name": item.name,
            "task": item.task,
            "cat": item.cat,
            "shelf_life": item.shelf_life,
            "validity": item.validity,
            "expiry": item.expiry,
            "status": item.status,
            "note": item.note,
            "date": item.date.strftime('%Y-%m-%d %H:%M:%S')
        } for item in allTodo]
        return jsonify(todo_list)

     # Check if the client accepts JSON response
    if request.accept_mimetypes.best == 'application/json':
        todo_list = [{"id": item.id, "name": item.name, "task": item.task,
                      "cat": item.cat, "note": item.note, "date": item.date.strftime('%Y-%m-%d %H:%M:%S')}
                     for item in allTodo]
        return jsonify(todo_list)


    return render_template('detail.html', title = "details page", allTodo = allTodo)


# SELL PAGE ROUTES

# sell/donate route page to create and read  the data
@app.route('/sell')
def sell():
    return render_template('sell.html', title = "sell/donate page")

# delete sell/donate page data route
@app.route('/delete/<int:id>')
def delete(id):
    todo = Todo.query.filter_by(id = id).first()
    db.session.delete(todo)
    db.session.commit()
    return redirect(url_for('detail'))

# update sell/donate page data route
@app.route('/update/<int:id>', methods = ['POST', 'GET'])
def update(id):
    if request.method == 'POST':

        fname = request.form['fname']
        ftask = request.form['ftask']
        todo = Todo.query.filter_by(id = id).first()
        todo.name = fname
        todo.task = ftask
        db.session.add(todo)
        db.session.commit()
        return redirect(url_for('detail'))

    todo = Todo.query.filter_by(id = id).first()

    return render_template('update.html', title = "update todo", todo = todo)


# BUY PAGE ROUTES

# buy/claim page route
@app.route('/buy')
def buy():
    return render_template('buy.html', title = "buy/claim page")


# running the driver function
if __name__ == '__main__':
    app.run(debug=True, port=8000)

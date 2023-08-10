# create_db.py

from back import app, db

# Create the necessary tables in the database based on your defined models.
# This code will run in the Flask application context.
with app.app_context():
    db.create_all()
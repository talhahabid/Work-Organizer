import mysql.connector

db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'password',
    'database': 'task_project'
}

def get_db_connection():
    conn = mysql.connector.connect(**db_config)
    return conn
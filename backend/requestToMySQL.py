from flask import request, jsonify
from config import get_db_connection

def add_task(table):
    try:

        # print("working1")
        task_data = request.get_json()
        task_name = task_data.get("name")
        task_date = task_data.get("date")
        task_id = int(task_data.get("id"))
        task_description = task_data.get("description")

        # print("working2")
        query = f'INSERT INTO {table} (name, date, description, task_id) VALUES (%s, %s, %s, %s)'
        conn = get_db_connection()
        # print("working2.1")
        cursor = conn.cursor()
        # print("working2.2")
        # print(task_name)
        # print(task_date)
        # print(task_id)
        cursor.execute(query, (task_name, task_date, task_description, task_id))
        # print("working3")
        conn.commit()
        cursor.close()
        conn.close()
        # print("working4")

        return jsonify({"message": f"SUCCESS -> Added data to {table}"}), 200
    
    except Exception as e:
        return jsonify({"message": f"ERROR -> Adding data to {table}", "error": str(e)}), 400

def get_tasks(table):
    try:
        query = f'SELECT * FROM {table}'
        
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(query)
        tasks = cursor.fetchall()
        cursor.close()
        conn.close()

        task_list = [{"id": task[4], "name": task[1], "date": task[2], "description": task[3]} for task in tasks]
        return jsonify({"message": f"SUCCESS -> Fetched data from {table}", "data": task_list}), 200

    except Exception as e:
        return jsonify({"message": f"ERROR -> Fetching data from {table}", "error": str(e)}), 400

def delete_task(table):
    try:
        # print("working1")
        task = request.get_json()
        task_id = task.get("data");
        query = f'DELETE FROM {table} WHERE task_id = %s'
        # print("working2")
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(query, (task_id,))
        # print("working3")
        conn.commit()
        cursor.close()
        conn.close()
        # print("working4")

        return jsonify({"message": f"SUCCESS -> Deleted data from {table} task_id = {task_id}"}), 200
    
    except Exception as e:
        return jsonify({"message": f"ERROR -> Deleting data from {table}", "error": str(e)}), 400

def update_task(table):
    try:
        # print("working1")
        task_data = request.get_json()
        # print(task_data)
        # print("working1.1")
        task_name = task_data.get("name")
        task_date = task_data.get("date")
        task_description = task_data.get("description")
        task_id = int(task_data.get("id"))
      

        # print("working2")

        query = f"UPDATE {table} SET name = %s, date = %s, description = %sWHERE task_id = %s"
        conn = get_db_connection()
        # print("working2.1")
        cursor = conn.cursor()
        # print("working2.2")
        # print(task_name)
        # print(task_date)
        # print(task_id)
        cursor.execute(query, (task_name, task_date, task_description, task_id))
        # print("working3")
        conn.commit()
        cursor.close()
        conn.close()
        # print("working4")

        return jsonify({"message": f"SUCCESS -> Updated task in {table}"}), 200
    
    except Exception as e:
        return jsonify({"message": f"ERROR -> Updating task in {table}", "error": str(e)}), 400

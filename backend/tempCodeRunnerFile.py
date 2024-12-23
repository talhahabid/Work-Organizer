from flask import Flask
from flask_cors import CORS
from requestToMySQL import add_task, delete_task, get_tasks, update_task

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])


# Adding Tasks To Database #
# -------------------------------------------------------------------- #
@app.route('/add-to-todo', methods=['POST'])
def add_to_todo():
    return add_task("todo")

@app.route('/add-to-deleted', methods=['POST'])
def add_to_deleted():
    return add_task("deleted")

@app.route('/add-to-completed', methods=['POST'])
def add_to_completed():
    return add_task("completed")
# -------------------------------------------------------------------- #

# Getting Tasks From Database #
# -------------------------------------------------------------------- #
@app.route('/get-from-todo', methods=['GET'])
def get_from_todo():
    return get_tasks("todo")

@app.route('/get-from-deleted', methods=['GET'])
def get_from_deleted():
    return get_tasks("deleted")

@app.route('/get-from-completed', methods=['GET'])
def get_from_completed():
    return get_tasks("completed")
# -------------------------------------------------------------------- #

# Deleting Tasks From Database #
# -------------------------------------------------------------------- #
@app.route('/delete-from-todo', methods=["DELETE"])
def delete_from_todo():
    return delete_task("todo");

@app.route('/delete-from-deleted', methods=["DELETE"])
def delete_from_deleted():
    return delete_task("deleted");

@app.route('/delete-from-completed', methods=["DELETE"])
def delete_from_completed():
    return delete_task("completed");
# -------------------------------------------------------------------- #

# Updating Tasks From Database
# -------------------------------------------------------------------- #
@app.route('/update-task-from-todo', methods=["PUT"])
def update_task_from_todo():
    return update_task("todo")
# -------------------------------------------------------------------- #

if __name__ == '__main__':
    app.run(debug=True)

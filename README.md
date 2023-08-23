# Task Manager Node.js Application

The Task Manager Node.js Application is a simple yet powerful task management system that allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. This application is built using Node.js and is connected to a MongoDB backend for data storage.

## Features

- **Create:** Effortlessly craft new tasks, specifying essential attributes such as title and completed check box.
- **Read:** Seamlessly access an organized list of all tasks, aiding in better task tracking.
- **Update:** Modify task details and statuses as your projects evolve.
- **Delete:** Easily remove tasks that are no longer relevant, maintaining a clutter-free task list.

## Installation

1. **Clone the Repository:** 
    - Open your terminal.
    - Clone this repository to your local machine by executing the following command:

```bash
        git clone https://github.com/sidyr6002/Task-Manager.git
```
2. **Navigate to the Project Directory:**
    - In the terminal, change your current working directory to the project directory:

```bash
        cd Task-Manager
```

3. **Install Dependencies:** 
    - Install the required Node.js packages by running:

```bash
        npm install
``` 
4. **Setup MongoDB:** 
    - Ensure you have a MongoDB instance running locally or provide a remote MongoDB URL in the configuration.

5. **Configuration:** 
    - Create a `.env` file in the root directory.
    - Open the `.env` file and provide your MongoDB details as follows:

```plaintext
        USER_NAME=your_mongodb_username
        PASSWORD=your_mongodb_password
        CLUSTER=your_mongodb_clustername
        DB_NAME=your_mongodb_databasename
```

6. **Run the application:** 
    - Start the application by executing the following command:
```bash
        npm start
```

## Usage

The application provides a simple API that you can interact with using tools like `curl` or Postman. Below are the available API endpoints:

- **GET /tasks:** Get a list of all tasks.
- **GET /tasks/\:id:** Get details about a specific task by providing its ID.
- **POST /tasks:** Create a new task. Provide JSON data with title, description, and due date.
- **PATCH /tasks/\:id:** Update task details. Provide JSON data with fields you want to update.
- **DELETE /tasks/\:id:** Delete a task by providing its ID.

Make sure to replace `:id` with the actual ID of the task you want to interact with.


const getAllTasks = (req, res) => {
    res.end("Get all tasks");
};

const createTask = (req, res) => {
    res.json(req.body);
};

const getTask = (req, res) => {
    res.json({ id : req.params.id});
};

const updateTask = (req, res) => {
    res.end("Update a task");
};

const deleteTask = (req, res) => {
    res.end("Delete a task");
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};

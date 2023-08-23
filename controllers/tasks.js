const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        await Task.find()
            .then((allTasks) => {
                res.status(200).json({
                    success: true,
                    allTasks,
                });
            })
            .catch((error) => {
                res.status(404).json({
                    success: false,
                    message: "Can't find tasks, " + error,
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

const createTask = async (req, res) => {
    try {
        const taskData = req.body;

        await Task.create(taskData)
            .then((createdTask) => {
                if (!createdTask) {
                    return res.status(404).json({
                        success: false,
                        message: "Task creation failed",
                        error: "Unable get created task",
                    });
                }

                res.status(201).json({
                    success: true,
                    createdTask,
                });
            })
            .catch((error) => {
                res.status(404).json({
                    success: false,
                    error: error.message,
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        
        await Task.findById(id)
            .then((task)=>{
                res.status(200).json({
                    success: true,
                    task,
                });
            })
            .catch((error) => {
                res.status(404).json({
                    success: false,
                    message: "Can't find the task, " + error,
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
    
};

const updateTask = async (req, res) => {
    try {
        const itemId = req.params.id;
        const updateData = req.body;

        await Task.findByIdAndUpdate(itemId, updateData, { new: true })
            .then((updatedTask) => {
                if (!updatedTask) {
                    return res.status(404).json({
                        success: false,
                        message: "Item not found",
                    });
                }

                res.status(200).json({
                    success: true,
                    updatedTask,
                });
            })
            .catch((error) => {
                res.status(404).json({
                    success: false,
                    error: error.message,
                });
            });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;

        await Task.findByIdAndDelete(id)
            .then((task) => {
                res.status(200).json({
                    success: true,
                    task,
                });
            })
            .catch((error) => {
                res.status(404).json({
                    success: false,
                    message: "Can't find the task, " + error,
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};

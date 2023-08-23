const Task = require("../models/Task");
const mongoose = require("mongoose");

const isValidObjectId = (id) => {
    return mongoose.isValidObjectId(id);
};

const handleServerError = (res, error) => {
    //console.error("An error occurred:", error);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
    });
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        return res.status(200).json({
            tasks,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

const createTask = async (req, res) => {
    try {
        const taskData = req.body;
        const task = await Task.create(taskData);

        if (!task) {
            throw new Error("Task creation failed");
        }

        res.status(201).json({
            task,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

const getTask = async (req, res) => {
    try {
        const id = req.params.id;

        if (!isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID",
            });
        }

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        res.status(200).json({
            task,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

const updateTask = async (req, res) => {
    try {
        const itemId = req.params.id;
        const updateData = req.body;

        const task = await Task.findByIdAndUpdate(itemId, updateData, {
            new: true,
            runValidators: true,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        return res.status(200).json({
            task,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;

        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        return res.status(200).json({
            task,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};

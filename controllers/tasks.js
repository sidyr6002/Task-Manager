const Task = require("../models/Task");
const mongoose = require("mongoose");

// ----------------------------------- ERROR HANDLING ------------------------------------

const isValidObjectId = (id) => {
    return mongoose.isValidObjectId(id);
};

class AppError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

const handleServerError = (res, error) => {
    console.error("Error:", error);

    const statusCode = error.statusCode || 500;

    return res.status(statusCode).json({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
        error: error.message,
    });
};

// ---------------------------------------------------------------------------------------
// -------------------------------- API END POINTS --------------------------------------

// ------------ GET ALL TASKS API ----------------
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

// ------------ CREATE A TASK API ----------------
const createTask = async (req, res) => {
    try {
        const taskData = req.body;
        const task = await Task.create(taskData);

        if (!task) {
            throw new AppError(400, "Task creation failed, Re-check the Input.");
        }

        res.status(201).json({
            task,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

// ------------ GET A TASK API ----------------
const getTask = async (req, res) => {
    try {
        const id = req.params.id;

        if (!isValidObjectId(id)) {
            throw new AppError(400, "Invalid item ID.");
        }

        const task = await Task.findById(id);

        if (!task) {
            throw new AppError(404, "Task Not Found, Re-check the ID.");
        }

        res.status(200).json({
            task,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

// ------------ UPDATE A TASK API ----------------
const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updateData = req.body;

        if (!isValidObjectId(taskId)) {
            throw new AppError(400, "Invalid item ID.");
        }

        const task = await Task.findByIdAndUpdate(taskId, updateData, {
            new: true,
            runValidators: true,
        });

        if (!task) {
            throw new AppError(404, "Task Update Failed, Re-check the ID.");
        }

        return res.status(200).json({
            task,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

// ------------ DELETE A TASK API ----------------
const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;

        if (!isValidObjectId(id)) {
            throw new AppError(400, "Invalid item ID.");
        }

        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            throw new AppError(404, "Task Deletion Failed, Re-check the ID.");
        }

        return res.status(200).json({
            task,
        });
    } catch (error) {
        handleServerError(res, error);
    }
};

// ------------------------------------------------------------------------------------

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};

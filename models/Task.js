const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `must provid name`],
        trim: true,
        maxlength: [20, `maximum length cannot be greater than 20 characters`]
    },
    complete: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Task", TaskSchema);

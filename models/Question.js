const mongoose = require("mongoose");

//projektujemy model książki, kolekcja
const QuestionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        ans1: {
            type: String,
            required: true,
        },
        ans2: {
            type: String,
            required: true,
        },
        ans3: {
            type: String,
            required: true,
        },
        ans4: {
            type: String,
            required: true,
        },
        correctAns: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

// exportujemy model, nazwa modelu "User", schemat modelu w stałej UserSchema
module.exports = mongoose.model("Question", QuestionSchema);
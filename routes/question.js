const router = require("express").Router();
const Question = require("../models/Question");
const dotenv = require("dotenv")
dotenv.config()

// random func for get 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// get random question
router.get("/random", async (req, res) => {
    try {
        const allQuestions = await Question.find()
        const tenUniqueQuestions = [];

        while (tenUniqueQuestions.length < 10) {
            const rand = getRandomInt(0, allQuestions.length-1);
            if (tenUniqueQuestions !== []) {
                if (!tenUniqueQuestions.includes(allQuestions[rand]))
                    tenUniqueQuestions.push(allQuestions[rand])
            }
        }
        res.status(200).json(tenUniqueQuestions)
    } catch (err) {
        res.status(400).json(err)
    }
})

//post new Question
router.post("/", async (req, res) => {
    try {
        //let picture = req.files.picture
        const newQuestion = new Question({
            question: req.body.question,
            ans1: req.body.ans1,
            ans2: req.body.ans2,
            ans3: req.body.ans3,
            ans4: req.body.ans4,
            correctAns: req.body.correctAns,
        })
        await newQuestion.save()
        res.status(201).json("question saved")
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;
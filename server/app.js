const express = require("express")
const app = express();
const puerto = 9001;
const Cors = require("cors")

// Modules
const Alfred = require("./Alfred.js")
const ValidationManager = require("./tools/validation.js")

// Middlewares
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Open port
app.listen(puerto, () => console.log("Listening port " + puerto))

// ++++++++++++++++ HTTP METHODS +++++++++++++++++++ //

app.get("/", (req, res) => {
	res.send("E-skeleton-telegram server is up and running! :D")
})

app.post("/send_message", async (req, res) => {
  let body = req.body

  let validationResult = ValidationManager.validateDataFields( body, ["message", "botId", "chatId"], "sending bot message to chat");
    if (validationResult.isError)
        return res.status(200).send({ code: validationResult.error, status: validationResult.message });

    let result = Alfred.sendMessage(body.message, body.botId, body.chatId)

    res.send(result)
})

module.exports = app
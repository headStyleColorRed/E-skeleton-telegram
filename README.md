# Who is alfred?
Is a simple bot that for now it will send a message to your Telegram group chat when querying a certain path.

#### Sending message
The sending message post request is expecting three parameters `message`, `botId` and `chatId`.
* Path => `9001/send_message`

```js
function sendMessageToESkeletonTelegramServer() { 
		let message = "Hello World"
		let botId = "Your bot's id"
		let chatId = "Your chat's id"

	$ axios.post("http://yourNetworkPath:9001/send_message", message, botId, chatId)
	   	   .then((res) => console.log(res))
}
```


#### Creating Bot and getting Id's
In order to create a bot we need to start a conversation with @botFather
```sh
/newbot
```
He will ask first for your bot's name and then for the bot's username. Fill both according to your desires and once you are done a message will appear.

```sh
Done! Congratulations on your new bot. You will find it at 
t.me/whatever_your_bots_name. You can now add a description, about 
section and profile picture for your bot, see /help for a list 
of commands. By the way, when you've finished creating your cool 
bot, ping our Bot Support if you want a better username for it. 
Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
This is the token the you want to copy
5125132423412:JFSLJFDO28FFEHWSDKFHSKHF2983FH-k9M // This is a random token that I made up :p
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

Now we just need the chat's group id. For that we'll follow a series of steps

Here is the sequence that worked for me after struggling for several hours:

Assume the bot name is my_bot.

1. **Add the bot to the group**
Go to the group, click on group name, click on Add members, in the searchbox search for your bot like this: @my_bot, select your bot and click add.

2. **Send a dummy message to the bot**
We want to send a message to the bot so we'll send our id `/my_id @my_bot` (where "my_bot" is your bot's username)

3. **Parse bot's updates**
Go to following url: https://api.telegram.org/botXXX:YYYY/getUpdates
replace XXX:YYYY with your bot's id

4. **Find Id**
Look for "chat":{"id":-zzzzzzzzzz, ...]
Where-zzzzzzzzzz is your chat id (with the negative sign).

And there we have it!
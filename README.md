# CODEASSIST BOT RUNTIME

In order to run your clone of CodeAssist, replace the template tokean and simply do './run' or 'node index.js', beware you need Node for this

# **ADDING COMMANDS**
- Open *"commands/client"*
- Create a new file
- Enter "commands = {...}"
- At the **bottom** of this new file, add "module.exports = commands;"
- Save


# **ADDING APPLICATION COMMANDS**
- Open *"commands\applicaion"*
- Create a new file
- Enter "commands = {...}"
- At the **bottom** of the file, add "module.exports = commands;"
- Save

# REPLACE
- In the about command, change it to your username/display name

- In token.js, replace 'YOUR_BOT_TOKEN' with your bot's token.

# ADD AN ADMIN USER
- Go into *config.js* and edit "ADMIN_USER_ID" with your user id
- Use the path *"../../config"* if used in a command file
- Congratulations, you are now an admin
- NOTE THAT YOU DO NOT NEED 2 ADMINS, YOU CAN HAVE 1 OR HIGHER

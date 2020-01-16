require("dotenv").config()
require("./src/structures/ProtoTypes").start()
setInterval(() => require("http").get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`), 5000)

const Client = require("./src/ChiyaClient")
const client = new Client({
    fetchAllMembers: true
})

client.login(process.env.TOKEN)
client.loadEvents("./src/events")
client.loadCommands("./src/commands")
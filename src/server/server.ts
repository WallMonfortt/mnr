import express from 'express';
import os from 'os';
import config, { PORT } from "./config";

console.log(`config ${config.HOST}, PORT ${PORT}`);

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
    res.render("index", {
        initialContent : "Loading...."
    });
});

server.listen(config.PORT, config.HOST, () => {
    console.info(`Server is running on ${config.SERVER_URL}`,
        `Free memory: ${os.freemem()} bytes`,
    );
});

import express from "express";
import dotenv from "dotenv";

dotenv.configDotenv();

var server = express();

server.listen(3000, () => {
	console.log("Servidor escutando na porta: " + 3000);
});
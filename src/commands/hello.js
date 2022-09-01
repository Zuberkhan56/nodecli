import { createCommand } from "commander";
import inquirer from "inquirer";
import logger from "../config/logger.js";
import greet from "../utils/greet.js";

const helloCommand = createCommand("hello")
    .description("Hello Command")
    .action(async () => {
        const { name } = await inquirer.prompt({
            type: "input",
            name: "name",
        });
        logger.info(`Executing Hello Command with argument: ${name}`);
        console.log(greet(name));
    });

export default helloCommand;

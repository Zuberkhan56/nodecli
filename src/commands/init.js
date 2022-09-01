import { createCommand } from "commander";
import inquirer from "inquirer";
import validates from "../validations/index.js";
import projectStructure from "../utils/getProjectStucture.js";
import logger from "../config/logger.js";

const initCommand = createCommand("init")
    .name("init")
    .description("initialize project structure")
    .argument("<dest>", "destination of project")
    .option("-t, --type", "file structure type (module or simple)")
    .action(async (dest) => {
        const destname = await validates.initCommandValidation(dest);
        if (destname) {
            await inquirer
                .prompt({
                    type: "list",
                    name: "type",
                    default: "simple",
                    message: "Please select your project structure.",
                    choices: [
                        { name: "simple", value: "simple" },
                        { name: "module", value: "module" },
                    ],
                })
                .then((answers) => {
                    projectStructure(answers.type, dest);
                }).catch((err)=>{
                    logger.error(err);
                })
        }
    });

export default initCommand;

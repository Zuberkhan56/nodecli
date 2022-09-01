import { createCommand } from "commander";
import inquirer from "inquirer";
import validations from "../validations/index.js";

const moduleCommand = createCommand("module")
    .description("Create module")
    .action(async () => {
        await inquirer.prompt({
            type: "input",
            name: "name",
            message: "Define module path:",
            validate: validations.moduleCommandValidation,
        });
    });

export default moduleCommand;

import { createCommand } from "commander";
import customPath from "../utils/customPath.js";
const customModule = createCommand("genrate")
    .description("Create custom module")
    .option("-m ", "Create file structure type (custom module)")
    .action(async (type, result) => {
        if (type.m && result._name) {
            await customPath(result);
        }
        return false;
    });

export default customModule;

import fs from "node:fs";
import getTemplatePath from "./getTemplatePath.js";
import logger from "../config/logger.js";
import ora from "ora";

/**
 * Copy template files to destination
 *
 * @param {string} destination - Copy to
 * @returns {boolean} - Whether operation was successful or not
 */
function copyTemplateCustom(destination) {
    const spinner = ora("Initiating project...");
    spinner.start();
    destination = process.cwd() + "/" + destination;
    const source = getTemplatePath("custom");
    try {
        // Check access rights on source
        fs.accessSync(source, fs.constants.R_OK);

        // Create destination folder
        fs.mkdirSync(destination, { recursive: true });

        // Copy template file to destination folder
        fs.cpSync(source, destination, {
            errorOnExist: true,
            force: false,
            recursive: true,
        });
        spinner.succeed(`Project structure initiated at ${destination}`);
        return true;
    } catch (err) {
        let message = "";
        switch (err.code) {
            case "EACCES":
                message = "Insufficient file permission on " + destination;
                break;
            case "ERR_FS_CP_EEXIST":
                message = destination + " already exists";
                break;
            default:
                message = err.code + ": " + err.message;
        }
        logger.error(err);
        spinner.fail(message);
        return false;
    }
}

export default copyTemplateCustom;

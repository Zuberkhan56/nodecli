import logger from "../config/logger.js";
import REGEX from "../utils/members.js";

/**
 * Module command validations
 * 
 * @param {string} input user's command line input
 * @returns {boolean} returns true or false based on regular expression's test
 */

const moduleCommandValidation = function (input) {
    const PLATFORM = process.platform;
    const regex = PLATFORM === 'linux' ? REGEX.LINUX_FOLDER_PATH_REGEX : REGEX.WINDOWS_FOLDER_PATH_REGEX;
    if (regex.test(input)) return true;
    logger.error("Invalid module name");
    return false;
}

/**
 * init command validations
 * 
 * @param {string} input user's create project name
 * @returns {boolean} returns true or false based on regular expression's test
 */

const initCommandValidation = (dir) => {
     const regex = REGEX.INIT_CREATE_PROJECT_NAME ;
     if (regex.test(dir)) return true
     logger.error("Invalid your project name");
     return false
}

export default {
    moduleCommandValidation,
    initCommandValidation
}
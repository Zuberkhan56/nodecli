import fs from "node:fs";
import getBasePath from "./getBasePath.js";

/**
 * Get destination path from project type
 *
 * @param {string} type - Project type
 * @returns {string} - Path of template directory for the specified project type
 */
function getTemplatePath(type) {
    const basePath = getBasePath();
    const projectTypes = JSON.parse(
        fs.readFileSync(`${basePath}/templates/main.json`).toString()
    );
    if (!(type in projectTypes)) {
        console.error("Invalid project type")
        throw new Error("Invalid project type");
    }
    const templatePath = basePath + projectTypes[type];
    return templatePath;
}

export default getTemplatePath;

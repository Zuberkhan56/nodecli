import { fileURLToPath } from "node:url";

/**
 * Returns package installation path
 *
 * @returns {string} - Absolute path of package
 */
function getPackagePath() {
    const fileUrl = import.meta.url.replace(/(?<=NodeCLI).+$/, "");
    const basePath = fileURLToPath(fileUrl);
    return basePath;
}

export default getPackagePath;

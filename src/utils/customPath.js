import copyTemplateCustom from "../utils/copyTemplateCustom.js";
import fs from "fs";
/**
 * Returns cutom module in create files.
 * 
 * @param {string} data Custom path set for folder reading.
 */
function customPath(data) {
    const path = data.args;const POS_PR = 0;
    const projectName = path.toString().split('/')['1'];
    const posPath = path.toString().split('/')['3'];
    const setPath = path.toString().slice('0','9') + posPath;
    const currentPath=process.cwd();

try {
    fs.readdir(currentPath,(err,files) => {
        if(err) return console.error(err);
        const filterPath = files.filter((data) => {
            return data === projectName;
        });
        filterPath.forEach((file) => {
            if (file.indexOf(projectName) === POS_PR) {
                const relFilePath = currentPath + '/' + file + '/nodecli.json'
                if(relFilePath){
                    fs.readFile(relFilePath,"utf8",function read(err, data) {
                        if (err) {
                            throw err;
                        } else {
                            const moduletype=JSON.parse(data);
                            if(moduletype.type === "module"){
                                return copyTemplateCustom(setPath)
                            }
                            return "Doesn't create simple module in custom"
                        }
                    });
                }
                return relFilePath +" "+ file;
            }
        });
    });
} catch (error) {
    throw error();
}
}
export default customPath;


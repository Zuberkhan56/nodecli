import copyTemplate from "./copyTemplate.js";
import shell from "shelljs";
import ora from "ora";
import fs from "fs";

const projectStructure = async (type, dest) => {
    const spinner = ora("Initiating project...");
    spinner.start();
    const dirPath = process.cwd() + "/" + dest;
    const filePath = "nodecli.json";
    const copy = await copyTemplate(type, dest);
    if (copy) {
        shell.pushd(dirPath);
        shell.exec("npm init -y");
        shell.exec("npm i express nodemon");
        shell.touch(filePath);
        const content = JSON.stringify({ type: type, name: dest });
        fs.appendFileSync(filePath, content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
        spinner.succeed(`Create Successfully Project`);
        return true;
    }
    spinner.fail("Create project already");
};
export default projectStructure;

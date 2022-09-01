import typeProject from "../src/utils/getProjectStucture.js";
import assert from "assert";
import { cwd } from "node:process";
import fs from "node:fs";

describe("Main", () => {
    
    const SIMPLE_TYPE = "simple";
    const MODULE_TYPE= "module"
    const destination = "TEA";
    const curDir=process.cwd();
    beforeEach(() => {
        fs.mkdirSync(curDir + "/Tea")
     });
  
     afterEach(() => {
        fs.rmSync(curDir + "/Tea", { force: true, recursive: true });
     });
    it("should return simple templete create structure", () => {
        typeProject(SIMPLE_TYPE, destination);
        assert.equal(fs.existsSync(cwd() + "/" + destination), true);
    });
    it("should return module templete create structure", () => {
        typeProject(MODULE_TYPE, destination);
        assert.equal(fs.existsSync(curDir + "/" + destination), true);
    });

});

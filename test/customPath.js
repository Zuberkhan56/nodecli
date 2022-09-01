// import customPath from '../src/utils/customPath.js';
import assert from "assert";
import copy from "../src/utils/copyTemplateCustom.js";
import { cwd } from 'node:process';
import fs from 'fs';

describe("custom", () => {
   const curDir = cwd();
    beforeEach(() => {
        fs.mkdirSync(curDir + "/Tea")
     });
  
     afterEach(() => {
        fs.rmSync(curDir + "/Tea", { force: true, recursive: true });
     });
    it("should copy custom add in templete of type module", () => {
        const destination = "Tea";
        copy(destination);
        assert.equal(fs.existsSync(curDir + '/' + destination ), true);
     })
});

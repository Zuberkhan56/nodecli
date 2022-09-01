import assert from "node:assert";
import fs from "node:fs";
import { cwd } from 'node:process';
import copy from "../src/utils/copyTemplate.js";

describe('copy', () => {

   const MODULE_TYPE = "module";
   const SIMPLE_TYPE = "simple";
   const curDir = cwd();

   beforeEach(() => {
      fs.mkdirSync(curDir + "/test/test_directory")
   });

   afterEach(() => {
      fs.rmSync(curDir + "/test/test_directory", { force: true, recursive: true });
   });

   it("should copy module templete in type module", () => {
      const destination = "test/test_directory";
      copy(MODULE_TYPE, destination);
      assert.equal(fs.existsSync(curDir + "/" + destination + "/src/index.js"), true);
   })

   it("should copy simple templete in type simple", () => {
      const destination = "test/test_directory";
      const res = copy(SIMPLE_TYPE, destination);
      assert.equal(res, true);
      assert.equal(fs.existsSync(curDir + "/" + destination + "/src/index.js"), true);
   });

   it("should copy templete in to the folder path", () => {
      const destination = "test/test_directory/given_dir";
      const res = copy(SIMPLE_TYPE, destination);
      assert.equal(res, true);
      assert.equal(fs.existsSync(curDir + "/" + destination + "/src/index.js"), true);
   })

   it("should throw error for unaccessible path", () => {
      const destination = "test/test_directory/given_dir";
      fs.mkdirSync(curDir + "/test/test_directory/given_dir", { recursive: true, mode: fs.constants.S_IRUSR })
      assert.equal(copy(SIMPLE_TYPE, destination), false);
   })

   it("should throw error for file already available", () => {
      const destination = "test/test_directory/src";
      fs.mkdirSync(curDir + "/" + destination, { recursive: true })
      fs.writeFileSync(curDir + "/" + destination + "/index.js", "console.log('this file is create by node')")
      assert.equal(copy(SIMPLE_TYPE, "test/test_directory"), false);
   })
})
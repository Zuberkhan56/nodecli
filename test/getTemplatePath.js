import getTemplatePath from "../src/utils/getTemplatePath.js";
import { cwd } from 'node:process';
import assert from "node:assert";

describe('get destination util function test', () => {

   const MODULE_TYPE = "module";
   const SIMPLE_TYPE = "simple";
   const INVALID_TYPE = "invalid";
   const curDir = cwd();
   it('should return module template path', () => {
      const moduleTempPath = curDir + "/templates/module";
      const res = getTemplatePath(MODULE_TYPE);
      assert.equal(res, moduleTempPath)
   })

   it('should return simple template path', () => {
      const simpleTempPath = curDir + "/templates/simple";
      const res = getTemplatePath(SIMPLE_TYPE);
      assert.equal(res, simpleTempPath)
   })

   it('should throw error for unvalid type', () => {
      assert.throws(() => getTemplatePath(INVALID_TYPE), /Invalid project type/);
   })
})
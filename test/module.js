import assert from "assert";
import validations from "../src/validations/index.js";

const PATH_BASIC = '/user/project';
const EMPTY_PATH = '';
const EXTRA_CHAR_PATH = '/user/*****/project';
const EXTRA_DOTS_PATH = '/user/.../project';
const EXTRA_TWO_DOTS_PATH = '/user/../project';


describe("Define module path", () => {
    it(`should validate correct path:  ${PATH_BASIC}`, () => {
        const isPathCorrect = validations.moduleCommandValidation(PATH_BASIC);
        assert.equal(isPathCorrect, true);
    });

    it(`should return false on empty path: ${EMPTY_PATH}`, () => {
        const isPathCorrect = validations.moduleCommandValidation(EMPTY_PATH);
        assert.equal(isPathCorrect, false);
    });

    it(`should return true on two symountenious dots: ${EXTRA_TWO_DOTS_PATH}`, () => {
        const isPathCorrect = validations.moduleCommandValidation(EXTRA_TWO_DOTS_PATH);
        assert.equal(isPathCorrect, true);
    });

    it(`should return false on path contains special characters: ${EXTRA_CHAR_PATH}`, () => {
        const isPathCorrect = validations.moduleCommandValidation(EXTRA_CHAR_PATH);
        assert.equal(isPathCorrect, false);
    });

    it(`should return false on path contains multiple dots symonteniously ${EXTRA_DOTS_PATH}`, () => {
        const isPathCorrect = validations.moduleCommandValidation(EXTRA_DOTS_PATH);
        assert.equal(isPathCorrect, false);
    });
});

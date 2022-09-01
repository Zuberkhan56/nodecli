import validations from '../src/validations/index.js';
import assert from "assert";

const EMPTY_DRCTORY = "";
const NAME_DRCTORY = "ProjectName";
const NAME_SPECIAL_DRCTORY = ".ProjectName";
const NAME_BETWEEN_SPECIAL_DRCTORY = "Proj#ectName";
const NAME_SPACE_SPECIAL_DRCTORY = " project name";

describe("To initiate project structure", () => {
    it(`should return false on empty directory:${EMPTY_DRCTORY}`, () => {
        const isDirCorrect = validations.initCommandValidation(EMPTY_DRCTORY);
        assert.equal(isDirCorrect, false);
    });

    it(`should validate correct directory:${NAME_DRCTORY}`, () => {
        const isDirCorrect = validations.initCommandValidation(NAME_DRCTORY);
        assert.equal(isDirCorrect, true);
    });

    it(`should return false on any special don't allowed directory :${NAME_SPECIAL_DRCTORY}`, () => {
        const isDirCorrect = validations.initCommandValidation(NAME_SPECIAL_DRCTORY);
        assert.equal(isDirCorrect, false);
    });

    it(`should return false on any between special don't allowed directory :${NAME_BETWEEN_SPECIAL_DRCTORY}`, () => {
        const isDirCorrect = validations.initCommandValidation(NAME_BETWEEN_SPECIAL_DRCTORY);
        assert.equal(isDirCorrect, false);
    });

    it(`should return false on any space special don't allowed directory :${NAME_SPACE_SPECIAL_DRCTORY}`, () => {
        const isDirCorrect = validations.initCommandValidation(NAME_SPACE_SPECIAL_DRCTORY);
        assert.equal(isDirCorrect, false);
    });
});

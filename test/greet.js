import greet from "../src/utils/greet.js";
import assert from "assert";

describe("Greet Test", () => {
    it("should return proper greeting", () => {
        const name = "World";
        const greeting = greet(name);
        assert.equal(greeting, "Hello World");
    });
});

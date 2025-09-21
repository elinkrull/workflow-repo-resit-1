import { describe, expect, test } from "vitest";
import CONFIG from "../config.js";
import { createTitle } from "./createTitle.js";

describe("createTitle", () => {
  // Test that it removes extra spaces
  test("removes extra spaces around the title", () => {
    const result = createTitle("   Hello World   ");
    expect(result).toBe(`Hello World | ${CONFIG.siteTitle}`);
  });

  //Test with all lowercase input, all uppercase input, all lowercase input and with mixed case input
  test("handles all lowercase input", () => {
    const result = createTitle("hello world");
    expect(result).toBe(`hello world | ${CONFIG.siteTitle}`);
  });

  test("handles all uppercase input", () => {
    const result = createTitle("HELLO WORLD");
    expect(result).toBe(`HELLO WORLD | ${CONFIG.siteTitle}`);
  });

  test("handles mixed case input", () => {
    const result = createTitle("HeLLo WoRLD");
    expect(result).toBe(`HeLLo WoRLD | ${CONFIG.siteTitle}`);
  });

  //Test with a missing or empty argument
  test("returns site title if argument is missing", () => {
    const result = createTitle();
    expect(result).toBe(CONFIG.siteTitle);
  });

  test("returns site title if argument is an empty string", () => {
    const result = createTitle("");
    expect(result).toBe(CONFIG.siteTitle);
  });

  test("returns site title if argument is whitespace only", () => {
    const result = createTitle("     ");
    expect(result).toBe(CONFIG.siteTitle);
  });
});

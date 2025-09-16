import { describe, expect, test } from "vitest";
import { formatRecipeTitle } from "./formatRecipeTitle";

describe("formatRecipeTitle", () => {
  // Test that the function correctly capitalizes the first letter of each word
  test.each([
    ["creamy pasta", "Creamy Pasta"],
    ["stew with meat", "Stew With Meat"],
  ])("capitalizes words: %s -> %s", (input, expected) => {
    expect(formatRecipeTitle(input)).toBe(expected);
  });

  // Test with all lowercase input, all uppercase input, all lowercase input and with mixed case input
  test("handles lower/upper/mixed case", () => {
    expect(formatRecipeTitle("salmon with lemon")).toBe("Salmon With Lemon");
    expect(formatRecipeTitle("SALMON WITH LEMON")).toBe("Salmon With Lemon");
    expect(formatRecipeTitle("sAlMoN wItH LeMoN")).toBe("Salmon With Lemon");
  });

  // Test with a missing or empty argument
  test("returns empty string for missing/empty input", () => {
    expect(formatRecipeTitle()).toBe("");
    expect(formatRecipeTitle("")).toBe("");
    expect(formatRecipeTitle(null)).toBe("");
    expect(formatRecipeTitle(undefined)).toBe("");
  });

  // Test with multiple spaces between the words
  test("preserves multiple spaces between words", () => {
    expect(formatRecipeTitle("salmon   with   lemon")).toBe("Salmon   With   Lemon");
  });
});

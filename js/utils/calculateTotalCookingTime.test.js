import { describe, expect, test } from "vitest";
import { calculateTotalCookingTime } from "./calculateTotalCookingTime";

describe("calculateTotalCookingTime", () => {
  // Test with positive numbers
  test("adds positive numbers", () => {
    expect(calculateTotalCookingTime(1, 2)).toBe(3);
    expect(calculateTotalCookingTime(13, 7)).toBe(20);
  });

  // Test with zero values
  test("zeros", () => {
    expect(calculateTotalCookingTime(0, 0)).toBe(0);
    expect(calculateTotalCookingTime(0, 4)).toBe(4);
  });

  // Test with negative values
  test("adds negative numbers", () => {
    expect(calculateTotalCookingTime(-1, -2)).toBe(0);
    expect(calculateTotalCookingTime(10, -5)).toBe(10);
  });

  // Test with non-numeric inputs and missing arguments
  test("returns 0 when either arg is not a number", () => {
    expect(calculateTotalCookingTime("5", 2)).toBe(0);
    expect(calculateTotalCookingTime(2, "5")).toBe(0);
    expect(calculateTotalCookingTime(undefined, 2)).toBe(0);
    expect(calculateTotalCookingTime(2, null)).toBe(0);
    expect(calculateTotalCookingTime({}, 2)).toBe(0);
  });

  test("returns NaN when any arg is NaN", () => {
    expect(Number.isNaN(calculateTotalCookingTime(NaN, 2))).toBe(true);
    expect(Number.isNaN(calculateTotalCookingTime(1, NaN))).toBe(true);
  });
});

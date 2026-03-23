import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "../calculator";

describe("calculator", () => {
  describe("add", () => {
    it("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });
    it("adds negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });
  });

  describe("subtract", () => {
    it("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(multiply(3, 4)).toBe(12);
    });
  });

  describe("divide", () => {
    it("divides two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });
    it("throws on division by zero", () => {
      expect(() => divide(5, 0)).toThrow("Division by zero");
    });
  });
});

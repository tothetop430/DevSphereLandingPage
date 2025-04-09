import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

// Add the custom matchers
if (matchers && typeof matchers === "object") {
  expect.extend(matchers);
}

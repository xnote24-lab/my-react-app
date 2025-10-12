// src/setupTests.js
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"; // this automatically extends expect

afterEach(() => {
  cleanup();
});

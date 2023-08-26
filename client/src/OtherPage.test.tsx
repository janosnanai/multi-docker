import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import OtherPage from "./OtherPage";
test("renders page", async () => {
  const page = render(<OtherPage />);

  expect(page).toBeDefined();
});

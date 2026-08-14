import { describe, it, expect } from "vitest";
import { siteConfig } from "@/config/site";

describe("scaffold", () => {
  it("resolves the @ alias and reads site config", () => {
    expect(siteConfig.name).toBe("Ten Ventra");
  });
});

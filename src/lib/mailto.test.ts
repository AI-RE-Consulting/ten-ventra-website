import { describe, it, expect } from "vitest";
import { mailtoHref } from "@/lib/mailto";
import { COPY } from "@/data/copy";
import { siteConfig } from "@/config/site";

describe("mailtoHref", () => {
  it("prefills subject and body with %20 spaces and CRLF line breaks", () => {
    expect(mailtoHref("a@b.co", { subject: "My buy-box", body: ["Hi,", "", "• Price range: "] })).toBe(
      "mailto:a@b.co?subject=My%20buy-box&body=Hi%2C%0D%0A%0D%0A%E2%80%A2%20Price%20range%3A%20",
    );
  });

  it("escapes characters that would otherwise end the subject or body early", () => {
    expect(mailtoHref("a@b.co", { subject: "Q&A #1?", body: ["x=1&y=2"] })).toBe(
      "mailto:a@b.co?subject=Q%26A%20%231%3F&body=x%3D1%26y%3D2",
    );
  });

  it("keeps the buy-box draft short enough for every mail app", () => {
    // Some Windows mail handlers cut mailto links past ~2,000 characters.
    const href = mailtoHref(siteConfig.email, COPY.contact.email);
    expect(href).toContain("&body=");
    expect(href.length).toBeLessThan(2000);
  });
});

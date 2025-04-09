import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Navbar } from "../components/navbar";

// Mock the wouter package
vi.mock("wouter", () => ({
  Link: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} data-testid={`link-${href}`}>
      {children}
    </a>
  ),
}));

// Mock the useIsMobile hook
vi.mock("../hooks/use-mobile", () => ({
  useIsMobile: () => false,
}));

describe("Navbar Component", () => {
  test("renders the logo", () => {
    render(<Navbar />);
    const logoElement = screen.getByText("DevSphere", { exact: false });
    expect(logoElement).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  test("renders careers link with proper href", () => {
    render(<Navbar />);
    const careersLink = screen.getByTestId("link-/careers");
    expect(careersLink).toBeInTheDocument();
  });
});

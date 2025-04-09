import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import App from "../App";

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

// Mock components that might cause issues in tests
vi.mock("../lib/queryClient", () => ({
  queryClient: {
    clear: vi.fn(),
  },
  apiRequest: vi.fn(),
  getQueryFn: vi.fn(),
}));

vi.mock("@tanstack/react-query", () => ({
  QueryClientProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

vi.mock("wouter", () => ({
  Switch: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Route: ({ component: Component }: { component: React.ComponentType }) => (
    <Component />
  ),
  Link: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useLocation: () => ["/", vi.fn()],
}));

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    h1: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
    h2: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
    h3: ({ children }: { children: React.ReactNode }) => <h3>{children}</h3>,
    p: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
    span: ({ children }: { children: React.ReactNode }) => (
      <span>{children}</span>
    ),
    ul: ({ children }: { children: React.ReactNode }) => <ul>{children}</ul>,
    li: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
    nav: ({ children }: { children: React.ReactNode }) => <nav>{children}</nav>,
    section: ({ children }: { children: React.ReactNode }) => (
      <section>{children}</section>
    ),
    footer: ({ children }: { children: React.ReactNode }) => (
      <footer>{children}</footer>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

// Simple test to verify that App renders without crashing
describe("App Component", () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;

    // Mock window.matchMedia
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  test("renders without crashing", () => {
    // Silence console errors for this test
    const originalConsoleError = console.error;
    console.error = vi.fn();

    render(<App />);

    // Restore console
    console.error = originalConsoleError;

    // This is a simple check, you'd typically test for specific elements
    expect(document.body).toBeTruthy();
  });
});

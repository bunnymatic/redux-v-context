import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("initial state", () => {
  it("renders 0", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});

describe("onClick", () => {
  it("increments when clicked", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("1")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Landing from "./Landing";

jest.mock("axios");
describe("<Landing />", () => {
  it("fetches successfully data from an API", async () => {
    const data = {
      data: {
        hits: [
          {
            ID: "1",
            name: "a",
          },
          {
            ID: "2",
            name: "b",
          },
        ],
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });
  it("fetches erroneously data from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
  });

  test("render h1 element", () => {
    render(<Landing />);
    expect(screen.getByText("Search GitHub Users")).toBeInTheDocument();
  });

  test("render input not disabled", () => {
    render(<Landing />);
    expect(screen.getByTestId("search-input")).not.toBeDisabled();
  });
  test("render search input", () => {
    render(<Landing />);
    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("pass valid text", () => {
    render(<Landing />);
    const inputEl = screen.getByTestId("search-input");
    userEvent.type(inputEl, "Rohit-081");
    expect(screen.getByTestId("search-input")).toHaveValue("Rohit-081");
  });

  test("pass invalid text", () => {
    render(<Landing />);
    const inputEl = screen.getByTestId("search-input");
    userEvent.type(inputEl, "Ron");
    expect(screen.getByTestId("search-input")).toHaveValue("Ron");
  });

  test("Should identify if the spy function was called or not", () => {
    const spyFunction = jest.fn();
    spyFunction();
    expect(spyFunction).toHaveBeenCalled();
  });

  test("<Landing>", () => {
    const { debug, getByText, queryByTestId } = render(<Landing />);
    expect(queryByTestId("form")).toBeTruthy();
    expect(queryByTestId("form").tagName).toBe("FORM");
    expect(getByText("Search User").tagName).toBe("BUTTON");
    debug();
  });

  test("render button element", () => {
    render(<Landing />);
    expect(screen.getByTestId("button")).toBeEnabled();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  it("should render the login form", () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText("Email address");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");
    const signUpLink = getByText("Sign Up");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  it("should allow users to submit the login form", () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText("Email address");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByText("Login");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "test123" } });
    fireEvent.click(loginButton);

    // Add an expectation here for what should happen after the form is submitted
  });
});

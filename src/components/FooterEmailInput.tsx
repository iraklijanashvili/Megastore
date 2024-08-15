import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 20px auto;
  padding: 30px 0px;
`;

const EmailInput = styled.input`
  padding: 7px;
  border: 1px solid #e85257;
  font-size: 14px;
  width: 250px;
`;

const SubmitButton = styled.button`
  padding: 8px;
  background-color: #e85257;
  color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 5px;

  &:hover {
    background-color: #e85257;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const EmailInputBar: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email) {
      setError("Please enter an email address");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      // Here you would typically send the email to your server or perform some action
      console.log("Email submitted:", email);
      // Clear the input after successful submission
      setEmail("");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <InputWrapper>
      <form onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="შეიყვანეთ თქვენი ელ.ფოსტა"
          aria-label="Email input"
        />
        <SubmitButton type="submit" disabled={!email}>
          გამოწერა
        </SubmitButton>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default EmailInputBar;

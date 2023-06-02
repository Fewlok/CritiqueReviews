import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const StyledForm = styled.form`
  max-width: 380px;
  width: 80%;
  padding: 30px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.1);

  h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 10px;
    color: #555;
  }

  input[type="email"],
  input[type="password"],
  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  input[type="email"]:focus,
  input[type="password"]:focus,
  input[type="text"]:focus {
    border-color: #3d8fd1;
  }

  button {
    width: 100%;
    padding: 12px 30px;
    background-color: #3d8fd1;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2d6ca7;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .error {
    color: #922;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, username);
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Username:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={isLoading}>Sign up</button>
        {error && <div className="error">{error}</div>}
      </StyledForm>
    </StyledContainer>
  );
};

export default Signup;

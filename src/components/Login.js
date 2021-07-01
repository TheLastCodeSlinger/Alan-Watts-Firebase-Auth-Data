import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import { useAuth } from "../context/AuthContext";

const AuthWrapper = styled.div`
  max-width: 500px;
  display: flex;
  margin: 50px auto 0;
  align-items: center;
  border: 1px solid black;
  flex-direction: column;
  font-family: Helvetica;
  padding-bottom: 20px;
`;

const FormContainer = styled.form`
  width: 70%;
  min-height: 45%;
  height: auto;
  margin: 10px 0;
  padding: 20px;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  line-height: 1.4;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 60%;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  align-self: center;
`;

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <>
      <AuthWrapper>
        <h2>Login</h2>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <FormContainer onSubmit={handleSubmit}>
          <label>Email</label>
          <Input type="email" ref={emailRef} required />
          <label>Password</label>
          <Input type="password" ref={passwordRef} required />
          <Button disabled={loading} type="submit">
            Login
          </Button>
        </FormContainer>
      </AuthWrapper>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </>
  );
};

export default Login;

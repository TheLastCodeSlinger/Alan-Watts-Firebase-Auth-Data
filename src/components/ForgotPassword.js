import { useRef, useState } from "react";
import { Link } from "react-router-dom";

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <>
      <AuthWrapper>
        <h2>Reset Password</h2>
        {message && <h2>{message}</h2>}
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <FormContainer onSubmit={handleSubmit}>
          <label>Email</label>
          <Input type="email" ref={emailRef} required />
          <Button disabled={loading} type="submit">
            Reset Password
          </Button>
        </FormContainer>
      </AuthWrapper>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        <Link to="/login">Back to Log In</Link>
      </div>
    </>
  );
};

export default Login;

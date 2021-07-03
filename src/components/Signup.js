import { rgbToHex } from "@material-ui/core";
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
  background-color: rgb(232, 237, 233);
`;

const FormContainer = styled.form`
  width: 70%;
  min-height: 30vh;
  height: auto;
  margin: 10px 0;
  padding: 20px;
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
  padding: 17px;
  text-align: center;
  margin-top: 40px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 700;
  align-self: center;
`;

const AuthCard = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
  
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <AuthWrapper>
        <h2>SIGN UP</h2>
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <FormContainer onSubmit={handleSubmit}>
          <label>Email</label>
          <Input type="email" ref={emailRef} required />
          <label>Password</label>
          <Input type="password" ref={passwordRef} required />
          <label>Password Confirmation</label>
          <Input type="password" ref={passwordConfirmRef} required />
          <Button disabled={loading} type="submit">
            Sign Up
          </Button>
        </FormContainer>
      </AuthWrapper>
      <div style={{ textAlign: "center", marginTop: "5px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default AuthCard;

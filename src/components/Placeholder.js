import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import { useAuth } from "../context/AuthContext";

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

export default function Dashboard() {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div>
      <h2>Profile</h2>
      {error && <h2>{error}</h2>}
      <strong>Email: </strong> {currentUser && currentUser.email}
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  );
}

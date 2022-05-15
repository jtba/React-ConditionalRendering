import React from "react";
import Input from "./Input";

export default function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      {!props.isRegistered ? (
        <button type="submit">Register</button>
      ) : (
        <button type="submit">Login</button>
      )}
    </form>
  );
}

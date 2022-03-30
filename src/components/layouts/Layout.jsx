import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
      {/* <h1>footer</h1> */}
    </>
  );
}

import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Navigation";
import SideBreadcrumb from "../SideBreadcrumb";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />

      <Container>
        <SideBreadcrumb />
        {children}
      </Container>
    
    </>
  );
}

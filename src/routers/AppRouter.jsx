import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import About from "../pages/About";
import Auth from "../pages/Auth";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Rifas from "../pages/Rifas";
import PrivateRoute from "../routers/PrivateRoute";
export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route path="/rifas" element={<Rifas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

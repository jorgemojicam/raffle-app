import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";
import Layout from "../components/layouts/Layout";
import About from "../pages/About";
import Auth from "../pages/Auth";
import Carton from "../pages/Carton";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Rifas from "../pages/Rifa/Rifas";
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute from "../routers/PublicRoute";
import RifaProvider from "../providers/RifaProvider";

export default function AppRouter() {
  const { isAuth, isLogged } = useAuth();

  useEffect(() => {
    if (isAuth) {
      isLogged();
    }
  }, []);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/rifas"
          element={
            <PrivateRoute>
              <RifaProvider>
                <Rifas />
              </RifaProvider>
            </PrivateRoute>
          }
        />
        <Route
          path="/carton"
          element={
            <PrivateRoute>
              <RifaProvider>
                <Carton />
              </RifaProvider>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

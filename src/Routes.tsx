import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import CV from "./pages/CV/CV";
import Teaching from "./pages/Teaching/Teaching";

export const AppRoutes = React.memo(() => {
  return (
    <Routes>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/teaching" element={<Teaching />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
});

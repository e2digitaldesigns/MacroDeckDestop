import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppTemplate } from "../../components/template/template";
import MacroDeck from "../macroDeck/MacroDeck";
import { SectionRoutes } from "./../../types";

const ApplicationWrapper: React.FC = () => {
  return (
    <>
      <ToastContainer autoClose={4000} pauseOnFocusLoss={false} />

      <Router>
        <AppTemplate.Header />
        <Routes>
          <Route path={SectionRoutes.Home} element={<h3>home</h3>} />
          <Route index element={<MacroDeck />} />
          <Route path={SectionRoutes.MacroDeck} element={<MacroDeck />} />
          <Route path={SectionRoutes.Settings} element={<h3>settings</h3>} />
          <Route path="*" element={<h3>wild card</h3>} />
        </Routes>

        <AppTemplate.Footer />
      </Router>
    </>
  );
};

export default ApplicationWrapper;

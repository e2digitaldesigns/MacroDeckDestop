import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppTemplate } from "../../components/template/template";
import MacroDeck from "../macroDeck/MacroDeck";
import SettingsWrapper from "../settings/settingsWrapper";
import { SectionRoutes } from "./../../types";

const ApplicationWrapper: React.FC = () => {
  return (
    <>
      <ToastContainer autoClose={4000} pauseOnFocusLoss={false} />

      <Router>
        <AppTemplate.Header />
        <Routes>
          <Route
            path={SectionRoutes.Home}
            element={
              <>
                <h3>home</h3>
                <h3>home</h3>
                <h3>home</h3>
                <h3>home</h3>
              </>
            }
          />
          <Route index element={<MacroDeck />} />
          <Route path={SectionRoutes.MacroDeck} element={<MacroDeck />} />
          <Route path={SectionRoutes.Settings} element={<SettingsWrapper />} />
          <Route
            path="*"
            element={
              <>
                <h3>wild card</h3>
                <h3>wild card</h3>
                <h3>wild card</h3>
              </>
            }
          />
        </Routes>

        <AppTemplate.Footer />
      </Router>
    </>
  );
};

export default ApplicationWrapper;

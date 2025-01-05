import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHero={true}>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout showHero={false}>
              <AboutPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;

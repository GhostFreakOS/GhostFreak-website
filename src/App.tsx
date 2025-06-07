import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import AboutPage from "@/pages/about";
import Pricecy from "@/pages/privacy";
import Support from "@/pages/support";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Pricecy />} path="/privecy" />
      <Route element={<Support />} path="/support" />
    </Routes>
  );
}

export default App;

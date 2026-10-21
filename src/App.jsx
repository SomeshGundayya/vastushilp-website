
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage";
// import ContactPage from "./pages/ContactPage";

// import ScrollToHash from "./components/common/ScrollToHash";

// function App() {
//   return (
//     <BrowserRouter>
//       <ScrollToHash />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/projects" element={<ProjectsPage />} />
//         <Route
//           path="/projects/:slug"
//           element={<ProjectDetailsPage />}
//         />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ScrollToHash from "./components/common/ScrollToHash";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailsPage = lazy(() =>
  import("./pages/ProjectDetailsPage")
);
const ContactPage = lazy(() => import("./pages/ContactPage"));

function PageLoader() {
  return (
    <div
      role="status"
      className="flex min-h-screen items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#C8102E]" />

        <p className="text-sm font-medium text-[#111827]">
          Loading...
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/projects/:slug"
            element={<ProjectDetailsPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

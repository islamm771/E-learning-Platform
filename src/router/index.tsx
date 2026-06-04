import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import CoursesPage from "../pages/Courses";
import HomePage from "../pages/Home";
import Layout from "./Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
      </Route>
    </>
  )
);
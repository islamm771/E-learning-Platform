import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import AboutUs from "../pages/AboutUs";
import CoursePage from "../pages/CoursePage";
import CoursesPage from "../pages/Courses";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "./Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:courseId" element={<CoursePage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="*" element={<div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
          <h3 className="text-4xl text-center font-medium">Not Found Page</h3>
        </div>} />
      </Route>
    </>
  )
);
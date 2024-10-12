import React from "react";
import { Navigate } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

const authProtectedRoutes = [
];

const publicRoutes = [
	{ path: "/login", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };

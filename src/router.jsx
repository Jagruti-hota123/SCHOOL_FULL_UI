import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Admin, Login, Signup, Student, Teacher } from "./pages";
import { TeacherList } from "./components/lists";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 || Page not found</h1>,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/student",
        element: <Student />,
      },
      {
        path: "/teacher",
        element: <Teacher />,
      },
      {
        path: "/lists/teacher",
        element: <TeacherList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;

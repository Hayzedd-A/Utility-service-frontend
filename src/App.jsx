import "./App.css";
import Login from "./pages/Login";
import { AppProvider } from "./config/AppContext";
// import { NotificationContainer } from "react-notifications";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import VerifyEmail from "./pages/VerifyEmail";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./pages/Dashboard";
import PasswordRecovery from "./pages/PasswordRecovery";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      exact: true,
      element: <Login />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "verify-email-status",
      element: <VerifyEmail />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "password-recovery",
      element: <PasswordRecovery />,
    },
  ]);
  return (
    <AppProvider>
      <div className="App">
        <Toaster />
        <RouterProvider router={router} />
        {/* <Login /> */}
      </div>
    </AppProvider>
  );
}

export default App;

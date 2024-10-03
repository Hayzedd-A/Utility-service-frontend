import "./App.css";
import Login from "./pages/Login";
import { AppProvider } from "./config/AppContext";
import { NotificationContainer } from "react-notifications";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <Login />,
    },
    {
      path: "verify-email-status",
      element: <VerifyEmail />,
    },
  ]);
  return (
    <AppProvider>
      <div className="App">
        <NotificationContainer />
        <RouterProvider router={router} />
        {/* <Login /> */}
      </div>
    </AppProvider>
  );
}

export default App;

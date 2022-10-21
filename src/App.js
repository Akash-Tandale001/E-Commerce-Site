import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./helper/Loader";
import { authDetails } from "./reducer/authSlice";
import { BasicRoutesConfig, rolesConfig } from "./routes/Routes";
import { ADMIN, USER } from "./utils/Constant";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";

function App() {
  const { isAuthenticated, userRole,token } = useSelector(state => state.authDetails);
  console.log("App",{ isAuthenticated, userRole,token })
  let routes;
  if (isAuthenticated) {
    if (userRole === USER) {
      routes = rolesConfig["user"];
    } else if (userRole === ADMIN) {
      routes = rolesConfig["Admin"];
    }
  }
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {BasicRoutesConfig.map((route, key) => {
          return route ? <Route key={key} {...route} /> : null;
        })}

        {isAuthenticated ? (
          <Route element={<Layout/>}>
            {routes.routes.map((route, key) => {
              return route ? <Route key={key} {...route} /> : null;
            })}
          </Route>
        ) : (
          <Route path="/base/*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Suspense>
  );
}

export default App;

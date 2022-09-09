import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage } from "../src/pages";
import { AuthLayout } from "../src/layouts/auth-layout";
import { HomeLayout } from "../src/layouts/home-layout";
const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;

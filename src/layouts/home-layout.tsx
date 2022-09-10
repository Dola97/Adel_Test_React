import { Header } from "../components/header";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks";
import styles from "src/sections/hero.module.css";
export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <Header />
      <div className={styles.BackGround} />
      <main>{outlet}</main>
    </div>
  );
};

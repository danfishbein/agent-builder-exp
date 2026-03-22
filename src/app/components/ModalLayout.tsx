import { Outlet, useLocation } from "react-router";
import { Dashboard } from "./Dashboard";

export function ModalLayout() {
  const location = useLocation();
  const isModal = location.pathname !== "/";

  return (
    <>
      {isModal && <Dashboard />}
      <Outlet />
    </>
  );
}

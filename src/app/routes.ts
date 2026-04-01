import { createBrowserRouter } from "react-router";
import { Dashboard } from "./components/Dashboard";
import { AgentConfig } from "./components/AgentConfig";
import { AgentOnboarding } from "./components/AgentOnboarding";
import { ModalLayout } from "./components/ModalLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ModalLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "configure",
        Component: AgentConfig,
      },
      {
        path: "onboarding",
        Component: AgentOnboarding,
      },
    ],
  },
]);

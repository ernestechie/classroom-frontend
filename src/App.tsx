import { Refine, ResourceProps } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";

import { BookOpen, Home } from "lucide-react";

import { useMemo } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./components/refine-ui/layout/layout";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import DashboardPage from "./pages/dashboard";
import SubjectsCreatePage from "./pages/subjects/create";
import SubjectsListPage from "./pages/subjects/list";
import { dataProvider } from "./providers/data";

export default function App() {
  const appResources: ResourceProps[] = useMemo(
    () => [
      {
        name: "dashboard",
        list: "/",
        meta: {
          label: "Home",
          icon: <Home />,
        },
      },
      {
        name: "subjects",
        list: "/subjects",
        create: "/subjects/create",
        meta: {
          label: "Subjects",
          icon: <BookOpen />,
        },
      },
    ],
    []
  );

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "mBJnwW-3cTNr2-C7InSe",
              }}
              resources={appResources}
            >
              <Routes>
                <Route
                  element={
                    <Layout>
                      <Outlet />
                    </Layout>
                  }
                >
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="subjects">
                    <Route index element={<SubjectsListPage />} />
                    <Route path="create" element={<SubjectsCreatePage />} />
                  </Route>
                </Route>
              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

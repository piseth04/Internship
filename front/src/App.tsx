import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { HomeList } from "./pages/home";

import {
  AuthPage,
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";

import { DataProvider } from "@refinedev/strapi-v4";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { authProvider, axiosInstance } from "./authProvider";
import { Header } from "./components/header";
import { API_URL } from "./constants";
import { ColorModeContextProvider } from "./contexts/color-mode";

import {
  CustomerCreate,
  CustomerShow,
  CustomerEdit,
  CustomerList,
} from "./pages/customers";

import {
  ProductCreate,
  ProductEdit,
  ProductList,
  ProductShow,
} from "./pages/products";

import {
  EmployerList,
  EmployerShow,
  EmployerCreate,
  EmpolyerEdit,
} from "./pages/employers";

import {
  ClockCircleOutlined,
  DashboardOutlined,
  ShopFilled,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
  WarningOutlined,
} from "@ant-design/icons";

import { CustomerList1 } from "./pages/dashboards";

import { 
  NumList,
  NumCreate,
  NumEdit, 
} from "./pages/nums";

import {
  OrderList,
  OrderCreate,
  OrederEdit,
  OrderShow,
} from "./pages/orders"
import { 
  IssueCreate, 
  IssueList 
} from "./pages/issues";

function App() {
  return (
    <BrowserRouter>
      {/* <GitHubBanner /> */}
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                authProvider={authProvider}
                dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                resources={[
                  {
                    name: "dashboard",
                    list: "dashboard",
                    meta: {
                      icon:<DashboardOutlined />
                    },
                  },
                  {
                    name: "customers",
                    list: "customers",
                    create: "customers/create",
                    show: "customers/show/:id",
                    edit: "customers/edit/:id",
                    meta: {
                      icon: <UserOutlined />,
                    },
                  },
                  {
                    name: "orders",
                    list: "orders",
                    show: "/orders/show/:id",
                    create: "orders/create",
                    edit: "orders/edit/:id",
                    meta:{
                      icon: <ShoppingCartOutlined/>
                    }
                  },
                  {
                    name: "issues",
                    list: "issues",
                    create: "issues/create",
                    meta: {
                      icon: <WarningOutlined />
                    }
                  },
                  {
                    name: "employers",
                    list: "/employers",
                    show: "/employers/show/:id",
                    edit: "/employers/edit/:id",
                    create: "/employers/create",
                    meta: {
                      icon: <TeamOutlined />,
                    },
                  },
                  {
                    name: "products",
                    list: "/products",
                    // create: "/products/create",
                    edit: "/products/edit/:id",
                    show: "/products/show/:id",
                    meta: {
                      icon: <ShopFilled />,
                    },
                  },
                  {
                    name: "nums",
                    list: "nums",
                    // create: "nums/create",
                    edit: "nums/edit/:id",
                    meta: {
                      icon:<ClockCircleOutlined />
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "UmZtiR-hn8yuF-NMvHQ5",
                  title:{
                    text: "ALIMEY EXPRESS",
                  }
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Header={Header}
                          Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    
                    <Route index element={<HomeList />} />

                    <Route path="/customers">
                      <Route index element={<CustomerList />} />
                      <Route path="create" element={<CustomerCreate />} />
                      <Route path="edit/:id" element={<CustomerEdit />} />
                      <Route path="show/:id" element={<CustomerShow />} />
                    </Route>

                    <Route path="/orders">
                      <Route index element={<OrderList />} />
                      <Route path="create" element={<OrderCreate />} />
                      <Route path="edit/:id" element={<OrederEdit />} />
                      <Route path="show/:id" element={<OrderShow />} />
                    </Route>

                    <Route path="/issues">
                      <Route index element={<IssueList />} />
                      <Route path="create" element={<IssueCreate />} />
                      {/* <Route path="show/:id" element={<CustomerShow />} /> */}
                    </Route>

                    <Route path="/products">
                      <Route index element={<ProductList />} />
                      <Route path="create" element={<ProductCreate onClose={function (): void {
                        throw new Error("Function not implemented.");
                      } } />} />
                      <Route path="edit/:id" element={<ProductEdit />} />
                      <Route path="show/:id" element={<ProductShow />} />
                    </Route>

                    <Route path="/employers">
                      <Route index element={<EmployerList />} />
                      <Route path="create" element={<EmployerCreate />} />
                      <Route path="edit/:id" element={<EmpolyerEdit />} />
                      <Route path="show/:id" element={<EmployerShow />} />
                    </Route>

                    <Route path="/dashboard">
                      <Route index element={<CustomerList1 />} />
                      {/* <Route path="create" element={<CustomerCreate />} />
                      <Route path="edit/:id" element={<CustomerEdit />} />
                      <Route path="show/:id" element={<CustomerShow />} /> */}
                    </Route>
                    
                    <Route path="/nums">
                      <Route index element={<NumList />} />
                      <Route path="create" element={<NumCreate visible={false} onClose={function (): void {
                        throw new Error("Function not implemented.");
                      } }/>} />
                      <Route path="edit/:id" element={<NumEdit />} />
                      {/* <Route path="show/:id" element={<NumShow />} /> */}
                    </Route>

                    <Route path="*" element={<ErrorComponent />} />
                  </Route>

                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route
                      path="/login"
                      element={
                        <AuthPage
                          type="login"
                          formProps={{
                            // initialValues: {
                            //   email: "demo@refine.dev",
                            //   password: "demodemo",
                            // },
                          }}
                        />
                      }
                    />
                    <Route
                      path="/register"
                      element={<AuthPage type="register" />}
                    />
                    <Route
                      path="/forgot-password"
                      element={<AuthPage type="forgotPassword" />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;

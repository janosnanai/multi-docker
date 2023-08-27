import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";
import "./App.css";

const routerConfig = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Fib />} />
    <Route path="otherpage" element={<OtherPage />} />
  </Route>
);

const router = createBrowserRouter(routerConfig);

function RootLayout() {
  return (
    <>
      <h1>Fib Calculator</h1>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </div>
      <Outlet />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;

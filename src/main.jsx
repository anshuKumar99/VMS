import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import VenueDashboard from './pages/VenueDashboard.jsx';
import ModuleAdmin from './pages/ModuleAdmin.jsx';
import ClusterPage from './pages/Cluster.jsx';
import Cluster from './pages/Cluster.jsx';
import Venue from './pages/Venue.jsx';
import SportsFacilities from './pages/SportsFacilities.jsx';
import Facility from './pages/Facility.jsx';
import Zone from './pages/Zone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <VenueDashboard /> },
      { path: "/module-user", element: <ModuleAdmin /> },
      { path: "/cluster", element: <Cluster/>},
      { path: "/venue", element: <Venue/>},
      { path: "/facilities", element: <Facility/>},
      { path: "/zones", element: <Zone/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)

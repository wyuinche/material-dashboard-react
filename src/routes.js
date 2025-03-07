/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";

// @mui icons
import Icon from "@mui/material/Icon";
import Blocks from "layouts/blocks";
import Operations from "layouts/operations";
import Documents from "layouts/documents";
import Accounts from "layouts/accounts";
import Tokens from "layouts/tokens";
import Nodes from "layouts/nodes";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Nodes",
    key: "nodes",
    icon: <Icon fontSize="small">earbuds</Icon>,
    route: "/nodes",
    component: <Nodes />,
  },
  {
    type: "collapse",
    name: "Blocks",
    key: "blocks",
    icon: <Icon fontSize="small">widgets</Icon>,
    route: "/blocks",
    component: <Blocks />,
  },
  {
    type: "collapse",
    name: "Blocks",
    key: "blocks",
    icon: <Icon fontSize="small">widgets</Icon>,
    route: "/block/:key",
    param: true,
    component: <Blocks />,
  },
  {
    type: "collapse",
    name: "Operations",
    key: "operations",
    icon: <Icon fontSize="small">compare_arrows</Icon>,
    route: "/operations",
    component: <Operations />,
  },
  {
    type: "collapse",
    name: "Operations",
    key: "operations",
    param: true,
    icon: <Icon fontSize="small">compare_arrows</Icon>,
    route: "/operation/:hash",
    component: <Operations />,
  },
  {
    type: "collapse",
    name: "Documents",
    key: "documents",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/documents",
    component: <Documents />,
  },
  {
    type: "collapse",
    name: "Document",
    key: "document",
    param: true,
    icon: <Icon fontSize="small">article</Icon>,
    route: "/document/:id",
    component: <Documents />,
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    icon: <Icon fontSize="small">account_balance_wallet</Icon>,
    route: "/accounts",
    component: <Accounts />,
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    param: true,
    icon: <Icon fontSize="small">account_balance_wallet</Icon>,
    route: "/accounts/:key",
    component: <Accounts />,
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    param: true,
    icon: <Icon fontSize="small">account_balance_wallet</Icon>,
    route: "/account/:address",
    component: <Accounts />,
  },
  {
    type: "collapse",
    name: "Tokens",
    key: "tokens",
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/tokens",
    component: <Tokens />,
  },
  {
    type: "collapse",
    name: "Tokens",
    key: "tokens",
    param: true,
    icon: <Icon fontSize="small">paid</Icon>,
    route: "/token/:currency",
    component: <Tokens />,
  },
];

export default routes;

/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";
import UserProfile from "./views/UserProfile";
import TableList from "./views/TableList.jsx";
import Typography from "./views/Typography.jsx";
import Icons from "./views/Icons.jsx";
import Maps from "./views/Maps.jsx";
import Notifications from "./views/Notifications.jsx";
import Upgrade from "./views/Upgrade.jsx";
import Order from "./views/Order.jsx";
import Schedule from "./views/Schedule.jsx";
import trip from "./assets/img/trip.png";
import RouteTrip from "./views/RouteTrip.jsx";
import MapWithExplain from "./views/Maps_withExplain.jsx";
import route_icon from "./assets/img/route_icon.png";

var number = 1; //Dùng cách này để kiểm tra role của user, vì chỗ này như 1 cái biến thôi nên ta sẽ ko tạo 1 component ở đây. Thay đổi
// cách để khi đăng nhập vào sẽ mở chức năng tương tự
const dashboardRoutes = [
      // {
      //   path: "/dashboard",
      //   name: "Dashboard",
      //   icon: "pe-7s-graph",
      //   component: Dashboard,
      //   layout: "/admin",
      // },
      {
        path: "/routetrip",
        name: "RouteTrip",
        // icon: "pe-7s-graph",
        component: RouteTrip,
        layout: "/admin",
      },
      {
        path: "/trip",
        name: "Create trip",
        icon: route_icon,
        component: UserProfile,
        layout: "/admin",
      },
      // {
      //   path: "/table",
      //   name: "User List",
      //   icon: "pe-7s-note2",
      //   component: TableList,
      //   layout: "/admin",
      // },
      // {
      //   path: "/order",
      //   name: "Order",
      //   icon: "pe-7s-shopbag",
      //   component: Order,
      //   layout: "/admin"
      // },
      // {
      //   path: "/schedule",
      //   name: "Schedule",
      //   icon: "pe-7s-date",
      //   component: Schedule,
      //   layout: "/admin"
      // },
      // {
      //   path: "/typography",
      //   name: "Typography",
      //   icon: "pe-7s-news-paper",
      //   component: Typography,
      //   layout: "/admin"
      // },
      // {
      //   path: "/icons",
      //   name: "Icons",
      //   icon: "pe-7s-science",
      //   component: Icons,
      //   layout: "/admin",
      // },
      // {
      //   path: "/maps",
      //   name: "Maps Aha",
      //   icon: "pe-7s-map-marker",
      //   component: Maps,
      //   layout: "/admin",
      // },
      {
        path: "/notifications",
        name: "Notifications",
        icon: "pe-7s-bell",
        component: Notifications,
        layout: "/admin",
      },
      // {
      //   path: "/mapexplain",
      //   name: "Map with explainn",
      //   icon: "pe-7s-bell",
      //   component: MapWithExplain,
      //   layout: "/admin",
      // },
    ];
// {
//   if (number == 1) {
//     dashboardRoutes = [
//       {
//         path: "/dashboard",
//         name: "Dashboard",
//         icon: "pe-7s-graph",
//         component: Dashboard,
//         layout: "/admin",
//       },
//       {
//         path: "/user",
//         name: "Add user",
//         icon: "pe-7s-user",
//         component: UserProfile,
//         layout: "/admin",
//       },
//       {
//         path: "/table",
//         name: "User List",
//         icon: "pe-7s-note2",
//         component: TableList,
//         layout: "/admin",
//       },
//       // {
//       //   path: "/order",
//       //   name: "Order",
//       //   icon: "pe-7s-shopbag",
//       //   component: Order,
//       //   layout: "/admin"
//       // },
//       // {
//       //   path: "/schedule",
//       //   name: "Schedule",
//       //   icon: "pe-7s-date",
//       //   component: Schedule,
//       //   layout: "/admin"
//       // },
//       // {
//       //   path: "/typography",
//       //   name: "Typography",
//       //   icon: "pe-7s-news-paper",
//       //   component: Typography,
//       //   layout: "/admin"
//       // },
//       {
//         path: "/icons",
//         name: "Icons",
//         icon: "pe-7s-science",
//         component: Icons,
//         layout: "/admin",
//       },
//       {
//         path: "/maps",
//         name: "Maps Aha",
//         icon: "pe-7s-map-marker",
//         component: Maps,
//         layout: "/admin",
//       },
//       {
//         path: "/notifications",
//         name: "Notifications",
//         icon: "pe-7s-bell",
//         component: Notifications,
//         layout: "/admin",
//       },
//     ];
//   }
// }

export default dashboardRoutes;

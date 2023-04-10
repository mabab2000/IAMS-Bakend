/* eslint-disable react/jsx-pascal-case */

import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';


import Blog from './Pages/Blog';
import Logout from './Pages/Logout';
import Login from './Pages/Login';
import Adminlogout from './Pages/Adminlogout';
import Role_assign from './Pages/Role_assign';
import Userwithid from './Pages/Userwithid';
import  Userprofile from './Pages/Userprofile';
import Receptionprofile from './Pages/Receptionprofile';
import Departmentprofile from './Pages/Departmentprofile';
import Header from './Components/homepage/Header';
import User from './Pages/User';
import Deleteuser from './Pages/Deleteuser';
import Allrequestinreception from './Pages/Allrequestinreception';
import Allusers from './Pages/Allusers';
import Dep_desc from './Pages/Dep_desc';
import Deletedepartment from './Pages/Deletedepartment';
import Departmentwithid from './Pages/Departmentwithid';
import Allrequest from './Pages/Allrequest';
import Alldepartment from './Pages/Alldepartment';
import Reception from './Pages/Reception';
import Track from './Pages/Track';
import Admin from './Pages/Admin';
import Profile from './Pages/Profile';
import Userdepartment from './Pages/Userdepartment';
import Assign from './Pages/Assign';
import Receptionlogout from './Pages/Receptionlogout';
import Departmentlogout from './Pages/Departmentlogout';
import Pending from './Pages/Pending';
import Createdepartment from './Pages/Createdepartment';
import All_request from './Pages/All_request';
import Pending_request from './Pages/Pending_request';
import Department from './Pages/Department';
import Delete_request from './Pages/Delete_request';
import Userheader from './Pages/Userheader';
import Check_email from './Pages/Check_email';
import Protected from './Components/Protected';
import Create_password from './Pages/Create_password';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add_request from './Pages/Add_request';



const router = createBrowserRouter([
  
  {
    path: "Logout",
    element: <Protected><Logout/></Protected>
  },
  {
    path: "Departmentlogout",
    element: <Protected><Departmentlogout/></Protected>
  },
  {
    path: "delete_user",
    element: <Protected><Deleteuser/></Protected>
  },
  {
    path: "Allrequestinreception",
    element: <Protected><Allrequestinreception/></Protected>,
  },
  {
    path: "check_email",
    element: <Check_email/>,
  },
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "createdepartment",
    element: <Protected><Createdepartment/></Protected>,
  },
  {
    path: "recepationlogout",
    element: <Protected><Receptionlogout/></Protected>,
  },
  {
    path: "deletedepartment",
    element: <Protected>< Deletedepartment/></Protected>,
  },
 
  {
    path: "create_password",
    element: <Create_password/>,
  },

  
  {
    path: "Profile",
    element: <Protected><Profile/></Protected>,
  },
  {
    path: "Userprofile",
    element: <Protected><Userprofile/></Protected>,
  },
  {
    path: "Receptionprofile",
    element: <Protected><Receptionprofile/></Protected>,
  },
  {
    path: "Departmentprofile",
    element: <Protected><Departmentprofile/></Protected>,
  },
  {
    path: "assign_department",
    element: <Protected><Userdepartment/></Protected>,
  },
  {
    path: "Allrequest",
    element: <Protected><Allrequest/></Protected>,
  },
  {
    path: "Departmentwithid",
    element: <Protected><Departmentwithid/></Protected>,
  },

  
  {
    path: "Adminlogout",
    element: <Protected><Adminlogout/></Protected>,
  },
  {
    path: "role_assign",
    element: <Protected><Role_assign/></Protected>,
  },
  {
    path: "Alldepartment",
    element: <Protected><Alldepartment/></Protected>,
  },
  {
    path: "Allusers",
    element: <Protected><Allusers/></Protected>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "admin",
    element: <Protected><Admin/></Protected>,
  },
  {
    path: "All_request",
    element: <Protected><All_request/></Protected>,
  },
  {
    path: "userheader",
    element: <Protected><Userheader/></Protected>,
  },
  {
  path: "Dep_desc",
    element: <Protected><Dep_desc/></Protected>,
  },
  {
    path: "assign",
    element: <Protected><Assign/></Protected>,
  },
  {
    path: "delete_request",
    element: <Protected><Delete_request/></Protected>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
 
  {
    path: "department",
    element: <Protected><Department/></Protected>,
  },
  {
  path: "Pending",
    element: <Protected><Pending/></Protected>,
  },
  {
    path: "Pending_request",
      element: <Protected><Pending_request/></Protected>,
    },
  {
    path: "Track",
    element: <Protected><Track/></Protected>,
  },
  {
    path: "User",
    element: <Protected><User/>
      </Protected>
  },
  {
    path: "Reception",
    element: <Protected><Reception/></Protected>,
  },{
    path:"Userwithid",
    element:<Protected><Userwithid/></Protected>,
  },
  {
    path: "Add_request",
    element: <Protected><Add_request/></Protected>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

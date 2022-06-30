import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import User2 from "./pages/vehicledata/vd";
import NewUser from "./pages/newUser/NewUser";
import Employee_List from "./pages/Employee/employee";
import RegistrationForm from "./components/login&Sinup/Register";
import Login from "./components/login&Sinup/Login";
import Weekly_report from "./components/report_generate/weeklyreport";
import Monthly_report from "./components/report_generate/monthly_report";
import TripList from "./pages/tripdetail/tripdetail";
import Edit_emp from "./pages/employee_edit/employeeedit";
import New_Employee from "./pages/newemployee/newemp";
import Profile from "./pages/profile/profile";
import Settings from "./pages/settings/setting";
import Addvehicledetail from "./pages/vehicledata/adddetail";
import Addinsurancedetail from "./pages/vehicledata/addinsurance";

const App = () => {
  const userName = window.localStorage.getItem("userName");

  return (
    <Router>
      <Topbar />
      <div className="container">
        {userName != undefined && <Sidebar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />

          <Route path="/signup" element={<RegistrationForm />} />

          <Route path="/signin" element={<Login />} />

          <Route path="/weeklyreport" element={<Weekly_report />} />

          <Route path="/Monthly_report" element={<Monthly_report />} />

          <Route path="/user/:userId" element={<User />} />

          <Route path="/vehicledetail/:userId" element={<User2 />} />

          <Route path="/addvehicledetail" element={<Addvehicledetail />} />

          <Route path="/addinsurancedetail" element={<Addinsurancedetail />} />

          <Route path="/triplist/:userId" element={<TripList />} />

          <Route path="/newUser" element={<NewUser />} />

          <Route path="/employee" element={<Employee_List />} />

          <Route path="/editemployee/:userId" element={<Edit_emp />} />

          <Route path="/newemployee" element={<New_Employee />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/setting" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

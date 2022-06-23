import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import ManagePayment from "./pages/managePayment/managePayment";
import AddPayment from "./pages/addPayment/addPayment";

const App = () => {
  const userName = window.localStorage.getItem("userName");

  return (
    <Router>
      <Topbar />
      <div className="container">
        {userName != undefined && <Sidebar />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/signup">
            <RegistrationForm />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/weeklyreport">
            <Weekly_report />
          </Route>
          <Route path="/Monthly_report">
            <Monthly_report />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/vehicledetail/:userId">
            <User2 />
          </Route>
          <Route path="/triplist/:userId">
            <TripList />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/employee">
            <Employee_List />
          </Route>

          <Route path="/editemployee/:userId">
            <Edit_emp />
          </Route>

          <Route path="/newemployee">
            <New_Employee />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/setting">
            <Settings />
          </Route>

          <Route path="/manage_payment">
            <ManagePayment />
          </Route>

          <Route path="/add_payment">
            <AddPayment />
          </Route>

        </Switch>
      </div>
    </Router>
  );
};

export default App;

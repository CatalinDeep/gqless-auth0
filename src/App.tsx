import React from "react";
import Login from "./components/login/login";
import UserInformation from "./components/user-information/UserInformation";
import Logout from "./components/logout/logout";
import { useAuth0 } from "@auth0/auth0-react";
import AddTask from "./components/add-task/AddTask";
import ShowUserToken from "./components/show-user-token/ShowUserToken";
import UserTasks from "./components/user-tasks/UserTasks";
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated && <ShowUserToken />}
      <Login />
      <Logout />
      {isAuthenticated && <UserInformation />}
      {isAuthenticated && <AddTask />}
      {isAuthenticated && <UserTasks />}
    </div>
  );
}

export default App;

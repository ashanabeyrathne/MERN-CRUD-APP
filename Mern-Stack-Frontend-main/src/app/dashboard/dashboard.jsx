import React from "react";
import addUser from "../../components/AddUser";
import editUser from "../../components/EditUser";
import userList from "../../components/UserList";

function Dashboard() {
    return (
        <div>
            <addUser/>
            <editUser/>
            <userList/>
        </div>
    );
}

export default Dashboard;
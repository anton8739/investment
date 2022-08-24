import React from "react";
import {IUser} from "../../../models/user/user";
import UserCard from "./UserCard/UserCard";

interface props {
    users: IUser[] | undefined
}

const UsersList: React.FC<props> = ({users}) => {
    return (<div className="user-list">
        {users?.map(user => <UserCard user={user}/>)}
    </div>)
}
export default UsersList;
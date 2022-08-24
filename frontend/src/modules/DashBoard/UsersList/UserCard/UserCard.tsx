import {IUser} from "../../../../models/user/user";
import React from "react";

interface props {
    user: IUser
}

const UserCard: React.FC<props> = ({user}) => {
    return (<div className="user-card">
        <div className="user-card-header">
            <div className="icon">
                <img src={user.avatar_url} alt="user-icon"/>
            </div>
            <div className="info">
                {user.login}
            </div>
        </div>

    </div>)
}
export default UserCard;
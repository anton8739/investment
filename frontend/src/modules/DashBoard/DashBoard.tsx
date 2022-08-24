import {useSearchUsersQuery} from "../../store/gitHub/github.api";
import {Spin} from "antd";
import React from "react";
import UsersList from "./UsersList/UsersList";
import './DashBoard.scss'
interface props {

}

const DashBoard: React.FC<props> = () => {
    const {isLoading, isError, data} = useSearchUsersQuery("a")
    return (
        <div className="dashboard">
            {isLoading ? <Spin/> : <>
                <UsersList users={data}/>
            </>
            }
        </div>
    )
}
export default DashBoard;
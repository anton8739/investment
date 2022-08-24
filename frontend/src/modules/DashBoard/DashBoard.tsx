import {useSearchUsersQuery} from "../../store/gitHub/github.api";
import {Spin} from "antd";
import React from "react";
interface props {

}
const DashBoard:React.FC<props>  = () => {
    const {isLoading, isError, data} = useSearchUsersQuery("anton8739")
    return (
        <div>
            {isLoading ? <Spin/> : <>
              "Done"
            </>
            }
        </div>
    )
}
export default DashBoard;
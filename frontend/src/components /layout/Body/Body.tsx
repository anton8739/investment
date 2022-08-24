import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import React from "react";
interface props {
    isSideBarOpened : boolean
}
const Body: React.FC<props>  = ({isSideBarOpened}) => {
    return (<div className="body">
        <SideBar isSideBarOpened={isSideBarOpened}/>
        <Content/>
    </div>)
}
export default Body;
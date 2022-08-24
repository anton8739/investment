import React from "react";
import SideBar from "../SideBar/SideBar";
import Content from "../Content/Content";

interface props {
    children : React.ReactNode,
    isSideBarOpened : boolean
}
const Body: React.FC<props> = ({children,isSideBarOpened}) => {
    return(<div className="body">
        <SideBar isSideBarOpened={isSideBarOpened}/>
        <Content>
            {children}
        </Content>
    </div>)
}
export default Body;
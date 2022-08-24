import React from "react";
import {Button} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
interface props {
    setSideBarOpened : Function,
    isSideBarOpened : boolean
}

const Header: React.FC<props> = ({setSideBarOpened,isSideBarOpened}) => {
    const openSideBar = () => {
        setSideBarOpened(!isSideBarOpened)
    }
    return(<div className="header">
        <Button type="primary" onClick={openSideBar} >
            {isSideBarOpened ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
    </div>)
}
export default Header;
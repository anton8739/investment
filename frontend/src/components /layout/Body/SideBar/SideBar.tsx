import {Menu} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React from "react";

interface props {
    isSideBarOpened : boolean
}

const SideBar: React.FC<props> = ({isSideBarOpened}) => {
    return (<div className="side-bar">
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            inlineCollapsed={isSideBarOpened}
            className="side-bar-menu"
        >
            <Menu.Item
                key={"1"}
                icon={<MailOutlined/>}
            >
                DashBoard
            </Menu.Item>
            <Menu.Item
                key={"2"}
                icon={<AppstoreOutlined/>}
            >
                Projects
            </Menu.Item>
            <Menu.Item
                key={"3"}
                icon={<SettingOutlined/>}
            >
                Tasks
            </Menu.Item>
        </Menu>
    </div>)
}
export default SideBar;
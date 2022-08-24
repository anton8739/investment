import './Layout.scss'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import React, {useState} from "react";
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import Body from "./Body/Body";
interface props {
    children : React.ReactNode
}
const Layout: React.FC<props>  = ({children}) => {
    const [isSideBarOpened, setSideBarOpened] = useState(true);
    return(<div className="layout">
        <Header setSideBarOpened={setSideBarOpened} isSideBarOpened={isSideBarOpened}/>
        <Body isSideBarOpened={isSideBarOpened}>
            {children}
        </Body>
        <Footer/>
    </div>)
}
export default Layout;
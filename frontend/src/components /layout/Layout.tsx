import './Layout.scss'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from './Body/Body';
import {useState} from "react";
const Layout = () => {
    const [isSideBarOpened, setSideBarOpened] = useState(true);
    return(<div className="layout">
        <Header setSideBarOpened={setSideBarOpened} isSideBarOpened={isSideBarOpened}/>
        <Body isSideBarOpened={isSideBarOpened}/>
        <Footer/>
    </div>)
}
export default Layout;
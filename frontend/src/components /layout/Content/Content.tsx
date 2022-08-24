import React from "react";

interface props {
    children : React.ReactNode
}
const Content: React.FC<props> = ({children}) => {
    return(<div className="content">
        {children}
    </div>)
}
export default Content;
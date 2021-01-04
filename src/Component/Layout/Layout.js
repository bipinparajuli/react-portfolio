import React from 'react'
import  './Layout.css'
import Sidebar from '../Sidebar/Sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
const Layout = (props) => {
    return (
        <div className="Layout">
            <Sidebar/>
    <div className="Content" >{props.children}</div>
        </div>
    )
}

export default Layout

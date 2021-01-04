import React,{useState} from 'react'
import {Menu,MenuItem,SidebarFooter,SidebarHeader,SidebarContent,ProSidebar} from 'react-pro-sidebar'
import ImageContainer from '../ImageContainer/ImageContainer'
import Typing from '../TypeingAnimation/Type'
import {NavLink} from 'react-router-dom'
import  './Sidebar.css'
import {useStateValue} from '../../StateProvider'
import {FaHome,FaUserTie,FaBusinessTime,FaPaperPlane} from 'react-icons/fa';
import img from '../../Assets/Images/a.jpg'
import {Image} from 'react-bootstrap'
 

const SidebarDrawer = () => {
  
const[{menu},dispatch]=useStateValue()

const sidedrawerCloseHandler = ()=>{
  dispatch({
    type:'SHOW_MENU',
    item:{
        state:!menu.state,
    }
})
}


let sidebar=null;
if(menu.state !==undefined){
  
  console.log("MENU STATE",menu.state)
    sidebar=(
<div className='sidebar' onClick={sidedrawerCloseHandler}   style={{display:menu.state ? "block" : "none"}} >
            <ProSidebar  className='main'>
                <SidebarHeader>  <Image style={{borderRadius:"50%",height:"100px",width:"100px",margin:'10px 0 0 15px'}} src={img} roundedCircle /><Typing/> </SidebarHeader>
            <SidebarContent className="sidebarcontent" >
            <Menu>
            <MenuItem className='menuitem' iconShape='circle' icon={<FaHome />} >  
  <NavLink  exact to="/">Home</NavLink>
</MenuItem>
<MenuItem className='menuitem' iconShape='circle' icon={<FaUserTie />}> 
  <NavLink exact to="/about" >About</NavLink>
</MenuItem>
<MenuItem className='menuitem' iconShape='circle' icon={<FaBusinessTime />}>
  <NavLink exact to="/projects" >Projects</NavLink>
</MenuItem>
<MenuItem  iconShape='circle'  className='menuitem' icon={<FaPaperPlane />}>
  <NavLink exact  to="/contact" >Contact</NavLink>
</MenuItem>
</Menu>
            </SidebarContent>
            
            </ProSidebar>
        </div>
        
)}
else{

    sidebar=(
<div className='sidebar' onClick={menu.onClickHandler} >
            <ProSidebar className='main' >
                <SidebarHeader><ImageContainer /><Typing/> </SidebarHeader>
                <SidebarContent className="sidebarcontent" >
<Menu>
<MenuItem className='menuitem' iconShape='circle' icon={<FaHome />}>
  <NavLink exact to="/"> Home</NavLink>
</MenuItem>

<MenuItem className='menuitem' iconShape='circle' icon={<FaUserTie />}> 
  <NavLink exact to="/about" >About</NavLink>
</MenuItem>

<MenuItem className='menuitem' iconShape='circle' icon={<FaBusinessTime />}>
  <NavLink exact to="/projects" >Projects</NavLink>
</MenuItem>

<MenuItem iconShape='circle'  className='menuitem' icon={<FaPaperPlane />}>
  <NavLink exact  to="/contact" >Contact</NavLink>
</MenuItem>
</Menu>
            </SidebarContent>
            
            </ProSidebar>
        </div>)
}


    return (
        <>
        {sidebar}
    </>
    )
}

export default SidebarDrawer;
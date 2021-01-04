import React,{useEffect, useState} from 'react'
import {useStateValue} from '../../StateProvider'
import classes from './DrawToggle.module.css'
const DrawToggle = () => {
    
    const [{menu},dispatch]=useStateValue();
     const [state, setstate] = useState(true);


       

      const onClickHandler=  ()=>{
    //    setstate(false)
    //     setstate((prevstate)=>{
    //         console.log('prevstate',prevstate)
    //  return !prevstate
    //     })

dispatch({
            type:'SHOW_MENU',
            item:{
                state
            }
        })
        
        
    }

    return (
        <div className={classes.Menu} onClick={onClickHandler} >
<div></div>
<div></div>
<div></div>
            </div>
    )
}

export default DrawToggle

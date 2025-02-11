import React from 'react'
import { Link } from 'react-router-dom';

const StructureLink = (props) => {
  return (
    <>
     <li>
        <Link 
        to={props.link}
        className="nav-link" style={{color:'black'}}>
            <i className={props.icon}> {  props.label}</i> 
            
        </Link>
     
     </li> 
    </>
  )
}

export default StructureLink

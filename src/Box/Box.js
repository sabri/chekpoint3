import React from 'react';
import '../index.css'
 let Box = (props)=> {
    return(
<div className="box" style ={props.style}>
<h4>{props.title}</h4>
<div className="divider"></div>
<p>{props.paragraph}</p>
<span style ={props.color}>En savoir plus
</span>
</div>

    );
    
}

export default Box;
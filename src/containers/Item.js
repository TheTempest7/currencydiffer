import React from "react";
import { useState,useEffect,useLayoutEffect } from "react";


export default function Item(props){
    
    let [st1,setSt1]=useState([  ]) ;
    let [st2,setSt2]=useState([]);
    let refOne=React.createRef();
    
    useEffect(  ()=>{
    if(props.sum){
        let data=props.sum;
        setSt1(props.sum);
        
       }
   
    
       
       
    },[props.sum])

    useEffect(()=>{
        if(props.name){
            let dataName=props.name;
            setSt2(props.name);
            console.log(props.name); 
        }
    },[props.name])
    
    
    let showToolTip=(e)=>{
        let colection =document.body.querySelectorAll('.item__body');
        colection.forEach(i=>(
            i.addEventListener('mouseover',function(){
                let sdf = i.childNodes[3];
                sdf.classList.remove('gone');
            })
        ))
        
        
    }


    let hideToolTip=(e)=>{
        let colection =document.body.querySelectorAll('.item__body');
        colection.forEach(i=>(
            i.addEventListener('mouseleave',function(){
                let sdf = i.childNodes[3];
                sdf.classList.add('gone');
            })
        ))
    }
    
    
    return(
        <div className="item__main"  >
        { Object.values(st1).map((i)=>(
            <div className="item__container" key={i[0]}>
                <div className="item__body" >
        <div className="item__name" onMouseOver={showToolTip}  onMouseLeave={hideToolTip} >{i[0]}</div>
        <div className="item__currentValue" >{i[1]} RUB</div>
        <div className="item__previousValue" >{((i[1])/(i[2])).toFixed(2)*100}%</div>
        <div  ref={refOne} className="item__tooltip Tooltip gone">
                <div className="Tooltip__body" >
                        {i[3]}
                </div>
            </div>
                </div>
                
            </div>
        
    ))
    }  

   

    </div>)

}



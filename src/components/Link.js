import React from "react";
import { useState,useEffect } from "react";
import Item from "../containers/Item";
import ErrorBoundary from "./ErrorBoundary";

export default function Link(){

    let [st1,setState1]=useState({});
    let [stCharCodes,setStateCharCodes]=useState({});
    let [stValuteEstimate,setStateValuteEstimate]=useState({});
    let [stValutePastEstimate,setStateValutePastEstimate]=useState({});
    let [stSum,setSum]=useState({});
    let [st21,set21]=useState({});
    

    useEffect(()=>{
        Promise.all([fetch('https://www.cbr-xml-daily.ru/daily_json.js')])
        .then(responses => {
            return responses.map(response => {
                return response.json();
            })
        
        
        
        
        })
        .then(function(data){
            
            let myData=data[0].then((value)=>{
                
                let dat=value.Valute;
                setState1(dat);
                
                let stValues=Object.values(dat);
                let valNam=[];
                let charCodes=[];
                let valuteEstimate=[];
                let valutePastEstimate=[];
                let sum=[];
                for(let i=0;i<stValues.length;i++){
                    charCodes.push(stValues[i]['CharCode']);
                    valuteEstimate.push(stValues[i]['Value']);
                    valutePastEstimate.push(stValues[i]['Previous']);
                    valNam.push(stValues[i]['Name']);
                }
                for(let i=0;i<stValues.length;i++){
                    sum.push([charCodes[i],valuteEstimate[i],valutePastEstimate[i],valNam[i]]);
                
                }
                
                let dataSum=sum;
                setSum(dataSum);
                
            })
        })
        ;
    },[]);

    return(
        <div className="link__body" >
            <div className="link__item Item">
            { <Item   sum={stSum}/>}
            </div> 
            
           
        
            

        </div>
    )
}
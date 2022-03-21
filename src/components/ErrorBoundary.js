import { Component } from "react";
import Item from "../containers/Item";

export default class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            error:null,
            errorInfo: null,
        };
    }

    componentDidCatch(error,errorInfo){
        
        this.setState({
            hasError:true,
            error,
            errorInfo,
        });

    }

    render(){
        if(this.state.hasError){
            
            return   <div>
                <p> we are working on it </p>
            
      
            </div> 

        }
        return this.props.children;
    }
}
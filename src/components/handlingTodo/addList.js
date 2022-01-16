import React from "react";
import {toast} from 'react-toastify';
class Add extends React.Component{
    state={
        values:"",
        istrues:""
    }
    handelOnchange=(event)=>{
        this.setState({
            values:event.target.value
        })
        
    }
    handelAddTodo=(istrue)=>{
        if(!this.state.values){
            return false
        }
        this.props.addTodo(this.state.values);
        this.setState({
            values:""
        })  
        toast.success("success add")
    }
    render(){
        return(
            <>
                <input className="input-add" type={"text"} value={this.state.values} onChange={(event)=>{
                    this.handelOnchange(event)
                }}/>
                <button onClick={()=>{
                    this.handelAddTodo();
                }}>{"add"}</button>
            </>
        )
    }
}
export default Add;



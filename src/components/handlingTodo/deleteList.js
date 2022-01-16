import React from "react";
import {toast} from 'react-toastify';
class Delete extends React.Component{
    state={
        istrue:true,
        idTodo:"",
        values:""
    }
    handelFix=(value)=>{
        this.setState({
            values:value
        })
    }
    handelSave=(index)=>{
        this.props.handelEdit({
            name:this.state.values
        },index)
        toast.success("success save")
    }
    handelFixSave=(todo)=>{
        this.setState({
            istrue:!this.state.istrue,
            idTodo:todo
        })
    }
    
    handelDelete=(index)=>{
        this.props.deleteTodo(index);
        toast.error("success deleted!")
    }
    handelOnchange=(event)=>{
        this.setState({
            values:event.target.value
        })
    }
    
    render(){
        const lists=this.props.lists;
        return(
            <>
                {lists.map((list)=>{
                        return(
                            <div className="list" key={list.id}>
                                <h3>{list.id}-</h3>
                                {this.state.istrue? 
                                    <>
                                        <h3>{list.name}</h3>
                                    </>
                                    :
                                    <>
                                        {this.state.idTodo == list.id ? <input value={this.state.values} type={"text"} onChange={(event)=>{
                                        this.handelOnchange(event);
                                        }}/>
                                        :
                                        <h3>{list.name}</h3>
                                        }
                                    </>
                                }
                                <div>
                                    <button className="fix" onClick={()=>{
                                        this.handelFixSave(list.id)
                                    }}>
                                    {this.state.istrue? 
                                        <span onClick={()=>{
                                            this.handelFix(list.name)
                                        }}>fix</span>
                                        :
                                        <>
                                            {this.state.idTodo==list.id ?
                                                <span onClick={()=>{
                                                    this.handelSave(list.id)
                                                }}>save</span>:<span>fix</span>
                                            }
                                        </>
                                    }</button>
                                    <button className="delete" onClick={()=>{
                                        this.handelDelete(list.id)
                                    }}>x</button>
                                </div>
                            </div>
                        )
                })}
            </>
        )
    }
}
export default Delete;
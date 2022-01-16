import React from "react";
import Add from "./handlingTodo/addList";
import Delete from "./handlingTodo/deleteList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Listtodo extends React.Component{
    state={
        istrue:true,
        lists:[
            {
            id:"todo1",
            name:"Hoc HTML",
            },
            {
            id:"todo2",
            name:"Hoc CSS",
            },
            {
            id:"todo3",
            name:"Hoc JAVASCRIPT",
            },
        ],
        editLists:{}
    }
    addTodo=(value,index)=>{
        const add={
            id:"todo"+Math.floor(Math.random()*1000),
            name:value
        }
        this.setState({
            lists:[...this.state.lists,add]
        })
    }
    deleteTodo=(index)=>{
        this.setState({
            lists:this.state.lists.filter((content)=>{
                if(content.id!==index){
                    return content
                }
            })
        })
    }
    handelEdit=(todo,index)=>{
        this.setState({
            lists:this.state.lists.map((value)=>{
                if(value.id==index){
                    value.name=todo.name
                }
                return value
            })
        })
    }
    handelOnchange=(event)=>{
        this.setState({
            values:event.target.value
        })
    }
    render(){
        return(
            <>
                <h1 className="caption">ListTodo Gia Giang</h1>
                <Add addTodo={this.addTodo}/>
                <Delete handelEdit={this.handelEdit} lists={this.state.lists} deleteTodo={this.deleteTodo}/>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                <ToastContainer />
            </>
        )
    }
}
export default Listtodo



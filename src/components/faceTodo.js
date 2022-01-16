import React from "react";
import Listtodo from "./listTodo";
export default class Interfacetodo extends React.Component{
    render(){
        return(
            <>
                <div className="todo-list">
                    <Listtodo/>
                </div>
            </>
        )
    }
}
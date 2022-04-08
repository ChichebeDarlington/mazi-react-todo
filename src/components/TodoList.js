import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
    render() {
        const {items, wipeList, handleDelete, handleEdit} = this.props
        return (
            <ul className='list-group my-5'>
                <h3 className='text-center text-capitalize'>
                    todo list section
                </h3>
                {
                    items.map((item)=>{
                        return(
                        <TodoItems 
                        key={item.id}
                        title={item.title}
                        handleDelete={()=>handleDelete(item.id)}
                        handleEdit={()=>handleEdit(item.id)}
                        />
                        )
                    })
                }
                <button className='btn
                 btn-block
                  btn-danger
                   text-capitalize 
                   mt-5
                   '
                   onClick={wipeList}
                   >
                    wipe list
                </button>
            </ul>
        );
    }
}

export default TodoList;
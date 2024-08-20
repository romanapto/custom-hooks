import React, { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoRecuder';

const initialState:any = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // },
    // {
    //     id: new Date().getTime()+100,
    //     description: 'Recolectar la piedra del alma',
    //     done: false
    // }
];

export const useTodos = (initialValue:number =10) => {

    const init =()=>{
        return JSON.parse(localStorage.getItem('todo'))||[]
    }

    const [todo, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        console.log(todo);
        localStorage.setItem('todo', JSON.stringify(todo)|| '');
      
    }, [todo])
    

    const handleNewTodo = ( todo:any ) =>{
        //console.log(todo);
        const action = {
            type: '[TODO] Add Todo',
            payload:todo
        }
        dispatch(action);

    }

    const handleDeleteTodo = ( id:any ) => {

        //console.log({id});

        const action = {
            type: '[TODO] Remove Todo',
            payload:id
        }
        dispatch(action);

        /*dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });*/
    }

    const handleToggleTodo = ( id:any ) => {

        console.log({id});

        const action = {
            type: '[TODO] Toggle Todo',
            payload:id
        }
        dispatch(action);

      
    }

    return {
        todo,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todoCount: todo.length,
        pendingCount:todo.filter(todo=> !todo.done).length

    }
}
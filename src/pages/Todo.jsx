import { useState, useRef, useEffect } from "react"
import ListItem from "../components/Lisitem"
import { v4 as uuidv4 } from 'uuid';

function Todo() {

    const [toDos, setTodos] = useState([])
    const inputRef = useRef(null)

    // Dependency list es null solamente se va a ejecutar una vez
    // useEffect( () =>{
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then((response) => {
    //             console.log(response.json());
    //         })
    // }, [])

    useEffect( () =>{
        const getTodos = () => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
        }
        getTodos()
    }, [])


    // agregar un nuevo ToDo
    const addToDo = () => {
        console.log(inputRef);
        const todoValue = inputRef.current.value

        const newToDo = {
                     id: uuidv4(),
                     name: todoValue,
        }

        setTodos([newToDo, ...toDos]);

        inputRef.current.value = ""

        // if (todoValue) {
        //     const newToDo = {
        //         id: uuidv4(),
        //         text: todoValue,
        //     }
        //     setTodos([...toDos, newToDo]);
        //     inputRef.current.value = '';    
        // }
        
    }

    const deleteTodo = (id) => {
        // filter de todos los items al id dado
        setTodos(toDos.filter((item) => item.id !== id ))
    }

    return (
    <div className="flex flex-col gap-2">
        <div className="flex gap-2">
            <input ref={inputRef} type="text" className="bg-[#444] rounded-md p-2"/>
            <button onClick={addToDo} className="rounded-md bg-indigo-600 px-4 py-2">Add to Do</button>
        </div>
        <ul className="flex flex-col gap-2">
            {
                toDos.map((item) =>{
                    return <ListItem 
                    key={item.id} 
                    text={item.name} 
                    onDelete={() => deleteTodo(item.id)}
                    
                    />
                })
            }
        </ul>
    </div>
    
    )
}

export default Todo
import { useEffect, useState } from "react"

function ListItem({text, onDelete}) {
    const {checked, setChecked} = useState(false);

    useEffect(() => {
        // Ejecucion inicio del componente
        console.log("First");
        return () => {
            // Destroy component
            console.log("asdddd");
        }
    }, [])

    useEffect (() => {
        console.log("checked");
    }, [checked])

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <li className={
            `
            flex
            items-center
            justify-between
            rounded-md 
            p-2 
            bg-indigo-800 
            ${checked ? 'text-green-400 line-through' : 'text-white'}
            `
            }>
            <div>
                <input type="checkbox" checked={checked} onChange={handleCheck}/>
                <span>{text}</span>
            </div>

            <button className="bg-red-600 rounded-md p-2 hover:bg-red-800" onClick={onDelete}>Delete</button>
        </li>
    )
}

export default ListItem
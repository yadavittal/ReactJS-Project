import React, { Fragment, useState } from 'react'

const Todo = () => {

    let [input, setInput] = useState("");
    let [task, setTask] = useState([]);

    let inputData = (e) => {
        //  console.log(e.target.value);
        setInput(e.target.value);
    }
    let addTask = (e) => {
        e.preventDefault()
        if (input === "") {
            alert("please enter some task");
        }
        else {
            setTask([...task, input]);
        }
        setInput("");
    }
    // console.log(task);
    let handleDelete = (ind) => {
        let updatedArray = task.filter((value, index) => ind !== index);
        // console.log(task, ' task');
        // console.log(updatedArray, ' updatedArray');
        setTask(updatedArray);

    }
    return (
        <>
        <div className='formContainer'>
            <h1 className='header'>TODO LIST</h1>
            <form className='myForm'>
                <input type="text" name='task' placeholder='enter the text' value={input} onChange={inputData} />
                <button onClick={addTask}>Add Text</button>
            </form>
            {
                task.map((value, index) => {
                    return (
                        <Fragment key={index}>
                            <p>{value}</p>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </Fragment>
                    )
                })
            }
        </div>
        </>
    )
}
export default Todo;
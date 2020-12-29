import React, {useState} from 'react'
import './todo.css'
import {Grid, TextField, Button} from '@material-ui/core/';

function Todo() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([])

    const handleChange= (e) => {
        setTodo(e.target.value)
        // console.log(todo);
    }
    const handleSave = (e) => {
        e.preventDefault();
        if(todo) {
            const newTodo = {id: new Date().getTime().toString(), todo};
            setTodoList([...todoList, newTodo]);
            setTodo('');
        }
        console.log(todoList);
    }
    return (
        <div className="todo">
            <Grid container spacing={2}>
                <Grid item xs="12" sm="6">
                <TextField
                className="text"
                id="todo"
                label='Enter Task'
                value={todo}
                color="primary"
                placeholder="Enter Task"
                onChange={handleChange}
                variant="outlined"
                error={false}
                disabled= {false}
                fullWidth={true}
                />
                </Grid>
                <Grid item xs="12" sm="6">
                <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                </Grid>
            </Grid>
            <div>
            <Grid container >
                <Grid item xs="6" sm="12">

                {
                    todoList.map((todoItem) => {
                        const {id, todo} = todoItem;
                        return(
                            <div key={id}>
                                <h1>
                                    {todo}
                                </h1>
                            </div>
                        )
                    })
                }
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Todo

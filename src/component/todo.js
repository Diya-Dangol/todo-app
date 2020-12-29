import React, {useState} from 'react'
import './todo.css'
import {Grid, TextField,IconButton, Button} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo() {
    // let {showtime} = props.ShowTime;
    const [todo, setTodo] = useState({
        task: '',
        time: "00:00",
        date: new Date(),
        id:''
    });
    const [todoList, setTodoList] = useState([])

    const handleChange= (e) => {
        const {name, value} = e.target;
        setTodo({...todo, [name]: value, id: Date.now()})
    }
    const handleSave = (e) => {
        e.preventDefault();
        if(todo.task && todo.date && todo.time) {
            const newTodo = {...todo, todo};
            setTodoList([...todoList, newTodo]);
            console.log(todoList);
            setTodo({
                task:'',
                time: "00:00",
                date: new Date(),
                id: ''
            });
        }
    }

    const deleteItem = (id) =>{
        const newTodoList= todoList.map(todo =>
          todo.id !== id);
        setTodoList([newTodoList]);  
        setTodo({
            task:'',
            time: "00:00",
            date: new Date(),
            id: ''
        });  
      }

    const ShowTime = () => {
        let newTime = new Date();
        let hour = newTime.getHours();
        let min = newTime.getMinutes();
        let sec = newTime.getSeconds();
        let day_night = "AM";
        if(hour > 12) {
            hour = hour - 12;
            day_night = "PM";
        }
        if(hour == 0){
            hour = 12;
            day_night ="AM";
        }
        
        hour = hour < 10 ? "0" + hour : hour; 
        min = min < 10 ? "0" + min : min; 
        sec = sec < 10 ? "0" + sec : sec; 
        
        let currentTime = hour + ":" + min + " " +day_night; 
    
        // return currentTime;
        setTodo({...todo, time: currentTime}) 
    }

    return (
        <div className="todo">
            <Grid container spacing={1}>
                <Grid item xs="6" sm="3" style={{margin:'15px'}}>
                <TextField
                id="task"
                name="task"
                label='Enter Task'
                value={todo.task}
                color="primary"
                placeholder="Enter Task"
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                error={false}
                disabled= {false}
                fullWidth={true}
                />
                </Grid>
                <Grid item xs="6" sm="3" style={{margin:'15px'}}>
                <form>                    
                    <input type="date"
                    id="date"
                    name="date"
                    value={todo.date}
                    onChange={handleChange}
                    />                    
                </form>
                </Grid> 
                <Grid item xs="6" sm="3" style={{margin:'15px'}}>
                    <form>
                        
                    <input
                    name="time" value={todo.time}
                    onChange={ShowTime}
                    />
                    </form>
                </Grid>                
                <Grid item xs="6" sm="3" style={{margin:'15px'}}>
                <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                </Grid>
            </Grid>
                {
                    todoList.map((todoItem) => {
                        const {id, task, time, date} = todoItem;
                        return(
                            <div key={id} className="tasks">
                                <h1>
                                    {task}
                                </h1>
                                <h3>{date}</h3>
                                <h3>{time}</h3>                       
                                <IconButton aria-label="delete" color="secondary"
                                onClick={deleteItem}
                                >
                                <DeleteIcon />
                                </IconButton>
                            </div>
                        )
                    })
                }                
        </div>
    )
}

export default Todo

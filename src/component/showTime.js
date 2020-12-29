const ShowTime = (props) => {
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

    return currentTime;
    // setTodo({...todo, time: currentTime}) 
}

export default ShowTime;
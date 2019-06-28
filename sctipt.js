setInterval(function(){
let date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes();
let minPointer = document.querySelector('#pointer-minute'),
    hourPointer = document.getElementById('pointer-hour');
console.log(minute);
minPointer.style.transform = `rotate(${6*minute}deg)`;
hourPointer.style.transform = `rotate(${30*hour}deg)`;
}, 100);
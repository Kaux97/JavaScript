function updateTime(){
    const timeElement = document.getElementByld('central');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getHours().toString().padStart(2,'0');
    const second = now.getHours().toString().padStart(2,'0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
    
}

setInterval(updateTime, 1000);
updateTime();
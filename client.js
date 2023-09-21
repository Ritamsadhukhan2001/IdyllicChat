const socket = io('http://localhost:8000');

const from = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");
var audio = new Audio('chat.mp3.mp3');

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message')
    messageElement.classList.add('position')
    messageContainer.append(messageElement);
    if(position== 'left')
    {
        audio.play();
    }
   
}

from.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append('you:${message}','right');
    socket.emit('send',message);
})

const name = prompt("Enter your name to join");
socket.emit('new-user-joined',NamedNodeMap);


socket.on('user-joined', name=>{
append('${name} joined the chat','right')
})

socket.on('receive', data=>{
    append('${data.name}: ${data.user}','left')
})

socket.on('left', name=>{
    append('${name}: left the chat','left')
})


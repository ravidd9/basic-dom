const box = document.getElementById("box")

const enterColor = function(){
    box.style.backgroundColor = "red"
    box.innerHTML = "go away"
}
const leaveColor = function(){
    box.style.backgroundColor = "yellow"
    box.innerHTML = "hover over me"
}
const clickColor = function(){
    box.style.backgroundColor = "#8e44ad"
}
box.onmouseenter = enterColor
box.onmouseleave = leaveColor
box.onclick = clickColor

const list = document.getElementById("list")
const addItem = function(){
    const another = document.createElement("li")
    another.innerHTML = "another one!"
    list.appendChild(another)
}
list.onclick = addItem

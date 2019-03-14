console.log(document)
const playingField = document.getElementById("playing-field")
console.log(playingField)
const down = document.getElementById("down")
console.log(down.innerHTML)
const block = document.getElementById("block")
block.style.backgroundColor = "yellow"
const moveRight = function(){
    let left = parseInt(block.style.left) || 0
    left +=15
    block.style.left = left + "px"
}
const moveLeft = function(){
    let left = parseInt(block.style.left) || 0
    left -=15
    block.style.left = left + "px"
}
const moveDown = function(){
    let top = parseInt(block.style.top) || 0
    top +=15
    block.style.top = top + "px"
}
const moveUp = function(){
    let top = parseInt(block.style.top) || 0
    top -=15
    block.style.top = top + "px"
}
document.getElementById("left").onclick = moveLeft
document.getElementById("right").onclick = moveRight
document.getElementById("up").onclick = moveUp
document.getElementById("down").onclick = moveDown
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        moveUp()
    }
    else if (e.keyCode == '40') {
        // down arrow
        moveDown()
    }
    else if (e.keyCode == '37') {
       // left arrow
       moveLeft()
    }
    else if (e.keyCode == '39') {
       // right arrow
       moveRight()
    }
}



// const header = document.createElement("h1")
// header.innerHTML = "The best game ever!"
// header.style.color = "blue"
// header.style.fontFamily = "Tahoma"
// document.body.appendChild(header)
// header.setAttribute("class", "my-header")

// const subHeader = document.createElement("h2")
// subHeader.innerHTML = "h2 text"
// subHeader.setAttribute("class", "header2")
// document.body.appendChild(subHeader)


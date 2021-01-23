

function searchBlock(seatNo, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < myArray[i].seat_nos.length; j++) {
            if (myArray[i].seat_nos[j] === seatNo)
                return myArray[i].block;
        }
    }
}


function searchRoom_No(block, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].block === block)
            return myArray[i].Room_No;
    }
}


function searchLocation(room_no, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].Room_No === room_no)
            return myArray[i].Location;
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function check(seatno) {
   
    let block = searchBlock(seatno.value, block_seatnumbers);
    let room_no = searchRoom_No(block, block_room);
    let room_location = searchLocation(room_no, rooms);

    const modalBody = document.getElementById("modalBody");
    removeAllChildNodes(modalBody); 

      
    
    let paraBlock = document.createElement("p");
    let nodeBlock = document.createTextNode("Block No : " + block);
    paraBlock.appendChild(nodeBlock);

    let paraRoomNo = document.createElement("p");
    let nodeRoomNo = document.createTextNode("Room No : " + room_no);
    paraRoomNo.appendChild(nodeRoomNo);

    let paraLocation = document.createElement("p");
    let nodeLocation = document.createTextNode("Location : " + room_location);
    paraLocation.appendChild(nodeLocation);

    modalBody.appendChild(paraBlock);
    modalBody.appendChild(paraRoomNo);
    modalBody.appendChild(paraLocation);
    //alert(block + " : " + room_no + " : " + room_location); 
}

//checkButton.addEventListener("click", check(document.getElementById('seatNo')));




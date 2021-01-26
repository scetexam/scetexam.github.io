function searchBlock(date, seatNo, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].date === date) {

            for (let j = 0; j < myArray[i].blocks.length; j++) {
                for (let k = 0; k < myArray[i].blocks[j].seat_nos.length; k++) {
                    if (myArray[i].blocks[j].seat_nos[k] === seatNo)
                        return myArray[i].blocks[j].block;
                }
            }
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

function check(date, seatno) {
    const modalBody = document.getElementById("modalBody");
    removeAllChildNodes(modalBody);
   
    let flagDate = false;
    let flagNum = false;
    if(seatno.length === 7){
        if(seatno.charAt(0) === 'E'){
            if(!isNaN(seatno.substring(1))){
                flagNum = true;
            }
        }

    }

    for (let m = 0; m < dates.length; m++) {
        if (dates[m] === date) {
            flagDate = true;
            break;
        }
    }

    if (!flagDate || !flagNum) {
        let paraError = document.createElement("p");
        let nodeError = document.createTextNode("Entered Data is not Valid !!!");
        paraError.appendChild(nodeError);
        modalBody.appendChild(paraError);
    } else {
        let block = searchBlock(date, seatno, blocks);
        let room_no = searchRoom_No(block, block_room);
        let room_location = searchLocation(room_no, rooms);

        let paraDate = document.createElement("p");
        let nodeDate = document.createTextNode("Date : " + date);
        paraDate.appendChild(nodeDate);

        let paraBlock = document.createElement("p");
        let nodeBlock = document.createTextNode("Block No : " + block);
        paraBlock.appendChild(nodeBlock);

        let paraRoomNo = document.createElement("p");
        let nodeRoomNo = document.createTextNode("Room No : " + room_no);
        paraRoomNo.appendChild(nodeRoomNo);

        let paraLocation = document.createElement("p");
        let nodeLocation = document.createTextNode("Location : " + room_location);
        paraLocation.appendChild(nodeLocation);

        modalBody.appendChild(paraDate);
        modalBody.appendChild(paraBlock);
        modalBody.appendChild(paraRoomNo);
        modalBody.appendChild(paraLocation);
    }


    //alert(block + " : " + room_no + " : " + room_location); 
}
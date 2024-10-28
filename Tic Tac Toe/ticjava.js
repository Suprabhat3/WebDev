let boxes = document.querySelectorAll(".box");
let button = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let ternO = true;
//player X playerO
const winpatterns = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];

const resetgame = () => {
    ternO =true;
 Enboxes();
 msgcontainer.classList.add("hide");
}

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (ternO) {
        box.innerText = "O";
        ternO = false
    } else {
        box.innerText = "X";
        ternO = true;
    }
    box.disabled = true;
    
    CheckWinner("");

    });
 });

const disboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const Enboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {
 msg.innerText = `Congratulation, winner is ${Winner}`;
 msg-msgcontainer.classList.remove ("hide");
 disboxes();
};



  CheckWinner = () => {
    for (pattren of winpatterns) {
        console.log(pattren);
        pos1 = boxes[pattren[0]].innerText;
        pos2 = boxes[pattren[1]].innerText;
        pos3 = boxes[pattren[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {

            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
            }

        }


    }


}
 
newbtn.addEventListener("click", resetgame);
button.addEventListener("click", resetgame);
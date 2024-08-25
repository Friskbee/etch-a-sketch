//Create 16 x 16 grid

const container = document.getElementsByClassName("container")[0];
const squares = document.getElementsByClassName("square");
const sqNumber = document.createElement("input");
sqNumber.setAttribute("type", "number");
sqNumber.setAttribute("min" , 1);
sqNumber.setAttribute("max" , 16);
const resetBtn = document.createElement("button");
const startBtn = document.createElement("button");
const btnDiv = document.createElement("div");
const body = document.body;

const style = document.createElement('style');
style.innerHTML = `
    .button-style {
        padding: .5rem 1.5rem;
        margin-top: .5rem;
        cursor: pointer;
        font-size: 1rem;
    }
`;

resetBtn.classList.add("button-style");
startBtn.classList.add("button-style"); 

startBtn.textContent = "Generate Field";
resetBtn.textContent = "Reset Color";


document.head.appendChild(style);

body.appendChild(btnDiv);
btnDiv.appendChild(startBtn);
btnDiv.appendChild(sqNumber);
btnDiv.appendChild(resetBtn);

btnDiv.style.display = "flex";
btnDiv.style.flexDirection = "column";
btnDiv.style.margin = "1rem";

Array.from(btnDiv.children).forEach(child =>{
    child.style.margin = ".5rem";
});


startBtn.addEventListener("click", ()=>{
    container.innerHTML = "";

    const squareSize = (100 / sqNumber.value);

    
    for (let i = 0; i < sqNumber.value * sqNumber.value; i++) {
        const square = document.createElement("div"); 
        square.classList.add("square"); 
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        container.appendChild(square); 
    }
    Array.from(squares).forEach(square => {
        square.addEventListener("mouseover", ()=>{
            square.style.backgroundColor = "pink";
        })
    });
    
})


resetBtn.addEventListener("click", () =>{
    Array.from(squares).forEach(square => {
            square.style.backgroundColor = "white";
        })

})


/*make the grid appear like a chessboard -> iterate i and j, even rows = even square black and vice versa*/

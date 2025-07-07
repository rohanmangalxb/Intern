let disp = document.querySelector(".display")
const btns = (document.querySelectorAll(".b1"));
disp.innerHTML = "0";
// const opr = (document.querySelector(".operations").children);
let opCol = ['+','-','*','/'];
btns.forEach(e => {
    e.addEventListener("click", ()=>{ 
        let current = disp.innerHTML;
        let val = e.innerHTML;

        if(opCol.includes(val) && opCol.includes(current.slice(-1))){
            disp.innerHTML = current.slice(0, -1) + val;
        }
        else {
            if(disp.innerHTML == "0"){
                disp.innerHTML = "";
            }
            disp.innerHTML += val;
        }
    })
})

document.querySelector(".cl").addEventListener('click', ()=>{
    disp.innerHTML = "0";
})

document.querySelector(".eq").addEventListener('click', () =>{
    try{
        if(disp.innerHTML.slice(-1) == 0 && opCol.includes(disp.innerHTML.slice(-2, -1))){
            throw new Error("Division not possible")
        } else{
            disp.innerHTML = eval(disp.innerHTML);
        }
    }
    catch(Error){
        disp.innerHTML = "0"
        alert(Error)
    }
})
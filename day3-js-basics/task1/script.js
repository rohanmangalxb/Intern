console.log("Welcome!")
let content = document.querySelector(".value");

const cy = 2025, cm = 7;
console.log("Current Year: ", cy)
console.log("Current Month: ", cm)

let by, bm, age;

function getAge(){
    age = Math.floor((cy - by) + ((cm - bm)/12));
    console.log("Age = ", age)
    alert("Your age is: " + age)
}

function updateContent(){
    if(age >= 18){
        content.innerHTML = "Eligible";
    } else {
        content.innerHTML = "Not Eligible";
    }
}

function ageC(){
    console.log("Checking age")
    try{
        by = parseInt(prompt("Enter your Birth Year: "));
        console.log("Birth Year = ", by)
        bm = parseInt(prompt("Enter your Birth Month(in numerical value): "))
        console.log("Birth Month = ", bm)

        if(by > cy || by < 1900){
            throw new Error(`Incorrect Birth Year. It should be in range - (1901 to ${cy})`);
        } else if( bm > 12 || bm < 0){
            throw new Error("Incorrect Birth Month. It should be in range (0 to 12)");
        }

        else{
            getAge();
            updateContent();
            alert(`Your voter status is: ${content.innerHTML}`);
        }
    }
    catch(Error){
        console.log(Error);
        alert(Error);
        return;
    }

}


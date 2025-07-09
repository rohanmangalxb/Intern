const nav = document.querySelector("nav")
let myEmail = "xyz@abc.com"
let form = document.querySelector("form")

let uname, email, message;

document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "rgba(211, 103, 70, 0.57)";
        document.querySelector("svg").classList.remove("hidden")
    } else {
        nav.style.backgroundColor = "rgba(255, 78, 24, 0.8)";
        document.querySelector("svg").classList.add("hidden")

    }
})

document.querySelector("svg").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

function isValidEmail(){
    const eformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return(eformat.test(email));

}

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();

    try {

        uname = document.getElementById("name").value
        email = document.getElementById("email").value
        message = document.getElementById("message").value

        if (uname == "") {
            throw new Error("Enter your name!")
        }
        if (email == "") {
            throw new Error("Enter your email!")
        }

        if(!isValidEmail()){
            throw new FormatError("Incorrect email format!")
        }

        if (message == "") {
            throw new Error("Enter your message!")
        }
        alert("Thank you " + uname + "!, your message was sent! ")
    } catch (err) {
        alert(err)
    } finally {
        let input = `Name: ${uname}\nEmail: ${email}\nMessage: ${message}`;
        addToLocalFile(input);
        form.reset()
    }
})

document.querySelector(".bhome").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // for smooth scroll
    })
})

document.querySelector(".babout").addEventListener("click", () => {
    window.scrollTo({
        top: 831.2,
        behavior: "smooth" // for smooth scroll
    })
})

document.querySelector(".bcontact").addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth" // for smooth scroll
    })
})


function addToLocalFile(input) {
    const oldData = localStorage.getItem(("my_file") || ' ');
    const newData = oldData + '\n\n' + input;

    localStorage.setItem('my_file', newData);
}

function downloadFile() {
    const data = localStorage.getItem('my_file') || '';
    const blob = new Blob([data], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'myFile.txt';
    a.click();
}
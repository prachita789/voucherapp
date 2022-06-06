document.querySelector("form").addEventListener("submit",userData);

let info = JSON.parse(localStorage.getItem("user")) || []

function userData(){
    event.preventDefault();

    let data={
        name:document.querySelector("#name").value,

        email:document.querySelector("#email").value,

        address:document.querySelector("#address").value,

        amount:document.querySelector("#amount").value,

    }

    info.push(data);

    localStorage.setItem("user",JSON.stringify(info));
    

form.reset();
}
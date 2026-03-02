




const getname = document.getElementById("name");
const getemail = document.getElementById("email");

const button = document.getElementById("add");

button.addEventListener("click", (e) =>
{
    //doesnt allow the browser to refresh
    const element = e.preventDefault();
    if (getname.value.trim() === "") {
        return;
    }

    if (getemail.value.trim() === ""){
        return;
    }

//now we get the info from the crud thing on postman
fetch( "https://crudcrud.com/api/7b68edc15a3c495081c0296331db7853/applications", {
    
    method: "POST",
    headers: {
        "content-type":"application/json",
    },
    body: JSON.stringify({
        nome: getname.value,
        email: getemail.value
    }),
})

.then((response) => response.json())
.then((dados) => {
    const li = document.createElement("li");
    li.innerHTML = `${dados.nome}`;
    const ul = document.getElementById("appliedlist");

    const buttonDel = document.createElement("button");
    buttonDel.textContent = "X";
    buttonDel.classList.add("buttonDel");
    buttonDel.addEventListener("click", () => {
        fetch(`https://crudcrud.com/api/7b68edc15a3c495081c0296331db7853/applications/${dados._id}`, {
            method: "DELETE",
        });
        li.remove();
    });

    ul.appendChild(li);
    li.appendChild(buttonDel);


});

});
// Dom selection
// event listener
// basic validation
// append

const name = document.querySelector("#name")
const author = document.querySelector("#author")
const year = document.querySelector("#year")
const bookList = document.querySelector(".bookList");
const add = document.querySelector("button");


add.addEventListener("click",(e)=>{
    e.preventDefault();
    if(name.value =="" && author.value=="" && year.value ==""){
        alert("Please input somthing");
    }

    else{
        const newRow = document.createElement('tr');

        const newName = document.createElement('th');
        newName.innerHTML = name.value;
        newRow.appendChild(newName)


        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor)


        const newYear = document.createElement('th');
        newYear.innerHTML =year.value;
        newRow.appendChild(newYear);


        bookList.appendChild(newRow)
    }
})


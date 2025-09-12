

// const input = document.querySelector("#favchap");
// const button = document.querySelector("button");
// const list = document.querySelector("#list");


// button.addEventListener("click", function () {
  
//   if (input.value.trim() === "") {
//     alert("Please enter a chapter name before adding."); 
//     input.focus(); 
//     return; 
//   }

  
//   const li = document.createElement("li");
//   const deleteButton = document.createElement("button");

//   li.textContent = input.value; 
//   deleteButton.textContent = "❌"; 
//   li.append(deleteButton); 
//   list.append(li); 

//   input.value = "";

  
//   input.focus();
// });


// list.addEventListener("click", function (e) {
//   if (e.target.tagName === "BUTTON") {
//     const li = e.target.parentElement;
//     list.removeChild(li);
//   }
// });


const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");







button.addEventListener("click", function(){
    if (input.value.trim() === "") {
        alert("The entry cannot be blank");
        input.focus();
        return;
    }

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value; 
    deleteButton.textContent = "❌";
    li.appendChild(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        input.focus();

    
    
   
    
   
        
     })

     input.value="";
     input.focus();
    
    



})








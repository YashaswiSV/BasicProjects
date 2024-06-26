let input=document.getElementById("inp");
let text=document.getElementById("text");

function Add(){
    if(input.value==""){
        alert("Enter an item");
    }
    else{ const newEl=document.createElement("ul");
        newEl.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i> `;
        text.appendChild(newEl);
        input.value="";
        newEl.querySelector("i").addEventListener("click", remove)
    
         function remove(){
             newEl.remove();
         }
        }
   
}




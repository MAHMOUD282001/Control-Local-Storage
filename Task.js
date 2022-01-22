let theInput = document.getElementById("the-input");

let results = document.querySelector(".results > span");

let allSpans = document.querySelectorAll(".buttons span");

allSpans.forEach(span =>{
    
    span.addEventListener("click", function(e){
        
        if(e.target.classList.contains("check-item")){
            
            checkItem();
            
        }
        
        if(e.target.classList.contains("check-item")){
            
            checkItem();
            
        }
        
        if(e.target.classList.contains("add-item")){
            
            addItem();
            
        }
        
        if(e.target.classList.contains("delete-item")){
            
            deleteItem();
            
        }
        
        if(e.target.classList.contains("show-items")){
            
            showItems();
            
        }
    })
})


function checkInput(){
    
    if(theInput.value == ''){
        results.innerHTML = "Input Can't Be Empty"
    }
}



function checkItem(){
    
    if(theInput.value != ''){
        if(localStorage.getItem(theInput.value)){
            
            results.innerHTML = `Found Local Storage Item Called <span> ${theInput.value} <span>`;
            
        }
        
        else{
            
            results.innerHTML = `Not Found Local Storage Item Called <span> ${theInput.value} <span>`;
            
            
        }
    }
    else{
        checkInput();
    }
}


function addItem(){
    if(theInput.value != ''){
    
        localStorage.setItem(theInput.value, "Test");
        
        results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
        
        theInput.value = '';
    }
    else{
        checkInput();
    }
}

function deleteItem(){
    if(theInput.value != ''){
        if(localStorage.getItem(theInput.value)){
            
            localStorage.removeItem(theInput.value)
            
            results.innerHTML = `Local Storage Item Called <span> ${theInput.value} <span> Deleted`;
            
            theInput.value = '';
            
        }
        
        else{
            
            results.innerHTML = `Not Found Local Storage Item Called <span> ${theInput.value} <span>`;
            
        }
}
else{
    checkInput();
}
}

function showItems(){

    if(localStorage.length){
    
        results.innerHTML = '';
        
        for(let [key, value] of Object.entries(localStorage)){
        
            results.innerHTML += `<span class = "keys">${key}</span>`
            
        }
    }
    else{
    
        results.innerHTML = `Local Storage Is Empty`
    }
}


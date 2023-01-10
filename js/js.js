/*
student tasks
[1] use swet alert if Empty input puple

*/ 

// swal("Please Enter The Tasks!");




let lA;

let theInput = document.querySelector(".add-task input");

let theAddButton=document.querySelector(".add-task  .plus");

let tasksContainer=document.querySelector(".tasks-content");

let noTasksMsg=document.querySelector(".no-tasks-message");

let countTask=document.querySelector(".tasks-count span");
let tasksCompeted=document.querySelector(".tasks-complete span");


// foucks on input field on load 

let ArrayTasks=[];
window.onload = function(){
    theInput.focus();
}

// adding the tasks 
theAddButton.onclick = function(){

    // if input is Empty
    if(theInput.value===""){
        console.log("the empty")
        swal("Please Enter The Tasks!:", {
            content: "input",
          }).then((value)=>{
            theInput.value=value;
          });
          theInput.focus();
    }else{
        // remove No tasks message
        noTasksMsg.remove();

        // create span element
        let newValue= theInput.value;
        let mainspan = document.createElement("span");


        // create Delete Buttons
        let DeleteElement=document.createElement("span")

        // creatte text  to span
        let text = document.createTextNode(theInput.value);
        // add text  to  delet button span
        let deltetext = document.createTextNode("delete");

        // add text to span
        mainspan.appendChild(text);
        // add class to span
        mainspan.className="task-box";
        // check the same name value input
        
        
        // add text to  delet button span  
        DeleteElement.appendChild(deltetext);
        DeleteElement.className="delete";
        // add delete buttons to Main span
        mainspan.appendChild(DeleteElement);
        // add Mainspan tasks to container
        tasksContainer.appendChild(mainspan);
        let a =0;
        if(ArrayTasks.length==0){}else{
            
            ArrayTasks.forEach((e) => {

            // console.log(e===newValue);
            if(e===newValue){
                mainspan.remove();
                swal("This Task Add Before!");
                a=1;
                theInput.focus();
                // mainspan.remove();
                console.log("is removed");
            }else{
            
            }
        });}
        ArrayTasks.push(theInput.value);
        if(a===1){
            ArrayTasks.pop();
        }
            console.log(ArrayTasks);

        theInput.value='';
        theInput.focus();
        lA=ArrayTasks.length;
        numTask(lA);
        // let taskArray=ArrayTasks;
        
    }




};
let com=0;
document.addEventListener("click",function(e){

    if(e.target.className=="delete"){
        // remove task
        e.target.parentNode.remove();
        countTask.innerHTML=parseInt(countTask.innerHTML-1);
    }

    if(e.target.classList.contains("task-box")){
        // remove task
        e.target.classList.toggle("finished");
        let completeA = Array.from(document.querySelectorAll(".finished"))
        tasksCompeted.innerHTML =  completeA.length ;
    }
}
);


function numTask(Al){
    countTask.innerHTML=Al;
}








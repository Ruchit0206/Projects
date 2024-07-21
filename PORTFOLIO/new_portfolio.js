let mode=document.querySelector(".top-btn1")
let body=document.querySelector("#outer-exp");
let  currMode="light";
body.classList.add("default");
mode.addEventListener("click",()=>{
    if(currMode=="light")
    {
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("white","default");

    }
    else
    {
        currMode="light";
        body.classList.add("white");
        body.classList.remove("dark","default");


    }
    console.log(currMode);
})
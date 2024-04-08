let _modalContainer=document.getElementById("modalContainer");
let _maybelater=document.getElementById("maybelaterBtn");

window.onload=async()=>{
    await setTimeout(()=>{
        _modalContainer.style.display="flex"
        document.body.style.overflowY="hidden";
    },1000)
}

_maybelater.addEventListener("click",(ev)=>{
    _modalContainer.style.display="none"
    document.body.style.overflowY="scroll"
})


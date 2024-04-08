let _modalContainer=document.getElementById("modalContainer");
let _maybelater=document.getElementById("maybelaterBtn");

window.onload=async()=>{
    await setTimeout(()=>{
        _modalContainer.style.display="flex"
    },10)
}

_maybelater.addEventListener("click",(ev)=>{
    _modalContainer.style.display="none"
})


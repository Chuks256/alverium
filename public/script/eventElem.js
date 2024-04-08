// script for catching event clicks 
// enrollment scripte 
let _cancel=document.getElementById("cancelBtn")
let _enrollMentTemplate=document.getElementById("enrollUserSection");
let _hero_enro_btn=document.getElementById("hero_enroll_btn")
let _modal_enroll_now=document.getElementById("modal_enroll_now");
//  cancel enrollment form 
_cancel.addEventListener("click",()=>{
_enrollMentTemplate.style.display="none"
})


//  display enrolment form 
_hero_enro_btn.addEventListener("click",()=>{
    _enrollMentTemplate.style.display="flex"
})

//  close initial modal box if enrolment box is openned 
_modal_enroll_now.addEventListener("click",()=>{
    document.getElementById("modalContainer").style.display="none";
    _enrollMentTemplate.style.display="flex"
})



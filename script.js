const fname=document.querySelector("input[name=fname]");
const lname=document.querySelector("input[name=lname]");
const submitBtn=document.querySelector("input[type=submit]");
submitBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	getFormvalue();
})
function getFormvalue() {
    //Write your code here
    alert(`${fname.value} ${lname.value}`);
}


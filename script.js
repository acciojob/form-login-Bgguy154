const fname=document.querySelector("input[name=fname]");
const lname=document.queryselector("input[name=lname]");
const submitBtn=document.querySelector("input[type=submit]");
submitBtn.addEventListener('click',(e)=>{
	e.preventdefault();
	getFormvalue();
})
function getFormvalue() {
    //Write your code here
    alert(${fname},${lname});
}


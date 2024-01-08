document.getElementById("form").addEventListener("submit",x=>{
    x.preventDefault();
    redirect_form();
})
function redirect_form(){
    window.open("../html/form.html");
}
document.getElementById("form").addEventListener("submit",x=>{
    x.preventDefault();
    redirect_index();
})
function redirect_index(){
    window.open("../html/index.html");
}

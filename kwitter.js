function Iniciar_sesion()
{
var usuario=document.getElementById("user_name").value;
localStorage.setItem("usuario", usuario);
window.location="kwitter_room.html";
}
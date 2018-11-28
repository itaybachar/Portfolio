var button = document.getElementById("snip1");
var expanded = false;
var theDiv = document.getElementById("code");

var content = "<p class='info' >AHRIUEHE IAUDNIWAND IUANDIWUA NDUAINW UWIAN DUIWAND IUWANDUI NAWDUIN AWIUDN IWUAND IUAWNDUIANDIUANDIUADNIUAWNDAIWUDNWAIUDN N AI NIW ND IAUND I awd</p>";
button.addEventListener("click",function(){
    if(!expanded){
       // document.getElementById("code").innerHTML = "Argg";
         theDiv.innerHTML = content;
         expanded = true;
    } else {
        theDiv.innerHTML = "";
        expanded = false;
    }
});
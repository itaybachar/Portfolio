var expandButton = document.querySelector("button");
var expanded = false;
var theDiv = document.getElementById("project");
var content = document.createElement('p');
content += "AHRIUEHE IAUDNIWAND IUANDIWUA NDUAINW UWIAN DUIWAND IUWANDUI NAWDUIN AWIUDN IWUAND IUAWNDUIANDIUANDIUADNIUAWNDAIWUDNWAIUDN N AI NIW ND IAUND I awd";
expandButton.addEventListener("click",function(){
    if(!expanded){

        theDiv.appendChild(content);
    }
});
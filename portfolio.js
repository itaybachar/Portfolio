var gifSrc = "res/smile.jpg"
var projName = "Project Name";
var projDesc = " Description....";
var projCodeId = "code";
var buttonId = "buttonID";
var customProject = "<div class='project'><div class='horizontal'><img src='" + gifSrc + "'><div><h4>" +projName + "</h4><p class='projectDesc'>" +projDesc + "</p></div></div><div id='" +projCodeId +"'></div><button id='"+buttonId+ "' class='codeSnip'><span>Code Snippet</span></button></div>";

//Populate <projects> div
function loadProjects(){
    var projSection = document.querySelector("projects");

    for(var i = 0; i<5;i++){
        projSection.innerHTML += customProject;
    }
}


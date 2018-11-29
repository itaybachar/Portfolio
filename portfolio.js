
class Project {
    constructor(projectName, projectDescription, codeSnippet, mediaAddress, githubLink){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.codeSnippet = codeSnippet;
        this.mediaAddress = mediaAddress;
        this.githubLink = githubLink;
    }
}

var projectDataLoc = "projectData.json";
var projects = [];

function addListener(id){
    var codeDivId = "code"+id;
    var codeDiv = document.getElementById(codeDivId);

    if(codeDiv.innerHTML === ""){
        codeDiv.innerHTML = "<code>" + projects[id].codeSnippet + "</code>";
    }else {
        codeDiv.innerHTML = "";
    }
}   

//Populate <projects> div
function loadProjects(){
    //Load JSON file
    var data = JSON.parse(projectData);
    //Create array from the JSON
    var projectAmount = Object.keys(data).length;
   
    for(var i = 0; i< projectAmount; i++){
        projects.push(new Project(data[i].projectName,data[i].projectDescription,data[i].codeSnippet,data[i].mediaAddress,data[i].githubLink));
    }
    
    //Populate the section
    var projSection = document.querySelector("projects");
    for(var i = 0; i<projects.length;i++){
        var codeDivId = "code"+i;
        var snippetButtonId =i;
        var customProject = "<div class='project'><div class='horizontal'><img src='" + projects[i].mediaAddress + "'><div><h4>" +projects[i].projectName + "</h4><p class='projectDesc'>" +projects[i].projectDescription + "</p></div></div><div id='" +codeDivId+"' class='code'></div><button id='"+snippetButtonId+ "' class='codeSnip' onclick='addListener(this.id)'><span>Code Snippet</span></button></div>";
        //Inject Project into html
        projSection.innerHTML += customProject;
    }
}







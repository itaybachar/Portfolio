var projectDataLoc = "projectData.json";
var projects = [];
var projectAmount;

function addListener(id){
    var codeDivId = "code"+id;
    var codeDiv = document.getElementById(codeDivId);
    if(codeDiv.innerHTML.length == 0){
        closeAllCodeSnippets();
        var pre = document.createElement('pre');
        pre.className = "prettyprint linenums";
        pre.innerHTML = PR.prettyPrintOne(projects[id].codeSnippet, 'java', true);
        codeDiv.appendChild(pre);
        document.getElementById(id).innerText = "Hide Code Snippet";
    } else {
        codeDiv.innerHTML ="";
        document.getElementById(id).innerText = "Show Code Snippet";
    }
    
}

function closeAllCodeSnippets(){
    for(var i = 0; i<projectAmount;i++){
        var codeDivId = "code"+i;
        var codeDiv = document.getElementById(codeDivId);
        
        if(codeDiv.innerHTML.length != 0){
            codeDiv.innerHTML = "";
            document.getElementById(i).innerText = "Show Code Snippet";
        }
        
    }
}

//Populate <projects> div
function loadProjects(){
    //Load JSON file
    var data = JSON.parse(projectData);
    //Create array from the JSON
    projectAmount = Object.keys(data).length;
    
    for(var i = 0; i< projectAmount; i++){
        projects.push(new Project(data[i].projectName,data[i].projectDescription,codeSnippets[i],data[i].mediaAddress,data[i].githubLink));
    }
    
    //Populate the section
    var projSection = document.querySelector("projects");
    for(var i = 0; i<projects.length;i++){
        var codeDivId = "code"+i;
        var snippetButtonId =i;
        var customProject = "<div class='project'><div class='horizontal'><img src='" + projects[i].mediaAddress + "'><div><h4>" +projects[i].projectName + "</h4><p class='projectDesc'>" +projects[i].projectDescription + "</p></div></div><div id='"+codeDivId+"'></div><button id='"+snippetButtonId+ "' class='codeSnip' onclick='addListener(this.id)'><span>Show Code Snippet</span></button></div>";
        //Inject Project into html
        projSection.innerHTML += customProject;
    }
}







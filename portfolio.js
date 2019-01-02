var projectDataLoc = "projectData.json";
var projects = [];
var projectAmount;
var is_mobile = false;
var navOpen = false;
$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    
    if (isMobile.matches) {
        is_mobile = true;
    }
});

function collapseOther(id){
    sleep(50).then(() => {        
        if(document.getElementById(id).innerText === "Show Code Snippet"){
            document.getElementById(id).innerText = "Hide Code Snippet"
        } else {document.getElementById(id).innerText = "Show Code Snippet"}
        for(var i = 0; i<projectAmount; i++){
            var codeDivId = "code"+i;
            
            if(i != id){
                document.getElementById(codeDivId).className = "collapse";
                document.getElementById(i).innerText = "Show Code Snippet";
            }
        }
    });
}

//Populate <projects> div
function loadProjects(){
    
    //Setup about me section:
    document.getElementById("aboutMe").innerText= aboutMe;
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
        var mediaCode;
        if(projects[i].mediaAddress.includes(".mp4")){
            mediaCode = `<video class='prev' controls src="`+projects[i].mediaAddress+`" ></video>`;
        }else {
            mediaCode = `<img src='`+projects[i].mediaAddress+`'>`;
        }
       
        
        var customProject = `<div class='project'><div class='horizontal'>
        <div class='vertical'>
        ` + mediaCode + `
        <a target='_blank' rel='noopener noreferrer' href='`+projects[i].githubLink+`'>
        <img class='github' src='res/githubLogo.png' >
        </a>
        </div>
        <div><h4>` +projects[i].projectName + `
        </h4><p class='projectDesc'>` +projects[i].projectDescription + `</p>
        </div></div><div id='`+codeDivId+`' class='collapse out'>
        <pre class='prettyprint linenums'>`+projects[i].codeSnippet+`</pre>
        </div>
        <button id='`+snippetButtonId+ `' class='codeSnip' data-toggle='collapse' data-target='#`+codeDivId+`' onclick='collapseOther(this.id)'>
        <span>Show Code Snippet</span></button></div>`;
        
        //Inject Project into html
        projSection.innerHTML += customProject;
    }
}
//Animate goto!
$("#topNav").on('click', function(e) {
    if(navOpen && is_mobile){
        $('#navbar').collapse("hide");
       
    }
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#top").offset().top - 200
    }, 200);
});

$("#aboutNav").on('click', function(e) {
    e.preventDefault();
    if(!is_mobile){
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top - 170
        }, 200);
    }else {
        $('#navbar').collapse("hide");
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top - 330
        }, 200);
    }
});

$("#projectsNav").on('click', function(e) {
    e.preventDefault();
    if(!is_mobile){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 145
        }, 200);
    }else{
        $('#navbar').collapse("hide");
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 220
        }, 200);
    }
});

$("#contactNav").on('click', function(e) {
    e.preventDefault();
    if(!is_mobile){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 170
        }, 200);
    } else{
        $('#navbar').collapse("hide");
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 200);
    }
});

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

$('#navbar').on('shown.bs.collapse', function () {
   navOpen = true;
 });

 $('#navbar').on('hidden.bs.collapse', function () {
    navOpen = false;
 });








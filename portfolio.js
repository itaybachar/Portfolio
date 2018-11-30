var projectDataLoc = "projectData.json";
var projects = [];
var projectAmount;
var is_mobile = false;

$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
        is_mobile = true;
    }
 });

function collapseOther(id){
    for(var i = 0; i<projectAmount; i++){
        var codeDivId = "code"+i;
        document.getElementById(codeDivId).className = "collapse";
    }
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

        var customProject = `<div class='project'><div class='horizontal'>
        <img src='` + projects[i].mediaAddress + `'>
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
    if(window.display)
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
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
         }, 200);
    }
 });






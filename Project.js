class Project {
    constructor(projectName, projectDescription, codeSnippet, mediaAddress, githubLink){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.codeSnippet = codeSnippet;
        this.mediaAddress = mediaAddress;
        this.githubLink = githubLink;
        this.codeSnippet.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
}
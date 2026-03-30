//--Header Section Navigating--//

//function for scroll when click name that in top right corner
document.getElementById("goOverview").addEventListener("click", function () {
document.getElementById("overview").scrollIntoView({
behavior: "smooth"
});
});



//function for scroll when click about button
function goToAbout(){
        document.getElementById("about").scrollIntoView({
                behavior:"smooth"
        });
}

//function for scroll when click education button
function gotToEducation(){
        document.getElementById("education").scrollIntoView({
                behavior:"smooth"
        });
}
//function for scroll when click project button
function goToProject(){
        document.getElementById("project").scrollIntoView({
                behavior: "smooth"
        });
}

//function for scroll when click publication button
function goToPublications(){
        document.getElementById("publications").scrollIntoView({
                behavior:"smooth"
        });
}

//function for scroll when click contact button
function goToContact(){
        document.getElementById("contact").scrollIntoView({
                behavior:"smooth"
        });
}       

//function for scroll when click skill button
function goToSkills(){
        document.getElementById("skill").scrollIntoView({
                behavior:"smooth"
        });
}

//function for scroll when click download button
function goToDownloads(){
        document.getElementById("downloads").scrollIntoView({
                behavior:"smooth"
        });
}


//--Project Section--Dropdown//
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
card.addEventListener("click", () => {

        // Close others (optional)
        cards.forEach(c => {
        if (c !== card) c.classList.remove("active");
        });

        // Toggle clicked one
        card.classList.toggle("active");
});
});





//--Publication Section--Dropdown//
const pub_cards = document.querySelectorAll(".publication-card");

pub_cards.forEach(card =>{
card.addEventListener("click", () => {

        // Close others (optional)
        pub_cards.forEach(c => {
        if (c !== card) c.classList.remove("active");
        });    
        
        // Toggle clicked one
        card.classList.toggle("active");
})
});
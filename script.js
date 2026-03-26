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
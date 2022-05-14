//Default comments to be loaded
let comments = [
    {
        name: "Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
        date: "02/17/2021"
        
    }, 
    {
        name: "Emilie Beach",
        comment: "I feel blessed to have seeen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "01/09/2021"
        
    },
    {
        name: "Miles Acosta",
        comment: "I can't stop listening. Every time i hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "12/20/2020"
        
    }
];



//hardcoding default comments using DOM
let container = document.querySelector(".comment");
for(let i = 0; i < comments.length; i++){
    //adding the avatar
    let avatar = document.createElement("img");
    avatar.setAttribute("class", "comment__avatar");
    container.appendChild(avatar);

    //adding the div which will make styling with flex easier
    container.appendChild(document.createElement("div"));

    //adding the name of the person who commented
    let name = document.createElement("h3");
    name.setAttribute("class", "comment__name");
    name.innerHTML = comments[i].name;
    container.appendChild(name);

    //adding the date the comment was made
    let date = document.createElement("h4");
    date.setAttribute("class", "comment__date");
    date.innerHTML = comments[i].date;
    container.appendChild(date);

    //adding the content of the comment
    let text = document.createElement("p");
    text.setAttribute("class", "comment__text");
    text.innerHTML = comments[i].comment;
    container.appendChild(text);


}

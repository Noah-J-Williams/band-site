//Default comments to be loaded
let key = "0c38eeb1-7333-4431-96e6-05e3c792fb4d";

function getComments(){
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${key}`)
    .then(result => {
        let comments = [];
        for(let i = 0; i < result.data.length; i++){
            comments[i] = result.data[i];
        }
        comments.sort((a, b) => {
            return b.timestamp - a.timestamp;
        })
        loadComments(comments);
    })
    .catch(result => console.log(result));
}

//hardcoding default comments using DOM
function loadComments(comments){
    let container = document.querySelector(".target");
    for(let i = 0; i < comments.length; i++){
        //adding the div which will make styling with flex easier
        let div = document.createElement("div");
        div.setAttribute("class", "comment__holder")
        container.appendChild(div);
    
        //adding avatar
        let avatar = document.createElement("img");
        avatar.setAttribute("class", "comment__avatar-loaded");
        div.appendChild(avatar);
        //adding the name of the person who commented
        let name = document.createElement("h4");
        name.setAttribute("class", "comment__name");
        name.innerHTML = comments[i].name;
        div.appendChild(name);
    
        //adding the date the comment was made
        let date = document.createElement("h4");
        date.setAttribute("class", "comment__date");
        let unString = Number(comments[i].timestamp);
        date.innerHTML = new Date(unString);
        div.appendChild(date);
    
        //adding the content of the comment
        let text = document.createElement("p");
        text.setAttribute("class", "comment__text");
        text.innerHTML = comments[i].comment;
        div.appendChild(text);
    }
}

//function reloadComments which 
function reloadComments() {
    let target = document.querySelector(".target");
    target.innerHTML = "";
    getComments();
}

getComments();

let submit = document.querySelector("#commentForm");
submit.addEventListener("submit", (event) => {
    event.preventDefault();
    axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${key}`, {
        name: event.target.name.value,
        comment: event.target.comment.value
    })
    .then(result => reloadComments())
    .catch(result => console.log(result));
    submit.reset();
    
});
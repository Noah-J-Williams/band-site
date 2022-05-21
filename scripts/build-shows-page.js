let key = "0c38eeb1-7333-4431-96e6-05e3c792fb4d";

axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${key}`)
.then(result => {
    let shows = [];
    for(let i = 0; i < result.data.length; i++){
        shows[i] = result.data[i];
    }
    renderShows(shows);
})
.catch(result => console.log(result));


let page = document.querySelector(".shows");
function renderShows(shows){
    for(let i = 0; i < shows.length; i++) {
        let holder = document.createElement("div");
        holder.setAttribute("class", "shows-holder");
        page.appendChild(holder);

        let dateTag = document.createElement("p");
        dateTag.innerHTML = "DATE";
        dateTag.setAttribute("class", "shows-holder__info");
        holder.appendChild(dateTag);

        let unString = Number(shows[i].date);
        let date = document.createElement("h3");
        date.innerHTML = new Date(unString);
        date.setAttribute("class", "shows-holder__date");
        holder.appendChild(date);

        let venueTag = document.createElement("p");
        venueTag.innerHTML = "VENUE";
        venueTag.setAttribute("class", "shows-holder__info");
        holder.appendChild(venueTag);

        let venue = document.createElement("p");
        venue.innerHTML = shows[i].place;
        venue.setAttribute("class", "shows-holder__text");
        holder.appendChild(venue);

        let locationTag = document.createElement("p");
        locationTag.innerHTML = "LOCATION";
        locationTag.setAttribute("class", "shows-holder__info");
        holder.appendChild(locationTag);

        let location = document.createElement("p");
        location.innerHTML = shows[i].location;
        location.setAttribute("class", "shows-holder__text");
        holder.appendChild(location);

        let button = document.createElement("button");
        button.innerHTML = "BUY TICKETS";
        button.setAttribute("class", "shows-holder__button");
        holder.appendChild(button);
    }
}
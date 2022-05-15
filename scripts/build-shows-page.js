let shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
];

let page = document.querySelector(".shows");
for(let i = 0; i < shows.length; i++) {
    let holder = document.createElement("div");
    holder.setAttribute("class", "shows-holder");
    page.appendChild(holder);

    let dateTag = document.createElement("p");
    dateTag.innerHTML = "DATE";
    dateTag.setAttribute("class", "shows-holder__info");
    holder.appendChild(dateTag);

    let date = document.createElement("h3");
    date.innerHTML = shows[i].date;
    date.setAttribute("class", "shows-holder__date");
    holder.appendChild(date);

    let venueTag = document.createElement("p");
    venueTag.innerHTML = "VENUE";
    venueTag.setAttribute("class", "shows-holder__info");
    holder.appendChild(venueTag);

    let venue = document.createElement("p");
    venue.innerHTML = shows[i].venue;
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
const subscriptionsSections = document.querySelector("#contents.style-scope.ytd-section-list-renderer")

// Simply getting all authors inside array
// let allAuthors = document.querySelectorAll(".yt-simple-endpoint.style-scope.yt-formatted-string")
// const result = [];
// for (let i = 0; i < allAuthors.length; i++) {
//     result.push(allAuthors[i].textContent);
// }

function askAuthor() {
    let youtubeVideoAuthor = prompt("Enter Author?")
    let deleteAuthorVideos = confirm("Do you want to delete author videos?")

    if (deleteAuthorVideos) {
        deleteThisAuthorVideos(youtubeVideoAuthor)
    } else {
        deleteOtherAuthorVideos(youtubeVideoAuthor)
    }
}

function deleteThisAuthorVideos(author) {
    let selected = document.querySelectorAll("#items .style-scope.ytd-grid-renderer")

    selected.forEach(function(item) {
        if (item.querySelector(".yt-simple-endpoint.style-scope.yt-formatted-string").textContent === author) {
            item.remove()
        }
    })    
}

function deleteOtherAuthorVideos(author) {
    let selected = document.querySelectorAll("#items .style-scope.ytd-grid-renderer")

    selected.forEach(function(item) {
        if (item.querySelector(".yt-simple-endpoint.style-scope.yt-formatted-string").textContent !== author) {
            item.remove()
        }
    })  
}


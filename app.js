const subscriptionsSections = document.querySelector("#contents.style-scope.ytd-section-list-renderer")

// Simply getting all authors inside array
// let allAuthors = document.querySelectorAll(".yt-simple-endpoint.style-scope.yt-formatted-string")
// const result = [];
// for (let i = 0; i < allAuthors.length; i++) {
//     result.push(allAuthors[i].textContent);
// }

function ask() {
    let youtubeVideoAuthor = prompt("Enter Author?")

    deleteVideo(youtubeVideoAuthor)
}

function deleteVideo(author) {
    let selected = document.querySelectorAll("#items .style-scope.ytd-grid-renderer")

    selected.forEach(function(item) {
        // console.log(item.querySelector(".yt-simple-endpoint.style-scope.yt-formatted-string").textContent)
        if (item.querySelector(".yt-simple-endpoint.style-scope.yt-formatted-string").textContent === author) {
            item.remove()
        }
    })    
}


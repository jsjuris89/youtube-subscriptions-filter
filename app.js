// Video Author
function askAuthor() {
    let youtubeVideoAuthor = prompt("Enter Author?")
    let deleteAuthorVideos = confirm("Do you want to delete author videos?")

    if (deleteAuthorVideos) {
        deleteMultipleAuthorVideos(youtubeVideoAuthor)
    } else {
        deleteOtherAuthorVideos(youtubeVideoAuthor)
    }
}


function deleteMultipleAuthorVideos(author) {
    let selected = document.querySelectorAll("#items .style-scope.ytd-grid-renderer")

    let allAuthors = author.split(", ")

    selected.forEach(function (item) {
        let textContent = item.querySelector(".yt-simple-endpoint.style-scope.yt-formatted-string").textContent;

        for (let i = 0; i < allAuthors.length; i++) {
            if (textContent == allAuthors[i]) {
                item.remove()
            }
        }  
    })
}

function deleteOtherAuthorVideos(author) {
    let selected = document.querySelectorAll("#items .style-scope.ytd-grid-renderer")

    selected.forEach(function (item) {
        if (item.querySelector(".yt-simple-endpoint.style-scope.yt-formatted-string").textContent !== author) {
            item.remove()
        }
    })
}


// part where you can differentiate between shorts or regular videos
// let container = document.querySelectorAll("#items .style-scope.ytd-grid-renderer")

// container.forEach(function(item) {
//     let thumbnail = item.querySelector("#overlays .style-scope.ytd-thumbnail")
//     console.log(thumbnail);
//     console.log(thumbnail.getAttribute("overlay-style"))
// })    


// SHORTS
function askShorts() {
    let deleteShorts = confirm("Do you want to delete shorts?")

    if (deleteShorts) {
        deleteShortsVideos()
    } else {
        keepShortsVideos()
    }
}

function deleteShortsVideos() {
    let container = document.querySelectorAll("#items .style-scope.ytd-grid-renderer")

    container.forEach(function (item) {
        let thumbnail = item.querySelector("#overlays .style-scope.ytd-thumbnail")
        let attributeValue = thumbnail.getAttribute("overlay-style")

        if (attributeValue === "SHORTS") {
            item.remove()
        }
    })
}

function keepShortsVideos() {
    let container = document.querySelectorAll("#items .style-scope.ytd-grid-renderer")

    container.forEach(function (item) {
        let thumbnail = item.querySelector("#overlays .style-scope.ytd-thumbnail")
        let attributeValue = thumbnail.getAttribute("overlay-style")

        if (attributeValue !== "SHORTS") {
            item.remove()
        }
    })

}
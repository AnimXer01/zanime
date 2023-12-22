function toggleLike(videoId) {
    var img = document.getElementById("favoriteImg");
    console.log(videoId);
    if (img.src.match("favorite_white.png")) {
        addToFavorites(videoId);
        img.src = "/storage/favorite_red.png";
    } else {
        removeFromFavorites(videoId);
        img.src = "/storage/favorite_white.png";
    }
}

function addToFavorites(videoId) {
    fetch(`/videos/${videoId}/add-to-favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": getCSRFToken(),
        },
        body: JSON.stringify({}),
    })
        .then((response) => {})
        .catch((error) => {
            console.error("Error:", error);
        });
}

function removeFromFavorites(videoId) {
    fetch(`/videos/${videoId}/remove-from-favorites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": getCSRFToken(),
        },
        body: JSON.stringify({}),
    })
        .then((response) => {})
        .catch((error) => {
            console.error("Error:", error);
        });
}

function getCSRFToken() {
    return document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
}

document.addEventListener("DOMContentLoaded", function () {
    var img = document.getElementById("favoriteImg");
    var videoId = "$video['id']";
    fetch(`/videos/${1}/check-favorite-status`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.isFavorite);
            if (data.isFavorite) {
                img.src = "/storage/favorite_red.png";
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

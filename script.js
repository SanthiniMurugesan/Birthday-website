function showMessage() {
    const surprise = document.getElementById("surprise");

    if (surprise.style.display === "block") {
        surprise.style.display = "none";
    } else {
        surprise.style.display = "block";
    }
}

var images = [
    {
        src: "./imgs/sometimes.webp",
        alt: "sometimes.webp",
        info: "sometimes.webp 3840x2160"
    },
    {
        src: "./imgs/arch.webp",
        alt: "arch.webp",
        info: "arch.webp 3840x2160"
    },
    {
        src: "./imgs/smile.webp",
        alt: "smile.webp",
        info: "smile.webp 3840x2160"
    },
    {
        src: "./imgs/frown.webp",
        alt: "frown.webp",
        info: "frown.webp 3840x2160"
    }
];

function addImagesToGallery(images) {
    var gallery = document.getElementById("gallery");
    images.forEach(function(image) {
        var imgDiv = document.createElement("div");
        imgDiv.classList.add("img");

        var img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        var infoDiv = document.createElement("div");
        infoDiv.classList.add("info");
        infoDiv.textContent = image.info;

        imgDiv.appendChild(img);
        imgDiv.appendChild(infoDiv);
        gallery.appendChild(imgDiv);
    });
}

window.addEventListener("load", function() {
    addImagesToGallery(images);
});
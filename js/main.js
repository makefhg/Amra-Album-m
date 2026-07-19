function openImage(src){

    let viewer = document.getElementById("image-viewer");
    let image = document.getElementById("big-image");

    viewer.style.display="flex";

    image.src=src;

}


document.getElementById("close-viewer").onclick=function(){

    document.getElementById("image-viewer").style.display="none";

};

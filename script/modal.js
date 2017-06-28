// Getting the modal
var modal = document.getElementById('myModal');

// Deploying the image to the modal and getting "alt" attribute as caption
var img1 = document.getElementById('pan');
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img2 = document.getElementById('mobile');
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img3 = document.getElementById('caret');
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");


// close <span> for the modal
var span = document.getElementsByClassName("close")[0];
// Clicking on (x) <span> to close the modal
span.onclick = function() {
    modal.style.display = "none";
}
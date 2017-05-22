// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var link = document.getElementById('imgLink');
var img2 = document.getElementById('myImg2');
var link2 = document.getElementById('imgLink2');
var img3 = document.getElementById('myImg3');
var link3 = document.getElementById('imgLink3');
var img4 = document.getElementById('myImg4');
var link4 = document.getElementById('imgLink4');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
link.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}
link2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img2.src;
    captionText.innerHTML = img2.alt;
}
link3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img3.src;
    captionText.innerHTML = img3.alt;
}
link4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img4.src;
    captionText.innerHTML = img4.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
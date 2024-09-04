function enlargeImage(src) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;

    // Get the caption text (optional)
   // var captionText = document.getElementById("caption");
   // captionText.innerHTML = "Your Image Caption Here"; // Change this as needed

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}

//
//function showSmallBusiness() {
 //   document.getElementById("smallBusinessWork").style.display = "flex";
 //   document.getElementById("premiumDesign").style.display = "none";
//}

//function showPremiumDesign() {
 //   document.getElementById("smallBusinessWork").style.display = "none";
  //  document.getElementById("premiumDesign").style.display = "flex";
//}


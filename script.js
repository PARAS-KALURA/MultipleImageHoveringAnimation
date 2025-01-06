const elem = document.querySelectorAll(".elem");

elem.forEach(function(val) {
    console.log(val.childNodes); // Log child nodes for debugging purposes

    // Assuming you want to target the first image inside the element
    const imageNode = val.querySelector("img");

    // Make sure the image exists before accessing its style
    if (imageNode) {
        val.addEventListener("mousemove", function(dets) {
            // Get the mouse position relative to the element
            const rect = val.getBoundingClientRect();
            const x = dets.clientX - rect.left;  // Mouse X relative to the element
            const y = dets.clientY - rect.top;   // Mouse Y relative to the element

            // Set the image position to follow the mouse
            imageNode.style.left = `${x}px`;
            imageNode.style.top = `${y}px`;
        });

        val.addEventListener("mouseenter", function() {
            imageNode.style.opacity = 1;  // Show the image when mouse enters
        });

        val.addEventListener("mouseleave", function() {
            imageNode.style.opacity = 0;  // Hide the image when mouse leaves
        });
    } else {
        console.log("No image found inside this element.");
    }
});




function hide_other(clickedButton) {
    // Get the parent container of the clicked button
    var parentDiv = clickedButton.parentElement;

    // Find all divs within the parent container
    var divs = parentDiv.parentElement.querySelectorAll('.intro > div');

    // Set opacity of all divs to 0
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.opacity = '0';
    }

    // Set opacity of clicked div to 1
    parentDiv.style.opacity = '1';
}

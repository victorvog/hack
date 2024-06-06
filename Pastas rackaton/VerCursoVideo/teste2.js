function swapColors() {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');

    if (box1.classList.contains('gray')) {
        box1.classList.remove('gray');
        box2.classList.add('gray');
    } else {
        box1.classList.add('gray');
        box2.classList.remove('gray');
    }
}

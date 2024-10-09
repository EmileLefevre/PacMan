//CSI
//2024





let pacman = document.getElementById("pacman");
let playground = document.getElementById("playground");
let obstacle = document.getElementById("obstacle");
let hammertime = new Hammer(playground);

//console.dir(pacman);
//window toute la fenetre
//console.dir(playground);
let posX = 0, posY = 0;
//let posOX = obstacle.offsetLeft, posOY = obstacle.offsetTop;
let widthPlayground = playground.clientWidth;
let heightPlayground = playground.clientHeight;
let rotation;

function deplace(direction) {
    switch (direction) {
        case "gauche":
            if (posX > 0) {
                posX -= 10;
            }
            rotation = "scaleX(-1)";
            break;
        case "haut":
            if (posY > 0) {
                posY -= 10;
            }
            rotation = "rotate(-90deg)"
            break;
        case "droite":
            if (posX < widthPlayground - 110) {
                posX += 10;
            }
            rotation = "scaleX(1)"
            break;
        case "bas":
            if (posY < heightPlayground - 110) {
                posY += 10;
            }
            rotation = "rotate(90deg)"
            break;

        default:
            break;
    }

    pacman.style.transform = `translate(${posX}px, ${posY}px) ${rotation}`;
}
window.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case 37: //gauche
        case 81:
            deplace("gauche");
            break;
        case 38: //haut
        case 90:
            deplace("haut");
            break;
        case 39: //droite
        case 68:
            deplace("droite");
            break;
        case 40: //bas
        case 83:
            deplace("bas");
            break;
        default:
            break;
    }
})
// gestion du tactile

hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammertime.on("swipeleft swiperight swipeup swipedown", function (ev) {
    switch (ev.type) {
        case "swipeleft":
            deplace("gauche")
            break;
        case "swipeup":
            deplace("haut")
            break;
        case "swiperight":
            deplace("droite")
            break;
        case "swipedown":
            deplace("bas")
            break;
        default:
            break;
    }
});
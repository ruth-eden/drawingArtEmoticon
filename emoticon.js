function setup() {
    createCanvas(500, 500);
    background(0, 200, 0);
}

function draw() {
    strokeWeight(10);
    fill(255, 222, 52);
    circle(250, 250, 200);
    line(210, 230, 210, 250);
    line(300, 230, 300, 250);
    curve(300, 150, 210, 284, 300, 284, 150, 170);
}
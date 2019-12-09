window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    let ctx = document.getElementById('student-canvas-1')
    let context = ctx.getContext('2d');
    let text = prompt("Message:");

  context.clearRect(0, 0, ctx.width, ctx.height);
  if (text.length <= 50 && text.length >= 1) {
    context.font = "48px sans-serif";
    context.strokeText(text, 30, 70, 994);
  }
  else {
    alert("Your message is too long. Keep it under 50 characters.");
    let text = prompt("Message: ");
  }
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    // write your exercise 2 code here

    let ctx = document.getElementById('student-canvas-2')
    let context = ctx.getContext('2d');
    context.clearRect(0, 0, ctx.width, ctx.height);
    let width;
    let height;
    let x;
    let y;
    const canvas_width = 1024;
    const canvas_height = 512;

    function promptDimensions() {
        width = prompt("Width:");
        height = prompt("Height:");
        x = prompt("X:");
        y = prompt("Y:");

        while (width == null || height == null || x == null || y == null) {
          context.clearRect(0, 0, ctx.width, ctx.height);
          break;
        }
        if (Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y)) {
          alert("One of your values is not a number.");
        }

        else {
          width = Number(width);
          height = Number(height);
          x = Number(x);
          y = Number(y);
        }
    }

    promptDimensions();

    //need to fix how to stop the code
    while (width >= canvas_width || width < 1) {
        alert("Your width must be between 1 and 1024.");
        promptDimensions();

    }
    while (height >= canvas_height || height < 1) {
        alert("Your height must be between 1 and 512.");
        promptDimensions();
    }
    while (x >= canvas_width || x < 1) {
        alert("Your x-coordinate must be between 1 and 1024.");
        promptDimensions();
    }
    while (y >= canvas_height || y < 1) {
        alert("Your x-coordinate must be between 1 and 512.");
        promptDimensions();
    }
    while (x + width > canvas_width || y + height > canvas_height) {
        alert("Your rectangle won't fit on the canvas.");
        promptDimensions();
    }

    context.strokeRect(x, y, width, height);

};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
    let ctx = document.getElementById('student-canvas-3')
    let context = ctx.getContext('2d');
    context.clearRect(0, 0, ctx.width, ctx.height);
    let color = prompt("Pick a color.");
    color = String(color);
    color = color.toLowerCase();
    while (color != "black" && color != "blue" && color != "green" && color != "orange" && color != "purple" && color != "red" && color != "yellow") {
        alert("This is an unsupported color.");
        color = prompt("Pick a color.");
        color = String(color);
        color = color.toLowerCase();
    }
    context.fillStyle = color;
    context.fillRect(10, 10, 100, 50);

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};

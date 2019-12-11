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
    document.getElementById("triangle").onclick = drawTriangle;
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
    
    let ctx = document.getElementById('student-canvas-2')
    let context = ctx.getContext('2d');
    context.clearRect(0, 0, ctx.width, ctx.height);
    let width;
    let height;
    let x;
    let y;
    let flag = 0;
    const canvas_width = 1024;
    const canvas_height = 512;


    function promptDimensions() {
        console.log("in func");
        width = prompt("Width:");
        height = prompt("Height:");
        x = prompt("X:");
        y = prompt("Y:");

        if (width == null || height == null || x == null || y == null) {
          context.clearRect(0, 0, ctx.width, ctx.height);
          flag = 1;
          
          
        }
        else if (Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y)) {
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
    
    while ((width >= canvas_width || width < 1) && flag === 0) {
        alert("Your width must be between 1 and 1024.");
        promptDimensions();
    }
    while ((height >= canvas_height || height < 1) && flag === 0) {
        alert("Your height must be between 1 and 512.");
        promptDimensions();
    }
    while ((x >= canvas_width || x < 1 ) && flag === 0) {
        alert("Your x-coordinate must be between 1 and 1024.");
        promptDimensions();
    }
    while ((y >= canvas_height || y < 1) && flag === 0) {
        alert("Your x-coordinate must be between 1 and 512.");
        promptDimensions();
    }
    while ((x + width > canvas_width || y + height > canvas_height) && flag === 0) {
        alert("Your rectangle won't fit on the canvas.");
        promptDimensions();
    }

    context.strokeRect(x, y, width, height);
    
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    
    let ctx = document.getElementById('student-canvas-3')
    let context = ctx.getContext('2d');

    let color = prompt("Pick a color.");
    let flag = 0;
    context.clearRect(0, 0, ctx.width, ctx.height);
    

    if (color === null) {
        flag = 1;
        context.clearRect(0, 0, ctx.width, ctx.height);  
    }
    else {
        color = String(color);
        color = color.toLowerCase();
    }
    while (color != "black" && color != "blue" && color != "green" && color != "orange" && color != "purple" && color != "red" && color != "yellow" && flag === 0) {
        alert("This is an unsupported color.");
        color = prompt("Pick a color.");

        if (color === null) {
            flag = 1;
            context.clearRect(0, 0, ctx.width, ctx.height);
        }
        else {
            color = String(color);
            color = color.toLowerCase();
        }
    }
    if (flag === 0) {
        context.fillStyle = color;
        context.fillRect(10, 10, 100, 50);
    }

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {

    let ctx = document.getElementById('student-canvas-4');
    let context = ctx.getContext('2d');
    context.clearRect(0, 0, ctx.width, ctx.height);
    
    let flag = 0;
    let base;
    let height;
    let diagonal;
    let side1;
    let side2;
    let side3;


    function promptDimensions() {
        side1 = prompt("Side 1:");
        side2 = prompt("Side 2:");
        side3 = prompt("Side 3:");

        if (side1 === null || side2 === null || side3 === null) {
                flag = 1;
                context.clearRect(0, 0, ctx.width, ctx.height);
            }
        side1 = Number(side1);
        side2 = Number(side2);
        side3 = Number(side3);

        while ((Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) && flag === 0) {
            flag = 1;
            alert("One of your sides is not a number.");
            side1 = prompt("Side 1:");
            side2 = prompt("Side 2:");
            side3 = prompt("Side 3:");
            side1 = Number(side1);
            side2 = Number(side2);
            side3 = Number(side3);
        } 

        diagonal = Math.max(side1, side2, side3);
        height = Math.min(side1, side2, side3);   

        if (diagonal === side1) {
            if (height === side2) {
                base = side3;
            }
            else {
                base = side2;
            }
        }
        else if (diagonal === side2) {
            if (height === side1) {
                base = side3;
            }
            else {
                base = side1;
            }
        }
        else {
            if (height === side1) {
                base = side2;
            }
            else {
                base = side1;
            }
        }      
    }

    promptDimensions();

    if (Math.hypot(height, base) === diagonal) {

        let x = height + 25;
        let y = 25 + base;

        context.beginPath();
        context.moveTo(25, x);
        context.lineTo(y, x);
        context.lineTo(25, 25);
        context.lineTo(25, x);
        context.stroke();
    }
    while (Math.hypot(height, base) !== diagonal && flag === 0){
        alert("That's not a valid right triangle.");
        promptDimensions();
        
    }
    console.log(ctx.width);    
    while (base + 25 >= ctx.width || height + 25 >= ctx.height && flag === 0) {
        alert("Your triangle won't fit on the canvas.");
        promptDimensions();
        console.log(height + 25);
        console.log(base + 25);
    }
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

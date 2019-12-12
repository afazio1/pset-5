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
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    let ctx = document.getElementById('student-canvas-1')
    let context = ctx.getContext('2d');
    let text = prompt("Message:");
    let flag;
//needs to continually ask
    context.clearRect(0, 0, ctx.width, ctx.height);
    if (text === null || text === '') {
        flag = 1;
        text = '';
    }
      
    while ((text.length > 50 || text.length < 1) && flag !== 1) {
        flag = 0;
        alert("Your message is too long. Keep it under 50 characters.");
        text = prompt("Message: ");

        if (text === null || text === '') {
            flag = 1;
            text = '';
        }
    }

    if (flag !== 1) {
        context.font = "48px sans-serif";
        context.strokeText(text, 30, 70, 994);
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
        width = prompt("Width:");
        height = prompt("Height:");
        x = prompt("X:");
        y = prompt("Y:");

        if (width === null || height === null || x === null || y === null) {
          context.clearRect(0, 0, ctx.width, ctx.height);
          flag = 1;

        }
        width = Number(width);
        while ((Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y)) && flag !== 1) {
            alert("One of your values is not a number.");
            width = prompt("Width:");
            height = prompt("Height:");
            x = prompt("X:");
            y = prompt("Y:");
            if (width === null || height === null || x === null || y === null ) {
                context.clearRect(0, 0, ctx.width, ctx.height);
                flag = 1;
            }
            else {
                width = Number(width);
                height = Number(height);
                x = Number(x);
                y = Number(y);
            }
            
        }

        if (flag !== 1) {
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

    let color = prompt("Color:");
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
        alert(color + " is not a supported color.");
        color = prompt("Color:");

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

        if (side1 === null || side2 === null || side3 === null || side1 === '' || side2 === '' || side3 === '') {
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
    
    while (base + 25 >= ctx.width || height + 25 >= ctx.height && flag === 0) {
        alert("Your triangle won't fit on the canvas.");
        promptDimensions();
    }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    let ctx = document.getElementById('student-canvas-5');
    let context = ctx.getContext('2d');
    context.clearRect(0, 0, ctx.width, ctx.height);
    let radius = prompt("Radius: ");
    let flag;

    if (radius === null) {
        flag = 1;
        context.clearRect(0, 0, ctx.width, ctx.height);
    }
    else {
        radius = Number(radius);
    }
    while (Number.isNaN(radius) && flag !== 1) {
        alert("The radius is not a number.");
        radius = prompt("Radius: ");
        
        flag = 0;
        if (radius === null) {
            flag = 1;
            context.clearRect(0, 0, ctx.width, ctx.height);
        }
        else {
            radius = Number(radius);
        }
    }
    while (radius * 2 > ctx.height && flag !== 1) {
        alert("Your smiley face won't fit on the canvas.");
        radius = prompt("Radius: ");
        
        flag = 0;
        if (radius === null) {
            flag = 1;
            context.clearRect(0, 0, ctx.width, ctx.height);

        }
        else {
            radius = Number(radius);
        }
        while (Number.isNaN(radius) && flag !== 1) {
            alert("The radius is not a number.");
            radius = prompt("Radius");
        }
    }
    while (radius < 32 && flag !== 1) {
        alert("Your radius must be at least 32.");
        radius = prompt("Radius: ");
        
        if (radius === null) {
            flag = 1;
            context.clearRect(0, 0, ctx.width, ctx.height);
        }
        else {
            radius = Number(radius);
        }
        while (radius * 2 > ctx.height && flag !== 1) {
            alert("Your smiley face won't fit on the canvas.");
            radius = prompt("Radius: ");
            radius = Number(radius);
            flag = 0;
        }
        while (Number.isNaN(radius) && flag !== 1) {
            alert("The radius is not a number.");
            radius = prompt("Radius");
            radius = Number(radius);
        }
    }

    if (radius * 2 <= ctx.height && radius >= 32 && flag !== 1) {
        const center_x = 512;
        const center_y = 256;

        context.beginPath();
        context.arc(center_x, center_y, radius, 0, Math.PI * 2, true); // Outer circle
        context.moveTo(center_x + (radius * 0.7), center_y);
        context.arc(center_x, center_y, radius * 0.7, 0, Math.PI, false);  // Mouth (clockwise)
        context.moveTo(((center_x - (radius * 0.4)) + radius * 0.15), center_y - (radius * 0.4));
        context.arc(center_x - (radius * 0.4), center_y - (radius * 0.4), radius * 0.15, 0, Math.PI * 2, true);  // Left eye
        context.moveTo(center_x + (radius * 0.4) + radius * 0.15, center_y - (radius * 0.4));
        context.arc(center_x + (radius * 0.4), center_y - (radius * 0.4), radius * 0.15, 0, Math.PI * 2, true);  // Right eye
        context.stroke();
    }

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    let ctx = document.getElementById('student-canvas-6');
    let context = ctx.getContext('2d');
    context.clearRect(0, 0, ctx.width, ctx.height);
    let side = prompt("Side:");
    let flag = 0;
    

    if (side === null) {
        flag = 1;
        context.clearRect(0, 0, ctx.width, ctx.height);
    }
    else {
        side = Number(side);
    }
    while (Number.isNaN(side) && flag !== 1) {
        alert("The side is not a number.");
        side = prompt("Side: ");
        
        flag = 0;
        if (side === null) {
            flag = 1;
            context.clearRect(0, 0, ctx.width, ctx.height);
        }
        else {
            side = Number(side);
        }
    }
    while (side * 5 > ctx.height) {
        alert("Your pyramid won't fit on the canvas.");
        side = prompt("Side: ");
        
        flag = 0;
        if (side === null) {
            flag = 1;
            context.clearRect(0, 0, ctx.width, ctx.height);

        }
        else {
            side = Number(side);
        }
        while (Number.isNaN(side) && flag !== 1) {
            alert("The side is not a number.");
            side = prompt("Side: ");
        }

    }
    while (side < 1 && flag !== 1) {
        alert("Your block size must be at least 1.");
        side = prompt("Side: ");
        flag = 0;

        if (side === null) {
            flag = 1;
            context.clearRect(0, 0, ctx.width, ctx.height);

        }
        else {
            side = Number(side);
            flag = 0;
        }
        while (Number.isNaN(side) && flag !== 1) {
            alert("The side is not a number.");
            side = prompt("Side: ");
        }
        while (side * 5 > ctx.height) {
            alert("Your pyramid won't fit on the canvas.");
            side = prompt("Side: ");
        
        }

    }
    //create the pyramid

    if (flag !== 1 && side * 5 <= ctx.height) {
        context.strokeRect(ctx.width - (ctx.width - 10), (ctx.height - 10) - side, side, side);
        for (let i = 1; i < 5; i++) {
            context.strokeRect(ctx.width - (ctx.width - 10) + (side * i), (ctx.height - 10) - side, side, side);
        }
        //i know this is not beautiful code but you gotta do what you gotta do
        context.strokeRect((ctx.width - (ctx.width - 10)) + (side * 0.5), (ctx.height - 10) - (side * 2) , side, side);
        context.strokeRect((ctx.width - (ctx.width - 10)) + (side * 1.5), (ctx.height - 10) - (side * 2) , side, side);
        context.strokeRect(((ctx.width - (ctx.width - 10)) + (side * 1.5 * 2)) - (side * 0.5) , (ctx.height - 10) - (side * 2) , side, side);
        context.strokeRect(((ctx.width - (ctx.width - 10)) + (side * 1.5 * 3)) - (side) , (ctx.height - 10) - (side * 2) , side, side);

        context.strokeRect((ctx.width - (ctx.width - 10)) + (side * 0.5) + (side * 0.5), (ctx.height - 10) - (side * 3) , side, side);
        context.strokeRect((ctx.width - (ctx.width - 10)) + (side * 0.5) + (side * 1.5), (ctx.height - 10) - (side * 3) , side, side);
        context.strokeRect((ctx.width - (ctx.width - 10)) + (side * 0.5) + (side * 2.5), (ctx.height - 10) - (side * 3) , side, side);

        context.strokeRect((ctx.width - (ctx.width - 10)) + (side * 0.5) + side, (ctx.height - 10) - (side * 4) , side, side);
        context.strokeRect((ctx.width - (ctx.width - 10)) + (side * 0.5) + (side * 2), (ctx.height - 10) - (side * 4) , side, side);

        context.strokeRect((ctx.width - (ctx.width - 10)) + (side * 0.5) + (side * 1.5), (ctx.height - 10) - (side * 5) , side, side);
    }
    


    



};

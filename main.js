mouseEvent="";
var last_x_position_of_mouse, last_y_position_of_mouse;

var color="red";
width_of_line=5;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){   
    current_x_position_of_mouse=e.clientX-canvas.offsetLeft;
    current_y_position_of_mouse=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_x_position_of_mouse,current_y_position_of_mouse,40,0,2*Math.PI)
        ctx.stroke()
    }
    last_x_position_of_mouse=current_x_position_of_mouse;
    last_y_position_of_mouse=current_y_position_of_mouse;
}

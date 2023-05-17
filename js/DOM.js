import { RegularSpace } from "./RegularSpace.js";

var boardSpace;
var ctx;
const fps = 30;

const canvasX = 600;
const canvasY = 600;

var tileX, tileY;

const rows = 200, cols = 200;

const white = '#FFFFFF' , black = '#000000';
var board;

function loadBoard()
{
    //Save the space
    boardSpace = document.getElementById('boardSpace');
    ctx = boardSpace.getContext('2d');
    //Adjust the space
    boardSpace.width = canvasX;
    boardSpace.height = canvasY;
    //Calculate the space to the cells
    tileX = Math.floor(canvasX/rows);
    tileY = Math.floor(canvasY/cols);
    board = new RegularSpace(rows, cols, 1);
    setInterval(function() {main();},1000/fps);
}

window.onload = function()
{
    loadBoard();
};

function main(){
    clearCanvas();
    iterateDraw();
    board.updateBoard();
}

function clearCanvas(){
    boardSpace.width = boardSpace.width;
    boardSpace.height = boardSpace.height;
}
function iterateDraw()
{
    for(let i = 0; i < rows; i++)
    {
        for(let j = 0; j < cols; j++)
        {
            draw(i,j);
        }
    }
}
function draw(row,col)
{
    let color = black;
    if(board.getBoard()[row][col] .getState() == 1) color = white;
    ctx.fillStyle = color;
    ctx.fillRect(col*tileX, row*tileY, tileX, tileY);
    
}

import { Cell } from './Cell.js';

export class RegularSpace{
    constructor(rows,cols, range)
    {
        this.rows = rows;
        this.cols = cols;
        this.range = range;
        this.board = new Array()
        for(let i = 0; i < rows; i++)
        {
            let rowContent = new Array()
            for (let j = 0; j < cols; j++)
            {
                //The value 0 minings that the cell is not alive
                rowContent.push( new Cell(Math.floor(Math.random()*2)));
            }
            this.board.push(rowContent);
        }
    }
    getBoard()
    {
        return this.board;
    }
    countNeighbors(row, col){
        let neighbors = 0;
        // check the neighborhood
        for(let i = 0 - this.range; i <= this.range; i++)
        {
            if(row +i < 0 || row + i >= this.rows) continue;
            for(let j = 0 - this.range; j <= this.range; j++)
            {
                if(col+j < 0 || col +j >= this.cols ) continue;
                if(this.board[row+i][col+j].getState() == 1) neighbors++;
            }
        }
        if(this.board[row][col].getState() == 1) neighbors--;
        return neighbors;        
    }
    evaluate(row, col)
    {
        let neighbors = this.countNeighbors(row, col);
        let newState = this.board[row][col].getState();
        //Rules
        if(neighbors < 2 || neighbors > 3) newState = 0;
        else if(neighbors == 3) newState = 1;

        this.board[row][col].setNextState(newState);
    }
    iterate(){
        for(let i = 0; i < this.rows; i++)
        {
            for(let j = 0; j < this.cols; j++)
            {
                this.evaluate(i,j);
            }   
        }
    }
    updateBoard()
    {
        this.iterate();
        for(let i = 0; i < this.rows; i++)
        {
            for(let j = 0; j < this.cols; j++)
            {
                this.board[i][j].updateState()
            }   
        }
    }

}
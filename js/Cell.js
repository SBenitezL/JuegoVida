export class Cell{
    
    constructor (state){
         this.state = state;
         //Value void
         this.nextState = -1;
    }
    getState(){
        return this.state;
    }
    getNextState(){
        return this.nextState;
    }
    setState(state){
        this.state = state;
    }
    setNextState(nextState){
        this.nextState = nextState;
    }
    updateState()
    {
        this.state = this.nextState;
    }
}
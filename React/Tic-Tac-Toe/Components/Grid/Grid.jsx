import {useState} from "react";
import Card from "../Cards/Card.jsx";
import "./Grid.css"
import isWinner from "../../helpers/Checkwinner"

function Grid({numberOfCards}){

    //we take a 1D array as we can give no. to every cell of game
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);        //if true => o, false => x
    const [winner, setWinner] = useState(null);

    function play(index){
        if(turn === true){
            board[index] = 'o'
        }
        else{
            board[index] = 'x'
        }
        const win = isWinner(board, turn ? "o" : "x")
        if(win){
            setWinner(win);
        }
        setBoard([...board])
        setTurn(!turn)
    }

    function reset(){
        setTurn(true);
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
    }

    return(
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight"> Winner is {winner}</h1>
                        <button className= "reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">Current turn : {(turn) ? 'o' : 'x'}</h1>
            <div className="grid">
                {board.map((row, index) => <Card gameEnd={winner ? true : false} Key = {index} onPlay={play} player={row} index={index} />)}
            </div>
        </div>
    )

}

export default Grid;
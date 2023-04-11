import React, { useState } from 'react'
import "./Tictactoe.css"

function Tictactoe() {
    const [turn, setTurn] = useState('X')
    const [cells, setCells] = useState(Array(9).fill(""))
    const [winner, setWinner] = useState()
    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        }
        for (let i in combos) { // for..in is used for traversing an object
            combos[i].forEach(element => {
                if (
                    squares[element[0]] === '' ||
                    squares[element[1]] === '' ||
                    squares[element[2]] === ''
                ) {
                    // do nothing
                }
                else if (
                    squares[element[0]] === squares[element[1]] && squares[element[1]] === squares[element[2]]
                ) {
                    setWinner(squares[element[0]])
                }
            });
        }
    }
    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert("already clicked")
        }
        let squares = [...cells]
        if (turn === 'X') {
            squares[num] = 'X'
            setTurn('O')
        }
        else {
            squares[num] = 'O'
            setTurn('X')
        }
        checkForWinner(squares)
        setCells(squares)
        //console.log(squares);
    }
    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(""))
    }
    function Box({ num }) {
        return (
            <div>
                <button className='box' onClick={() => handleClick(num)}>{cells[num]}</button>
            </div>
        )
    }
    return (
        <div className='container'>
            <h1>TIC-TAC-TOE</h1>
            <table>
                Turn:{turn}
                <tbody>
                    <tr className='cell'>
                        <Box num={0} />
                        <Box num={1} />
                        <Box num={2} />
                    </tr>
                    <tr className='cell'>
                        <Box num={3} />
                        <Box num={4} />
                        <Box num={5} />
                    </tr>
                    <tr className='cell'>
                        <Box num={6} />
                        <Box num={7} />
                        <Box num={8} />
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                    <p>{winner} is winner</p>
                    <button onClick={() => handleRestart()}>Restart</button>
                </>
            )}
        </div>
    )
}
export default Tictactoe
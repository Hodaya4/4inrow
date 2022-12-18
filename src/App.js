import './App.css';
import React from 'react';


class App extends React.Component {

    state = {
        values: [
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '']
        ],
        player: "y"
    }



    cellClicked = (row, cell) => {
        if (row === 0 && this.state.values[row][cell] !== '') {
            return
        }
        const currentValues = this.state.values
        const currentPlayer = this.state.player === "y" ? "r" : "y";
        while ((row !== 5) && this.state.values[row + 1][cell] !== "y" && this.state.values[row + 1][cell] !== "r") {
            row++
        }
        currentValues[row][cell] = this.state.player;
        this.setState({
            values: currentValues,
            player: currentPlayer
        })
        this.checkWin(row,cell);
    }

    checkWin = (row, cell) => {
        while (this.state.values[row][cell] === this.state.player || cell !== 0) {
            console.log(cell)
            cell--
        }
        if (cell + 3 > 7) {
            const secondCell = this.state.values[row][cell] === this.state.values[row][cell+1];
            const thirdCell = this.state.values[row][cell] === this.state.values[row][cell+2];
            const fourthCell = this.state.values[row][cell] === this.state.values[row][cell+3];
            if (secondCell && thirdCell && fourthCell) {
                alert(this.state.player + " won")
            }
        }



/*        const currentPlayer = this.state.player;
        const currentValues = this.state.values;
        let winningPoints = 1;
        let tempRow = row;
        let tempCell = cell;
        while (this.state.values[tempRow][tempCell] === currentPlayer && tempCell >= 0) {
            console.log(winningPoints)
            if (winningPoints === 4) {
                break
            }
            tempCell--
            winningPoints += 1;
        }
        tempCell = cell;
        while (this.state.values[tempRow][tempCell] === currentPlayer && tempCell <= 7) {
            if (winningPoints === 4) {
                break
            }
            tempCell++
            winningPoints += 1;
        }
        if (winningPoints === 4) {
            alert(this.state.player + " won")
        }*/
    }



    render() {
        return (
            <div className="App">
                <br/>
                <table>
                    {
                        this.state.values.map((row, rowIndex) => {
                            return (
                                <tr>
                                    {
                                        row.map((cell, cellIndex) => {
                                            return (
                                                <td className={cell === "y" ? "yellow" : cell === "r" ? "red" : "white"}
                                                    onClick={() => this.cellClicked(rowIndex, cellIndex)}>

                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }

}

export default App;

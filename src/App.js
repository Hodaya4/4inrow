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
/*        alert("row: " + row + " cell: " + cell);*/
        if (this.state.values[row][cell] !== '') {
            return
        }
        const currentValues = this.state.values;
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
        let tempCell = cell;
        let secondCell, thirdCell, fourthCell;
        while (tempCell !== 0 && this.state.values[row][tempCell - 1] === this.state.player) {
            tempCell--
        }
        if (tempCell + 3 <= 6) {
            secondCell = this.state.values[row][tempCell] === this.state.values[row][tempCell+1];
            thirdCell = this.state.values[row][tempCell] === this.state.values[row][tempCell+2];
            fourthCell = this.state.values[row][tempCell] === this.state.values[row][tempCell+3];
            if (secondCell && thirdCell && fourthCell) {
                alert(this.state.player + " won")
            }
        }

        tempCell = cell;
        let tempRow = row;

        while (tempRow !== 0 && this.state.values[row + 1][cell] === this.state.player) {
            console.log(tempRow)
            tempRow--
        }
        if (tempRow + 3 <= 5) {
            secondCell = this.state.values[tempRow][cell] === this.state.values[tempRow + 1][cell];
            thirdCell = this.state.values[tempRow][cell] === this.state.values[tempRow + 2][cell];
            fourthCell = this.state.values[tempRow][cell] === this.state.values[tempRow + 3][cell];
            if (secondCell && thirdCell && fourthCell) {
                alert(this.state.player + " won")
            }
        }


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

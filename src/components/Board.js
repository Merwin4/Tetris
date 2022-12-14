import "./Board.css";
import BoardCell from "./BoardCell";

const Board = ({ board }) => {
    console.log("Board: ", board)

    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`
    }

    return <div className="Board" style={boardStyles}>
        {board.rows.map((row, y) => 
            row.map((cell, x) => (
                <BoardCell key={x * board.size.columns} cell={cell} />
            ))
        )}
    </div>
}

export default Board;
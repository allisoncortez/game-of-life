import React, {useState} from 'react';
import produce from 'immer';

const numRows = 50;
const numCols = 50;

const App: React.FC = () => {
  const [grid,setGrid] = useState(() => {
    const rows = [];
    for(let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0 ))
    }

    return rows
  })

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${numCols}, 20px)`
    }}>
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={`${i} - ${k}`}
            onClick={() => {
              const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
              });
              setGrid(newGrid);
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: grid[i][k] ? 'pink' : undefined, 
              border: "solid 1px green"
            }}
          />
        ))
      )}
    </div>
  );
}

export default App;

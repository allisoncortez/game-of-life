import React, {useState} from 'react';

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

  // console.log(grid);
  return (
    <div>
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={`${i} - ${k}`}
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

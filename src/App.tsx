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

  console.log(grid);
  return (
    <div className="App">
      yo
    </div>
  );
}

export default App;

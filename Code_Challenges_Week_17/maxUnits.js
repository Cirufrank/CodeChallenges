let units2 = ["1 4", "1 2", "1 4"];

function maxUnits(units) {
    let rows = units.map(element => Number(element.split(" ")[0]))
    let columns = units.map(element => Number(element.split(" ")[1]))

    let matrixOfVals = [];

    while(rows.length) {
        let currentRow = rows.shift() - 1;
        let currentCol = columns.shift() - 1;
        for (let row = 0; row <= currentRow; row += 1) {
            if (!matrixOfVals[row]) matrixOfVals[row] = [];
            for (let col = 0; col <= currentCol; col += 1) {
                if (!matrixOfVals[row][col]) matrixOfVals[row][col] = 1;
                else matrixOfVals[row][col] += 1;
            }
        }
    }
    let maxColumn = Math.max(...columns);
    let maxRow = Math.max(...rows);
    return matrixOfVals[0][0];
}

console.log(maxUnits(units2))
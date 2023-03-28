const magic_squares = [
  [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
  [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
  [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
  [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
  [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
  [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
  [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
  [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
];

function convert_to_magic(matrix) {
  const n = matrix.length;
  var min_cost = Infinity;
  var best_matrix;

  for (let k = 0; k < magic_squares.length; k++) { 
    var cost = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        cost += Math.abs(matrix[i][j] - magic_squares[k][i][j]);
      }
    }
    if (cost < min_cost) {
      min_cost = cost;
    best_matrix = k;
    }
  }

  console.log("Dobijeni magicni kvadrat:");
  for(let i = 0; i < magic_squares[best_matrix].length; i++) {
    let row = "";
    for(let j = 0; j < magic_squares[best_matrix][i].length; j++) {
      row += magic_squares[best_matrix][i][j] + " ";
    }
    console.log(row);
  }

return console.log("Minimalna cena za konvertovanje u magicni kvadrat je: " + min_cost);
}

const matrica = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2]
];
const min_cost = convert_to_magic(matrica);
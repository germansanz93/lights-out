const a = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 1, 1]
]

const i = [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1]
]

const o = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const r = [
  [a, i, o, o, o],
  [i, a, i, o, o],
  [o, i, a, i, o],
  [o, o, i, a, i],
  [o, o, o, i, a]
]

//The function bewlow concats the arrays horizontally
function concatArraysHorizontally(...args) {
  let result = [];
  let iterator = args.values();
  let arg1 = iterator.next().value;
  let arg2 = iterator.next().value;

  //concat the arrays
  const concatArrays = (arg1, arg2) => {
    if (arg2) {
      arg1.forEach(row => {
        let index = arg1.indexOf(row);
        result.push([...row, ...arg2[index]]);
      });
      arg1 = result;
      arg2 = iterator.next().value;
      result = []
      if (arg2) {
        return concatArrays(arg1, arg2);
      } else {
        return arg1;
      }
    }
  }

  return concatArrays(arg1, arg2)
}

const rMatrix = [];

//put all the rows in the r matrix
r.forEach((row) => {
  const a = concatArraysHorizontally(...row)
  rMatrix.push(...a);
})

//creates solution vector
const solution = []
for (let i = 0; i < rMatrix.length; i++) {
  solution.push(Math.floor(Math.random() * 2));
}
console.log(solution);

//creates a new game with the r array and the solution vector

function cartesianProduct(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let partial = 0;
    for (let j = 0; j < arr1[0].length; j++) {
      partial += arr1[i][j] * arr2[j]
    }
    result.push(partial)
  }
  return result
}

const game = cartesianProduct(rMatrix, solution).map((el) => el%2);

export {game, solution}
/*
 * Instructions:
 *
 * In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
 *
 * You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
 *
 * The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
 *
 * If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 *
 *  
 *
 *  Example 1:
 *
 *
 *  Input: mat = [[1,2],[3,4]], r = 1, c = 4
 *  Output: [[1,2,3,4]]
 *  Example 2:
 *
 *
 *  Input: mat = [[1,2],[3,4]], r = 2, c = 4
 *  Output: [[1,2],[3,4]]
 *   
 *
 *   Constraints:
 *
 *   m == mat.length
 *   n == mat[i].length
 *   1 <= m, n <= 100
 *   -1000 <= mat[i][j] <= 1000
 *   1 <= r, c <= 300
 *
 *  */

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(mat, r, c) {
    const matrixRows = mat.length;
    const matrixCols = mat[0].length;
    const totalRecords = matrixRows * matrixCols
    const totalReshapedRecords = r * c
    if (totalRecords != totalReshapedRecords) return mat;
    if (r == matrixRows && matrixCols == c) return mat;
    const reshapedMat = [];
    let curRow = 0;
    let curCol = 0;
    for (let row = 0; row < matrixRows; row += 1) {
        for (let col = 0; col < matrixCols; col += 1) {
            const curRecord = mat[row][col];
            if (!reshapedMat[curRow]) {
                reshapedMat.push([curRecord])
                if (c === 1) {
                    curCol = 0
                    curRow += 1;
                } else {
                    curCol += 1;
                }
            } else if (reshapedMat[curRow].length === c - 1) {
                reshapedMat[curRow].push(curRecord)
                curRow += 1;
                curCol = 0;
            } else {
                reshapedMat[curRow].push(curRecord)
                curCol += 1;
            }
        }
    }
    return reshapedMat
};

/**
 *
 * Results:
 *
 * JavaScript
 * Runtime
 * 90 ms
 * Beats
 * 84.8%
 * Memory
 * 44.3 MB
 * Beats
 * 96.89%
 *
 * */

function sumMat(mat:number[][], i:number = 0,j:number = 0):number
{
    if (i < mat.length)
    {
        if (j < mat[i].length)
        {
            return mat[i][j] + sumMat(mat, i,j+1);
        }
        return sumMat(mat, i+1,0);
    }
    return 0;
}

console.log (sumMat ([[1,2,3],[1,2]]));
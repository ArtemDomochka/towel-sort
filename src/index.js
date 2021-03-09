module.exports = function towelSort (matrix) {
    if(arguments.length === 0 || matrix.length === 0) return []

    return matrix.reduce((prev, cur, index)=> index%2===0?prev.concat(cur):prev.concat(cur.reverse()),[])
}


const express = require('express');
const app = express();

app.get('/getData', (req, res) => {
    const number = req.query.number
    if ( !number ){
        res.send ( '缺少參數' )
    } else if ( isNaN( number ) || number <= 0 ){
        res.send( '參數錯誤' )
    } else {
        const result = calculateSum ( parseInt( number ) )
        res.send(`數字:${number},結果:${result}`)
    }
});
function calculateSum ( number ){
    let sum = 0
    for( let i = 0; i <= number; i++ ){
        sum += i
    }
    return sum
}


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


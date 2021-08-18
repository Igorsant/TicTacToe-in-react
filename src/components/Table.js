var table = [];
var tableState = 0

for(var i=0; i<3; i++){
    table.push([])
}
for(var z=0; z<3; z++){

    for(var j=0; j<3; j++){
        table[z].push('')
    }
}

export {table}

export function drawTable(m, n){

    if(table[m][n] === ''){
        if(tableState === 0){
            table[m][n] = 'X'
            tableState++
        }else{
            tableState--
            table[m][n] = 'O'
        }
    }
}
// let x: 'Hello' | 'Goodbye' | 'Hi' = 'Hello'
// x= 'Hey' //not working
// x= 'Goodbye' //working

//
type ColumnLabel =  '1' | '2' | '3'
type RowLabel = 'A' | 'B' | 'C'

// Template literal
type BattleShipMove = `${RowLabel}${ColumnLabel}`
let newMove: BattleShipMove = 'B1'


// Template literal
let userRowInput = 'Hello!'
let userColumnInput = 'Goodbye!'

function attackSquare(move: BattleShipMove){

}

function isRowLabel(str: string): str is RowLabel {
    return ['A', 'B', 'C'].includes(str)
}

function isColumnLabel(str: string): str is ColumnLabel {
    return ['1', '2', '3'].includes(str)
}

function isBattleShipMove(str: string): str is BattleShipMove {
    let [row, column] = str.split('')
    return isRowLabel(str) && isColumnLabel(str)
}

if(isBattleShipMove(newMove)){
    attackSquare(newMove)
}

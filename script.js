/**
 * Gameboard应该有哪些功能？
 * 数据存储：gameboard数组[...]总共9位，索引0-8
 * 其他工具：
 *  1. 检查棋盘状态
 *  2. 获取当前棋盘
 */
const gameBoard = (function() {
    //私有变量游戏棋盘
    let board = new Array(9).fill('');
    //私有工具：检查是否为合法落子
    function isValidIndex(index) {return typeof index === 'number' && index >= 0 && index <= 8};
    //公开工具：检查落子格子是否为空
    function isEmptyCell(index) {
        if (!isValidIndex(index)) return false;
        if (board[index]) return false;
        return true;
    }
    function updateBoard(index, marker) {
        if (isEmptyCell(index)) {
            board[index] = marker;
            //重新渲染
            return;
        }
        return 'ERROR';
    }
    function reset() {
        board.forEach(cell => cell = '')
        //重新渲染
        return;
    }
    return {
        checkEmpty: isEmptyCell,
        placeMarker: updateBoard,
        resetBoard: reset,
    }
})()

/**
 * Player应该有哪些功能？
 * 数据存储：玩家数据
 * 其他工具：
 *  1.好像没有
 */
const getPlayer = function (name,marker){
    const getMarker = () => marker;
    const getName = () => name;
    const showInfo = () => `Player ${name} use Marker ${marker} Joined the game`;
    return {
        showInfo,
        getName,
        getMarker,
    }
}
const player1 = getPlayer('Leo','X');
console.log(player1.getMarker());

/**
 * gameController应该有哪些功能？
 * 工具：
 *  1. 检查游戏胜负
 *  2. 检查玩家落子是否有效
 *  3. 切换玩家
 *  4. 启动游戏
 */
const gameController = {

}



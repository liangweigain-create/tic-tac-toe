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
    //私有工具：检查是否为合法棋盘
    function isValidIndex(index) {return typeof index === 'number' && index >= 0 && index <= 8};
    //公开工具：检查落子是否合法
    function isEmptyCell(index) {
        if(!isValidIndex(index)) return false;

    }
})()

/**
 * Player应该有哪些功能？
 * 数据存储：玩家数据
 * 其他工具：
 *  1.好像没有
 */
const player = {

}

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
console.log(gameBoard.board.length)
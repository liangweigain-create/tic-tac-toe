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
            return true;
        }
        return false;
    }
    function reset() {
        board.fill('')
        return;
    }
    function getBoard() {
        return board;
    }
    return {
        checkEmpty: isEmptyCell,
        placeMarker: updateBoard,
        resetBoard: reset,
        getBoard
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
/**
 * gameController应该有哪些功能？
 * 工具：
 *  1. 检查游戏胜负
 *  3. 切换玩家
 *  4. 启动游戏
 */
const gameController = (function(){
    /**
     *  棋盘：
     *      0 1 2
     *      3 4 5
     *      6 7 8
     */
    const winMap = {
        0: [[0,1,2], [0,3,6], [0,4,8]], // 左上角（原1）对应的3种赢局
        1: [[0,1,2], [1,4,7]], // 上中（原2）对应的2种赢局
        2: [[0,1,2], [2,5,8], [2,4,6]], // 右上角（原3）对应的3种赢局
        3: [[3,4,5], [0,3,6]], // 左中（原4）对应的2种赢局
        4: [[3,4,5], [1,4,7], [0,4,8], [2,4,6]], // 中心（原5）对应的4种赢局
        5: [[3,4,5], [2,5,8]], // 右中（原6）对应的2种赢局
        6: [[6,7,8], [0,3,6], [2,4,6]], // 左下角（原7）对应的3种赢局
        7: [[6,7,8], [1,4,7]], // 下中（原8）对应的2种赢局
        8: [[6,7,8], [2,5,8], [0,4,8]] // 右下角（原9）对应的3种赢局
    }
    //存储玩家信息
    const player1 = getPlayer('Leo', 'X');
    const player2 = getPlayer('Johnson', 'O');
    let currentPlayer = player1;

    //检查是否获胜
    function checkWin(index, marker) {
        const currentWinMap = winMap[index];//根据当前格子获取当前格子可获胜的方式
        //遍历当前可获胜方式数组，检查每一种获胜方式的每一个格子是否为相同marker
        console.log(currentWinMap)
        const board = gameBoard.getBoard();
        for (const combination of currentWinMap) {
            const [a,b,c] = combination;
            if (board[a] === marker && board[b] === marker && board[c] === marker) {
                return true;
            }
            return false;
        }
    }
    //不直接修改外部变量，而是返回一个另一个玩家的值，后续工具函数可以直接调用这个函数得到另一个玩家的值
    function switchPlayer(currentPlayer) {
        return currentPlayer === player1 ? player2 : player1;
    }
    function handleMove(index) {
        const successMove = gameBoard.placeMarker(index, currentPlayer.getMarker());
        if (!successMove) return false;
        if (checkWin(index)) {
            //结束游戏
        }//欠缺判断平局函数
        //成功落子了并且没有结束游戏，应该切换当前玩家
        currentPlayer = switchPlayer(currentPlayer);
        //渲染棋盘
        return 'yes!'
    }
    return {handleMove}
})()




    let size = 0;
    let boardArr = [];
    let player = true;
    let condition = false;

    function start() {
    let sizeDoc = document.getElementById("txt_size");
    let conditionDoc = document.getElementById("cbx");
//     if (sizeDoc.value < 10 || sizeDoc.value > 100) {
//     alert('Size is not valid.')
// } else {
    initBoard(sizeDoc.value, conditionDoc.value);
}

    function initBoard(inputSize, inputCondition) {
    if (inputCondition) {
    condition = inputCondition;
}
    condition = inputCondition;
    size = inputSize;
    let str = '<table "board"> ';
    for (let i = 0; i < size; i++) {
    str += '<tr>'
    let row = [];
    for (let j = 0; j < size; j++) {
    str += '<td style="width: 20px; height: 20px" id = "td' + i + '_' + j + '" onclick="play(' + i + ',' + j + ')"></td>';
    row.push('');
}
    str += '</tr>'

    boardArr.push(row);
}
    str += '</table>';
    console.log(str);

    // document.getElementsByTagName("div")[0].innerHTML = str;
        document.getElementById("div").innerHTML = str
}

    function play(i, j) {
    console.log(boardArr);
    let display = player ? "X" : 'O';
    let current = boardArr[i][j];
    let winArr = [];
    if (current == '') {
    document.getElementById('td' + i + '_' + j).textContent = display;
    player = !player;
    boardArr[i][j] = display;
    winArr = checkWin(i, j);
}

    if (winArr.length == 5) {
    endGame(winArr);
}
}

    function checkWin(i, j) {
    let winArr = checkWinHer(i, j);

    if (winArr.length == 0) {
    winArr = checkWinVer(i, j);
}

    if (winArr.length == 0) {
    winArr = checkWinCross(i, j);
}

    return winArr;
}

    function checkWinVer(i, j) {
    let display = boardArr[i][j];
    let top = i - 4 >= 0 ? i - 4 : 0;
    let bottom = i + 4 < size ? i + 4 : size - 1;
    let winArr = [];
    for (let k = top; k <= bottom; k++) {
    let current = boardArr[k][j];
    if (current == display) {
    winArr.push([k, j]);
} else {
    winArr = [];
}

    if (winArr.length == 5) {
    return winArr;
}
}

    return [];
}

    function checkWinHer(i, j) {
    let left = j - 4 >= 0 ? j - 4 : 0;
    let right = j + 4 < size ? j + 4 : size - 1;
    let display = boardArr[i][j];
    let winArr = [];

    for (let k = left; k <= right; k++) {
    let current = boardArr[i][k];
    if (current == display) {
    winArr.push([i, k]);
} else {
    winArr = [];
}

    if (winArr.length == 5) {
    return winArr;
}
}

    return [];
}

    function checkWinCross(i, j) {
    let top = i - 4 >= 0 ? i - 4 : 0;
    let bottom = i + 4 < size ? i + 4 : size - 1;
    let left = j - 4 >= 0 ? j - 4 : 0;
    let right = j + 4 < size ? j + 4 : size - 1;
    let display = boardArr[i][j];

    let winArr = checkWinCrossUp(display, top, bottom, left, right, i, j);
    if (winArr.length == 5) {
    return winArr;
} else return checkWinCrossDown(display, top, bottom, left, right, i, j);
}

    function checkWinCrossUp(display, top, bottom, left, right, i, j) {
    let minLeftBottomLength = Math.min(j - left, bottom - i);
    let minTopRightLength = Math.min(i - top, right - j);
    left = j - minLeftBottomLength;
    bottom = i + minLeftBottomLength;
    top = i - minTopRightLength;

    let winArr = [];

    for (let k = bottom; k >= top; k--) {
    let current = boardArr[k][left];
    console.log(current);
    if (current == display) {
    winArr.push([k, left]);
} else {
    winArr = [];
}

    if (winArr.length == 5) {
    return winArr;
}
    left++;
}

    return [];
}

    function checkWinCrossDown(display, top, bottom, left, right, i, j) {
    let minRightBottomLength = Math.min(right - j, bottom - i);
    let minTopLeftLength = Math.min(i - top, j - left);
    left = j - minTopLeftLength;
    top = i - minTopLeftLength;
    bottom = i + minRightBottomLength;

    let winArr = [];

    for (let k = top; k <= bottom; k++) {
    let current = boardArr[k][left];
    if (current == display) {
    winArr.push([k, left]);
} else {
    winArr = [];
}

    if (winArr.length == 5) {
    return winArr;
}
    left++;
}

    return [];
}

    function endGame(winArr) {
    // for (let item in winArr) {
    //     document.getElementById('td' + item[0] + '_' + item[1]).body.style.backgroundColor = 'blue';
    // }
        if (player){
            alert("Winner is O");
        }else {
            alert("Winner is X");
        }

    reset();

}

    function reset() {
    location.reload();
}



/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 高階関数(関数を引数、戻り値として扱う関数)のサンプル
 ******************************************************************************/
function arrayWalk(data, f) {
    for (var key in data) {
        f(key, data[key]);
    }
}

function showElement(key, value) {
    document.writeln(key + "：" + value);
}

var ary = [1, 2, 3, 4, 8, 16];
arrayWalk(ary, showElement);

//arrayWalkは配列の要素単位に引数で受け取った関数を呼び出すのみ
//showElementが実処理になっている
//実処理を変えたい場合はarrayWalkを変更する必要はない
//大枠の処理を定義した場合に使用できる

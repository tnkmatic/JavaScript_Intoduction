/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 可変長引数の関数定義のサンプル
 ******************************************************************************/
function sum() {
    var result = 0;
    
    //与えられた引数を順番に取り出し順に加算処理
    for (var i = 0; i < arguments.length; i++) {
        var tmp = arguments[i];
        if (isNaN(tmp)) {
            throw new Error('指定値が数値ではありません：' + tmp);
        }
        result += tmp;
    }
    
    return result;
}

try {
    document.writeln(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
} catch(e) {
    window.alert(e.message);
}
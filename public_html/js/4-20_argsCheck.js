/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * argumentオブジェクト動作サンプル
 ******************************************************************************/
function showMessage(value) {
    if (arguments.length != 1) {
        throw new Error('引数の数が間違っています：' + arguments.length);
    }
    document.writeln(value);
}

try {
    showMessage('山田','鈴木');
} catch (e) {
    window.alert(e.message);
}



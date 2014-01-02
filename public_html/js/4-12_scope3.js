/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * ローカル変数の有効範囲の確認サンプル 
 ******************************************************************************/
var scope  = 'Global Variable';

function getValue() {
    document.writeln(scope);
    var scope = 'Local Variable';
}

document.writeln(getValue());
document.writeln(scope);

/*
 * ローカル変数は関数”全体”で有効になる。
 * つまり、getValue関数の1行目では、ローカル変数scopeの領域が確保されているが、
 * var命令が実行されていないためundefinedになる。
 * →このためvar命令は関数の冒頭で定義したほうが良い。
 */
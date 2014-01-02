/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 関数の再帰呼び出しのサンプル
 ******************************************************************************/
function factorial(n) {
    if (n != 0) { 
        return n * arguments.callee(n - 1); 
    }
    return 1;
}

document.writeln(factorial(5));

//argumentsオブジェクトのcalleeプロパティは現在実行中の関数自身を参照するための
//プロパティであるため、それを利用して再帰呼び出しが実装できる。



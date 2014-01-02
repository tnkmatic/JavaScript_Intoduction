/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * クロージャのサンプル
 ******************************************************************************/
function closure(init) {
    var counter = init;
    
    return function() {
        return ++counter;
    }
}

var myClosure1 = closure(1);
var myClosure2 = closure(100);

document.writeln(myClosure1());
document.write('<br>');
document.writeln(myClosure2());
document.write('<br>');
document.writeln(myClosure1());
document.write('<br>');
document.writeln(myClosure2());
document.write('<br>');

//closure(1), closure(100) の呼び出し時にそれぞれのスコープチェーンが生成される
//関数内関数(戻り値の関数)からcounterは参照されているため、上記で生成された
//スコープチェーンによって、counterの値が保持され続ける
//スコープチェーンでローカル変数が独立しているため、処理をひとつしかもたない場合には
//オブジェクトみたいな使い方ができる
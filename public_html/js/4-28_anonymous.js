/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 高階関数と匿名関数は密接に絡むサンプル
 ******************************************************************************/
function arrayWalk(data, f) {
    for (var key in data) {
        f(key, data[key]);
    }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary
        ,function (key, value) {
           document.writeln(key + '：' + value) ;
         });

/* 
 * 一度限りしか使用しない関数には、匿名関数(関数リテラル)を使用する
 * 呼び出し元と実際の処理を規定している関数の内容が分かりやすく可読性が向上する
 * また、不用意な関数名の重複を避けることができる
 */

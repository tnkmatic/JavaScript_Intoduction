/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * for in 構文のサンプル
 * 配列、連想配列、オブジェクトでのfor in 構文
 ******************************************************************************/

//配列の例
var member = ['山田', '鈴木', '佐藤'];
for (var i in member) {
    document.writeln("名前は " + member[i] + " です。");
}
document.writeln("<br>");

//連想配列の例
var triangle = {width:30, height:60};
for (var j in triangle) {
    document.writeln(j + " = " + triangle[j]);
}
document.writeln("<br>");

//オブジェクトの例
var book = new Object();
book.title = "JavaScript 本格入門";
book.publish = "技術評論社";
book.price = "3000";
for (var k in book) {
    document.writeln(k + " は " + book[k]);
}
document.writeln("<br>");
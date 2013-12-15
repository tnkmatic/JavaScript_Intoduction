/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 正規表現サンプル(RegExpオブジェクト)
 ******************************************************************************/
//new RegExp(正規表現) でのインスタンス化も可→その場合エスケープ対象は\になる
//以下は正規表現リテラルでの指定。正規表現リテラルは / + 正規表現 + / となる
var pattern = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル詳細サイトHTTP://www.web-deli.com/もよろしく。';

var result = str.match(pattern);

for(var i = 0; i < result.length; i++) {
    document.writeln(result[i]);
    document.writeln("<br>");
}


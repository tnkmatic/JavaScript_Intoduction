/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * RegExp.execメソッドによる正規表現マッチングサンプル
 ******************************************************************************/
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[]\w- .\/?%&=]*)?/gi;

var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.comもよろしく。';

//execメソッドの場合グローバル(g)検索が有効かどうかに関わらず一度の実行で結果は1つ
//execメソッドは最後にマッチングした文字位置を保持している
while ((result = p.exec(str)) != null) {
    document.writeln(result[0]);
    document.writeln("<br>");
}
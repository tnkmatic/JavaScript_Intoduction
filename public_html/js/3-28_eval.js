/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * eval関数のサンプル
 ******************************************************************************/
var str = 'document.writeln("eval関数サンプル")';
eval(str);

//eval関数は与えられた文字列をJavaScriptのコードとして評価/実行する
//第3者による任意のスクリプトが実行されてしまうリスク(セキュリティ)
//通常のコードを実行するよりもパフォーマンスが遅い
//の観点からeval関数の利用はJSONデータの解析くらいに抑えるべき(できるだけ使用しない)

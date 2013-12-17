/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * URIエンコード(クエリ情報のエスケープ)のサンプル
 ******************************************************************************/
var str = '!"#$%&()+-*@~_|;:,.';
document.writeln(encodeURI(str));
document.writeln('<br>');
document.writeln(encodeURIComponent(str));

//Globalオブジェクトの所属メソッド・プロパティはクラス名の指定なしでよい
//encodeURI・encodeURIComponentはエンコード対象に違いあり
//encodeURIComponentのみでエンコードされる→#$+/@;:,



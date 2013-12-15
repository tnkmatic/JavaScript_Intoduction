/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * マッチングの成否サンプル
 ******************************************************************************/

//RegExpオブジェクトのtestメソッドでの例
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サポートサイトはhttp://wings.msn.to/です。';
var str2 = 'サポートサイト「サーバサイド技術の学びの舎」をよろしく';
document.writeln(p.test(str1));
document.writeln('<br>');
document.writeln(p.test(str2));
document.writeln('<br>');

//Stringオブジェクトのsearchを利用した例
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サポートサイトはhttp://wings.msn.to/です。';
var str2 = 'サポートサイト「サーバサイド技術の学びの舎」をよろしく';
document.writeln(str1.search(p));
document.writeln('<br>');
document.writeln(str2.search(p));
document.writeln('<br>');
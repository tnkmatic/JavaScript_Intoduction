/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * delete演算子　動作確認
 * オペランドに指定した変数や配列要素、オブジェクトのプロパティを破棄
 *******************************************************************************/

var ary = ["JavaScript", "Ajax", "ASP.NET"];
document.writeln(delete ary[0]);    //true
document.writeln(ary);              //Ajax, ASP.NET
document.writeln("<br>");

var obj = {x:1, y:2};
document.writeln(delete obj.x); //true
document.writeln(obj.x);        //undefined
document.writeln("<br>");

var obj2 = {x:obj, y:2};
document.writeln(delete obj2.x);    //true
document.writeln(obj);
document.writeln("<br>");

var data1 = 1;
document.writeln(delete data1);     //false(明示的に宣言された変数は削除できない)
document.writeln(data1);            //1
document.writeln("<br>");

data2 = 10;
document.writeln(delete data2);     //true(明示的に宣言していないので)
document.writeln(data2);            //エラー(data2が存在しないので)
document.writeln("<br>");
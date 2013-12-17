/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * Object.constructorプロパティのサンプル
  ******************************************************************************/
var data = [];
if (typeof data == 'object'
        && data.constructor == Array) {
    document.writeln('変数dataはArrayオブジェクトのインスタンスです');
    document.writeln('<br>');
}

//typeof演算子の場合、参照の値については、"object"を返す
//Object.constructorプロパティは、インスタンス生成に利用されたコンストラクタ
//(Function)を返す

var data = [];
if (typeof data == 'object'
        && data instanceof Array) {
    document.writeln('変数dataはArrayオブジェクトのインスタンスです');
}

//constructorプロパティはinstanceof演算子に書き換えられる


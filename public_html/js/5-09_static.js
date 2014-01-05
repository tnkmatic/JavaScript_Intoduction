/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * クラスの静的メソッド、静的プロパティのサンプル
 ******************************************************************************/

//コンストラクタ
var Area = function() {}; 

//静的プロパティ
Area.version = 1.0; 

//静的メソッド
Area.triangle = function(base, height) {
    return base * height / 2;
};

//静的メソッド
Area.diamond = function(width, height) {
  return width * height / 2;  
};

document.writeln('Areaクラスのバージョン：' + Area.version);
document.writeln('<br>');
document.writeln('三角形の面積：' + Area.triangle(5, 3));
document.writeln('<br>');

var a = new Area();

//エラーとなる
document.writeln('菱形の面積：' + a.diamond(10, 2));

/*
 * prototypeプロパティには読み取り専用プロパティを用意できるが、prototypeプロパティ
 * 自体、あくまで「インスタンス」から参照されることを目的としたオブジェクトで
 * あるため、静的プロパティ/メソッドは、コンストラクタ変数に直接追加する
 */

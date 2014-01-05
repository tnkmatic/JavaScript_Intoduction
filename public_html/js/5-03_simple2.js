/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * シンプルなクラス定義のサンプル
 ******************************************************************************/
var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return this.lastName + ' ' + this.firstName;
    }
};

var mem = new Member('田中', '太郎');
document.writeln(mem.getName());

/*
 * JavaScriptでは関数(Functionオブジェクト)に暮らすとしての役割を与えている
 * JavaScriptには暮らすがなく「プロトタイプ(雛形)」の概念が存在(プロタイプベースのオブジェクト指向)
 * new演算子によってオブジェクトを生成することを想定した関数オブジェクトがコンストラクタとなる
 * メソッドは値が関数オブジェクトであるプロパティの位置づけである
 */
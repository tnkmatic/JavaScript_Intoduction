/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 継承関係を動的に変更するサンプル
 ******************************************************************************/
var Animal = function(){};

Animal.prototype = {
    walk : function() {
        document.writeln('トコトコ・・・');
    }
};

var SuperAnimal = function(){};
SuperAnimal.prototype = {
    walk : function() {
        document.writeln('ダダダダダダダ！');
    }
};

var Dog = function(){};

Dog.prototype = new Animal();
var d1 = new Dog();
d1.walk();
document.writeln('<br>');

Dog.prototype = new SuperAnimal();
var d2 = new Dog();
d1.walk();
document.writeln('<br>');
d2.walk();

/*
 * プロトタイプチェーンはインスタンス生成時に確定され、その後、プロトタイププロパティ
 * の継承元が変更されたとしても、インスタンス生成時のものが保存される
 */
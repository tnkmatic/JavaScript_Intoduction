/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * プロトタイプチェーンのサンプル(継承)
 ******************************************************************************/

//基底クラス
var Animal = function() {};
Animal.prototype = {
    walk : function() {
        document.writeln('トコトコ・・・')}
};

//継承クラス
var Dog = function() {};
Dog.prototype = new Animal()
Dog.prototype.bark = function() {
        document.writeln('ワンワン・・・')};
    
var d = new Dog();
d.walk();
document.writeln('<br>');
d.bark();


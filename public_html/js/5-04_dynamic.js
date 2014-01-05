/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * インスタンス化した後にメソッドを動的に追加するサンプル
 ******************************************************************************/
var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var mem = new Member('太郎', '田中');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
}

document.writeln(mem.getName());

//Memberそのものではなく、生成されたインスタンスに対してgetNameメソッドを追加している
//JavaqScriptでは同一クラスを元に生成されたインスタンスであっても、
//メンバーやメソッドは同一とは限らない
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * prototypeプロパティのサンプル
 ******************************************************************************/
var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function() {
    return this.lastName + ' ' + this.firstName;
};

var mem = new Member('太郎' , '田中');
document.writeln(mem.getName());
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * prototypeプロパティの内容をオブジェクトプロパティで記述したサンプル
 ******************************************************************************/
var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype = {
    getName : function() {
        return this.lastName + ' ' + this.firstName;
    },
    toString : function() {
        return this.lastName + this.firstName;
    }
};

var mem = new Member('太郎', '田中');
document.writeln(mem.getName());
document.writeln('<br>');
document.writeln(mem.toString());
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 継承をクラスベースオブジェクト指向のように実現するサンプル
 ******************************************************************************/

/*
 * @param insntance インスタンス化した派生クラス
 * @param baseClass 基底クラス名
 * @param baseClassArgs 基底クラスのコンストラクタ引数(Array)
 */
function initilizeBase(instance, baseClass, baseClassArgs) {
    //基底クラスのコンストラクタをinsntanceのメソッドとしてコール
    baseClass.apply(instance, baseClassArgs);
    
    //インスタンスのコンストラクタ(クラス定義自身)のprototypeプロパティに
    //基底クラスのprototypeプロパティの内容をコピー
    for (prop in baseClass.prototype) {
        var copyToProto = instance.constructor.prototype;
        if (!copyToProto[prop]) {
            copyToProto[prop] = baseClass.prototype[prop];
        }
    }
}

//Memberクラスの定義(基底クラス)
var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
};
Member.prototype = {
        getName : function() {
            return this.lastName + ' ' + this.firstName;
        }
};

//SpecialMemeberクラスの定義(派生クラス)
var SpecialMember = function(firstName, lastName, role) {
    initilizeBase(this, Member, [firstName, lastName]);
    this.role = role;
};
SpecialMember.prototype = {
    //派生クラス独自メソッド
    isAdministrator : function() {
        return (this.role == 'Administrator');
    },
    
    //オーバーライドメソッド
    getName : function() {
        //ドット演算子
        var baseResult = Member.prototype.getName.apply(this, []);
        //ブラケット構文
        //var baseResult = Memeber.prototype['getName'].apply(this, []);
        return baseResult + '(' + this.role + ')';
    }
};

var mem = new SpecialMember('太郎', '田中', 'Administrator');
document.writeln('名前：' + mem.getName());
document.writeln('<br>');
document.writeln('管理者？：' + mem.isAdministrator());
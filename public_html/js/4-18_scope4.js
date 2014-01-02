/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 関数リテラルとFunctionコンストラクタのスコープの解釈の違いのサンプル
 ******************************************************************************/
var scope = 'Global Variable';

checkScope();

function checkScope() {
    var scope = 'Local Variable';
    
    //関数リテラル
    var f_literal = function() {
        return scope;
    };
    document.writeln('関数リテラルの場合：' + f_literal());
    
    document.writeln('<br>');
    
    //Functionコンストラクタ
    var f_constructor = new Function('return scope');
    document.writeln('Functionコンストラクタの場合：' + f_constructor());
}

//この動作はJavaScriptの仕様どおりの動きである
//Functionコンストラクタは原則として使用しないようにすればこのような誤解は防げる
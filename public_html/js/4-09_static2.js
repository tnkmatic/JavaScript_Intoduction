/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 4-08_static.js を関数リテラルにした場合にどうなるかのサンプル
 ******************************************************************************/
document.writeln('三角形の面積：' + triangle(5, 2));

var triangle = function(base, height) {
    return base * height / 2;
};

/*******************************************************************************
 * 関数リテラルの場合は実行時に評価されるためエラーとなってしまう。
*******************************************************************************/ 


/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 名前付き引数をもつ関数のサンプル
 ******************************************************************************/
function triangle(args) {
    if (args.base == undefined) {
        args.base = 1;
    }
    
    if (args.height == undefined) {
        args.height = 1;
    }
    
    return args.base * args.height / 2;
}

document.writeln(triangle({base:5, height:4}));

//名前付き引数 = 引数を匿名オブジェクトとして受け取る
//ということである。
//呼び出し時の {} はオブジェクトリテラルで匿名オブジェクトを表している

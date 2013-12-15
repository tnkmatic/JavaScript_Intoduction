/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*******************************************************************************
 * 日付/時刻の差分を求める　サンプル
 ******************************************************************************/
var dat1 = new Date(2010, 4, 15);
var dat2 = new Date(2010, 5, 20);

//差を計算 getTimeは1970/1/1からの経過ミリ秒
//ミリ秒を日付にするため、(1000ミリ秒 * 60秒 * 60分 * 24時間)している
var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);
document.writeln("2010/4/15と2010/5/20の日数は " + diff + " 日です");
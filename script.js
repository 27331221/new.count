'use strict';
{
  console.log('Hello,World');
  const timer=document.getElementById('timer');

  
  function countUp(){
    const from = new Date("2020/8/11/");
    let to = new Date();
    
    // 経過時間をミリ秒で取得
    const ms = to.getTime() - from.getTime();
    // ミリ秒を日付に変換(端数切捨て)
    const days = Math.floor(ms / (1000*60*60*24));
    const h = Math.floor(ms/(1000*60*60));
    const m = Math.floor(ms/(1000*60));
    const s = String(Math.floor(ms/(1000))%60).padStart(2,'0');



    timer.textContent=`${days}日${h%24}時間${m%60}分${s%60}秒`;
    console.log(`${days}日${h%24}時間${m%60}分${s}秒`);
   
    setTimeout(countUp,100);
  }

  countUp();
  
}
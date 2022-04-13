//モーダル部分のjs
$(function(){
    // 変数に要素を入れる
    var open = $('.modal-open'),
      close = $('.modal-close'),
      container = $('.modal-container');
  
    //開くボタンをクリックしたらモーダルを表示する
    open.on('click',function(){ 
      container.addClass('active');
      return false;
    });
  
    //閉じるボタンをクリックしたらモーダルを閉じる
    close.on('click',function(){  
      container.removeClass('active');
    });
  
    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click',function(e) {
      if(!$(e.target).closest('.modal-body').length) {
        container.removeClass('active');
      }
    });
  });

//日記クラス
class Nikki{
    constructor(date,title,honbun){
        this.date=date;
        this.title=title;
        this.honbun=honbun;
        console.log("日記クラスを作成した");
    }
}

//日記クラスを要素とする配列
let Nikki_array = [];

//日記を作る
function makeNikki(date,title,honbun){
    Nikki_array.push(new Nikki(date,title,honbun));
    console.log("日記を作成しました");
    console.log(`日付：${Nikki_array[Nikki_array.length-1].date}`);
    console.log(`タイトル：${Nikki_array[Nikki_array.length-1].title}`);
    console.log(`本文：${Nikki_array[Nikki_array.length-1].honbun}`);
}

//日記全読み
function lookThroughNikki(){
    if(Nikki_array.length === 0){
        return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">日記はありません</p></div>');
    }
    
    for(let i = 0;i<Nikki_array.length;i++){
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">ーーーーーーーーーーーーーーー</p></div>');
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+Nikki_array[i].honbun+'</p></div>');
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+Nikki_array[i].title+'</p></div>');
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+Nikki_array[i].date+'</p></div>');
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">項番'+i+'↓</p></div>');
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">ーーーーーーーーーーーーーーー</p></div>');
        console.log(i);
        console.log(Nikki_array[i].date);
        console.log(Nikki_array[i].titile);
        console.log(Nikki_array[i].honbun);
    }

}

//日記チラ見
function lookOverNikki(){
    if(Nikki_array.length===0){
        return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">日記はありません</p></div>'); 
    }
    for(let i = 0;i<Nikki_array.length;i++){
        $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+i+':'+Nikki_array[i].date+':'+Nikki_array[i].title+'</p></div>');
   }
}

//日記を削除
function deleteNikki(index){
    if(Nikki_array.length===0){
        return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">日記はありません</p></div>'); 
    }
    Nikki_array.splice(index,1);
}

//項番で検索して日記を見る
function watchNikki(kouban){
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">ーーーーーーーーーーーーーーー</p></div>');
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+Nikki_array[kouban].honbun+'</p></div>');
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+Nikki_array[kouban].title+'</p></div>');
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">'+Nikki_array[kouban].date+'</p></div>');
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">項番'+kouban+'の日記はこちらです</p></div>');
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">ーーーーーーーーーーーーーーー</p></div>');
}

//ライトボタン押したら
$("#write").click(function () {
    if($("#date").val()==="" || $("#title").val()==="" || $("#honbun").val()===""){
        return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">日付、タイトル、本文、全部入れてね</p></div>');
    }
    nikki_date = $("#date").val();
    nikki_title = $("#title").val(); 
    nikki_honbun = $("#honbun").val();
    
    makeNikki(nikki_date,nikki_title,nikki_honbun);

    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">日記を作成しました。</p></div>');
    
});

//リードボタン押したら
$("#read").click(function(){
    lookThroughNikki();
});

//チラ見ボタン押したら
$("#glance").click(function(){
    lookOverNikki();
});

//独り言ボタン押したら
$("#tell").click(function(){
    //空で送信はダメ
    if($("#tell-input").val()===""){
        return $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">'+ノーコメ+'</p></div>');
    }
    //ライトボタンと同じ
    if($("#tell-input").val()==="ライト"){
        if($("#date").val()==="" || $("#title").val()==="" || $("#honbun").val()===""){
            $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">'+$("#tell-input").val()+'</p></div>');
            return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">日付、タイトル、本文、全部入れてね</p></div>');
        }
        nikki_date = $("#date").val();
        nikki_title = $("#title").val(); 
        nikki_honbun = $("#honbun").val();
        
        $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">'+$("#tell-input").val()+'</p></div>');
        makeNikki(nikki_date,nikki_title,nikki_honbun);
    
        return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">日記を作成しました。</p></div>');
    
    }
    //リードボタンと同じ
    if($("#tell-input").val()==="リード"){
        $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">'+$("#tell-input").val()+'</p></div>');
        return lookThroughNikki();
    }
    //チラ見ボタンと同じ
    if($("#tell-input").val()==="チラ見"){
        $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">'+$("#tell-input").val()+'</p></div>');
        return lookOverNikki();
    }
    //独り言
    $('.zoon-ue').after('<div class="balloon_r"><div class="faceicon"><img src="CEO.jpeg" alt="" ></div><p class="says">'+$("#tell-input").val()+'</p></div>');
});

//項番で日記を検索
$("#find").click(function(){
    if($("#find-input").val()===""){
        return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">数字を入れてね</p></div>');
    }
    watchNikki($("#find-input").val());
});

//項番で日記を削除
$("#delete").click(function(){
    if($("#delete-input").val()===""){
        return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">数字を入れてね</p></div>');
    }
    deleteNikki($("#delete-input").val());
    $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">項番'+$("#delete-input").val()+'を削除しました</p></div>');
});

//日記をローカルストレージに保存
$("#local-hozon").click(function(){
    if(Nikki_array.length===0){
        return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">ローカルに日記はありません</p></div>'); 
    }
    if (window.localStorage) {
        let jsonNikki = JSON.stringify(Nikki_array, undefined, 1);
        localStorage.setItem('日記配列', jsonNikki);
    }
});

//ローカルストレージの日記を取得
$("#local-yobidasi").click(function(){
    if (window.localStorage) {
        if(localStorage.getItem('日記配列')=== null){
            return $('.zoon-ue').after('<div class="balloon_l"><div class="faceicon"><img src="Alexa.jpeg" alt="" ></div><p class="says">ローカルに日記はありません</p></div>'); 
         }
        let json = localStorage.getItem('日記配列');
        Nikki_array = JSON.parse(json);
    }
});

//ローカルストレージの日記を削除
$("#local-delete").click(function(){
    if (window.localStorage) {
        localStorage.removeItem('日記配列');
    }
});

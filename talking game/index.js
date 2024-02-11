"use strict";
// 画面を開いた時に、現在の時間を取得
window.addEventListener("load", () => {
  const time = new Date().getHours();

  // もし現在の時間が午後4時以上午後6時未満までだったら夕方
  if (time >= 16 && time < 18) {
    document.body.style.backgroundImage = "url(/img/room_evening.jpg)";
    console.log("もう4時だね。");

    // もし現在の時間が午後6時以上24時未満までだったら夜
  } else if (time >= 18 && time < 24) {
    document.body.style.backgroundImage = "url(/img/room_night_lightON.jpg)";
    console.log("夜だね。");

    // もし現在の時間が24時以上午前6時未満までだったら深夜
  } else if (time >= 24 && time < 6) {
    document.body.style.backgroundImage = "url(/img/room_night_lightOFF.jpg)";
    console.log("真っ暗だね〜そこのランプを触るとつけられるよ！");

    // それ以外の時間帯だったら朝・昼
  } else {
    document.body.style.backgroundImage = "url(/img/room_noon.jpg)";
  }
});

// ランプの電気ON/OFFの処理
const lamp = document.getElementById("lamp");

lamp.addEventListener("click", () => {
  // ランプをクリックした回数をカウント
  let clickCount = lamp.value++;

  // 奇数回押されたら、背景をランプがついてるものに変える
  if (clickCount % 2 === 1) {
    document.body.style.backgroundImage = "url(/img/room_night_lampON.jpg)";
    console.log("ちょっと明るくなったね。");

    // 偶数回押されたら、背景を夜の部屋に変える
  } else if (clickCount % 2 === 0) {
    document.body.style.backgroundImage = "url(/img/room_night_lightON.jpg)";
  }
});

// 決定ボタンの処理
const button = document.getElementById("decision");

button.addEventListener("click", () => {
  // テキストエリアの文字列を取得する
  const box = document.getElementById("box").value;

  // おはよう返答パターン
  const morningGreeting = [
    "おはよう",
    "おはよう！",
    "おはよう!",
    "おは",
    "おはー",
    "おは〜",
    "おはよ"
  ];

  // おはよう返答パターンをランダムで返す
  const morning =
    morningGreeting[Math.floor(Math.random() * morningGreeting.length)];

  const talk = [
    "どうしたの？",
    morning,
    "こんにちは！",
    "こんばんわ！",
    "？？？",
    "おやすみ！"
  ];

  const randomTalk = [
    "じーっ...",
    "お腹すいたな〜",
    "この部屋可愛いね、",
    "ゲームしたいな〜",
    "私が理解できない言葉には返答できないよ〜",
    "私の周りに飛んでるやつなんだろ？"
  ];

  // 配列の値をランダムに取り出す
  const freeTalk = randomTalk[Math.floor(Math.random() * randomTalk.length)];

  // 会話パターン
  if (box === "ねえねえ") {
    console.log(talk[0]);
  } else if (box === "おはよう") {
    console.log(talk[1]);
  } else if (box === "こんにちは") {
    console.log(talk[2]);
  } else if (box === "こんばんは") {
    console.log(talk[3]);
  } else if (box === "おやすみ") {
    console.log(talk[5]);

    // boxの中に一文字も撃たれてなかったら、ランダムで話しかけてくる
  } else if (box === "") {
    console.log(freeTalk);
    // 一文字以上入力されていて、会話パターンにない言葉だったら
  } else {
    console.log(talk[4]);
  }
});

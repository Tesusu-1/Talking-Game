"use strict";
const message = document.getElementById("message");

/* 表示している文字を消す */
function deleteTime() {
  setTimeout(() => {
    message.innerText = "";
  }, "2500");
}

/* 画面を開いた時に、現在の時間を取得 */
window.addEventListener("load", () => {
  const time = new Date().getHours();

  /* もし現在の時間が午後4時以上午後6時未満までだったら夕方 */
  if (time >= 16 && time < 18) {
    document.body.style.backgroundImage = "url(/img/room_evening.jpg)";
    message.innerText = "もう4時だね〜";
    deleteTime();

    /* もし現在の時間が午後6時以上24時未満までだったら夜 */
  } else if (time >= 18 && time < 24) {
    document.body.style.backgroundImage = "url(/img/room_night_lightON.jpg)";
    message.innerText = "夜だね。";
    deleteTime();

    /* もし現在の時間が24時以上午前6時未満までだったら深夜 */
  } else if (time >= 24 && time < 6) {
    document.body.style.backgroundImage = "url(/img/room_night_lightOFF.jpg)";
    message.innerText =
      "真っ暗だね〜そこのランプに触ると明かりをつけられるよ！";
    deleteTime();

    /* それ以外の時間帯だったら朝・昼 */
  } else {
    document.body.style.backgroundImage = "url(/img/room_noon.jpg)";
  }
});

// ランプの電気ON/OFFの処理
const lamp = document.getElementById("lamp");

lamp.addEventListener("click", () => {
  // ランプをクリックした回数をカウント
  let clickCount = lamp.value++;

  /* 奇数回押されたら、背景をランプがついてるものに変える */
  if (clickCount % 2 === 1) {
    document.body.style.backgroundImage = "url(/img/room_night_lampON.jpg)";
    message.innerText = "ちょっと明るくなったね";
    deleteTime();

    /* 偶数回押されたら、背景を夜の部屋に変える */
  } else if (clickCount % 2 === 0) {
    document.body.style.backgroundImage = "url(/img/room_night_lightON.jpg)";
    message.innerText = "";
  }
});

/* 決定ボタンの処理 */
const button = document.getElementById("decision");

button.addEventListener("click", () => {
  // テキストエリアの文字列を取得する
  const box = document.getElementById("box").value;

  /* おはよう返答パターン */
  const morningGreeting = [
    "おはよう",
    "おはよう！",
    "おはよう!",
    "おは",
    "おはー",
    "おは〜",
    "おはよ",
  ];

  // おはよう返答パターンをランダムで返す
  const morning =
    morningGreeting[Math.floor(Math.random() * morningGreeting.length)];

  /* 会話パターン */
  const talk = [
    "どうしたの？",
    morning,
    "こんにちは！",
    "こんばんわ！",
    "？？？",
    "おやすみ！",
  ];

  /* 何も入力していない時の会話パターン */
  const randomTalk = [
    "じーっ...",
    "お腹すいたな〜",
    "この部屋可愛いね。",
    "ゲームしたいな〜",
    "私が理解できない言葉には返答できないよ〜",
    "私の周りに飛んでるやつなんだろ？",
  ];

  // 配列の値をランダムに取り出す
  const freeTalk = randomTalk[Math.floor(Math.random() * randomTalk.length)];

  /* 会話パターン */
  if (box === "ねえねえ") {
    message.innerText = talk[0];
    deleteTime();
  } else if (box === "おはよう") {
    message.innerText = talk[1];
    deleteTime();
  } else if (box === "こんにちは") {
    message.innerText = talk[2];
    deleteTime();
  } else if (box === "こんばんは") {
    message.innerText = talk[3];
    deleteTime();
  } else if (box === "おやすみ") {
    message.innerText = talk[5];
    deleteTime();

    /* boxの中に一文字も撃たれてなかったら、ランダムで話しかけてくる */
  } else if (box === "") {
    message.innerText = freeTalk;
    deleteTime();
    /* 一文字以上入力されていて、会話パターンにない言葉だったら */
  } else {
    message.innerText = talk[4];
    deleteTime();
  }
});

let roulette;
let image = document.getElementById("image");
let src = "img/image1.png";
let result;

// ルーレットを開始
function start() {
  roulette = setInterval(function () {
    // 1〜139の範囲でランダムな数値を作成
    let idx = Math.floor(Math.random() * 139) + 1;
    // ルーレット
    // document.getElementById("image").innerHTML = idx;

    if (idx<=9) {
      idx = "00" + idx;
      // console.log(idx);
    } else if (idx<=99) {
      idx = "0" + idx;
      // console.log(idx);
    }

    result = src.replace('1', idx);
    // image.innerHTML = idx;
    image.src = result;
  }, 70);
}

// ルーレットを停止
function stop() {
  if (roulette) {
    clearInterval(roulette);
  }
}


// // 'use strict';
// (function () {
//   const setImage = [
//     "img/氷.png",
//     "img/風.png",
//     "img/木.png",
//     "img/雷.png"
//   ];
//   const view = document.getElementById('view');
//   const prev = document.getElementById('prev');
//   const next = document.getElementById('next');
//   const thumbnailList = document.getElementById('thumbnailList');

//   let list;
//   let image;
//   let current = 0;
//   let clickBtn = true;


//   function createThumbnailItem() {
//     for (let i = 0; i < setImage.length; i++) {
//       list = document.createElement('li');
//       image = document.createElement('img');
//       image.src = setImage[i];
//       list.appendChild(image);
//       thumbnailList.appendChild(list);

//       if (i === 0) {
//         list.classList.add("selected");
//       }

//       list.addEventListener('click', function () {
//         view.src = this.children[0].src;

//         for (let j = 0; j < thumbnailList.children.length; j++) {
//           thumbnailList.children[j].classList.remove("selected");
//         };
//         this.classList.add("selected");
//         let currentImage = this.children[0].src.slice(-6, -4);
//         current = Number(currentImage) - 1;
//       });
//     };
//   }
//   createThumbnailItem();


//   prev.addEventListener('click', function () {
//     if (clickBtn === true) {
//       clickBtn = false;
//       view.classList.add("appear");
//       thumbnailList.children[current].classList.remove("selected");
//       current--;
//       if (current < 0) {
//         current = setImage.length - 1;
//       }
//       view.src = setImage[current];
//       thumbnailList.children[current].classList.add("selected");
//       setTimeout('view.classList.remove("appear");', 2100);
//       setTimeout(function () {
//         clickBtn = true;
//       }, 2100);
//     } else {
//       return false;
//     }
//   });

//   next.addEventListener('click', function () {
//     if (clickBtn === true) {
//       clickBtn = false;
//       view.classList.add("appear");
//       thumbnailList.children[current].classList.remove("selected");
//       current++;
//       if (current > setImage.length - 1) {
//         current = 0;
//       }
//       view.src = setImage[current];
//       thumbnailList.children[current].classList.add("selected");
//       setTimeout('view.classList.remove("appear");', 2100);
//       setTimeout(function () {
//         clickBtn = true;
//       }, 2100);
//     } else {
//       return false;
//     }
//   });

//   function autoPlay() {
//     setTimeout(function () {
//       next.click();
//       autoPlay();
//     }, 5000);
//   }
//   window.onload = autoPlay();
// })();

let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let PC = document.querySelector(".PC");
let win = document.querySelector(".win");
let winner = document.querySelector(".winner");
let tied = document.querySelector(".tied");
let tie = document.querySelector(".tie");
let scoreCon = document.querySelector(".score-container");
let option = document.querySelector(".option");
console.log(computer);
let triangle = document.querySelectorAll(".triangle");
let random = Math.floor(Math.random() * 3);
let userscore = JSON.parse(localStorage.getItem("userscore"));
let scoreElement = document.getElementById("userscore");
let PCscore = JSON.parse(localStorage.getItem("PCscore"));
let PCscoreElement = document.getElementById("PCscore");
scoreElement.innerText = userscore;
PCscoreElement.innerText = PCscore;
let count = 0;
let rule = document.querySelector(".rule");
let rulebook = document.querySelector(".rule-book");
let next = document.querySelector(".next");
let hurrayPage = document.querySelector(".hurray");

con.forEach((element, index) => {
  element.addEventListener("click", () => {
    triangle.forEach((item) => {
      item.style.display = "none";
    });
    con.forEach((item) => {
      item.style.display = "none";
    });
    setTimeout(() => {
      user.style.opacity = "1";
      setTimeout(() => {
        element.style.display = "block";
        element.classList.add("show");
        setTimeout(() => {
          PC.style.opacity = "1";
          setTimeout(() => {
            computer[random].style.display = "block";
            computer[random].classList.add("right");
          }, 1000);
          setTimeout(() => {
            if (
              (index == 0 && random == 1) ||
              (index == 1 && random == 2) ||
              (index == 2 && random == 0)
            ) {
              win.style.display = "grid";
              winner.innerText = "You Win";
              next.style.display = "flex"; 
              hurrayPage.style.display = "flex";
              scoreCon.style.display = "none";
              option.style.display = "none";
              user.style.display = "none";
              PC.style.display = "none";
              
              win.style.display = "none";
              play.style.display = "flex";
              count = userscore;
              count++;
              scoreElement.innerText = count;
              localStorage.setItem("userscore", JSON.stringify(count));
            } else if (
              (index == 0 && random == 2) ||
              (index == 1 && random == 0) ||
              (index == 2 && random == 1)
            ) {
              win.style.display = "grid";
              winner.innerText = "You Lost";
              count = PCscore;
              count++;
              PCscoreElement.innerText = count;
              localStorage.setItem("PCscore", JSON.stringify(count));
            } else {
              tie.style.display = "grid";
              tied.innerText = "TIE UP";
            }
          }, 500);
        }, 100);
      }, 100);
    }, 100);
  });
});
let play = document.querySelector(".play");
play.addEventListener("click", () => {
  option.style.display = "flex";
  user.style.display = "none";
  PC.style.display = "none";
  // console.log("clicked play");
  // window.location.reload();
});

rule.addEventListener("click", () => {
  rulebook.style.display = "grid";
});
let close = document.querySelector(".close");
close.addEventListener("click", () => {
  setTimeout(() => {
    rulebook.style.display = "none";
  }, 100);
});
next.addEventListener("click", () => {
  next.style.display = "none"; // Hide "Next" button
  // Reset the game (or you can also reload the page)
});

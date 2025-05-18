var prg = document.querySelector(".progresas");
var count = 0;
var H3 = document.querySelector("h3");

var int = setInterval(function () {
  count++;

  if (count > 100) {
    clearInterval(int);
    H3.innerText = "Download Completed ✅"; // show final message
    return;
  }

  prg.style.width = count + "%";
  H3.innerText = "Downloading... " + count + "%";
}, 100);

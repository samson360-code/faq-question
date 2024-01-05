function answer() {
    var answer = document.getElementsByClassName("answer");
    var minus = document.getElementsByClassName("minus");
    var plus = document.getElementsByClassName("plus");
    Array.from(plus).forEach(function (element, index) {
      element.onclick = function () {
        minus[index].style.display = "block";
        answer[index].style.display = "block";
        element.style.display = "none";
      };
    });
    Array.from(minus).forEach(function (element, index) {
      element.onclick = function () {
        plus[index].style.display = "block";
        answer[index].style.display = "none";
        element.style.display = "none";
      };
    });
  }
  setTimeout(answer(), 1000);







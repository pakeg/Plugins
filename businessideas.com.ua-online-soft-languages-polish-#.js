// businessideas.com.ua/online-soft/languages/polish/#
// block request for go.js
// add to console

var $ur;
var $ls;
var $ln;
var count = 0;

function lessons($ur, $ls, $ln) {
  $.ajax({
    url: "response1.php?ur=" + $ur + "&start=" + $ls + "&par=" + $ln,
    success: function (data) {
      $(".result1").html(data);
    },
  });
  $.ajax({
    url: "response2.php?ur=" + $ur + "&start=" + $ls + "&par=" + $ln,
    success: function (data) {
      $(".result2").html(data);
    },
  });
}

var $i = 0;
var $vd;
var $va1;
var $va2;

$("a.but").live("click", function () {
  $va2 = this.id;
  if ($i == 0) {
    $va1 = this.id;
  }
});
$("div.but").live("click", function () {
  if ($i == 0) {
    $vd = this.id;
    $(this).css({ background: "#7BE37B" });
    $i = 1;
  } else {
    if ($va1 == $va2) {
      $(this).slideToggle("slow");
      $("#" + $vd).slideToggle("slow");
      count++;
      if (count == $ln) {
        var str = "";
        var nls = $ls / 10 + 2;
        var _ur = $ur.replace(/[a-zA-Z]/g, "").trim();
        var lesson = "sample" + _ur;
        var nextLesson = "sample" + (+_ur + 1);

        var main = $(".menubut").children("[class*=" + lesson + "]");
        var lenLesson = main.length;
        if (nls <= lenLesson) {
          str = lesson + "_" + nls;
        } else {
          str = nextLesson + "_" + 1;
        }
        count = 0;
        document.getElementsByClassName(str)[0].click();
      }
    } else {
      alert("Ошибка!!!");
      count = 0;
      lessons($ur, $ls, $ln);
    }
    $i = 0;
    $("#" + $vd).css({ background: "#FFFF77" });
  }
});
const menubut = document.querySelector(".menubut");

menubut.onclick = function (e) {
  const target = e.target;
  const arrTarget = target.getAttribute("class").substring(6).split("_");
  $ur = "less" + arrTarget[0];
  $ls = 10 * (arrTarget[1] - 1);
  $ln = 10;
  const title =
    document
      .querySelector(".sample" + arrTarget[0] + "_1")
      .previousElementSibling.textContent.replace(/[0-9]|:|\./g, "")
      .trim() +
    " урок " +
    arrTarget[1];
  const intro = (document.querySelector(".intro").innerText = title);
  target.style.backgroundColor = "#7BE37B";
  lessons($ur, $ls, $ln);
};

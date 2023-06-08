// businessideas.com.ua/online-soft/languages/polish/#
// add `var count = 0` to console
// in go.js source file 
// change after $("div.but").live('click', 

function () {
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
        var lesson = "sample" + $ur.slice(-1);
        var nextLesson = "sample" + (+$ur.slice(-1) + 1);

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

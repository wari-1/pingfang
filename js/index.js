var content = [
  {
    id: "慕尼的二黑",
    focus: "关注",
    src: "./images/guanzhu-img.png",
    describe:
      "不要小看厨房的面积只有20平米不到的区域，装修起来花上10W元的都有，所以厨房的装修注意点很多。",
    pinglun: "23",
    shoucang: "225",
    zan: "105"
  },
  {
    id: "慕尼的",
    focus: "关注",
    src: "./images/guanzhu-img.png",
    describe:
      "不要小看厨房的面积只有20平米不到的区域，装修起来花上10W元的都有，所以厨房的装修注意点很多。",
    pinglun: "23",
    shoucang: "225",
    zan: "105"
  },
  {
    id: "慕尼",
    focus: "关注",
    src: "./images/guanzhu-img.png",
    describe:
      "不要小看厨房的面积只有20平米不到的区域，装修起来花上10W元的都有，所以厨房的装修注意点很多。",
    pinglun: "23",
    shoucang: "225",
    zan: "105"
  },
  {
    id: "慕",
    focus: "关注",
    src: "./images/guanzhu-img.png",
    describe:
      "不要小看厨房的面积只有20平米不到的区域，装修起来花上10W元的都有，所以厨房的装修注意点很多。",
    pinglun: "23",
    shoucang: "225",
    zan: "105"
  }
];
content.forEach(function(item) {
  var box = document.createElement("div");
  box.className = "box";
  box.innerHTML =
    "<a href='javascript:void(0)'>" +
    "<div class='biaoti1 clearfix'>" +
    "<h4>" +
    item.id +
    "</h4>" +
    "<a href='javascript:void(0)' class='focus'>" +
    item.focus +
    "</a>" +
    "</div>" +
    "<img src='" +
    item.src +
    "'alt='' />" +
    "<p> " +
    item.describe +
    "  </p>" +
    "<div class='bottom clearfix'>" +
    "<button class='btn'></button>" +
    "<div class='right'>" +
    "<div class='pinglun clearfix'>" +
    "<button class='btn'></button>" +
    "<span>" +
    item.pinglun +
    "</span>" +
    "</div>" +
    "<div class='shoucang clearfix'>" +
    "<span class='collect iconfont icon-collection-b'></span>" +
    "<span class='num'>" +
    item.shoucang +
    "</span>" +
    "</div>" +
    "<div class='zan clearfix'>" +
    "<span class='dianZan iconfont icon-dianzan'></span>" +
    "<span class='num'>" +
    item.zan +
    "</span>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</a>";
  document.querySelector(".main1 .inner").appendChild(box);
  document.querySelector(".main1 .inner").appendChild(box);
});
$(".focus").tap(function() {
  if ($(this).attr("class") === "focus") {
    $(this).addClass("focus1");

    $(this).text("已关注");
    console.log("$(this).innerHTML");
  } else {
    $(this).removeClass("focus1");
    $(this).text("关注");
  }
});
$(".collect ").tap(function() {
  if ($(this).attr("class") === "collect iconfont icon-collection-b") {
    $(this).addClass("clickAgain");
    var num =
      $(this)
        .siblings()
        .text() * 1;
    num++;
    console.log(num);

    $(this)
      .siblings()
      .text(num);
  } else {
    $(this).removeClass("clickAgain");
    var num1 =
      $(this)
        .siblings()
        .text() * 1;
    num1--;
    $(this)
      .siblings()
      .text(num1);
  }
});
$(".dianZan").tap(function() {
  if ($(this).attr("class") === "dianZan iconfont icon-dianzan") {
    $(this).addClass("clickAgain");
    var num =
      $(this)
        .siblings()
        .text() * 1;
    num++;
    console.log(num);

    $(this)
      .siblings()
      .text(num);
  } else {
    $(this).removeClass("clickAgain");
    var num1 =
      $(this)
        .siblings()
        .text() * 1;
    num1--;
    $(this)
      .siblings()
      .text(num1);
  }
});

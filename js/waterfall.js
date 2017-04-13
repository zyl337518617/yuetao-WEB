function autoLoading() {
    var i= 0;
    function getData() {
        $.post("json/waterfall.json", function (data) {
            var loadImg = "";
            i++;
            for (var k in data) {
                loadImg = '<div class="goods_item"><a href="###"' +
                    ' class="imgBox"><img src="images/waterfall/' + data[k]["g_url"] + '"/></a><a href="###"' +
                    ' class="goods_info"><p class="inf">' + data[k]["g_detail"] + '</p></a><div' +
                    ' class="goods_price"><b class="new_price">现价 ￥' + data[k]["g_discount"] + '</b><p' +
                    ' class="old_price">原价 ￥<span>' + data[k]["g_price"] + '</span></p><span' +
                    ' class="fav_num"></span></div></div>'
                $("#pubu").append(loadImg);
            }
        })
    }

    //获取滚动条当前的位置
    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    //获取当前窗口可视范围的高度
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
    }

    //获取文档完整高度
    function getScrollHeight() {
        var scorllHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        return scorllHeight;
    }

    getData();

    window.onscroll = function () {

        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
            var sum = 3;
            var timer = null;

            function ajaxServise() {
                if (i < 3) {
                    timer = setTimeout(getData(), 10);
                }
                if (i == sum) {
                    clearTimeout(timer);
                    $(".footcontentinfo").load("html/foot.html");
                  $(".footcontentinfo").css("display","block");
                }
            }

            ajaxServise();
        }
    }
}


$(function () {
    autoLoading();
});

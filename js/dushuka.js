/**
 * Created by Administrator on 2017/5/2 0002.
 */
function list() {
    //分类：鼠标放上出现，离开消失


    this.linkhove = function() {
        $("#lr_systembtn").hover(function() {
            //			console.log(1)
            $(".all-sort-list").css("display", "block")
        }, function() {
            $(".all-sort-list").css("display", "none")
        })
    }
}

function  main() {
    var _list=new list();
    _list.linkhove()

}
window.onload = main;
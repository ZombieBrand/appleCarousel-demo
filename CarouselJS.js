/**
 * Created by cheyongzhi on 2017/7/24.
 */

$('.controls>ol>li').on('click',function(e){  //对li进行点击事件监听
    let $li=$(e.currentTarget);  //获取用户点击目标
    let index = $li.index();  //获取用户点击目标是第几个
    go(index);
});
function go(index){
    $('.controls li').eq(index).addClass('active').siblings().removeClass('active'); //给用户点击的目标添加active其他删除active
    let width = $('.window').width(); //获取相应的宽度
    $('.window>ol').css({
        transform:'translateX('+ (-width*index) +'px)'
    })

}
let current= 0;
setInterval(function(){     //每2秒对点击事件进行自动点击循环
    let nextindex = current +1;
    if(nextindex === 4){
        nextindex = 0
    }
    go(nextindex);
    current = nextindex
},2000);

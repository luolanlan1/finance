var images=new Array("image/weiboH.png","image/weixinH.png","image/qqH.png");
var defaultImg=new Array("image/blackweibo.png","image/weixin_black.png","image/qq_black.png");
var myImgs;
var index; 
var aArr;
window.onload=function(){
    myImgs=document.getElementById("friend_href").getElementsByTagName('img');
    aArr=document.getElementById("friend_href").getElementsByTagName('a');
    for(var i=0;i<myImgs.length;i++){
       
        myImgs[i].onclick=function(){
            for(var i=0;i<myImgs.length;i++){
                clear();
                index=getIndex(this,myImgs);
                myImgs[index].src=images[index];
                aArr[index].style.background="#f9efef";
                aArr[index].style.border="1px solid #f9efef";
            }
        }
    }

}
function clear(){
    for(var i=0;i<myImgs.length;i++){
        myImgs[i].src=defaultImg[i];
        aArr[i].style.background="#eeeeee";
        aArr[i].style.border="2px solid #e5e5e5";
    }
}
function getIndex(obj,arr){
    for(var i=0;i<arr.length;i++){
        if(obj==arr[i])
        return i;
       
    }
    return -1;
}

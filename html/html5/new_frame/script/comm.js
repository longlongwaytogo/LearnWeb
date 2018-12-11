function changeFrameHeight(frameId,offsetHeight){
    var ifm= document.getElementById(frameId); 
    if(ifm)
        ifm.height=document.documentElement.clientHeight-offsetHeight;
}

function frameLoadSub(frameid,file) {
    var frame = document.getElementById(frameid);
    frame.src=file;
}

function frameLoadSub2(frameid,file,offsetHeight) {
    var frame = document.getElementById(frameid);
    changeFrameHeight(frameid,offsetHeight);
    frame.src=file;
}
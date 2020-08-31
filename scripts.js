function toggle(){
    var popup = document.getElementById("container");
    popup.classList.toggle('active');
}

window.onscroll = function(){
    var scroll = document.getElementById("arrow-up");
    if(window.pageYOffset <= 100){
        scroll.style.bottom = '-50px';
    }
    else{
        scroll.style.bottom = '10px';
    }
}
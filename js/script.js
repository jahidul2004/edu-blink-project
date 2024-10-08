// Navigation bar functionality start
isHidden = true;
document.getElementById('small-dev-btn').addEventListener('click',function(){
    const nav = document.getElementById('small-dev-nav');
    if(isHidden === true){
        nav.classList.remove('hidden');
        isHidden = false;
    }
    else{
        nav.classList.add('hidden');
        isHidden = true;
    }
});
// Navigation bar functionality end
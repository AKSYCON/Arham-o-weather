console.log("Script running..");
document.querySelector('.crosss').style.display='none';
document.querySelector('.side_ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar_go');
    if(document.querySelector('.sidebar').classList.contains('sidebar_go'))
    {
        setTimeout(() => {
            document.querySelector('.hamm').style.display='inline';
        }, 300);
        document.querySelector('.crosss').style.display='none';
    }
    else
    {
        document.querySelector('.hamm').style.display='none';
        setTimeout(() => {
            document.querySelector('.crosss').style.display='inline';
        }, 600);
    }
})
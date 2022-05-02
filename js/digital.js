function showTime()
{
    var watch = new Date();
    var H = watch.getHours();
    var M = watch.getMinutes();
    var S = watch.getSeconds();
    var session = "AM";

    if(H==0)
        H=12
    if(H>12)
    {
        H=H-12
        session = "PM";
    } 
    
    H = (H < 10)? "0" + H : H;
    M = (M < 10)? "0" + M : M;
    S = (S < 10)? "0" + S : S;

    var time = H+":"+M+":"+S+" "+session;
    document.querySelector("#digital-watch").innerText = time;
    document.querySelector("#digital-watch").innerContent = time;
    setInterval(showTime, 1000);
}
showTime();

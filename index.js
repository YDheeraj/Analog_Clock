setInterval(()=>{
    d=new Date();
    hrt=d.getHours();
    mint=d.getMinutes();
    sect=d.getSeconds();
    hrot= 30*hrt + mint/2;
    minrot= 6*mint;
    secrot= 6*sect;
    hours.style.transform=`rotate(${hrot}deg)`;
    min.style.transform=`rotate(${minrot}deg)`;
    sec.style.transform=`rotate(${secrot}deg)`;

},1000);
var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main-2",
    markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true    
}});


tl.to("#container-1",{
    top:"-50%"  
},"a")
.to("#container-3",{
    bottom:"-50%"  
},"a")

















// var tl = gsap.timeline({scrollTrigger:{
//     trigger:"#main",
//    //  markers:true,
//     start:"50% 50%",
//     end:"150% 50%",
//     scrub:2,
//     pin:true
// }});
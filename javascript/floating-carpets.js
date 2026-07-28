document.addEventListener("DOMContentLoaded", () => {
	
gsap.registerPlugin(ScrollTrigger);
	
let mm =gsap.matchMedia();

mm.add("(min-width:769px)",()=>{

function floating(id,amount,time){

gsap.to(id,{
    y:"+="+amount,
    duration:time,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
});

}

floating("#img1",-10,3.2);
floating("#img2",8,3.6);
floating("#img3",-8,3.4);
floating("#img4",10,3.7);
floating("#img5",-9,3.5);
floating("#img6",9,3.8);

})
});
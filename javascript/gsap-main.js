window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width:769px)", () => {

const nav = document.querySelector(".navbar");

let lastScroll = 0;
let navEnabled = false;

gsap.set("#zoom-wrapper", {
    willChange: "transform"
});

gsap.set("#product-overlay", {
    willChange: "opacity"
});

gsap.set([
    "#product1",
    "#product2",
    "#product3",
    "#product4"
], {
    willChange: "transform, opacity",
    force3D: true
});

gsap.set("#text-list", {

    y: 0
});

gsap.set("#content-container", {
    willChange: "opacity",
    opacity: 0
});

gsap.set([
    "#carpet1",
    "#carpet2",
    "#carpet3",
    "#carpet4",
    "#carpet5",
    "#carpet6"
], {
    opacity: 0
});

gsap.set("#title", {
    opacity: 1
});

gsap.set("#text1", {
    opacity: 0,
    y: 30
});

gsap.set("#text2", {
    opacity: 0,
    y: 30
});

gsap.set([
    "#product1",
    "#product2",
    "#product3",
    "#product4",
    "#product5"
], {
    willChange: "opacity",
    opacity: 0,
    scale: 0.9,
    y: 30,
	force3D: true,
});
				
gsap.set(nav, {
    y: 0,
    opacity: 1
});		

//after hero it will active
gsap.set(nav, {
    y: 0,
    opacity: 1
});

ScrollTrigger.create({
    trigger: "#hero",
    start: "top top",
    end: "+=1500",

    onLeave: () => {
        navEnabled = true;

        gsap.set(nav,{
            y:0,
            opacity:1
        });

        lastScroll = window.scrollY;
    },

    onEnterBack: () => {
        navEnabled = false;

        gsap.to(nav,{
            y:0,
            opacity:1,
            duration:0.3
        });
    }
});

window.addEventListener("scroll", () => {

    if(!navEnabled) return;

    const currentScroll = window.scrollY;

    if(currentScroll > lastScroll){

        gsap.to(nav,{
            y:-60,
            opacity:0,
            duration:0.35,
            ease:"power3.out",
            overwrite:"auto"
        });

    }else{

        gsap.to(nav,{
            y:0,
            opacity:1,
            duration:0.25,
            ease:"power3.out",
            overwrite:"auto"
        });

    }

    lastScroll = currentScroll;

});

        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "+=3000",
                scrub: 1,
                pin: true
            }
        });

        heroTimeline
            .to("#text1", {
                opacity: 1,
                y: 0,
                duration: 1
            })


            .to({}, {
                duration: 1
            })

            .to(["#title", "#text1", "#text2"], {
                opacity: 0,
                y: -30,
                duration: 1
            })

            .to("#hero", {
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

        const carpetTimeline = gsap.timeline({
            defaults: {
                ease: "none"
            },

            scrollTrigger: {
                trigger: "#carpet-section",
                start: "top top",
                end: "+=7000",
                scrub: 0.5,
                pin: true
            }
        });

        carpetTimeline

            .to("#carpet1", {
                opacity: 1,
                duration: 1
            })

            .to("#carpet2", {
                opacity: 1,
                duration: 1
            })

            .to("#carpet3", {
                opacity: 1,
                duration: 1
            })

            .to("#carpet4", {
                opacity: 1,
                duration: 1
            })

            .to("#carpet5", {
                opacity: 1,
                duration: 1
            })

            .to("#carpet6", {
                opacity: 1,
                duration: 1
            })


            .to({}, {
                duration: 0.5
            })

            .to("#content-container", {
                opacity: 1,
                duration: 1
            })

            .to({}, {
                duration: 0.5
            })

            .to("#text-list", {
                y: -480,
                duration: 4,
                ease: "none"
            })

            .to({}, {
                duration: 2
            })

            // zoom
            .to("#zoom-wrapper", {
                scale: 2.5,
                transformOrigin: "25.45% 80%",
                duration: 4,
                ease: "power2.inOut"
            })


            .to({}, {
                duration: 0.6
            })

            .to("#product-overlay", {
                visibility: "visible",
                opacity: 1,
                duration: 0.8
            })

            .to([
                "#product1",
                "#product2",
                "#product3",
                "#product4"
            ], {
                opacity: 1,
                scale: 0.97,
                duration: 0.7,
                ease: "power2.out"
            })

            .to({}, {
                duration: 1
            })

            .to("#carpet-section", {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",

                onComplete: () => {

                    gsap.set([
                        "#hero",
                        "#title",
                        "#text1",
                        "#text2",
                        "#carpet1",
                        "#carpet2",
                        "#carpet3",
                        "#carpet4",
                        "#carpet5",
                        "#carpet6",
                        "#content-container",
                        "#text-list",
                        "#zoom-wrapper",
                        "#product-overlay",
                        "#product1",
                        "#product2",
                        "#product3",
                        "#product4",
                        "#product5"
                    ], {
                        clearProps: "willChange"
                    });

                }

            });

        ScrollTrigger.refresh();

    });

});
		
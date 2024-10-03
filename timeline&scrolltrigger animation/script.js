let timeline = gsap.timeline()
timeline.from('nav h1,nav li, nav button',{
    y:-30,
    duration:0.5,
    delay:0.4,
    opacity:0,
    stagger:0.3,
})
timeline.from('.center-part1 h1,.center-part1 p,.center-part1 button',{
    x:-400,
    opacity:0,
    duration:0.5,
})
timeline.from('.center-part2 img',{
    x:400,
    opacity:0,
    duration:0.5,
},'-=1')

timeline.from('.section1bottom img',{
    scrollTrigger:{
        trigger:'.section1bottom',
        markers:true,
        start:'top 50%',
        end:'top 0%',
        scrub:1,

    },
    opacity:0,
    y:40,
    duration:0.6
})
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section2',
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top -20%',
        scrub:2,

    }
}
   
)
tl2.from('.section2 .services',{
    x:-300,
    opacity:0,
    duration:0.5
})

tl2.from('.section2 #g1',{
    x:-300,
    opacity:0,
    duration:0.6
},'hey')
tl2.from('.section2 #g2',{
    x:300,
    opacity:0,
    duration:0.6
},'hey')
tl2.from('.section2 #g3',{
    x:-300,
    opacity:0,
    duration:0.8
},'hey2')
tl2.from('.section2 #g4',{
    x:300,
    opacity:0,
    duration:0.8,
   
   
},'hey2')
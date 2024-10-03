let tl= gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.two',
            start:'0% 90%',
            end:'50% 50%',
            // markers:true,
            scrub:true,
        }
    }
)
tl.to('#fanta',{
top:'110%',
left:'15%',
duration:3

},'fanta')
tl.to('.orangeslice',{
    top:'100%',
    left:'30%',
    duration:3
},'fanta')
tl.to('.oranges',{
    top:'150%',
    left:'15%',
    duration:3
},'fanta')
tl.to('.leafone',{
    top:'170%',
    left:'80%',
    duration:3
},'fanta')

// gsap.to('nav',{
//     backgroundColor:'green',
//     duration:5,
//     delay:1
// })
let tl2= gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.three',
            start:'0% 50%',
            end:'50% 50%',
            markers:true,
            scrub:true,
        }
    }
)
tl2.to('#fanta',{
    top:'218%',
    left:'38%',
    width:'23%',
    duration:3,
    
},'fan')
tl2.to('.orangeslice',{
    top:'211%',
    left:'50%',
    // width:'23%',
    duration:3,
    zIndex:'2'
    
},'fan')
tl2.to('#coke',{
    rotate:'-30deg',
    // width:'23%',
    duration:3,
    
    
},'fan')
tl2.to('#sprite',{
    rotate:'-30deg',
    // width:'23%',
    duration:3,
    
    
},'fan')

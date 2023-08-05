const canvas=document.getElementById("canvas")
const ctx=canvas.getContext('2d')

canvas.width=window.innerWidth
canvas.height=window.innerHeight




window.addEventListener('resize',function()
{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
})

const mouse={
    x:null,
    y:null
}
bubbles=[]
canvas.addEventListener("click",function(e){
mouse.x=e.x
mouse.y=e.y
//generate()


for(var i=0;i<50;i++)
bubbles.push(new bubble())

animate()

})

// function generate()
// {
//     ctx.fillStyle="blue"
//     ctx.strokeStyle='red'
//     ctx.lineWidth="15"
    
//         ctx.beginPath()
//         ctx.arc(mouse.x,mouse.y,50,0,360)
//         ctx.fill()
//         ctx.stroke()
        
// }

canvas.addEventListener("mousemove",(e)=>{
    //ctx.clearRect(0,0,canvas.width,canvas.height)
    mouse.x=e.x
    mouse.y=e.y
    //generate()

    

for( let i=0;i<20  ;i++)
bubbles.push(new bubble())

//animate()

})



var h=0

class bubble
{
    constructor()
    {var clr
this.x=mouse.x
this.y=mouse.y

        // this.x=Math.random()*canvas.width
        // this.y =Math.random()*canvas.height
        this.rad=Math.floor(Math.random()*8)+1
       this.x_speed=(Math.random()*3) -0.9
        this.y_speed=(Math.random()*3) -0.9

    }
    changeSpeed()
    {
        this.x+=this.x_speed
        this.y+=this.y_speed
         this.clr=`hsl(${h},100%,50%)`
     if(this.rad>=0.2) this.rad-=0.1
    }

    generate()
    { 
    
    ctx.fillStyle='grey'
    ctx.strokeStyle=this.clr
    ctx.lineWidth="1"
    
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.rad,0,360)
        ctx.fill()
        ctx.stroke()
        
        
    }

}




function move()
{
    
    
    for(var t=0;t<bubbles.length;t++){
        bubbles[t].changeSpeed()
bubbles[t].generate()

for(var k=t;k<bubbles.length;k++)
{
    const dx=(bubbles[t].x-bubbles[k].x)
    const dy=(bubbles[t].y-bubbles[k].y)
    const dis=Math.sqrt(dy*dy+dx*dx)

    if(dis<100)
    {
       // ctx.strokeStyle=bubbles[t].color
       ctx.lineWidth=0.05
        ctx.beginPath()
        ctx.moveTo(bubbles[t].x,bubbles[t].y)
        ctx.lineTo(bubbles[k].x,bubbles[k].y)
        ctx.stroke()
    }
}

if(bubbles[t].rad<0.4)
{
    bubbles.splice(t,1)
    t--
    console.log(bubbles.length)
}

}

}


function animate()
{
   // ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle='rgba(0,0,0,0.03)'
   ctx.fillRect(0,0,canvas.width,canvas.height)
   
    move()



    //     mouse.x=Math.floor(Math.random()*canvas.width)+1
    //     mouse.y=Math.floor(Math.random()*canvas.height)+1
    
    // generate()
    // setTimeout(()=>(requestAnimationFrame(animate)),1000)
    h+=4

    requestAnimationFrame(animate) 

}
animate()




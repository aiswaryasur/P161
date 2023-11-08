AFRAME.registerComponent('bowling-balls',{
    init:function(){
        this.shootBalls();
    },
    shootBalls:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'z'){
            var balls = document.createElement('a-entity')
            balls.setAttribute('geometry',{
                primitive:'sphere',
                radius:1,
            })
            balls.setAttribute('material','color','black')
            var cam = document.querySelector('#camera')
            var pos = cam.getAttribute('position')
            balls.setAttribute('position',{
                x:pos.x,
                y:pos.y,
                z:pos.z,
            })
            var camera = document.querySelector('#camera').object3D

            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction)
            console.log(direction)
            balls.setAttribute('velocity',direction.multiplyScalar(-10))
            var scene = document.querySelector('#scene')
            scene.appendChild(balls)
        }
            
        })
        
    },
})
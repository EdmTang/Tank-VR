let camera, move=false, pellet=[], change,shell,cannon,reload=8,msg,fire,elevationUp,elevationDown,user,reverse,target1,target2,shotsound;
let angle1;
let angle2;
window.onload = function(){
	change=false;
	reverse=false;
  camera = document.querySelector("a-camera")
	scene=document.querySelector("a-scene");
	t34=document.getElementById("turret34");
	cannon=document.getElementById("barrel");
	tank=document.getElementById("whole");
	msg=document.getElementById("reload");
	fire=document.getElementById("shoot");
	elevationDown=document.getElementById("elevatedown");
	elevationUp=document.getElementById("elevateup");
	gunY=document.getElementById("elevategun");
	user=document.getElementById("t-34");
	shotsound=document.querySelector("cannonsound");
	target=new Tank(0,-6,100,0,180,0);
	target1=new Tank1(50,-6,95,0,-90,0);
	target2=new Tank1(30,-6,2,0,-90,0);
	let house2=new Home(18,-3,-3,0,0,0);
	let house3=new Home(54,-3,-3,0,0,0);
	let house4=new Home(-18,-3,30,0,180,0);
	let house5=new Home(18,-3,30,0,180,0);
	let house6=new Home(54,-3,30,0,180,0);
	let house7=new Home(-18,-3,80,0,0,0);
	let house8=new Home(18,-3,80,0,0,0);
	let house9=new Home(54,-3,80,0,0,0);
	let house10=new Home(-18,-3,110,0,180,0);
	let house11=new Home(18,-3,110,0,180,0);
	let house12=new Home(54,-3,110,0,180,0);
	
	
	

	shell=new APshell();
	shell.bullet.setAttribute("opacity","0");
	
	angle1=t34.object3D.rotation.y+Math.PI;
	angle2=gunY.object3D.rotation.x+Math.PI;
	t34.addEventListener("mousedown",function(){
		this.rotate=true;
	})
	t34.addEventListener("mouseup",function(){
		this.rotate=false;
	})
	t34.addEventListener("click",function(){
		
		if(change==false){
			change=true;
		}
		else if(change){
			change=false;
		}
	
	})
	fire.addEventListener("mousedown",function(){
		fire.setAttribute("position","0 3.8 -8.5");
		if(reload==8){
			shell.shoot34();
			shell.bullet.setAttribute("opacity","1");
			
			reload=0;
		}
		shotsound.components.sound.playSound();
	})
	fire.addEventListener("mouseup",function(){
		fire.setAttribute("position","0 4 -8.5");
	})
	elevationUp.addEventListener("mousedown",function(){
		elevationUp.setAttribute("position","-.5 3.8 -9.5");
		this.up=true;
	})

	elevationUp.addEventListener("mouseup",function(){
		elevationUp.setAttribute("position","-.5 4 -9.5");
		this.up=false;
	})
	
	
	elevationDown.addEventListener("mousedown",function(){
		elevationDown.setAttribute("position",".5 3.8 -9.5");
		this.down=true;
	})

	elevationDown.addEventListener("mouseup",function(){
		elevationDown.setAttribute("position",".5 4 -9.5");
		this.down=false;
	})
	user.addEventListener("mousedown",function(){
		this.flag=true;
	})
	user.addEventListener("mouseup",function(){
		this.flag=false;
		if(reverse==false){
			reverse=true;
		}
		else if(reverse){
			reverse=false;
		}
	})
	for(let i=0;i<=599;i++){
		let fall=rnd(1,10)/50;
		let px=rnd(-300,300);
		let pz=rnd(-200,500);
		pellet.push(new SoftRain(px,100,pz,fall));
	}
	motionLoop();
	fallingsnow();
	rotate34();
	shoot();
	reloading();
	hit();
	elevateUp34();
	elevateDown34();
	moveAP();
	accel34();
}







window.addEventListener("touchstart", (e) => {
  move = true;
})
window.addEventListener("touchend", (e) => {
  move = false;
})

function motionLoop(){
	
  if(move){
    let angle = camera.getAttribute("rotation");

    // calculate the angles
    // the camera's theta == 0 is actually 90' in the clipspace
    let theta = (angle.x * Math.PI / 180) + Math.PI / 2 
    let fi = angle.y * Math.PI / 180
    let r = 0.01
    // calculate the position shifts
    let z = Math.sin(theta) * Math.cos(fi) * r
    let x = Math.sin(theta) * Math.sin(fi) * r
    let y = Math.cos(theta) * r

    // update the position
    camera.object3D.position.x -= x;
    camera.object3D.position.y -= y;
    camera.object3D.position.z -= z;
	
  }
	
  setTimeout(motionLoop,1);
}
function fallingsnow(){
	for(let snow of pellet){
		snow.move();
		if(snow.y<-3){
		snow.y=100;
	}
	
	}
	setTimeout(fallingsnow,1);
}

function reloading(){
	if(reload<=7){
		reload+=1;
		msg.setAttribute("color","red");
		fire.setAttribute("color","red");
	}
	if(reload==8){
		msg.setAttribute("color","green");
		fire.setAttribute("color","green");
	}
	msg.setAttribute("value",`${reload}`);
	setTimeout(reloading,1000);
}
function hit(){
	
	
	setTimeout(hit,1);
}
function shoot(){
	shell.move34();
	let ricochet=rnd(0,10);
	if(collision(shell.bullet.object3D.position,target.turretHB.object3D.position) && ricochet >= 10){
		console.log("hit");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
	else if(collision(shell.bullet.object3D.position,target.turretHB.object3D.position) && ricochet <= 9){
		console.log("ricochet");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
if(collision(shell.bullet.object3D.position,target.hullHB.object3D.position) && ricochet >= 6){
		console.log("hit");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
	else if(collision(shell.bullet.object3D.position,target.hullHB.object3D.position) && ricochet <= 5){
		console.log("ricochet");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
if(collision(shell.bullet.object3D.position,target1.turretHB.object3D.position) && ricochet >= 10){
		console.log("hit");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
	else if(collision(shell.bullet.object3D.position,target1.turretHB.object3D.position) && ricochet <= 9){
		console.log("ricochet");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
if(collision(shell.bullet.object3D.position,target1.hullHB.object3D.position) && ricochet >= 6){
		console.log("hit");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
	else if(collision(shell.bullet.object3D.position,target1.hullHB.object3D.position) && ricochet <= 5){
		console.log("ricochet");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
if(collision(shell.bullet.object3D.position,target2.turretHB.object3D.position) && ricochet >= 10){
		console.log("hit");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
	else if(collision(shell.bullet.object3D.position,target2.turretHB.object3D.position) && ricochet <= 9){
		console.log("ricochet");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
if(collision(shell.bullet.object3D.position,target2.hullHB.object3D.position) && ricochet >= 6){
		console.log("hit");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
	else if(collision(shell.bullet.object3D.position,target2.hullHB.object3D.position) && ricochet <= 5){
		console.log("ricochet");
		shell.flag=false;
		shell.bullet.setAttribute("position","0 -10 0");
	}
	setTimeout(shoot,1);
}

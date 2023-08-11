let t34,tank,gunY;
let r=0,eUp=0, m=0;
let roundHB;

function rotate34(){
	if(t34.rotate && change){
		r+=.5;
		t34.setAttribute("rotation",{x:0,y:r,z:0});
	}
	else if(t34.rotate && change==false){
		r-=.5;
		t34.setAttribute("rotation",{x:0,y:r,z:0});
	}
		
	setTimeout(rotate34,1);
}
function elevateUp34(){
	if(elevationUp.up && eUp>-30){
		eUp-=.1;
		gunY.setAttribute("rotation",{x:eUp,y:0,z:90});
	}
	setTimeout(elevateUp34,1);
}
function elevateDown34(){
	if(elevationDown.down && eUp<8){
		eUp+=.1;
		gunY.setAttribute("rotation",{x:eUp,y:0,z:90});
	}
	setTimeout(elevateDown34,1);
}
function accel34(){
	if(user.flag && reverse==false){
		m+=.1;
		tank.setAttribute("position",{x:0,y:-5,z:m});
	}
	else if(user.flag && reverse){
		m-=.1;
		tank.setAttribute("position",{x:0,y:-5,z:m});
	}
	setTimeout(accel34,1);
}
class APshell{
	constructor(){
		this.bullet=document.createElement("a-sphere");
		this.bullet.setAttribute("radius",".2");
		this.bullet.setAttribute("color","red");
		this.flag=false;		
		this.angle = t34.object3D.rotation.y + Math.PI;
		this.angle2=gunY.object3D.rotation.x+Math.PI;
		this.bullet.setAttribute("opacity","0");
		scene.append(this.bullet);
	}
	shoot34(){
		this.x = t34.object3D.position.x+tank.object3D.position.x+gunY.object3D.position.x;
    this.z = t34.object3D.position.z+tank.object3D.position.z+gunY.object3D.position.z;
		this.y = t34.object3D.position.y+tank.object3D.position.y+gunY.object3D.position.y;
    this.bullet.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.angle = t34.object3D.rotation.y + Math.PI;
		this.angle2=gunY.object3D.rotation.x+Math.PI;
    this.flag = true;
	}
	move34(speed=0.5){
		if(this.flag){
      let dx = speed * Math.sin(this.angle);
      let dz = speed * Math.cos(this.angle);
			let dy =speed*Math.tan(this.angle2);
			this.y -=dy;
      this.x -= dx;
      this.z -= dz;
      this.bullet.setAttribute("position",{x:this.x,y:this.y,z:this.z});
		}
	}
	
}
function moveAP(){
		
    let angle2 = gunY.object3D.rotation.x+Math.PI;
		if(fire.shoot){
			let speed=0.5;
			let cy = speed * Math.tan(angle2);
      let cx = speed * Math.sin(angle1);
      let cz = speed * Math.cos(angle1);
			
			fire.ay -= cy;
    	fire.ax -= cx;
      fire.az -= cz;
      apRound.setAttribute("position",{x:fire.ax,y:fire.ay,z:fire.az});
			
		}
		  
		//console.log(apRound.object3D.position.x+" "+apRound.object3D.position.z);
		/*if(collision(enemy.object3D.position,apRound.object3D.position)){
			console.log("hit");
			apRound.setAttribute("opacity","0");
		}*/
		
		setTimeout(moveAP,1);
}

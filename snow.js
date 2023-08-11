class SoftRain{
	constructor(x,y,z,speed){
		this.x=x;
		this.y=y;
		this.z=z;
		this.speed=speed;
	  this.snow=document.createElement("a-sphere");
		this.snow.setAttribute("material","side:double");
		this.snow.setAttribute("radius",".5");
		this.snow.setAttribute("position",{x:this.x,y:this.y,z:this.z});
		scene.append(this.snow);
	}
	move(){
		this.y-=this.speed;
		this.snow.setAttribute("position",{x:this.x,y:this.y,z:this.z});
	}
}	
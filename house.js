let scene,frame;

class Home{
	constructor(x,y,z,rx,ry,rz){
		
		frame=document.createElement("a-entity");
		this.x=x;
		this.y=y;
		this.z=z;
		this.rx=rx;
		this.ry=ry;
		this.rz=rz;
		
		let body=document.createElement("a-box");
	 	body.setAttribute("width","20");
		body.setAttribute("height","10");
		body.setAttribute("depth","20");
		body.setAttribute("src","brick texture.jpg");
		body.setAttribute("position","0 3 -10");
		body.setAttribute("material","side:double");
		frame.append(body);

		let roof1=document.createElement("a-box");
		roof1.setAttribute("depth","25");
		roof1.setAttribute("width","14");
		roof1.setAttribute("height",".5");
		roof1.setAttribute("rotation","0 0 30");
		roof1.setAttribute("position","-6 10.5 -10");
		roof1.setAttribute("color","black");
		frame.append(roof1);

		let roof2=document.createElement("a-box");
		roof2.setAttribute("depth","25");
		roof2.setAttribute("width","14");
		roof2.setAttribute("height",".5");
		roof2.setAttribute("rotation","0 0 -30");
		roof2.setAttribute("position","6 10.5 -10");
		roof2.setAttribute("color","black");
		frame.append(roof2);

		let frontplate=document.createElement("a-triangle");
		frontplate.setAttribute("color","black");
		frontplate.setAttribute("position","0 8 0");
		frontplate.setAttribute("vertex-a","0 6 0");
		frontplate.setAttribute("vertex-b","-10 0 0");
		frontplate.setAttribute("vertex-c","10 0 0");
		frontplate.setAttribute("material","side:double");
		frame.append(frontplate);

		let backplate=document.createElement("a-triangle");
		backplate.setAttribute("color","black");
		backplate.setAttribute("position","0 8 -20");
		backplate.setAttribute("vertex-a","0 6 0");
		backplate.setAttribute("vertex-b","-10 0 0");
		backplate.setAttribute("vertex-c","10 0 0");
		backplate.setAttribute("rotation","0 180 0");
		backplate.setAttribute("material","side:double");
		frame.append(backplate);

		let door=document.createElement("a-box");
		door.setAttribute("color","black");
		door.setAttribute("width","3");
		door.setAttribute("height","6");
		door.setAttribute("position","0 1 -.3");
		frame.append(door);

		let chimny=document.createElement("a-box");
		chimny.setAttribute("src","brick texture.jpg");
		chimny.setAttribute("position","0 12 -17");
		chimny.setAttribute("width","5");
		chimny.setAttribute("depth","5");
		chimny.setAttribute("height","10");
		frame.append(chimny);

		let window1=windows(4,0,-3,0,0,0);
		let window2=windows(-8,0,-3,0,0,0);
		let window3=windows(-13,0,-14,0,90,0);
		let window4=windows(-13,0,-2,0,90,0);
		let window5=windows(7,0,-2,0,90,0);
		let window6=windows(7,0,-14,0,90,0);
		let window7=windows(4,0,-23,0,0,0);
		let window8=windows(-8,0,-23,0,0,0);

		frame.setAttribute("position",{x:this.x, y:this.y, z:this.z});
		frame.setAttribute("rotation",{x:this.rx, y:this.ry, z:this.rz});
		frame.setAttribute("class","useable");
		scene.append(frame);
	}
}
function windows(x,y,z,rx,ry,rz){
	this.x=x;
	this.y=y;
	this.z=z;

	let rotateX=rx;
	let rotateY=ry;
	let rotateZ=rz;

	let glass=document.createElement("a-entity");
	
	let stick1=document.createElement("a-box");
	stick1.setAttribute("color","black");
	stick1.setAttribute("width",".5");
	stick1.setAttribute("depth",".5");
	stick1.setAttribute("height","4");
	stick1.setAttribute("position","0 2 3");
	glass.append(stick1);

	let stick2=document.createElement("a-box");
	stick2.setAttribute("color","black");
	stick2.setAttribute("width",".5");
	stick2.setAttribute("depth",".5");
	stick2.setAttribute("height","4");
	stick2.setAttribute("position","4 2 3");
	glass.append(stick2);

	let stick3=document.createElement("a-box");
	stick3.setAttribute("color","black");
	stick3.setAttribute("width",".5");
	stick3.setAttribute("depth",".5");
	stick3.setAttribute("height","4");
	stick3.setAttribute("position","2 4 3");
	stick3.setAttribute("rotation","0 0 90");
	glass.append(stick3);
	
	let stick4=document.createElement("a-box");
	stick4.setAttribute("color","black");
	stick4.setAttribute("width",".5");
	stick4.setAttribute("depth",".5");
	stick4.setAttribute("height","4");
	stick4.setAttribute("position","2 0 3");
	stick4.setAttribute("rotation","0 0 90");
	glass.append(stick4);

	let stick5=document.createElement("a-box");
	stick5.setAttribute("color","black");
	stick5.setAttribute("width",".3");
	stick5.setAttribute("depth",".5");
	stick5.setAttribute("height","4");
	stick5.setAttribute("position","2 2 3");
	stick5.setAttribute("rotation","0 0 90");
	glass.append(stick5);

	let stick6=document.createElement("a-box");
	stick6.setAttribute("color","black");
	stick6.setAttribute("width",".3");
	stick6.setAttribute("depth",".5");
	stick6.setAttribute("height","4");
	stick6.setAttribute("position","2 2 3");
	glass.append(stick6);

	let pane1=document.createElement("a-box");
	pane1.setAttribute("color","yellow");
	pane1.setAttribute("width","2");
	pane1.setAttribute("height","2");
	pane1.setAttribute("depth",".3");
	pane1.setAttribute("position","1 3 3");
	glass.append(pane1);

	let pane2=document.createElement("a-box");
	pane2.setAttribute("color","yellow");
	pane2.setAttribute("width","2");
	pane2.setAttribute("height","2");
	pane2.setAttribute("depth",".3");
	pane2.setAttribute("position","3 3 3");
	glass.append(pane2);

	let pane3=document.createElement("a-box");
	pane3.setAttribute("color","yellow");
	pane3.setAttribute("width","2");
	pane3.setAttribute("height","2");
	pane3.setAttribute("depth",".3");
	pane3.setAttribute("position","3 1 3");
	glass.append(pane3);

	let pane4=document.createElement("a-box");
	pane4.setAttribute("color","yellow");
	pane4.setAttribute("width","2");
	pane4.setAttribute("height","2");
	pane4.setAttribute("depth",".3");
	pane4.setAttribute("position","1 1 3");
	glass.append(pane4);

	glass.setAttribute("position",{x:this.x, y:this.y, z:this.z });
	glass.setAttribute("rotation",{x:rotateX, y:rotateY, z:rotateZ});
	frame.append(glass);
}
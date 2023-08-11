class Tank1{
	constructor(x,y,z,rx,ry,rz){
		casemate1=document.createElement("a-entity");
		
		let hull=document.createElement("a-entity");
		let comp1=document.createElement("a-box");
		comp1.setAttribute("color","gray");
		comp1.setAttribute("position","0 3 -9");
		comp1.setAttribute("width","5");
		comp1.setAttribute("height","3");
		comp1.setAttribute("depth","9");
	  hull.append(comp1);

		let frontplate=document.createElement("a-box");
		frontplate.setAttribute("width","5");
		frontplate.setAttribute("depth","3");
		frontplate.setAttribute("color","gray");
		frontplate.setAttribute("position","0 3.3 -3.5");
		frontplate.setAttribute("rotation","50 0 0");
		frontplate.setAttribute("height",".1");
		hull.append(frontplate);

		let lowerFrontPlate=document.createElement("a-box");
		lowerFrontPlate.setAttribute("width","5");
		lowerFrontPlate.setAttribute("depth","2");
		lowerFrontPlate.setAttribute("height",".1");
		lowerFrontPlate.setAttribute("color","gray");
		lowerFrontPlate.setAttribute("rotation","-20 0 0");
		lowerFrontPlate.setAttribute("position","0 1.8 -3.5");
		hull.append(lowerFrontPlate);

		let exhaust1=document.createElement("a-cylinder");
		exhaust1.setAttribute("height","3");
		exhaust1.setAttribute("radius",".3");
		exhaust1.setAttribute("color","black");
		exhaust1.setAttribute("position","1 4 -13.8");
		exhaust1.setAttribute("rotation","-10 0 0");
		hull.append(exhaust1);
		
		let exhaust2=document.createElement("a-cylinder");
		exhaust2.setAttribute("height","3");
		exhaust2.setAttribute("radius",".3");
		exhaust2.setAttribute("color","black");
		exhaust2.setAttribute("position","-1 4 -13.8");
		exhaust2.setAttribute("rotation","-10 0 0");
		hull.append(exhaust2)

		let leftFrontside=document.createElement("a-triangle");
		leftFrontside.setAttribute("material","side:double");
		leftFrontside.setAttribute("vertex-a","0 0 -1");
		leftFrontside.setAttribute("vertex-b","0 2.8 0");
		leftFrontside.setAttribute("vertex-c","0 0 1");
		leftFrontside.setAttribute("position","2.5 1.8 -3.5");
		leftFrontside.setAttribute("rotation","-20");
		leftFrontside.setAttribute("color","gray");
		hull.append(leftFrontside);

		let rightFrontside=document.createElement("a-triangle");
		rightFrontside.setAttribute("material","side:double");
		rightFrontside.setAttribute("vertex-a","0 0 -1");
		rightFrontside.setAttribute("vertex-b","0 2.8 0");
		rightFrontside.setAttribute("vertex-c","0 0 1");
		rightFrontside.setAttribute("position","-2.5 1.8 -3.5");
		rightFrontside.setAttribute("rotation","-20");
		rightFrontside.setAttribute("color","gray");
		hull.append(rightFrontside);

		tankTrack1(3,1,-10);
		tankTrack1(-3,1,-10);

		let turret=document.createElement("a-entity");
		turret.setAttribute("position","0 -.5 0");
		let outcrop=document.createElement("a-torus");
		outcrop.setAttribute("position","0 6 -8");
		outcrop.setAttribute("color","gray");
		outcrop.setAttribute("rotation","90 0 0");
		outcrop.setAttribute("radius-tubular",".8");
		turret.append(outcrop);

		let gun=document.createElement("a-cylinder");
		gun.setAttribute("height","10");
		gun.setAttribute("radius",".2");
		gun.setAttribute("position","0 6 -2");
		gun.setAttribute("rotation","90 0 0");
		gun.setAttribute("color","gray");
		turret.append(gun);

		casemate1.append(turret);
		casemate1.append(hull);
		casemate1.setAttribute("position",{x:x,y:y,z:z});
		casemate1.setAttribute("rotation",{x:rx,y:ry,z:rz});

		this.hullHB=document.createElement("a-box");
		this.hullHB.setAttribute("opacity","0");
		let xHB=x+8;
		let yHB=y+3;
		let zHB=z;
		this.hullHB.setAttribute("width","5");
		this.hullHB.setAttribute("height","3");
		this.hullHB.setAttribute("depth","10");
		this.hullHB.setAttribute("position",{x:xHB,y:yHB,z:zHB});
		this.hullHB.setAttribute("rotation",{x:rx,y:ry,z:rz});
		scene.append(this.hullHB);

		let xTB=x+8;
		let yTB=y+6;
		let zTB=z;
		this.turretHB=document.createElement("a-box");
		this.turretHB.setAttribute("depth","5");
		this.turretHB.setAttribute("height","2.5");
		this.turretHB.setAttribute("width","5");
		this.turretHB.setAttribute("position",{x:xTB,y:yTB,z:zTB});
		this.turretHB.setAttribute("rotation",{x:rx,y:ry,z:rz});
		this.turretHB.setAttribute("opacity","0");
		scene.append(this.turretHB);

		let xrTB=x+3;
		let yrTB=y+2;
		let zrTB=z+8;
		this.rTrackHB=document.createElement("a-box");
		this.rTrackHB.setAttribute("depth","11");
		this.rTrackHB.setAttribute("opacity","0");
		this.rTrackHB.setAttribute("height","2");
		this.rTrackHB.setAttribute("position","-3 -.5 0");
		
		this.hullHB.append(this.rTrackHB);

		let xlTB=x-3;
		let ylTB=y+2;
		let zlTB=z+8;
		this.lTrackHB=document.createElement("a-box");
		this.lTrackHB.setAttribute("depth","11");
		this.lTrackHB.setAttribute("opacity","0");
		this.lTrackHB.setAttribute("height","2");
		this.lTrackHB.setAttribute("position","3 -.5 0");
		
		this.hullHB.append(this.lTrackHB);
		
		scene.append(casemate1);
	}
}
function tankTrack1(x,y,z){

	this.x=x;
	this.y=y;
	this.z=z;
	let tracks=document.createElement("a-entity");
		tracks.setAttribute("position",{x:this.x,y:this.y,z:this.z});
		let tread1=document.createElement("a-box");
		tread1.setAttribute("width","1");
		tread1.setAttribute("depth","10");
		tread1.setAttribute("height",".1");
		tread1.setAttribute("position","0 0 2");
		tread1.setAttribute("src","tank track.jpg");
		tread1.setAttribute("repeat","1 9");
		tracks.append(tread1);

		let tread2=document.createElement("a-box");
		tread2.setAttribute("width","1");
		tread2.setAttribute("depth","10");
		tread2.setAttribute("height",".1");
		tread2.setAttribute("position","0 2.5 2");
		tread2.setAttribute("src","tank track.jpg");
		tread2.setAttribute("repeat","1 9");
		tracks.append(tread2);

		let tread3=document.createElement("a-box");
		tread3.setAttribute("src","tank track.jpg");
		tread3.setAttribute("rotation","45 0 0");
		tread3.setAttribute("position","0 .4 -3.3");
		tread3.setAttribute("width","1");
		tread3.setAttribute("depth","1");
		tread3.setAttribute("height",".1");
		tracks.append(tread3);

		let tread4=document.createElement("a-box");
		tread4.setAttribute("src","tank track.jpg");
		tread4.setAttribute("rotation","90 0 0");
		tread4.setAttribute("position","0 1.3 -3.6");
		tread4.setAttribute("width","1");
		tread4.setAttribute("depth","1");
		tread4.setAttribute("height",".1");
		tracks.append(tread4);

		let tread5=document.createElement("a-box");
		tread5.setAttribute("src","tank track.jpg");
		tread5.setAttribute("rotation","135 0 0");
		tread5.setAttribute("position","0 2.2 -3.3");
		tread5.setAttribute("width","1");
		tread5.setAttribute("depth","1");
		tread5.setAttribute("height",".1");
		tracks.append(tread5);

		let tread6=document.createElement("a-box");
		tread6.setAttribute("src","tank track.jpg");
		tread6.setAttribute("rotation","-45 0 0");
		tread6.setAttribute("position","0 .4 7.3");
		tread6.setAttribute("width","1");
		tread6.setAttribute("depth","1");
		tread6.setAttribute("height",".1");
		tracks.append(tread6);

		let tread7=document.createElement("a-box");
		tread7.setAttribute("src","tank track.jpg");
		tread7.setAttribute("rotation","90 0 0");
		tread7.setAttribute("position","0 1.3 7.6");
		tread7.setAttribute("width","1");
		tread7.setAttribute("depth","1");
		tread7.setAttribute("height",".1");
		tracks.append(tread7);

		let tread8=document.createElement("a-box");
		tread8.setAttribute("src","tank track.jpg");
		tread8.setAttribute("rotation","45 0 0");
		tread8.setAttribute("position","0 2.2 7.3");
		tread8.setAttribute("width","1");
		tread8.setAttribute("depth","1");
		tread8.setAttribute("height",".1");
		tracks.append(tread8);

		let wheel1=document.createElement("a-torus");
		wheel1.setAttribute("color","gray");
		wheel1.setAttribute("rotation","0 90 0");
		wheel1.setAttribute("position","0 1.2 -2.2");
		tracks.append(wheel1);

		let wheel2=document.createElement("a-torus");
		wheel2.setAttribute("color","gray");
		wheel2.setAttribute("rotation","0 90 0");
		wheel2.setAttribute("position","0 1.2 1");
		tracks.append(wheel2);

		let wheel3=document.createElement("a-torus");
		wheel3.setAttribute("color","gray");
		wheel3.setAttribute("rotation","0 90 0");
		wheel3.setAttribute("position","0 1.2 3.5");
		tracks.append(wheel3);

		let wheel4=document.createElement("a-torus");
		wheel4.setAttribute("color","gray");
		wheel4.setAttribute("rotation","0 90 0");
		wheel4.setAttribute("position","0 1.2 6.2");
		tracks.append(wheel4);
	casemate1.append(tracks);
}
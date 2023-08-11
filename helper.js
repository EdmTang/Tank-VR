function rnd(l,u){
  return Math.floor(Math.random()*(u-l)+l);
}
function collision(obj1, obj2){
	//console.log(obj1.x)
  let x1 = obj1.x;
  let x2 = obj2.x;
  let y1 = obj1.y;
  let y2 = obj2.y;
  let z1 = obj1.z;
  let z2 = obj2.z;
	// console.log(x2)

	//console.log(Math.round(obj1.x) + "\t" + Math.round(obj1.z) + "\t" + Math.round(obj2.x) + "\t" + Math.round(obj2.z));
  let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2);

  return distance < 1;
}
function collision2(obj1, obj2){
  let x1 = obj1.x;
  let x2 = obj2.x;
  let z1 = obj1.z;
  let z2 = obj2.z;
	
  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance < 1;
}
class Circle{

	constructor(diameter){
	this.diameter=diameter;
	}

calcdiameter(){
	return 3.142*(this.diameter);
}	
}

const circle = new Circle(12);
console.log(circle.calcdiameter());
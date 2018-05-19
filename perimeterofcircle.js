class Circle{
	constructor(perimeter){
		this.perimeter=perimeter;
		
	}


calcperimeter(){
	return 2*3.142*(this.perimeter);
}


}

const circle = new Circle (10);
console.log(circle.calcperimeter());
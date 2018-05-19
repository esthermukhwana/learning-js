class Circle{

	constructor(radius){
		this.radius=radius;

	}
	calcarea(){
		return 3.142*(this.radius*this.radius);

	}
   
}
 const circle = new Circle(12,5);
	console.log(circle.calcarea());
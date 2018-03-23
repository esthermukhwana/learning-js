class Triangle{
	constructor(base,height){
		this.base=base;
		this.height=height;
	}


calcarea(){
	return 0.5*(this.height*this.base);
}


}

const triangle = new Triangle (10,20);
console.log(triangle.calcarea());
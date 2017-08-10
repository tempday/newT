function Cell(row,col,img){
	this.row=row;
	this.col=col;
	this.img=img;
	if(!Cell.prototype.drop){
		Cell.prototype.drop=function(){
			this.row++;
		}
	}
	if(!Cell.prototype.moveR){
		Cell.prototype.moveR=function(){
			this.col++;
		}
	}
	if(!Cell.prototype.moveL){
		Cell.prototype.moveL=function(){
			this.col--;
		}
	}
}
function Shape(img){
	this.img=img;
	if(!Shape.prototype.drop){
		Shape.prototype.drop=function(){
			for(var i=0;i<this.cells.length;i++){
				//drop?
				this.cells[i].drop();
			}
		}
	}
	if(!Shape.prototype.moveR){
		Shape.prototype.moveR=function(){
			for(var i=0;i<this.cells.length;i++){
				this.cells[i].moveR();
			}
		}
	}
	if(!Shape.prototype.moveL){
		Shape.prototype.moveL=function(){
			for(var i=0;i<this.cells.length;i++){
				this.cells[i].moveL();
			}
		}
	}
}
function O(){
	//?
	Shape.call(this,"img/O.png");
	if(!Shape.prototype.isPrototypeOf(O.prototype)){
		Object.setPrototypeOf(O.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,4,this.img),new Cell(0,5,this.img),
		new Cell(1,4,this.img),new Cell(1,5,this.img),
	];
}
function T(){
	Shape.call(this,"img/T.png");
	if(!Shape.prototype.isPrototypeOf(T.prototype)){
		Object.setPrototypeOf(T.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,4,this.img),new Cell(1,3,this.img),
		new Cell(1,4,this.img),new Cell(1,5,this.img)
	];
}
function I(){
	Shape.call(this,"img/I.png");
	if(!Shape.prototype.isPrototypeOf(I.prototype)){
		Object.setPrototypeOf(I.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(0,5,this.img),new Cell(0,6,this.img)
	];
}
function S(){
	Shape.call(this,"img/S.png");
	if(!Shape.prototype.isPrototypeOf(S.prototype)){
		Object.setPrototypeOf(S.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(1,3,this.img),new Cell(0,4,this.img),
		new Cell(0,5,this.img),new Cell(1,4,this.img)
	];
}
function Z(){
	Shape.call(this,"img/z.png");
	if(!Shape.prototype.isPrototypeOf(Z.prototype)){
		Object.setPrototypeOf(Z.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(1,5,this.img),new Cell(1,4,this.img)
	];
}
function L(){
	Shape.call(this,"img/L.png");
	if(!Shape.prototype.isPrototypeOf(L.prototype)){
		Object.setPrototypeOf(L.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(0,5,this.img),new Cell(1,3,this.img)
	];
}
function J(){
	Shape.call(this,"img/J.png");
	if(!Shape.prototype.isPrototypeOf(J.prototype)){
		Object.setPrototypeOf(J.prototype,Shape.prototype);
	}
	this.cells=[
		new Cell(0,3,this.img),new Cell(0,4,this.img),
		new Cell(0,5,this.img),new Cell(1,5,this.img)
	];
}
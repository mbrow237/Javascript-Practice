//Create the object, then add properties/methods
var hotel = new Object();

hotel.name = 'Quay'; //hotel['name'] = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = fuction(){
	return this.rooms - this.booked;
};



//Create object with properties/methods
function Hotel(name, rooms, booked){
	this.name = name;
	this rooms = rooms;
	this.booked = booked;
	this.checkAvailablilty = function(){
		return this.room - this.booked;
	}
	var quayHotel = new Hotel('Quay',40,25);
	var parkHotel = new Hotel('Park',120,77);
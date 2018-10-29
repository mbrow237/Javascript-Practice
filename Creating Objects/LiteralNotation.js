//Create the object, then add properties/methods
var hotel = {}

hotel.name = 'Quay';//hotel['name'] = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function(){
	return this.rooms - this.booked;
}


//Create object with properties/methods
var hotelTwo = {
	name: 'Park',
	rooms: 120,
	book: 77,
	checkAvailability: fuction(){
		return this.rooms - this.booked;
	}
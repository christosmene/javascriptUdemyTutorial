////////////////////////////////
//The this keyword ////////////
calculateAge(1985);

function calculateAge(year){
    console.log(2016-year);
    console.log(this);
    
}

var john = {
    name:'john',
    yearOfBirth: 1990,
    calculateAge : function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();        
    }
};

john.calculateAge();

var mike={
    name:'Mike',
    yearOfBirth:1984
};

//Method borowing to use john's method for mike
mike.calculateAge = john.calculateAge;
mike.calculateAge();// magic 8a dwsei 32 tou mike dhl tin ilikia
//the this var becomes the mike object
//the this keyword only becomes sth as soon as the method gets called
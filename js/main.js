
////////////////////////////////////////////
//                                        //
//  Muestra los n primeros numero primos  //
//                                        //
////////////////////////////////////////////

//Up to you!
var primesWhatIWant = 25;

var primesCounter = 0;
var dividend = 2;

while(primesCounter < primesWhatIWant){
    var isPrime = true;
    var divider = 2;
    
    while(divider <= dividend){
        
        if(((dividend % divider) == 0) && (dividend != divider)){
            isPrime = false; } 
        divider++; }

    if(isPrime){
        console.log("El número " + dividend + " es primo. ");
        primesCounter++; }
    dividend++; }
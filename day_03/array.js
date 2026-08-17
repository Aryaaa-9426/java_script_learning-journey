let marks =[85,97,44,37,78,60];
let sum = 0 ;
for (let val of marks ){
    sum += val ;

}
let avg = sum / marks.length ;
console.log(`avg marks of the class = ${avg}`);

// offer questin 
let item = [ 250  , 645, 300 , 900 , 50 ];
let idx = 0 ;
for ( let val of item ){
    console.log (` value at index $ {idx}= ${ val}`);
    let offer = val /10 ;
    item[idx]=item[idx]-offer ;
    console.log (`value after offer = ${item[idx]}`);
    idx++;

}
// arrays methds 
 let foodItems = [ "potato", "apple","litchi"];
 foodItems.push("chips","burger");
 foodItems.pop();
 console.log (foodItems.toString());

 //concat
 let marvel =["thor", "spiderman"];
 let dc = ["superman"]
 let heroes = marvel.concat(dc);
 console.log (heroes);
 // unshift - add at starting
 marvel.unshift("antman");
 //shift - remove 
 let val = marvel.shift ();
 console.log ("deleted",val)
 console.log (marvel.slice (0,3)); 
 // slice , splice -add , delete ,replace
 let company= [];
 company.push ("bloomberg", "microsoft", "uber", "google", "ibm", "netflix");
 console.log (company.shift ());
 console.log (company.splice ( 1 , 1, "ola"));
 console.log (company.push ("amazon"));
 console.log (company);


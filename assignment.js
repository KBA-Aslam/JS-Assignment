//feetToMile
function feetToMile(feet){
    var mile = feet / 5280 ;
    return mile;
}
var result = feetToMile(26400)
console.log(result)
//woodcalculator
function woodcalculator(chair, table, khaat){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var khaatCount = khaat * 5;
    var totalWood = chairCount + tableCount + khaatCount;
    return totalWood;
}
var calculator = woodcalculator(14, 12, 12);
console.log(calculator);
//brickCalculator
var tola = 20;
if (tola <= 10) {
        var brick = tola * 1500;
        console.log(brick);
    } 
    else if (tola <= 20){
        var brick1 = tola * 1200;
        console.log(brick1);
    }
    else{
        var brick2 = tola * 1000;
        console.log(brick2);
    }
//tinyFriend
function tinyFriends(names){
    var choto = names[0];
    for(var i = 0; i < names.length; i++){
        var currentnames = names[i];
        if(currentnames.length < choto.length){
            choto = currentnames;
        } 
    }
   return choto;
}
var chotonames = tinyFriends(["sakib", "mahmud", "nirz", "tarjinPriya", "ashrafi"]);
console.log(chotonames);
var object = {brand : "Toyota" , model : "Vanitla", year : 2021 };

function CarInfo(obj){
  return "The "+obj.brand + " "+obj.model +" was manufactured in " + obj.year;
}
console.log(CarInfo(object));
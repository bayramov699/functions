const monthsArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const copyArr = monthsArr.slice(); //arrayin kopyasin cixarir
console.log(monthsArr);
copyArr.pop(); //Arrayden sonuncu elementi silir
console.log(copyArr);
copyArr.push("December"); //Arrayin sonuna element daxil edir
console.log(copyArr);
for (let i = 0; i < copyArr.length; i++) {
  console.log(copyArr[i]);
}
const firstMonth = copyArr.shift(); //Arrayin evveline element daxil edir
console.log(firstMonth);
console.log(copyArr);
const sumArr = monthsArr.concat(copyArr); //2 arrayi bir-birine birlesdirir
console.log(sumArr);
console.log(copyArr.length); //Arrayde nece element oldugunu gosterir
console.log(copyArr.copyWithin(0, 3, 4)); //Arrayde olan her hansi elemnti kopyalayib diger elementin yerine qoyur
const iterator1 = copyArr.entries();
console.log(iterator1.next().value); //Arrayde olan elementin yerini ve adini gosterir
const result = copyArr.filter(word => word.length > 7);
console.log(result);//Arrayde olan elementlerin uzunluguna gore tapib cixarir
const newArr = [8, 15, 22, 13, 59];
const isLargeNumber = (element) => element > 20;//Arrayde olan ededlerin icinde verdiyin serti odeyen ilk elementi tapir
console.log(newArr.findIndex(isLargeNumber));//tapdigin ededin indeksini cixarir
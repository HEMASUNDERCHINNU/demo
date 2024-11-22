// const costPrice = (sellingPrice,quantity,profit)=>{
//   const sellingPriceFor1meter = sellingPrice/quantity;
//   const costPrice = sellingPriceFor1meter-profit;
//   return costPrice;
// }
// const result = costPrice(8925, 85 , 15);
// console.log(`The cost price of 1m cloth is : Rs.${result}`);

// const CalculateAshare = (annulGain)=>{
//   const aInverstment = annulGain * 12/((1*12)+(2*6)+(3*4));
//   const ashare = aInverstment*1
//   return ashare;
// }
// const result = CalculateAshare(900);
// console.log(`A's share is Rs.${result}`)

// const CalculateRunningPercentage = (totalScore,boundries,sixes)=>{
//   const scoreWithoutRunning = boundries*4+ sixes*6
//   const scoreWithRunning = totalScore - scoreWithoutRunning
//   const percentage = (scoreWithRunning/totalScore)*100;
//   return percentage;
// }
// const result = CalculateRunningPercentage(110,3,8)
// console.log(`Percentage of runs scored by running is ${result.toFixed(2)}%`)

// const CalculatemonthlySalary = (rentPerncent,foodPercent,transportationPercent,educationPercent,otherPercent,savings)=>{
  
//   let expenditurePercent = rentPerncent+foodPercent+transportationPercent+educationPercent+otherPercent;

//   let savingPercent = 100 - expenditurePercent;

//   let monthlySalary = (savings/savingPercent) * 100;

//   return monthlySalary;

// }
// const result = CalculatemonthlySalary(20,20,5,10,20,5000)
// console.log(`Her monthly Salary is ${result}`)

// const isPrime = (number)=>{
//   if(number<2){
//     return false;
//   }
//   for(i=2;i<number;i++){
//     if(number % i ===0){
//       return false
//     }
//   }
//   return true;
// }
// const result = isPrime(11)
// if(result){
//   console.log("The number is prime")
// }else{
//   console.log("The number is not prime")

// const generateFib=(number)=>{
//   let n1=0;
//   let n2=1;
//   let sum;
//   let fib=[];
//   for(let i=0;i<=number;i++){
//     fib.push(n1);
//     sum=n1+n2;
//     n1=n2;
//     n2=sum;
//   }
//   return fib;
// }
// const result=generateFib(10);
// console.log(result)

// const isPalindrome=(input)=>{
//   const str=String(input)
//   for(let i=0;i<str.length/2;i++){
//     if(str[i]!==str[str.length-1-i]){
//       return false
//     }
//   }
//   return true
// }

// const result=isPalindrome(1233321)
// console.log(result)

// const CalculateReverse=(input)=>{
//   const str=String(input);
//   let reversed=" "
//   for(let i=str.length-1;i>=0;i--){
//     reversed=reversed+str[i];
//   }
//   return reversed;
// }

// const result = CalculateReverse("Hello")
// console.log(result)

// const CalculateFactorial=(number)=>{
//   if(number === 0 || number === 1){
//     return 1;
//   }
//   let result=1;

//   for(let i=1;i<=number;i++){
//     result=result*i;
//   }
//   return result;
// };

// const result=CalculateFactorial(7);
// console.log(result)

// console.log(7*6*5*4*3*2*1)

const CalculateSpeed=(firstHalfspeed,secondHalfspeed)=>{

  let distance=1;
  let time1=1/firstHalfspeed;
  let time2=1/secondHalfspeed;

  let speed=(distance+distance)/(time1+time2)

  return speed;
}
const result=CalculateSpeed(40,60)
console.log(`The average speed is ${result.toFixed()}kmph`)

// const CalculateDistance=(speed,time)=>{
  

//   let correctspeed=speed*18/5;
//   let distance=correctspeed*time;
//   return distance
// }

// const result=CalculateDistance(12,15/4)
// console.log(`The distance is ${result}kms`)
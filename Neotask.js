function isPrime(){
for(let i=0 ; i<=10; i++){
    let isPrime = true;

for (let j=2; j<= i-1;j++){
    if(i%j===0){
        isPrime = false;
        break
    }
}
if (isPrime) console.log(i);
}}
isPrime()
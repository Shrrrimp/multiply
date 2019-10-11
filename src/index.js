module.exports = function multiply(first, second) {
  // your solution
  let result="";
  let myFirst = first.split("").reverse();
  let mySecond = second.split("").reverse();
  let arr=[];
  //согласно алгоритму Фюрера находим свертку
  for(let i=0; i<first.length; ++i){
    for(let j=0; j<second.length; ++j){
      let mult=myFirst[i]*mySecond[j];
      //если в массиве уже есть запись, то складываем. Иначе - записываем
      arr[i+j]=(arr[i+j]) ? arr[i+j] + mult : mult;
    }
  }

  let sum=0;
  let toAdd=0;
  for(let i=0; i<arr.length; ++i){
    sum=arr[i];
    if(sum%10+toAdd >9){
      result+=(sum%10+toAdd)%10;
      toAdd=Math.floor((sum+toAdd)/10);
    }
    else{
      result+=sum%10+toAdd;
      toAdd=Math.floor(sum/10);
    }
  }

  if(toAdd){
    result+=toAdd;
  }

  return result.split("").reverse().join("");
}

/*** find max value in the Array */

let arr=[54,24,14,58,2,14];
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]<arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }    
  }
  console.log(arr);
console.log(arr[arr.length-1]);

  
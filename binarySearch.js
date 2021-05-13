function binarySearch(arr, item){
  let low = 0 ;
  let high = arr.length - 1;

  while (low <= high){
    let mid = Math.floor((low + high) / 2);

    if(arr[mid] == item){
      return mid;
    }
    if(arr[mid] > item  ){
      high = mid - 1;
    }
    else {
      low = mid + 1;
    } 
  

  }
  return null;
}
console.log("The position of the item is :");
console.log(binarySearch([1,2,4,5,6,8,14,15,35,56,67,78,98,434,456,778,888], 98));
let arrayOfNumbers = [30,15,60,94,50,36,40,50];


function findMaxHelper(numbers, start){
    let maximum = numbers[start];
    let max_location = start;

    for (let i = start; i < numbers.length; i++){
        if (numbers[i] > maximum){
            maximum = numbers[i];
            max_location = i
        }
    }
    return {max_number: maximum, max_index: max_location}
}

//console.log(findMaxHelper([5,2,9,1,0,15],5));

function sortBestWithHelper(numbers){

    //run as many times as there are items
    for(let j = 0 ; j < numbers.length - 1 ; j++){

        //find max number and max location starting from j

        max = findMaxHelper(numbers, j);
         max_num = max['max_number'];
         max_location  = max['max_index'];

        //swap the first and max item in an array
        numbers[max_location] = numbers[j]
        numbers[j] = max_num
    }

    return numbers

}

console.log(sortBestWithHelper(arrayOfNumbers));
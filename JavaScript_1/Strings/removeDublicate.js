var array = [1, 2, 3, 4, 2, 5, 3, 6, 7, 4];

function repeatedArray(array){
    var repeated = [];
    var see = {};

    for(var i=0; i<array.length; i++){
        var num = array[i];
        if(see[num]){
            if(!repeated.includes(num)){
                repeated.push(num)
            }else  {
                see[num] = true
            }
        }
    }
}
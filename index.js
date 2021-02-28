/* - Числа від 1 до 100 лежать в масиві, вони хаотично перемішані, звідти вилучили одне число, треба знайти, що це за число*/

function generateArray(){
    result = []
    for(let i =1 ; i<=100; i++){
        result.push(i)
    }
    result.sort(() => Math.random()-0.5)
    console.log(result)
    return result
}
function findNumber(array){
    return 5050 - array.reduce((acc,i)=>acc+i,0)
}
let randomArr = generateArray()
randomArr.pop()
console.log(randomArr)
console.log(findNumber(randomArr))



/*Вивести всі прості числа (діляться тільки на себе і на 1), від k до n (k ... n)  */
function isSimple(number){
    const limit = Math.sqrt(number)+1
    for(let i = 2 ; i < limit ; i++)
    {
        if(number%i===0){
            return false
        } 
    }
    return true
}

let testArray = [1,3,5,6,11,12,14,17,21]
console.log(testArray.filter(el=>isSimple(el)))


/* Зробити з масива об"єкт */

let arr = [
    {name: 'width', value: 10}, 
    {name: 'height', value: 20}
   ]

function arrToobj(array) {
    let result ={}
    array.forEach(element => {
        result[element.name] = element.value
    });
    return result
}

console.log(arrToobj(arr))


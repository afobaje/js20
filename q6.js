let arr=[];
function multiplier(){
   
    for (let i = 1; i < 12; i++) {
        let row=[]
        for (let j = 1; j < 12; j++) {
            row.push(i*j)
        }
        arr.push(row)
    }
    
}
multiplier()
console.log(arr)
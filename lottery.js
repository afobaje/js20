function Lottery(){
    let lottery;
    lottery.map((v)=>{
        return v.addEventListener('click',function(){
            if (v.textContent=='7') {
                console.log('you picked a lucky number')
            } else{
                console.log('wrong, better luck next time')
            }
        })
    })
    
}
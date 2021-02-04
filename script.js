function count(){
    let ini = document.getElementById('ini')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || end.value.length == 0){
        res.innerHTML = 'Impossible to count!!'
    } else {
        res.innerHTML = 'Counting: <br>'
        let i = Number(ini.value)
        let e = Number(end.value)
        let s = Number(step.value)
        if(s <= 0){
            window.alert('Invalid step! Considering step = 1!')
            s = 1
        }
        if(i < e){
            // Increasing count
            for(let c = i; c <= e; c += s){
                res.innerHTML += `${c}→ `
            }
        } else {
            // Countdown
            for(let c = i; c >= e; c -= s){
                res.innerHTML += `${c}→ `
            }
        }
        res.innerHTML += 'END!'
    }
}
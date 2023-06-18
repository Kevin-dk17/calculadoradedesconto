function calcular() {
    var prod = Number(document.getElementById('nump').value)
    var quant = Number(document.getElementById('numq').value)
    var total = document.getElementById('vt')
    var desc = document.getElementById('vd')

    if (prod == 0 || quant == 0) {
        window.alert('[ERRO] Digite ovalor do produto e a quantidade!!!')
        total.innerHTML = 'Impossível calcular!!!'
        total.style.textAlign = 'center'
        desc.innerHTML = ''
    } else {

        total.style.textAlign = ''

        if (quant <= 9) {

            var calc = prod*quant
            total.innerHTML = `Valor total: R$ ${calc.toFixed(2)}`
            desc.innerHTML = 'Não tem desconto!!!'
        } else if (quant <= 99) {

            var calc = prod*quant
            var d5 = calc-(calc*0.05)
            total.innerHTML = `Valor total: R$ ${calc.toFixed(2)}`
            desc.innerHTML = `Valor com desconto: R$ ${d5.toFixed(2)}<br>` + '(5% de desconto)'
        } else if (quant <=999) {

            var calc = prod*quant
            var d10 = calc-(calc*0.1)
            total.innerHTML = `Valor total: R$ ${calc.toFixed(2)}`
            desc.innerHTML = `Valor com desconto: R$ ${d10.toFixed(2)}<br>` + '(10% de desconto)'
        } else {

            var calc = prod*quant
            var d15 = calc-(calc*0.15)
            total.innerHTML = `Valor total: R$ ${calc.toFixed(2)}`
            desc.innerHTML = `Valor com desconto: R$ ${d15.toFixed(2)}<br>` + '(15% de desconto)'
        }
    }
}


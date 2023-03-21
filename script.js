function calcular(){
    peso = document.getElementById("kgs").value;
    material = document.querySelector('input[name=lixeiras]:checked').value;

    if (material == 1){
        valMin = (peso * 6).toFixed(2);
        valMax = (peso * 9).toFixed(2);
    }
    else if (material == 2){
        valMin = (peso * 0.5).toFixed(2);
        valMax = (peso * 1).toFixed(2);
    }
    else if (material == 3){
        valMin = (peso * 0.1).toFixed(2);
        valMax = (peso * 0.3).toFixed(2);
    }
    else if (material == 4){
        valMin = (peso * 1).toFixed(2);
        valMax = (peso * 1.5).toFixed(2);
    }
    else if (material == 5){
        valMin = (peso * 50).toFixed(2);
        valMax = (peso * 60).toFixed(2);
    }

    document.getElementById("valMin").textContent = 'R$' + valMin;
    document.getElementById("valMax").textContent = 'R$' + valMax;

    if (peso > 0) {
        document.getElementById("result").style.display = 'block';
        document.getElementById("frase-invalida").style.display = 'none';
    }
    else if (peso = 0 || peso < 0){
        document.getElementById("frase-invalida").style.display = 'block';
        document.getElementById("result").style.display = 'none';
    }
}
function someTexto(){
    document.getElementById("result").style.display = 'none';
    document.getElementById("frase-invalida").style.display = 'none';
    document.getElementById("kgs").value = '';
}
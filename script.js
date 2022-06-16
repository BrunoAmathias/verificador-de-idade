function verificar (){

    let data = new Date
    let ano = data.getFullYear()
    let formAno = document.getElementById("anodenascimento")
    let resultado = document.getElementById("res")
    let idade = ano - formAno.value

    if(formAno.value.length == 0 || formAno.value > ano){
        alert("[error]")
    }else{

        let sexo = document.getElementsByName("sex")
        let idade = ano - formAno.value
        let genero = ""
        let img = document.createElement("img")
        // img.setAttribute("id", "imagem")
        img.style.width = "350px"
        img.style.height = "350px"
        img.style.borderRadius ="50%"
        img.style.padding = "40px"

        if(sexo[0].checked){
            genero = "homem "
            if(idade >= 0 && idade <= 3){
                img.setAttribute("src", "images/bebe-m.jpg")
            }
            else if(idade < 12){
                img.setAttribute("src", "images/crianca-m.jpg")
            }
            else if(idade < 24 ){
                img.setAttribute("src", "images/adolescente-m.jpg")
            }
            else if(idade < 50){
                img.setAttribute("src", "images/homem-m.jpg")
            }
            else {
                img.setAttribute("src", "images/idoso-m.jpg")
            }
        }else if(sexo[1].checked){
            genero = "mulher "
            if(idade >= 0 && idade <= 3){
                img.setAttribute("src", "images/bebe-f.jpg")
            }
            else if(idade <12){
                img.setAttribute("src", "images/crianca-f.jpg")
            }
            else if(idade < 24 ){
                img.setAttribute("src", "images/adolescente-f.jpg")
            }
            else if(idade <50){
                img.setAttribute("src", "images/mulher-f.jpg")
            }
            else {
                img.setAttribute("src", "images/idosa-f.jpg")
            }
        }
        resultado.style.textAlign ="center"
        resultado.innerHTML = "Detectamos " + genero + "com " +  idade + " anos"
        resultado.appendChild(img)
    }
}
const p_temp = document.getElementById('p_temp');
const p_Watt = document.getElementById('p_Watt');
const p_press = document.getElementById('p_press');



const obterDados=()=>{ 
const endpoint =  "https://nodejs--romariogold99.repl.co/"
fetch(endpoint)
.then(res=> res.json())
.then(dados => {
    // console.log(dados)

    if(dados.temperatura >= 80){
       toggleDiv();
      console.log(toggleDiv + "chamou função")
    }

    // if(dados.temperatura >= 80){
    //   hideDiv();
    //   setInterval(hideDiv, 4000);
    //    return console.log(hideDiv + "chamou função")
    
    //   }

    p_temp.innerHTML= dados.temperatura + " °C"
    p_Watt.innerHTML= dados.Watt  + " Watts"
    p_press.innerHTML= dados.pressao  + " Psi"
})

}

setInterval(obterDados,  3000);

function toggleDiv ()  {
var show = document.getElementById("alert");
show.style.display = "block";

  }

  function hideDiv ()  {
    var hide = document.getElementById("alert");
    hide.style.display = "none";
  
      }

      setInterval(hideDiv,  5000);
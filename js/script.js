
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  
  
var lista = [randomNumber(1,60),randomNumber(1,60),randomNumber(1,60),randomNumber(1,60),randomNumber(1,60),randomNumber(1,60)];
    var n, i, k, aux;
    n = lista.length;
var lista2 = lista;    
var lista3 = lista;
    function imprimir() {
        var yvalue = lista;
        var data = [
            {
              y: yvalue,
              text: yvalue.map(String),
              textposition: 'auto',
              hoverinfo: 'none',
              type: 'bar'
            }
          ];
    
          Plotly.newPlot('random', data);    
       
    }
    

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }




function Burbuja() {
    var yvalue;
    var data
    
    alert("Visualizar consola para procedimiento paso a paso");
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista2[i] > lista2[i + 1]) {
                aux = lista2[i];
                lista2[i] = lista2[i + 1];
                lista2[i + 1] = aux;
                sleep(1000)
                console.log(lista2);
            }
           
        }
    }

    yvalue = lista2;
    data = [
        {
          y: yvalue,
          text: yvalue.map(String),
          textposition: 'auto',
          hoverinfo: 'none',
          type: 'bar'
        }
      ];

      Plotly.newPlot('burbuja', data);
      
}

function Maximo() {
    document.getElementById('mayor').innerHTML=Math.max.apply(null, lista);
    
}

function Minimo() {
    document.getElementById('menor').innerHTML=Math.min.apply(null, lista); 
}


function deMenorAMayor(elem1, elem2) {return elem1-elem2;}

function ordenar() {
    
    var yvalue = lista3.sort(deMenorAMayor);
    var data = [
        {
          y: yvalue,
          text: yvalue.map(String),
          textposition: 'auto',
          hoverinfo: 'none',
          type: 'bar'
        }
      ];

      Plotly.newPlot('Sort', data);
}

function compuerta() {
    var a, b, c, d, eTexto; 
    a = 3; 
    b = 5; 
    c = true; 
    d = false; 
    eTexto = '1';

    document.getElementById('comp').innerHTML = 'Variables: '+'a='+a+' b='+b+' c='+c+' d='+d+' eTexto='+eTexto+'<br>Valor de verdad para a+b == 8 && a-b ==1 es: ' + (a+b == 8 && a-b ==1) + '<br>Valor de verdad para a+b == 8 && a-b ==-2 es: ' + (a+b == 8 && a-b ==-2) +
    ('<br>Valor de verdad para c == d es: ' + (c==d)) + ('<br>Valor de verdad para c&&d es: ' + (c&&d)) + ('<br>Valor de verdad para c||d es: ' + (c||d)) + 
    ('<br>Valor de verdad para !a es: ' + (!a)) + ('<br>Valor de verdad para eTexto === 1: ' + (eTexto === 1)) +
    ('<br>Valor de verdad para eTexto == 1: ' + (eTexto == 1)) + ('<br>Valor de verdad para Zapato < avellano es: ' + ('Zapato'<'avellano'));

}
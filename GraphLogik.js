function Z() 
{
  window.SpannweiteInput = -0.5 * document.getElementById("Spannweite").value
  console.log(SpannweiteInput)
}

function T()
{
  let f = document.getElementById("F").value
  let fg = document.getElementById("F").value
  let SummantenArray = f.split(' ')
  let Variablen = []
  for (let index = 0; index < SummantenArray.length; index++) 
  {
    let OperatorArray = ["+","-","*","/","**","(",")"]
    if ((isNaN(Number(SummantenArray[index])) == true) && (!OperatorArray.includes(SummantenArray[index])))
    {
      Variablen.push(SummantenArray[index])
      for (let index = 0; index < Variablen.length; index++) 
      {
        if (Variablen[index] == Variablen[0] == false) 
        {
          window.alert("Zu viele Variablen in der Funktion")
        }
      }
    }
  }
  for (let x = SpannweiteInput; x < -1 * SpannweiteInput + 1; x++) 
  {
    let ffg = fg.replaceAll(Variablen[0], "("+ x +")")
    console.log(ffg)
    let xWert = x
    let fWert = eval(ffg)
    console.log(xWert)
    console.log(fWert)
    let xKoordinate = 0.5 * canvas1.width + xWert
    let yKoordinate = 0.5 * canvas1.height - fWert
    g.fillRect(xKoordinate, yKoordinate, 1, 1)
  }
}
const canvas1 = document.getElementById("Graph")
const g = canvas1.getContext("2d")
canvas1.width = window.innerWidth
canvas1.height = window.innerHeight/2

//x-Achse
g.beginPath()
g.moveTo(0,0.5 * canvas1.height)
g.lineTo(canvas1.width, 0.5 * canvas1.height)
g.stroke()

//y-Achse
g.beginPath()
g.moveTo(0.5 * canvas1.width, 0)
g.lineTo(0.5 * canvas1.width, canvas1.height)
g.stroke()

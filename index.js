
var katzdeli = []

function takeANumber(katzDeli) {
  var number = katzDeli.length
  var msg = ( "You are " + number + ".")
    katzdeli.push(number)
   return msg
    //return {"Welcome, " + name + ". You are number " + place + "in line."}
}

function nowServing(katzDeliLine) {
    if (!katzDeliLine.length) {
      console.log("There is nobody waiting to be served!")
        return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

    function currentLine(katzDeliLine) {
      if (!katzDeliLine.length) {
        return "The line is currently empty."
      }
    }

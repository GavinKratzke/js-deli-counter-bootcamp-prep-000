
function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  var place = katzDeli.length
    //var msg = ("Welcome, $[name].  You are number $[place] in line.")
    var msg = ("Welcome, " + name + ". You are number " + place + " in line.")
   return msg
    //return {"Welcome, " + name + ". You are number " + place + "in line."}
}

function nowServing(katzDeliLine) {
  var lineNameandNumber = []
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

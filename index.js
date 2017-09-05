var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing() {
  var servingNow = ""
  if (katzDeliLine.length === 0) {
    servingNow = "There is nobody waiting to be served!"
  }
  else {
    servingNow = "Currentlly serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
  }
  return servingNow
}

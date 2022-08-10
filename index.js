function shout(string) {
    return "HELLO".toUpperCase();
}
function whisper(string) {
  return "HELLO".toLowerCase();  
}
function logShout(string) {
   console.log(string)
   console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(String)
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!"
    var lovUnswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return cantUnswer;
    }
    else if (string.toUpperCase(string) === string){
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === string) {
      return lovUnswer;
    }
}
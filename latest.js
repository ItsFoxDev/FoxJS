console.log("🦊 Loading FoxJS Functions");
// Simple functions
function ask(q,d){return prompt(q,d)};
function disp(t){alert(t)};
function thisURL(){return location.hostname};
function hasString(b,s){return (b.includes(s))};
function hasNoString(b,s){return (!b.includes(s))};
function redir(u){window.location.href=u};
// Complex functions
function getSelected() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
function speak(text,rate){
  var speak = new SpeechSynthesisUtterance();
  speak.text = text;
  speak.rate = rate;
  window.speechSynthesis.speak(speak);
}
console.log("✅ FoxJS loaded");

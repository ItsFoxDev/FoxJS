function clog(m,c){console.log("%cFoxJS","color: white; background: " + c + "; padding: 2px 6px; border-radius: 3px; margin-right: 5px;",m);}
log('Loading simple functions','darkred');
// Simple functions
function ask(q,d){return prompt(q,d)};
function disp(t){alert(t)};
function url(){return window.location.href};
function hasString(b,s){return (b.includes(s))};
function hasNoString(b,s){return (!b.includes(s))};
function redir(u){window.location.href=u};
log('Loading complex functions','darkorange');
// Complex functions
function getSelected() {let fjs = "";if (window.getSelection) {fjs = window.getSelection().toString();} else if (document.selection && document.selection.type != "Control") {fjs = document.selection.createRange().text;}return fs;}
function speak(t){var fjp = new SpeechSynthesisUtterance();fjp.text = t;window.speechSynthesis.speak(fjp);}
log('Finished importing all main modules','darkgreen');

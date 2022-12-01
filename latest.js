console.log("🦊 Loading FoxJS Functions");
function ask(q,d){return prompt(q,d)};
function disp(t){alert(t)};
function thisURL(){return location.hostname};
function hasString(b,s){return (b.includes(s))};
function hasNoString(b,s){return (!b.includes(s))};
function redir(u){window.location.href=u};
console.log("✅ FoxJS loaded");

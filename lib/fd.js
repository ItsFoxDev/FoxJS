function fd_popup(t,d,a,c,i,p){
  if (!document.getElementById("fd-css")){
      var link  = document.createElement('link');
      link.id   = "fd-css";
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://itsfoxdev.github.io/FoxJS/css/fd.all.css';
      link.media = 'all';
      document.head.appendChild(link);}
  let fd_cont = document.createElement('div');
  fd_cont.id="fd-container";
  fd_cont.innerHTML='<div id="fd-popup"><span id="fd-title">' + t + '</span><span id="fd-desc">' + d + '</span><input id="fd-input" placeholder="' + p + '"></input><div id="fd-buttons"><button class="fd-button" onclick="fd_close(' + i + ');' + a + '" id="fd-continue"><i class="fas fa-thumbs-up"></i> OK</div>';
  document.body.appendChild(fd_cont);
  if (c===1){
    var fd_btns = document.getElementById('fd-buttons');
    fd_btns.innerHTML=fd_btns.innerHTML + '<button class="fd-button" id="fd-cancel" onclick="fd_close(' + i + ');"><i class="fas fa-x"></i> Close</button>';
  }
  document.documentElement.style.setProperty('--fd-height', '220px');
  if (i===1){
    document.getElementById('fd-input').style.display='block';
    document.documentElement.style.setProperty('--fd-height', '250px');
  }
  let fd_pop = document.getElementById('fd-popup');
  setTimeout(function(){fd_pop.style.scale=1;fd_pop.style.transform='translateY(0px)';fd_cont.style.opacity=1;},100)
}

function fd_close(i){
  console.log('🦊 Closing popup');
  let fd_popup = document.getElementById('fd-popup');
  let fd_bg = document.getElementById('fd-container');
  fd_popup.style.scale=0;
  fd_popup.style.transform='translateY(250px)';
  fd_bg.style='opacity=0';
  if (i===1){
    fd_out = document.getElementById('fd-input').value;
  }
  setTimeout(function(){fd_bg.remove();}, 300);
}

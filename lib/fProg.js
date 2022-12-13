var fontImport = document.createElement('div');
fontImport.innerHTML='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">';
document.head.appendChild(fontImport);
function fStart(){
  var fPop = document.createElement('div');
  fPop.style="transition:all 0.5s;position:fixed;bottom:10px;width:100%;height:45px;display:flex;justify-content:center;"
  fPop.id="fBox";
  var fBox = document.createElement('div');
  fBox.style="color:black;display:block; margin: auto;width:150px;height:45px;background:white;position:fixed;border-radius:10px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;";
  fBox.innerHTML="<span style='font-family: Poppins, sans-serif;width: 100%;display: block;text-align: center;vertical-align: middle;line-height: 45px;'><i class='fa-spin fa-solid fa-spinner-third'></i> Loading...</span>"
  fBox.id='fInner';
  fPop.appendChild(fBox);
  document.body.appendChild(fPop);
}
function fDone(){
  var fDone=document.getElementById('fInner');
  fDone.innerHTML="<span style='font-family: Poppins, sans-serif;width: 100%;display: block;text-align: center;vertical-align: middle;line-height: 45px;'><i class='fa-solid fa-check'></i> Complete</span>"
    setTimeout(
    function() {
      var fRemove = document.getElementById('fBox');
      fRemove.remove();
    }, 3000);
}

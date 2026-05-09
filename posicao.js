function abre(url,janela,larg,alt,scroll){
if (!scroll) { scroll='auto' }
window.open(url,janela,"toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars="+scroll+",resizable=no,copyhistory=no,width="+larg+",height="+alt);
}
function xycoord(x,y) {
 if (document.getElementById)
     {document.getElementById("arrow").style.top = y;
				 	document.getElementById("arrow").style.left = x} else
 if (document.layers)
     {document.arrow.top = y; document.arrow.left = x} else
     {document.all.arrow.style.top = y; document.all.arrow.style.left = x}
}
function xycoord2(x,y) {
 if (document.getElementById)
     {document.getElementById("arrowb").style.top = y;
				 	document.getElementById("arrowb").style.left = x} else
 if (document.layers)
     {document.arrowb.top = y; document.arrowb.left = x} else
     {document.all.arrowb.style.top = y; document.all.arrowb.style.left = x}
}
function moveArrow(begin, end) {
  if (begin < end) {
  if (document.getElementById)
  document.getElementById("arrow").style.top = (begin += 10); else 
  if (document.layers)
  document.arrow.top = (begin += 10); else
  {document.all.arrow.style.top = (begin += 10)};
  setTimeout('moveArrow(' + begin + ',' + end + ')', 20);
}}
function moveArrow2(begin, end) {
  if (begin < end) {
  if (document.getElementById)
  document.getElementById("arrow").style.left = (begin += 10); else
  if (document.layers)
  document.arrow.left = (begin += 10); else
  {document.all.arrow.style.left = (begin += 10)};
  setTimeout('moveArrow2(' + begin + ',' + end + ')', 20);
}}
function moveArrow3(begin, end) {
  if (begin > end) {
  if (document.getElementById)
  document.getElementById("arrow").style.top = (begin -= 5); else
  if (document.layers)
  document.arrow.top = (begin -= 5); else
  {document.all.arrow.style.top = (begin -= 5)};
  setTimeout('moveArrow3(' + begin + ',' + end + ')', 5);
}}
function SetCookie (name, value) {
  document.cookie = name + "=" + escape (value) + ";"
}
function setCounter(num) {
  SetCookie ("cntr",num)
}
function seta() {
posx = document.D1.select[document.D1.select.selectedIndex].posx
posy = document.D1.select[document.D1.select.selectedIndex].posy
xycoord( posx , posy )
}
var P = [["Mensal", 39.90], ["Trimestral", 99.90], ["Semestral", 149.90], ["Anual", 249.90]], sel = 0, fee = 0;
var box = document.getElementById('pl'), tt = document.getElementById('tt'), nt = document.getElementById('nt'), b1 = document.getElementById('b1'), b2 = document.getElementById('b2');
function f(v) { return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
function c() {
    box.innerHTML = ''; P.forEach(function (p, i) { var b = document.createElement('button'); b.textContent = p[0]; b.className = i == sel ? 'on' : ''; b.onclick = function () { sel = i; c() }; box.appendChild(b) });
    tt.textContent = f(P[sel][1] + fee); nt.textContent = fee ? P[sel][0] + ' ' + f(P[sel][1]) + ' + inscrição ' + f(fee) : P[sel][0] + ' ' + f(P[sel][1]) + ' + inscrição isenta 🎉'
}
b1.onclick = function () { fee = 0; b1.className = 'on'; b2.className = ''; c() };
b2.onclick = function () { fee = 14.90; b2.className = 'on'; b1.className = ''; c() };
c();
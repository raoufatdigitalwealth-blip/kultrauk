(function(){
var f=document.querySelector('.ft-f');
if(f){var n=f.cloneNode(true);f.parentNode.replaceChild(n,f);f=n;var m=document.getElementById('ft-m'),i=f.querySelector('input[type=email]'),live=!!f.getAttribute('action');
 if(/customer_posted=true/.test(location.search)&&m)m.textContent='Thanks, you’re on the list.';
 f.addEventListener('submit',function(e){if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i.value)){e.preventDefault();m.textContent='Please enter a valid email address.';i.focus();return}
  if(!live){e.preventDefault();m.textContent='Thanks, you’re on the list.';i.value=''}})}
var c=document.querySelector('.cx');if(!c)return;var b=c.querySelector('.cx-b'),menu=c.querySelector('.cx-m'),t=document.getElementById('cur-t'),opts=[].slice.call(menu.querySelectorAll('button')),form=document.getElementById('cur-f');
var cs=opts.filter(function(o){return o.getAttribute('aria-selected')==='true'})[0];if(cs)t.textContent=cs.dataset.l;
function open(o){menu.classList.toggle('on',o);b.setAttribute('aria-expanded',o)}
b.addEventListener('click',function(){open(!menu.classList.contains('on'))});
b.addEventListener('keydown',function(e){if(e.key==='ArrowUp'||e.key==='ArrowDown'){e.preventDefault();open(true);(opts[0]||b).focus()}});
menu.addEventListener('keydown',function(e){var k=opts.indexOf(document.activeElement);if(e.key==='ArrowDown'){e.preventDefault();opts[Math.min(opts.length-1,k+1)].focus()}else if(e.key==='ArrowUp'){e.preventDefault();opts[Math.max(0,k-1)].focus()}else if(e.key==='Escape'){open(false);b.focus()}});
opts.forEach(function(o){o.addEventListener('click',function(){opts.forEach(function(x){x.setAttribute('aria-selected',x===o)});t.textContent=o.dataset.l;open(false);if(form){form.querySelector('[name=country_code]').value=o.dataset.c;form.submit()}})});
document.addEventListener('click',function(e){if(!c.contains(e.target))open(false)});})();
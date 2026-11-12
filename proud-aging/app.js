/* Proud Aging – Handy-App. Alle Daten bleiben im Speicher dieses Geräts (localStorage). */
(function(){
'use strict';
if(window.innerWidth>=700&&window.name!=='pa-inner'){
  document.body.className='pf-body';
  document.body.innerHTML='<div class="pf-wrap"><div class="pf-phone" id="pfPhone"><div class="pf-screen"><div class="pf-status"><span id="pfTime"></span><span class="pf-island"></span><span class="pf-icons"><i></i><i></i><i></i><b></b></span></div><iframe name="pa-inner" title="Proud Aging App" src="'+location.href.split('#')[0]+'"></iframe><span class="pf-home"></span></div></div></div>';
  var tick=function(){var d=new Date(),e=document.getElementById('pfTime');if(e)e.textContent=d.getHours()+':'+String(d.getMinutes()).padStart(2,'0');};tick();setInterval(tick,30000);
  var fit=function(){var ph=document.getElementById('pfPhone');if(!ph)return;var sc=Math.min(1,(window.innerHeight-40)/872,(window.innerWidth-40)/418);ph.style.transform='translate(-50%,-50%) scale('+sc+')';};fit();window.addEventListener('resize',fit);
  return;
}
var KEY='proud-aging-app-v1';
var ICONS={
  today:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  sleep:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  weight:'<path d="M12 4v16M6 20h12M5 8h14M7 8l-3 6a3 3 0 0 0 6 0zM17 8l-3 6a3 3 0 0 0 6 0z"/>',
  meds:'<g transform="rotate(-35 12 12)"><rect x="3.5" y="8.5" width="17" height="7" rx="3.5"/><path d="M12 8.5v7"/></g>',
  mood:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  back:'<path d="M15 18l-6-6 6-6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  bell:'<path d="M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  share:'<path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v7h14v-7"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  star:'<path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z"/>',
  aes:'<path d="M10 3l1.6 5.4L17 10l-5.4 1.6L10 17l-1.6-5.4L3 10l5.4-1.6z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/>',
  cal:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  tel:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'
};
function ic(n,fill){return '<svg viewBox="0 0 24 24" fill="'+(fill?'currentColor':'none')+'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICONS[n]+'</svg>';}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}

/* ---------- Speicher ---------- */
function blank(){return {v:1,lang:null,name:'',sleep:[],gen:null,weight:[],goal:null,meds:[],medLog:{},mood:[],mods:null,glp1:false,gi:[],filled:{},aes:[],big:false,skin:[],wish:null,appts:[],pnote:null,doseLog:[]};}
var S;
function load(){try{var r=localStorage.getItem(KEY);S=r?JSON.parse(r):blank();}catch(e){S=blank();}var b0=blank();for(var k0 in b0)if(!(k0 in S))S[k0]=b0[k0];
  var b=blank();for(var k in b)if(!(k in S))S[k]=b[k];}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
load();
if(!S.lang){var nl=(navigator.language||'de').slice(0,2);S.lang=(nl==='tr'||nl==='en')?nl:'de';}
function T(){return window.I18N[S.lang]||window.I18N.de;}

/* ---------- Datum & Zahlen ---------- */
function pad(n){return (n<10?'0':'')+n;}
function iso(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());}
function today(){return iso(new Date());}
function parse(s){var p=s.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
function addDays(s,n){var d=parse(s);d.setDate(d.getDate()+n);return iso(d);}
function addMonths(s,n){var d=parse(s);d.setMonth(d.getMonth()+n);return iso(d);}
function fd(s,o){return parse(s).toLocaleDateString(T().locale,o||{day:'numeric',month:'short'});}
function fdl(s){return fd(s,{day:'numeric',month:'long',year:'numeric'});}
function fdw(s){return fd(s,{weekday:'short',day:'numeric',month:'short'});}
function num(x,d){if(x==null||isNaN(x))return '–';return Number(x).toFixed(d==null?1:d).replace('.',T().dec);}
function pnum(v){if(v==null)return NaN;return parseFloat(String(v).replace(',','.'));}
function byDate(a,b){return a.d<b.d?1:a.d>b.d?-1:0;}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}

/* ---------- Grundgerüst ---------- */
var root=document.getElementById('app');
var view='fill', sub=null, dataTab=null, F=null;
function setView(v,s){view=v;sub=s||null;render();window.scrollTo(0,0);}
function header(){
  return '<header class="top"><div class="brand"><span class="st">'+ic('star',true)+'</span>Proud <b>Aging</b></div>'+
    '<button class="iconbtn" data-act="settings" aria-label="'+esc(T().settings)+'">'+ic('gear')+'</button></header>';
}
function backHead(title,subt){
  return '<header class="top"><button class="iconbtn" data-act="go" data-v="'+(PM&&(view==='report'||view==='setup')?'praxis':view==='report'?'data':view==='setup'?'settings':'fill')+'" aria-label="'+esc(T().back)+'">'+ic('back')+'</button><div class="brand">'+esc(title)+'</div><span style="width:44px"></span></header>'+
    (subt?'<p class="muted" style="margin:-6px 2px 12px">'+esc(subt)+'</p>':'');
}
function tabbar(){
  var t=T(),ks=[['fill','pen',t.fill],['data','chart',t.data]];
  return '<div class="tabbar"><nav aria-label="Navigation" class="two">'+ks.map(function(k){var on=view===k[0];
    return '<button class="tab" data-act="go" data-v="'+k[0]+'"'+(on?' aria-current="page"':'')+'><span class="ti">'+ic(k[1])+'</span>'+esc(k[2])+'</button>';}).join('')+'</nav></div>';
}
function render(){document.documentElement.classList.toggle('bigtext',!!S.big);
  document.documentElement.lang=S.lang;
  if(!S.mods&&view!=='setup'&&view!=='settings')view='setup';
  root.className='app'+(view==='form'?' formmode':'');
  var html;
  if(view==='settings')html=backHead(T().settings)+vSettings();
  else if(view==='report')html=backHead(T().repTitle)+vReport();
  else if(view==='setup')html=(S.mods?backHead(T().program):header())+vSetup();
  else if(view==='praxis')html=vPraxis();
  else if(view==='form')html=vForm();
  else if(view==='data')html=header()+vData();
  else html=header()+vFill();
  if(PM&&view!=='praxis')html='<div class="pmbar"><span>'+ic('star',true)+esc(T().pmActive)+'</span><button data-act="go" data-v="praxis">'+esc(T().pmBack)+'</button></div>'+html;
  var y0=window.scrollY,key=view+'|'+(dataTab||'')+'|'+(PM?1:0),fi=F?F.i:-1,anim='';
  if(!REDUCED){if(view==='form'&&lastKey===key&&lastFi>=0&&fi!==lastFi)anim=fi>lastFi?' pa-fwd':' pa-back';else if(lastKey&&key!==lastKey)anim=' pa-in';}
  lastKey=key;lastFi=fi;root.className+=anim;
  root.innerHTML=html+(view==='report'||view==='settings'||view==='form'||view==='setup'||view==='praxis'?'':tabbar());
  if(window.scrollY!==y0)window.scrollTo(0,y0);
  bindCharts();
}

/* ---------- Container-Uebergang: Kachel waechst zur Seite und schrumpft zurueck ---------- */
var xfBusy=false,xfHubY=0;
function xfClone(src){var c=document.createElement('div');c.className='xf-clone';var cs=getComputedStyle(src),r=src.getBoundingClientRect();c.style.background=cs.backgroundColor;c.style.borderRadius=cs.borderTopLeftRadius;var inn=src.cloneNode(true);inn.classList.add('xf-in');inn.removeAttribute('data-act');inn.style.width=r.width+'px';inn.style.height=r.height+'px';inn.style.margin='0';inn.style.boxShadow='none';c.appendChild(inn);document.body.appendChild(c);return c;}
function xfPlace(c,l,t,w,h,r){c.style.left=l+'px';c.style.top=t+'px';c.style.width=w+'px';c.style.height=h+'px';if(r!=null)c.style.borderRadius=r;}
function xfExpand(tile,done){if(xfBusy){done();return;}xfBusy=true;var r=tile.getBoundingClientRect(),c=xfClone(tile);
  xfPlace(c,r.left,r.top,r.width,r.height);c.getBoundingClientRect();
  c.classList.add('grow');xfPlace(c,0,0,innerWidth,innerHeight,'0px');
  setTimeout(function(){done();root.classList.add('xf-reveal');c.classList.add('fade');
    setTimeout(function(){c.remove();root.classList.remove('xf-reveal');xfBusy=false;},300);},330);}
function xfCollapse(t){var tile=root.querySelector('.hubt[data-t="'+t+'"]');if(!tile)return;var r=tile.getBoundingClientRect(),c=xfClone(tile);c.classList.add('shrink');
  xfPlace(c,0,0,innerWidth,innerHeight,'0px');c.getBoundingClientRect();c.classList.add('go');xfPlace(c,r.left,r.top,r.width,r.height,getComputedStyle(tile).borderTopLeftRadius);
  setTimeout(function(){c.remove();tile.classList.add('xf-land');setTimeout(function(){tile.classList.remove('xf-land');},500);},380);}
var lastKey='',lastFi=-1,REDUCED=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
/* iOS zeigt :active nur mit einem Touch-Listener */
document.addEventListener('touchstart',function(){},{passive:true});

/* ---------- Toast ---------- */
var toastT;
function toast(msg){var el=document.getElementById('toast');el.innerHTML='<span class="tk">'+ic('check')+'</span><span>'+esc(msg)+'</span>';el.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove('show');},3200);}

/* ---------- Sheet (Eingabefenster) ---------- */
var sheet=document.getElementById('sheet');
function openSheet(html,onSubmit,onAction){
  if(sheetClosing)finishClose();
  sheet.innerHTML='<form novalidate><div class="grab"></div>'+html+'</form>';
  var f=sheet.querySelector('form');
  f.addEventListener('submit',function(e){e.preventDefault();var r=onSubmit(f);if(r!==false){sheet.close();}});
  f.addEventListener('click',function(e){
    var b=e.target.closest('[data-step]');
    if(b){var o=f.querySelector('output[name="'+b.dataset.for+'"]'),inp=f.querySelector('input[name="'+b.dataset.for+'"]'),st=+b.dataset.step,mn=+inp.min,mx=+inp.max;
      var v=Math.min(mx,Math.max(mn,Math.round((+inp.value+st)*10)/10));inp.value=v;o.textContent=num(v,b.dataset.dec==='0'?0:1)+(b.dataset.u||'');return;}
    if(e.target.closest('[data-close]')){e.preventDefault();sheet.close();return;}
    var a=e.target.closest('[data-sact]');if(a&&onAction){e.preventDefault();onAction(a.dataset.sact,f);}
  });
  if(sheet.showModal)sheet.showModal();else sheet.setAttribute('open','');
  document.documentElement.classList.add('pa-lock');sheet.scrollTop=0;
}
sheet.addEventListener('click',function(e){if(e.target===sheet)sheet.close();});
/* v26: Sheet wie eine native App – Hintergrund gesperrt, sanft schließen, nach unten wischen, Tastatur */
var sheetClosing=0,nativeClose=window.HTMLDialogElement&&HTMLDialogElement.prototype.close;
function finishClose(){clearTimeout(sheetClosing);sheetClosing=0;sheet.classList.remove('pa-out','pa-drag','pa-spring');sheet.style.transform='';
  if(nativeClose&&sheet.open)nativeClose.call(sheet);else sheet.removeAttribute('open');}
if(nativeClose){
  sheet.close=function(){if(!sheet.open||sheetClosing)return;if(REDUCED){finishClose();return;}
    sheet.classList.remove('pa-drag','pa-spring');sheet.classList.add('pa-out');sheetClosing=setTimeout(finishClose,200);};
  sheet.addEventListener('cancel',function(e){e.preventDefault();sheet.close();});
}
sheet.addEventListener('close',function(){document.documentElement.classList.remove('pa-lock');document.documentElement.style.removeProperty('--kb');});
var dr=null;
function scrolledInside(el){while(el&&el!==sheet){if(el.scrollTop>0)return true;el=el.parentElement;}return false;}
sheet.addEventListener('touchstart',function(e){
  if(e.touches.length!==1||sheetClosing){dr=null;return;}var t=e.touches[0],tg=e.target;
  dr={x:t.clientX,y:t.clientY,on:false,h:false,d:0,v:0,ly:t.clientY,lt:Date.now(),grab:!!tg.closest('.grab'),cal:!!tg.closest('#calbox'),field:!!tg.closest('input,textarea,select')};
},{passive:true});
sheet.addEventListener('touchmove',function(e){
  if(e.target===sheet&&e.cancelable)e.preventDefault();
  if(!dr)return;var t=e.touches[0],dx=t.clientX-dr.x,dy=t.clientY-dr.y;
  if(!dr.on&&!dr.h){if(Math.abs(dx)<8&&Math.abs(dy)<8)return;
    if(Math.abs(dx)>Math.abs(dy)){dr.h=true;return;}
    if(dy>0&&!dr.field&&(dr.grab||(sheet.scrollTop<=0&&!scrolledInside(e.target)))){dr.on=true;dr.y=t.clientY;sheet.classList.remove('pa-spring');sheet.classList.add('pa-drag');}
    else{dr=null;return;}}
  if(dr.h)return;
  if(e.cancelable)e.preventDefault();
  var d=t.clientY-dr.y;d=d<0?-Math.pow(-d,.7):d;dr.d=d;
  var now=Date.now();if(now>dr.lt){dr.v=(t.clientY-dr.ly)/(now-dr.lt);dr.ly=t.clientY;dr.lt=now;}
  sheet.style.transform='translate3d(0,'+d.toFixed(1)+'px,0)';
},{passive:false});
function dragEnd(e){if(!dr)return;var g=dr;dr=null;
  if(g.h&&g.cal&&e.changedTouches&&e.changedTouches[0]){var c=e.changedTouches[0],dx=c.clientX-g.x,dy=c.clientY-g.y;
    if(Math.abs(dx)>50&&Math.abs(dx)>1.5*Math.abs(dy)){var b=sheet.querySelector('[data-sact='+(dx<0?'calNext':'calPrev')+']');if(b&&!b.disabled)b.click();}return;}
  if(!g.on)return;sheet.classList.remove('pa-drag');
  var h=sheet.getBoundingClientRect().height;
  if(g.d>Math.min(140,h*.3)||(g.v>.5&&g.d>30)){sheet.close();return;}
  sheet.classList.add('pa-spring');sheet.style.transform='';setTimeout(function(){sheet.classList.remove('pa-spring');},280);}
sheet.addEventListener('touchend',dragEnd);sheet.addEventListener('touchcancel',dragEnd);
sheet.addEventListener('click',function(e){var b=e.target.closest('[data-sact=calPrev],[data-sact=calNext]'),box=sheet.querySelector('#calbox');
  if(b&&box&&!REDUCED){box.classList.toggle('pa-l',b.dataset.sact==='calNext');box.classList.toggle('pa-r',b.dataset.sact==='calPrev');}},true);
if(window.visualViewport){var kbFit=function(){if(!sheet.open)return;var vv=window.visualViewport,k=Math.round(window.innerHeight-vv.height-vv.offsetTop);
    document.documentElement.style.setProperty('--kb',(k>80?k:0)+'px');};
  window.visualViewport.addEventListener('resize',kbFit);window.visualViewport.addEventListener('scroll',kbFit);}
sheet.addEventListener('focusin',function(e){var el=e.target;if(!el.matches('input,textarea,select'))return;
  setTimeout(function(){if(!sheet.open)return;var r=el.getBoundingClientRect(),sr=sheet.getBoundingClientRect(),vb=window.visualViewport?window.visualViewport.height+window.visualViewport.offsetTop:window.innerHeight,lim=Math.min(sr.bottom,vb)-16;
    if(r.bottom>lim)sheet.scrollTop+=r.bottom-lim;},320);});
function fDate(v){return '<label class="field"><span>'+esc(T().date)+'</span><input class="input" type="date" name="d" value="'+esc(v)+'" max="'+today()+'" required></label>';}
function fStepper(name,label,val,min,max,step,unit,dec){
  return '<div class="field"><span>'+esc(label)+'</span><div class="stepper"><button type="button" data-step="-'+step+'" data-for="'+name+'" data-u="'+esc(unit)+'" data-dec="'+dec+'" aria-label="−">−</button><output name="'+name+'" aria-live="polite">'+num(val,dec)+esc(unit)+'</output><button type="button" data-step="'+step+'" data-for="'+name+'" data-u="'+esc(unit)+'" data-dec="'+dec+'" aria-label="+">+</button></div><input type="hidden" name="'+name+'" value="'+val+'" min="'+min+'" max="'+max+'"></div>';
}
function fYesNo(name,label,val,hint){
  var t=T();return '<div class="field"><span>'+esc(label)+'</span>'+(hint?'<small>'+esc(hint)+'</small>':'')+'<div class="seg" role="radiogroup" aria-label="'+esc(label)+'"><label><input type="radio" name="'+name+'" value="1"'+(val===true?' checked':'')+'><span>'+esc(t.yes)+'</span></label><label><input type="radio" name="'+name+'" value="0"'+(val===false?' checked':'')+'><span>'+esc(t.no)+'</span></label></div></div>';
}
function fScale(name,label,val){
  var t=T(),h='';for(var i=1;i<=5;i++)h+='<label><input type="radio" name="'+name+'" value="'+i+'"'+(val===i?' checked':'')+' aria-label="'+i+' – '+esc(t.scale[i-1])+'"><span>'+i+'</span></label>';
  return '<div class="field"><span>'+esc(label)+'</span><div class="seg scale" role="radiogroup" aria-label="'+esc(label)+'">'+h+'</div><div class="scalehint"><span>'+esc(t.scale[0])+'</span><span>'+esc(t.scale[4])+'</span></div></div>';
}
function fText(name,label,val,ph,req){return '<label class="field"><span>'+esc(label)+'</span><input class="input" type="text" name="'+name+'" value="'+esc(val||'')+'" placeholder="'+esc(ph||'')+'" maxlength="140"'+(req?' required':'')+'></label>';}
function fActions(canDel){var t=T();return '<div class="actions'+(canDel?' three':'')+'">'+(canDel?'<button type="button" class="btn light" data-sact="del" aria-label="'+esc(t.del)+'" style="color:var(--danger)">'+esc(t.del)+'</button>':'')+'<button type="button" class="btn light" data-close>'+esc(t.cancel)+'</button><button type="submit" class="btn">'+esc(t.save)+'</button></div>';}
function radio(f,n){var r=f.querySelector('input[name="'+n+'"]:checked');return r?r.value:null;}
function showErr(f,msg){var e=f.querySelector('.err');if(!e){e=document.createElement('p');e.className='err';f.querySelector('.actions').before(e);}e.textContent=msg;}

/* ---------- Schlaf ---------- */

/* ---------- Monatskalender fuer Tagesdaten ---------- */
var DC={sleep:0,mood:0,weight:0};
function dcInfo(kind,d){
  if(kind==='mood'){var m=moodFor(d);return m&&m.mood!=null?{c:'mv'+m.mood,dot:hotOn()&&m.hot>0}:null;}
  if(kind==='sleep'){var s=sleepFor(d);return s?{c:s.h>=7?'sv3':s.h>=6?'sv2':'sv1',dot:hotOn()&&!!s.hot,x:!s.through}:null;}
  var w=null;S.weight.forEach(function(x){if(x.d===d)w=x;});return w?{c:'wv',lbl:num(w.kg)}:null;}
function dayCal(kind){var t=T(),base=parse(today()),off=DC[kind]||0,first=new Date(base.getFullYear(),base.getMonth()+off,1),yy=first.getFullYear(),mm=first.getMonth(),dim=new Date(yy,mm+1,0).getDate(),lead=(first.getDay()+6)%7,td=today();
  var src=kind==='mood'?S.mood:kind==='sleep'?S.sleep:S.weight,oldest=src.reduce(function(a,x){return !a||x.d<a?x.d:a;},null);
  var canPrev=oldest&&oldest<yy+'-'+String(mm+1).padStart(2,'0')+'-01';
  var act=kind==='mood'?'editMood':kind==='sleep'?'editSleep':'editWeight';
  var h='<div class="card dcal"><div class="dc-h"><button class="cal-n" data-act="dcNav" data-k="'+kind+'" data-dir="-1" aria-label="'+esc(t.dcPrev)+'"'+(canPrev?'':' disabled')+'>‹</button><strong>'+esc(first.toLocaleDateString(t.locale,{month:'long',year:'numeric'}))+'</strong><button class="cal-n" data-act="dcNav" data-k="'+kind+'" data-dir="1" aria-label="'+esc(t.dcNext)+'"'+(off>=0?' disabled':'')+'>›</button></div><div class="dc-g">';
  for(var i=0;i<7;i++)h+='<span class="cal-wd">'+esc(fd(addDays(weekDays()[0],i),{weekday:'short'}).replace('.','').slice(0,2))+'</span>';
  for(i=0;i<lead;i++)h+='<span></span>';
  for(var dd=1;dd<=dim;dd++){var d=yy+'-'+String(mm+1).padStart(2,'0')+'-'+String(dd).padStart(2,'0'),f=d>td,inf=f?null:dcInfo(kind,d);
    h+='<button class="dc-d'+(inf?' '+inf.c:'')+(d===td?' today':'')+'"'+(f?' disabled':' data-act="'+act+'" data-d="'+d+'"')+' aria-label="'+esc(fdl(d))+'"><b>'+dd+'</b>'+(inf&&inf.lbl?'<small>'+esc(inf.lbl)+'</small>':'')+(inf&&inf.dot?'<i class="hd"></i>':'')+(inf&&inf.x?'<i class="nx"></i>':'')+'</button>';}
  h+='</div><p class="dc-hint">'+esc(t.dcHint)+'</p>'+dcLegend(kind)+'</div>';return h;}
function dcLegend(kind){var t=T(),L=t.dcLeg;
  if(kind==='mood')return '<div class="dc-leg"><span><i class="lg mv1"></i>'+esc(t.scale[0])+'</span><span><i class="lg mv3"></i>'+esc(t.scale[2])+'</span><span><i class="lg mv5"></i>'+esc(t.scale[4])+'</span>'+(hotOn()?'<span><i class="lg hdl"></i>'+esc(L.hot)+'</span>':'')+'</div>';
  if(kind==='sleep')return '<div class="dc-leg"><span><i class="lg sv1"></i>'+esc(L.s1)+'</span><span><i class="lg sv2"></i>'+esc(L.s2)+'</span><span><i class="lg sv3"></i>'+esc(L.s3)+'</span><span><i class="lg nxl"></i>'+esc(L.nx)+'</span>'+(hotOn()?'<span><i class="lg hdl"></i>'+esc(L.hot)+'</span>':'')+'</div>';
  return '';}
function sleepFor(d){for(var i=0;i<S.sleep.length;i++)if(S.sleep[i].d===d)return S.sleep[i];return null;}
function genDue(){return !S.gen||today()>=addMonths(S.gen.at,3);}
function sheetSleep(d){
  var t=T(),e=sleepFor(d||today())||{d:d||today(),h:7,through:null,hot:null,note:''},isNew=!sleepFor(e.d);
  openSheet('<h2>'+esc(t.addNight)+'</h2>'+fDate(e.d)+fStepper('h',t.sleepHours,e.h,0,14,0.5,' '+t.h,1)+fYesNo('through',t.sleptThrough,e.through)+fYesNo('hot',t.hotNight,e.hot)+fText('note',t.note,e.note)+fActions(!isNew),
  function(f){var th=radio(f,'through'),ho=radio(f,'hot');if(th===null||ho===null){showErr(f,S.lang==='en'?'Please answer both questions.':S.lang==='tr'?'Lütfen iki soruyu da yanıtlayın.':'Bitte beide Fragen beantworten.');return false;}
    var d=f.d.value||today();S.sleep=S.sleep.filter(function(x){return x.d!==d&&x.d!==e.d;});
    S.sleep.push({d:d,h:+f.querySelector('input[name=h]').value,through:th==='1',hot:ho==='1',note:f.note.value.trim()});save();render();toast(t.saved);},
  function(a){if(a==='del'){S.sleep=S.sleep.filter(function(x){return x.d!==e.d;});save();sheet.close();render();toast(t.deleted);}});
}
function sheetGen(){
  var t=T(),g=S.gen||{};
  openSheet('<h2>'+esc(t.genTitle)+'</h2><p class="muted small" style="margin:-8px 0 0">'+esc(t.genSub)+'</p>'+fYesNo('ein',t.genEin,g.ein,t.genEinHint)+fYesNo('durch',t.genDurch,g.durch,t.genDurchHint)+fActions(false),
  function(f){var a=radio(f,'ein'),b=radio(f,'durch');if(a===null||b===null){showErr(f,S.lang==='en'?'Please answer both questions.':S.lang==='tr'?'Lütfen iki soruyu da yanıtlayın.':'Bitte beide Fragen beantworten.');return false;}
    S.gen={at:today(),ein:a==='1',durch:b==='1'};save();render();toast(t.genSaved+' '+fdl(addMonths(today(),3)));});
}
function last14(){var a=[],d=today();for(var i=13;i>=0;i--)a.push(addDays(d,-i));return a;}
function vSleep(){
  var t=T(),days=rangeDays(),es=days.map(sleepFor),got=es.filter(Boolean);
  var avg=got.length?got.reduce(function(s,x){return s+x.h;},0)/got.length:null;
  var th=got.filter(function(x){return x.through;}).length,hot=got.filter(function(x){return x.hot;}).length;
  var h='<div class="pagehead"><h1>'+esc(t.sleepTitle)+'</h1><p>'+esc(RANGE===14?t.sleepSub:t.rngLast.replace('{r}',t.rng[RANGE>91?2:1]))+'</p></div>';
  h+='<div class="kpis"><div class="kpi"><span>'+esc(t.avgSleep)+'</span><strong>'+(avg==null?'–':num(avg)+' '+t.h)+'</strong></div><div class="kpi"><span>'+esc(t.through)+'</span><strong>'+th+' / '+got.length+'</strong></div><div class="kpi"><span>'+esc(t.hotNights)+'</span><strong>'+hot+' / '+got.length+'</strong></div></div>';
  h+='<div class="card">'+(RANGE>14?sleepWeekChart(days):sleepChart(days,es))+'<div class="legend"><span><i class="ok"></i>'+esc(t.legendThrough)+'</span><span><i></i>'+esc(t.legendNot)+'</span></div></div>';
  if(S.gen&&!genDue())h+='<div class="card"><div class="row"><div><h2>'+esc(t.genTitle)+'</h2><p class="sub" style="margin:2px 0 0">'+esc(t.genLast)+': '+esc(fdl(S.gen.at))+' · '+esc(t.genNext)+': '+esc(fdl(addMonths(S.gen.at,3)))+'</p></div></div><p class="small" style="margin:10px 0 0">'+esc(t.genEin)+' <strong>'+(S.gen.ein?t.yes:t.no)+'</strong><br>'+esc(t.genDurch)+' <strong>'+(S.gen.durch?t.yes:t.no)+'</strong></p><button class="btn ghost" data-act="gen">'+esc(t.genChange)+'</button></div>';
  var all=S.sleep.slice().sort(byDate).slice(0,7);
  h+=dayCal('sleep')+'<div class="card"><h2>'+esc(T().dcLast7)+'</h2>'+(all.length?'<ul class="list">'+all.map(function(x){
    return '<li><div><div class="t">'+esc(fdw(x.d))+' · '+num(x.h)+' '+t.h+'</div><div class="m">'+(x.through?'<span class="tag ok">'+esc(t.legendThrough)+'</span>':'<span class="tag no">'+esc(t.legendNot)+'</span>')+(x.hot?'<span class="tag hot">'+esc(t.hotDayShort)+'</span>':'')+(x.note?' '+esc(x.note):'')+'</div></div><button class="edit" data-act="editSleep" data-d="'+x.d+'" aria-label="'+esc(t.edit)+'">'+ic('pen')+'</button></li>';}).join('')+'</ul>':'<p class="empty">'+esc(t.none)+'</p>')+'</div>';
  return h;
}
function dueBanner(){var t=T();return '<div class="due"><span class="di">'+ic('bell')+'</span><div><strong>'+esc(t.dueTitle)+'</strong><p>'+esc(t.dueText)+(S.gen?' '+esc(t.genLast)+': '+esc(fdl(S.gen.at))+'.':'')+'</p><button class="btn sm" data-act="gen">'+esc(t.dueBtn)+'</button></div></div>';}

/* ---------- Grafiken ---------- */
function sleepChart(days,es){
  var t=T(),W=340,H=170,L=26,R=6,TP=10,B=24,bw=(W-L-R)/days.length,Y=function(v){return TP+(10-v)/10*(H-TP-B);},g='';
  [0,5,10].forEach(function(v){g+='<line class="gl" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/><text class="ax" x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>';});
  days.forEach(function(d,i){var e=es[i],x=L+i*bw+2.5,w=bw-5;
    if(e)g+='<rect class="bar'+(e.through?' ok':'')+'" x="'+x+'" y="'+Y(e.h)+'" width="'+w+'" height="'+(Y(0)-Y(e.h))+'" rx="3"/>';
    g+='<rect class="hit" data-i="'+i+'" x="'+(L+i*bw)+'" y="'+TP+'" width="'+bw+'" height="'+(H-TP-B)+'"/>';
    if(i%3===1||i===13)g+='<text class="ax" x="'+(x+w/2)+'" y="'+(H-6)+'" text-anchor="middle">'+parse(d).getDate()+'.</text>';});
  g+='<line class="goal" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(7)+'" y2="'+Y(7)+'"/><text class="goalt" x="'+(W-R)+'" y="'+(Y(7)-5)+'" text-anchor="end">'+esc(t.goal7)+'</text>';
  var info=days.map(function(d,i){var e=es[i];return e?fdw(d)+': '+num(e.h)+' '+t.h+' · '+(e.through?t.legendThrough:t.legendNot)+(e.hot?' · '+t.hotDayShort:''):fdw(d)+': –';});
  return '<div class="chart" data-info="'+esc(JSON.stringify(info))+'"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+esc(t.sleepTitle)+'">'+g+'</svg><div class="chartinfo muted">'+esc(t.tapBar)+'</div></div>';
}
function lineChart(pts,goal,unit,labelFn,marks){
  var W=340,H=180,L=34,R=10,TP=14,B=24;
  if(!pts.length)return '<p class="empty">'+esc(T().none)+'</p>';
  var vs=pts.map(function(p){return p.v;});if(goal!=null)vs.push(goal);
  var mn=Math.floor(Math.min.apply(null,vs)-1),mx=Math.ceil(Math.max.apply(null,vs)+1);
  var t0=parse(pts[0].d).getTime(),t1=parse(pts[pts.length-1].d).getTime();if(t1===t0)t1=t0+864e5;
  var X=function(d){return L+(parse(d).getTime()-t0)/(t1-t0)*(W-L-R);},Y=function(v){return TP+(mx-v)/(mx-mn)*(H-TP-B);},g='';
  var step=Math.max(1,Math.round((mx-mn)/4));
  for(var v=mn;v<=mx;v+=step)g+='<line class="gl" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/><text class="ax" x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>';
  if(goal!=null)g+='<line class="goal" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(goal)+'" y2="'+Y(goal)+'"/><text class="goalt" x="'+(W-R)+'" y="'+(Y(goal)-5)+'" text-anchor="end">'+esc(T().goal)+' '+num(goal)+' '+unit+'</text>';
  (marks||[]).forEach(function(z){if(z.d<pts[0].d||z.d>pts[pts.length-1].d)return;var x=X(z.d).toFixed(1);g+='<line class="mk" x1="'+x+'" x2="'+x+'" y1="'+TP+'" y2="'+(H-B)+'"/><text class="mkt" x="'+(+x+3)+'" y="'+(TP+8)+'">'+esc(z.dose)+'</text>';});
  g+='<polyline class="line" points="'+pts.map(function(p){return X(p.d).toFixed(1)+','+Y(p.v).toFixed(1);}).join(' ')+'"/>';
  pts.forEach(function(p,i){g+='<circle class="dot" cx="'+X(p.d).toFixed(1)+'" cy="'+Y(p.v).toFixed(1)+'" r="4.5"/>';});
  g+='<text class="ax" x="'+L+'" y="'+(H-6)+'">'+esc(fd(pts[0].d))+'</text><text class="ax" x="'+(W-R)+'" y="'+(H-6)+'" text-anchor="end">'+esc(fd(pts[pts.length-1].d))+'</text>';
  var n=pts.length;pts.forEach(function(p,i){var x0=i===0?L:(X(pts[i-1].d)+X(p.d))/2,x1=i===n-1?W-R:(X(p.d)+X(pts[i+1].d))/2;g+='<rect class="hit" data-i="'+i+'" x="'+x0+'" y="'+TP+'" width="'+Math.max(1,x1-x0)+'" height="'+(H-TP-B)+'"/>';});
  var info=pts.map(labelFn);
  return '<div class="chart line-chart" data-info="'+esc(JSON.stringify(info))+'"><svg viewBox="0 0 '+W+' '+H+'" role="img">'+g+'</svg><div class="chartinfo muted">'+esc(T().tapPoint)+'</div></div>';
}
function barChart(days,vals,maxV){
  var W=340,H=150,L=26,R=6,TP=10,B=24,bw=(W-L-R)/days.length,mx=Math.max(maxV,4),Y=function(v){return TP+(mx-v)/mx*(H-TP-B);},g='';
  [0,Math.round(mx/2),mx].forEach(function(v){g+='<line class="gl" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/><text class="ax" x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>';});
  days.forEach(function(d,i){var v=vals[i],x=L+i*bw+2.5,w=bw-5;if(v!=null)g+='<rect class="bar hot" x="'+x+'" y="'+Y(Math.max(v,0.15))+'" width="'+w+'" height="'+(Y(0)-Y(Math.max(v,0.15)))+'" rx="3"/>';
    g+='<rect class="hit" data-i="'+i+'" x="'+(L+i*bw)+'" y="'+TP+'" width="'+bw+'" height="'+(H-TP-B)+'"/>';
    if(i%3===1||i===13)g+='<text class="ax" x="'+(x+w/2)+'" y="'+(H-6)+'" text-anchor="middle">'+parse(d).getDate()+'.</text>';});
  return g;
}
function bindCharts(){
  [].forEach.call(root.querySelectorAll('.chart'),function(c){
    var info=JSON.parse(c.getAttribute('data-info')||'[]'),out=c.querySelector('.chartinfo'),svg=c.querySelector('svg');
    function pick(e){var h=e.target.closest('.hit');if(!h)return;var i=+h.dataset.i;out.textContent=info[i];out.classList.remove('muted');
      [].forEach.call(svg.querySelectorAll('.sel'),function(s){s.classList.remove('sel');});
      var bars=svg.querySelectorAll('.dot');if(bars.length&&bars[i])bars[i].classList.add('sel');}
    svg.addEventListener('click',pick);svg.addEventListener('pointermove',function(e){var el=e.pointerType==='mouse'?e.target:document.elementFromPoint(e.clientX,e.clientY);if(el&&svg.contains(el))pick({target:el});});
  });
}

/* ---------- Gewicht ---------- */
function vWeight(){
  var t=T(),from=addDays(today(),-RANGE+1),all0=S.weight.slice().sort(function(a,b){return a.d<b.d?-1:1;}),w=all0.filter(function(x){return x.d>=from;}),last=all0[all0.length-1],first=all0[0];
  var h='<div class="pagehead"><h1>'+esc(t.weightTitle)+'</h1></div>';
  h+='<div class="kpis"><div class="kpi"><span>'+esc(t.current)+'</span><strong>'+(last?num(last.kg)+' '+t.kg:'–')+'</strong></div><div class="kpi"><span>'+esc(t.sinceStart)+'</span><strong>'+(all0.length>1?(last.kg-first.kg>0?'+':'−')+num(Math.abs(last.kg-first.kg))+' '+t.kg:'–')+'</strong></div><div class="kpi"><span>'+esc(t.goal)+'</span><strong>'+(S.goal?num(S.goal)+' '+t.kg:'–')+'</strong></div></div>';
  if(S.glp1){var g14=last14().map(giFor).filter(Boolean);h+='<div class="card"><div class="row"><h2>'+esc(t.giDays)+'</h2><span class="big">'+g14.filter(function(x){return x.v;}).length+' / '+g14.length+'</span></div><p class="sub" style="margin:2px 0 0">'+esc(t.moodSub)+'</p></div>';}
  h+='<div class="card"><h2>'+esc(t.weightChart)+'</h2>'+lineChart(w.map(function(x){return {d:x.d,v:x.kg};}),S.goal,t.kg,function(p){var dz=null;(S.doseLog||[]).forEach(function(z){if(z.d<=p.d)dz=z;});return fdl(p.d)+': '+num(p.v)+' '+t.kg+(dz?' · '+dz.name+' '+dz.dose:'');},(S.doseLog||[]).filter(function(z){return z.d>=from;}))+(w.length>1?'<p class="rngdelta">'+esc(t.rngDelta.replace('{r}',t.rngDat[RANGE>91?2:RANGE>14?1:0]))+': <strong>'+(w[w.length-1].kg-w[0].kg>0?'+':'−')+num(Math.abs(w[w.length-1].kg-w[0].kg))+' '+t.kg+'</strong></p>':'')+'</div>';
  h+='<button class="btn light full" data-act="goal" style="margin-bottom:12px">'+esc(t.setGoal)+'</button>';
  var all=S.weight.slice().sort(byDate).slice(0,6);
  h+=dayCal('weight')+'<div class="card"><h2>'+esc(T().dcLastW)+'</h2>'+(all.length?'<ul class="list">'+all.map(function(x){return '<li><div><div class="t">'+num(x.kg)+' '+t.kg+(x.src==='praxis'?' <span class="pbadge">'+esc(t.fromPraxis)+'</span>':'')+'</div><div class="m">'+esc(fdl(x.d))+'</div></div><button class="edit" data-act="editWeight" data-d="'+x.d+'" aria-label="'+esc(t.edit)+'">'+ic('pen')+'</button></li>';}).join('')+'</ul>':'<p class="empty">'+esc(t.none)+'</p>')+'</div>';
  return h;
}
function sheetWeight(d){
  var t=T(),ex=null;S.weight.forEach(function(x){if(x.d===d)ex=x;});
  var last=S.weight.slice().sort(byDate)[0],e=ex||{d:d||today(),kg:last?last.kg:70};
  openSheet('<h2>'+esc(t.enterWeight)+'</h2>'+fDate(e.d)+'<label class="field"><span>'+esc(t.weightKg)+'</span><input class="input" type="text" inputmode="decimal" name="kg" value="'+num(e.kg)+'" required></label>'+fActions(!!ex),
  function(f){var kg=pnum(f.kg.value);if(!(kg>=25&&kg<=300)){showErr(f,'25–300 '+t.kg);return false;}var d=f.d.value||today();
    S.weight=S.weight.filter(function(x){return x.d!==d&&x.d!==e.d;});S.weight.push(PM?{d:d,kg:Math.round(kg*10)/10,src:'praxis'}:{d:d,kg:Math.round(kg*10)/10});save();render();toast(t.saved);},
  function(a){if(a==='del'){S.weight=S.weight.filter(function(x){return x.d!==e.d;});save();sheet.close();render();toast(t.deleted);}});
}
function sheetGoal(){var t=T();
  openSheet('<h2>'+esc(t.setGoal)+'</h2><label class="field"><span>'+esc(t.goalKg)+'</span><input class="input" type="text" inputmode="decimal" name="g" value="'+(S.goal?num(S.goal):'')+'"></label>'+fActions(false),
  function(f){var g=pnum(f.g.value);S.goal=(g>=25&&g<=300)?Math.round(g*10)/10:null;save();render();toast(t.saved);});}

/* ---------- Medikation ---------- */
var SLOTS=['morning','noon','evening','night'];
function wd(d){return parse(d||today()).getDay();}
function wdName(n){return new Date(2024,0,7+(+n)).toLocaleDateString(T().locale,{weekday:'long'});}
function slotLabel(m,s){var t=T();return s==='weekly'?t.weekly+' ('+wdName(m.day==null?1:m.day)+')':t.slots[s];}
function askDoses(d){var ds=doses(d);return S.medAsk===false?ds.filter(function(x){return /:weekly$/.test(x.k);}):ds;}
function doses(d){d=d||today();var a=[];S.meds.forEach(function(m){if(m.since&&d<m.since)return;SLOTS.forEach(function(s){if(m.when.indexOf(s)>=0)a.push({m:m,s:s,k:m.id+':'+s});});if(m.when.indexOf('weekly')>=0&&+m.day===wd(d))a.push({m:m,s:'weekly',k:m.id+':weekly'});});return a;}
function takenOn(d,k){return !!(S.medLog[d]&&S.medLog[d][k]);}
function medChecklist(){
  var t=T(),ds=doses(),d=today();
  if(!ds.length)return '<p class="muted small" style="margin:6px 0 10px">'+esc(t.noMeds)+'</p><button class="btn light sm" data-act="go" data-v="meds">'+esc(t.addMeds)+'</button>';
  var n=ds.filter(function(x){return takenOn(d,x.k);}).length;
  return '<div class="progress" aria-hidden="true"><i style="width:'+Math.round(n/ds.length*100)+'%"></i></div><p class="muted small" style="margin:0 0 4px">'+n+' / '+ds.length+' '+esc(t.taken)+'</p>'+
    ds.map(function(x){var on=takenOn(d,x.k);return '<button class="check'+(on?' on':'')+'" data-act="take" data-k="'+x.k+'" aria-pressed="'+on+'"><span class="box">'+ic('check')+'</span><span class="ct"><strong>'+esc(x.m.name)+' · '+esc(x.m.dose)+'</strong><span class="small muted">'+esc(slotLabel(x.m,x.s))+(x.m.how?' · '+esc(x.m.how):'')+'</span></span></button>';}).join('');
}
function medForm(m){var n=(m.name+' '+(m.how||'')).toLowerCase(),hit=null;
  MEDDB.forEach(function(x){if(!hit&&m.name.toLowerCase().indexOf(x[0].toLowerCase())===0)hit=x[3];});
  if(hit)return hit;
  if(/spritz|inject|iğne|pen/.test(n))return 'inj';if(/gel|creme|cream|krem/.test(n))return 'gel';if(/pflaster|patch|bant/.test(n))return 'patch';
  if(/spray|sprüh|sprey/.test(n))return 'spray';if(/vagin|zäpfchen/.test(n))return 'vag';if(/kapsel|capsul|kapsül/.test(n))return 'caps';return 'oral';}
var MFORM={inj:['#F6E7E4','#A0526B','<g transform="rotate(45 12 12)"><rect x="9" y="6" width="6" height="11" rx="1.5"/><path d="M12 2v4M9.5 2h5M12 17v5M9 10h2.5M9 13h2.5"/></g>'],
  gel:['#E3ECF5','#3A6A95','<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>'],
  spray:['#E3ECF5','#3A6A95','<rect x="6" y="10.5" width="8" height="10.5" rx="2"/><rect x="7.5" y="4.5" width="5" height="4" rx="1"/><path d="M17 4.5l2-1M17 6.5h2.5M17 8.5l2 1"/>'],
  patch:['#F8EADB','#9A5B1E','<rect x="4" y="7" width="16" height="10" rx="3"/><circle cx="10" cy="12" r=".8"/><circle cx="14" cy="12" r=".8"/>'],
  vag:['#ECE8F4','#5B4A8A','<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>'],
  caps:['#E4F0E6','#2E7D4F','<g transform="rotate(-35 12 12)"><rect x="3.5" y="8.5" width="17" height="7" rx="3.5"/><path d="M12 8.5v7"/></g>'],
  oral:['#E4F0E6','#2E7D4F','<rect x="3.5" y="8" width="17" height="8" rx="4"/><path d="M12 8v8"/>'],
  fast:['#E4F0E6','#2E7D4F','<rect x="3.5" y="8" width="17" height="8" rx="4"/><path d="M12 8v8"/>']};
var SLOTIC={morning:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  noon:'<circle cx="12" cy="12" r="5"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>',
  evening:'<path d="M3 17h18M6 17a6 6 0 0 1 12 0M12 7V4M5.6 10.6L4 9M18.4 10.6L20 9"/>',
  night:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  weekly:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'};
function svgI(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>';}
function nextWeekly(m){var d=today();for(var i=0;i<8;i++){var x=addDays(d,i);if(wd(x)===+m.day&&!(i===0&&takenOn(x,m.id+':weekly')))return x;}return null;}
function vMeds(){
  var t=T(),h='<div class="pagehead"><h1>'+esc(t.medsTitle)+'</h1><p>'+esc(t.medsHint)+'</p></div>';
  if(S.meds.length){
    var tot=0,ok=0;for(var i=0;i<7;i++){var d=addDays(today(),-i);askDoses(d).forEach(function(x){tot++;if(takenOn(d,x.k))ok++;});}
    if(S.medAsk===false)h+='<p class="muted" style="margin:0 4px 12px">'+esc(t.medAskOffHint)+'</p>';
    var pc=tot?ok/tot:0,C=2*Math.PI*22;
    h+='<div class="card madh"><svg viewBox="0 0 54 54" class="mring" aria-hidden="true"><circle cx="27" cy="27" r="22" fill="none" stroke="#EDE7DD" stroke-width="7"/><circle cx="27" cy="27" r="22" fill="none" stroke="'+(pc>=.9?'#3E9B6A':pc>=.7?'#5B8DB8':'#C9762B')+'" stroke-width="7" stroke-linecap="round" stroke-dasharray="'+C.toFixed(1)+'" stroke-dashoffset="'+(C*(1-pc)).toFixed(1)+'" transform="rotate(-90 27 27)"/></svg><div><strong>'+Math.round(pc*100)+' %</strong><span>'+esc(t.adherence)+'</span><small>'+esc(t.medTakenOf.replace('{a}',ok).replace('{b}',tot))+'</small></div></div>';
    var days7=[];for(var j=6;j>=0;j--)days7.push(addDays(today(),-j));
    h+=S.meds.map(function(m){var f=MFORM[medForm(m)]||MFORM.oral,wk=m.when.indexOf('weekly')>=0;
      var slots=m.when.map(function(s){return '<span class="mslot">'+svgI(SLOTIC[s]||SLOTIC.morning)+esc(slotLabel(m,s))+'</span>';}).join('');
      var strip=days7.map(function(d){var ks=doses(d).filter(function(x){return x.k.indexOf(m.id+':')===0;});if(!ks.length)return '<span class="md na"><small>'+esc(fd(d,{weekday:'short'}).replace('.','').slice(0,2))+'</small><i></i></span>';
        var all=ks.every(function(x){return takenOn(d,x.k);}),some=ks.some(function(x){return takenOn(d,x.k);});
        return '<span class="md '+(all?'ok':some?'part':(d===today()?'open':'miss'))+'"><small>'+esc(fd(d,{weekday:'short'}).replace('.','').slice(0,2))+'</small><i>'+(all?ic('check'):'')+'</i></span>';}).join('');
      var nx=wk?nextWeekly(m):null;
      return '<div class="medc"><div class="mc-top"><span class="mc-i" style="background:'+f[0]+';color:'+f[1]+'">'+svgI(f[2])+'</span><div class="mc-n"><strong>'+esc(m.name)+'</strong><span class="mc-d">'+esc(m.dose)+'</span>'+(m.src==='praxis'?'<span class="pbadge">'+esc(t.fromPraxis)+'</span>':'')+'</div><button class="edit" data-act="editMed" data-id="'+m.id+'" aria-label="'+esc(t.edit)+'">'+ic('pen')+'</button></div>'+
        '<div class="mslots">'+slots+'</div>'+
        (nx?'<p class="mc-next">'+svgI(SLOTIC.weekly)+esc(t.medNext)+': <strong>'+esc(nx===today()?t.today:fd(nx,{weekday:'short',day:'numeric',month:'short'}))+'</strong></p>':'')+
        (wk||S.medAsk===false?'':'<div class="mstrip">'+strip+'</div>')+'</div>';}).join('');
  } else h+='<p class="empty card">'+esc(t.none)+'</p>';
  h+='<button class="btn full" data-act="addMed" style="margin-bottom:12px">'+ic('plus')+esc(t.addMed)+'</button>';
  return h;
}

/* ---------- Medikamenten-Vorschläge ---------- */
var HOWS={inj:{de:'Spritze unter die Haut',en:'Injection under the skin',tr:'Deri altına iğne'},gel:{de:'Auf Arm/Oberschenkel auftragen',en:'Apply to arm/thigh',tr:'Kol/bacağa sürün'},spray:{de:'Auf Unterarm sprühen',en:'Spray on forearm',tr:'Ön kola sıkın'},patch:{de:'Pflaster aufkleben',en:'Apply patch',tr:'Bant yapıştırın'},oral:{de:'Tablette mit Wasser',en:'Tablet with water',tr:'Su ile tablet'},caps:{de:'Kapsel mit Wasser',en:'Capsule with water',tr:'Su ile kapsül'},fast:{de:'Nüchtern, 30 Min. vor dem Frühstück',en:'Empty stomach, 30 min before breakfast',tr:'Aç karnına, kahvaltıdan 30 dk önce'},vag:{de:'Vaginal anwenden',en:'Use vaginally',tr:'Vajinal uygulayın'}};
var MEDDB=[["Wegovy", "Semaglutid", "0,25 mg", "inj", "weekly"], ["Wegovy", "Semaglutid", "0,5 mg", "inj", "weekly"], ["Wegovy", "Semaglutid", "1 mg", "inj", "weekly"], ["Wegovy", "Semaglutid", "1,7 mg", "inj", "weekly"], ["Wegovy", "Semaglutid", "2,4 mg", "inj", "weekly"], ["Wegovy", "Semaglutid", "7,2 mg", "inj", "weekly"], ["Ozempic", "Semaglutid", "0,25 mg", "inj", "weekly"], ["Ozempic", "Semaglutid", "0,5 mg", "inj", "weekly"], ["Ozempic", "Semaglutid", "1 mg", "inj", "weekly"], ["Ozempic", "Semaglutid", "2 mg", "inj", "weekly"], ["Mounjaro", "Tirzepatid", "2,5 mg", "inj", "weekly"], ["Mounjaro", "Tirzepatid", "5 mg", "inj", "weekly"], ["Mounjaro", "Tirzepatid", "7,5 mg", "inj", "weekly"], ["Mounjaro", "Tirzepatid", "10 mg", "inj", "weekly"], ["Mounjaro", "Tirzepatid", "12,5 mg", "inj", "weekly"], ["Mounjaro", "Tirzepatid", "15 mg", "inj", "weekly"], ["Saxenda", "Liraglutid", "0,6 mg", "inj", "morning"], ["Saxenda", "Liraglutid", "1,2 mg", "inj", "morning"], ["Saxenda", "Liraglutid", "1,8 mg", "inj", "morning"], ["Saxenda", "Liraglutid", "2,4 mg", "inj", "morning"], ["Saxenda", "Liraglutid", "3 mg", "inj", "morning"], ["Gynokadin Dosiergel", "Estradiol", "1 Hub", "gel", "morning"], ["Gynokadin Dosiergel", "Estradiol", "2 Hübe", "gel", "morning"], ["Gynokadin Dosiergel", "Estradiol", "3 Hübe", "gel", "morning"], ["Gynokadin Dosiergel", "Estradiol", "4 Hübe", "gel", "morning"], ["Estrogel", "Estradiol", "1 Hub", "gel", "morning"], ["Estrogel", "Estradiol", "2 Hübe", "gel", "morning"], ["Estrogel", "Estradiol", "3 Hübe", "gel", "morning"], ["Estrogel", "Estradiol", "4 Hübe", "gel", "morning"], ["Lenzetto Spray", "Estradiol", "1 Sprühstoß", "spray", "morning"], ["Lenzetto Spray", "Estradiol", "2 Sprühstöße", "spray", "morning"], ["Lenzetto Spray", "Estradiol", "3 Sprühstöße", "spray", "morning"], ["Estramon Pflaster", "Estradiol", "25 µg", "patch", "weekly"], ["Estramon Pflaster", "Estradiol", "37,5 µg", "patch", "weekly"], ["Estramon Pflaster", "Estradiol", "50 µg", "patch", "weekly"], ["Estramon Pflaster", "Estradiol", "75 µg", "patch", "weekly"], ["Estramon Pflaster", "Estradiol", "100 µg", "patch", "weekly"], ["Estradot Pflaster", "Estradiol", "25 µg", "patch", "weekly"], ["Estradot Pflaster", "Estradiol", "37,5 µg", "patch", "weekly"], ["Estradot Pflaster", "Estradiol", "50 µg", "patch", "weekly"], ["Estradot Pflaster", "Estradiol", "75 µg", "patch", "weekly"], ["Estradot Pflaster", "Estradiol", "100 µg", "patch", "weekly"], ["Estrifam", "Estradiol", "1 mg", "oral", "morning"], ["Estrifam", "Estradiol", "2 mg", "oral", "morning"], ["Utrogest", "Progesteron", "100 mg", "caps", "night"], ["Utrogest", "Progesteron", "200 mg", "caps", "night"], ["Progestan", "Progesteron", "100 mg", "caps", "night"], ["Progestan", "Progesteron", "200 mg", "caps", "night"], ["Famenita", "Progesteron", "100 mg", "caps", "night"], ["Famenita", "Progesteron", "200 mg", "caps", "night"], ["Visanne", "Dienogest", "2 mg", "oral", "morning"], ["Femoston conti", "Estradiol/Dydrogesteron", "0,5/2,5 mg", "oral", "morning"], ["Femoston conti", "Estradiol/Dydrogesteron", "1/5 mg", "oral", "morning"], ["Activelle", "Estradiol/Norethisteron", "0,5/0,1 mg (low)", "oral", "morning"], ["Activelle", "Estradiol/Norethisteron", "1/0,5 mg", "oral", "morning"], ["Angeliq", "Estradiol/Drospirenon", "1/2 mg", "oral", "morning"], ["Duavive", "Konjugierte Estrogene/Bazedoxifen", "0,45/20 mg", "oral", "morning"], ["Liviella", "Tibolon", "2,5 mg", "oral", "morning"], ["Ovestin Creme", "Estriol", "0,5 mg", "vag", "evening"], ["Oekolp Vaginalzäpfchen", "Estriol", "0,03 mg", "vag", "evening"], ["Gynoflor", "Estriol/Lactobacillus", "1 Tablette", "vag", "evening"], ["Tostran Gel", "Testosteron", "1 Hub", "gel", "morning"], ["Tostran Gel", "Testosteron", "2 Hübe", "gel", "morning"], ["Testogel", "Testosteron", "25 mg", "gel", "morning"], ["Testogel", "Testosteron", "50 mg", "gel", "morning"], ["DHEA", "Prasteron", "10 mg", "caps", "morning"], ["DHEA", "Prasteron", "25 mg", "caps", "morning"], ["DHEA", "Prasteron", "50 mg", "caps", "morning"], ["Veoza", "Fezolinetant", "45 mg", "oral", "morning"], ["Lynkuet", "Elinzanetant", "120 mg", "caps", "night"], ["Melatonin", "Melatonin", "1 mg", "oral", "night"], ["Melatonin", "Melatonin", "2 mg", "oral", "night"], ["Melatonin", "Melatonin", "3 mg", "oral", "night"], ["Melatonin", "Melatonin", "5 mg", "oral", "night"], ["Circadin", "Melatonin", "2 mg", "oral", "night"], ["L-Thyroxin", "Levothyroxin", "25 µg", "fast", "morning"], ["L-Thyroxin", "Levothyroxin", "50 µg", "fast", "morning"], ["L-Thyroxin", "Levothyroxin", "75 µg", "fast", "morning"], ["L-Thyroxin", "Levothyroxin", "88 µg", "fast", "morning"], ["L-Thyroxin", "Levothyroxin", "100 µg", "fast", "morning"], ["L-Thyroxin", "Levothyroxin", "112 µg", "fast", "morning"], ["L-Thyroxin", "Levothyroxin", "125 µg", "fast", "morning"], ["L-Thyroxin", "Levothyroxin", "150 µg", "fast", "morning"], ["Euthyrox", "Levothyroxin", "25 µg", "fast", "morning"], ["Euthyrox", "Levothyroxin", "50 µg", "fast", "morning"], ["Euthyrox", "Levothyroxin", "75 µg", "fast", "morning"], ["Euthyrox", "Levothyroxin", "88 µg", "fast", "morning"], ["Euthyrox", "Levothyroxin", "100 µg", "fast", "morning"], ["Euthyrox", "Levothyroxin", "112 µg", "fast", "morning"], ["Euthyrox", "Levothyroxin", "125 µg", "fast", "morning"], ["Euthyrox", "Levothyroxin", "150 µg", "fast", "morning"], ["Metformin", "Metformin", "500 mg", "oral", "evening"], ["Metformin", "Metformin", "850 mg", "oral", "evening"], ["Metformin", "Metformin", "1000 mg", "oral", "evening"], ["Vitamin D3", "Colecalciferol", "1.000 IE", "oral", "morning"], ["Vitamin D3", "Colecalciferol", "2.000 IE", "oral", "morning"], ["Vitamin D3", "Colecalciferol", "4.000 IE", "oral", "morning"], ["Vitamin D3 Dekristol", "Colecalciferol", "20.000 IE", "caps", "weekly"], ["Calcium", "Calcium", "500 mg", "oral", "evening"], ["Calcium", "Calcium", "1000 mg", "oral", "evening"], ["Calcium + Vitamin D3", "Calcium/Colecalciferol", "600 mg/400 IE", "oral", "evening"], ["Calcium + Vitamin D3", "Calcium/Colecalciferol", "1000 mg/880 IE", "oral", "evening"], ["Magnesium", "Magnesium", "150 mg", "oral", "evening"], ["Magnesium", "Magnesium", "300 mg", "oral", "evening"], ["Magnesium", "Magnesium", "400 mg", "oral", "evening"], ["Eisen", "Eisen(II)", "50 mg", "fast", "morning"], ["Eisen", "Eisen(II)", "100 mg", "fast", "morning"], ["Omega-3", "Fischöl", "1.000 mg", "caps", "noon"], ["Folsäure", "Folsäure", "400 µg", "oral", "morning"], ["Folsäure", "Folsäure", "800 µg", "oral", "morning"]];
function normq(x){return String(x).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]/g,'');}
function medSuggest(q){q=normq(q);if(q.length<2)return [];var a=[],c=[],b=[];MEDDB.forEach(function(m){var n=normq(m[0]),nd=normq(m[0]+m[2]),w=normq(m[1]);if(nd.indexOf(q)===0||n.indexOf(q)===0)a.push(m);else if(w.indexOf(q)===0)c.push(m);else if(n.indexOf(q)>0||w.indexOf(q)>0)b.push(m);});return a.concat(c,b).slice(0,24);}

/* Dosis-Auswahl je Medikament */
function dosesFor(name){var q=normq(name);if(q.length<3)return [];var ex=MEDDB.filter(function(m){return normq(m[0])===q;});
  if(!ex.length){var pre=MEDDB.filter(function(m){return normq(m[0]).indexOf(q)===0;}),names={};pre.forEach(function(m){names[m[0]]=1;});if(Object.keys(names).length===1)ex=pre;}
  return ex;}
function bindDoseChips(){var f=sheet.querySelector('form'),inp=f&&f.querySelector('[name=name]'),ds=f&&f.querySelector('[name=dose]'),box=f&&f.querySelector('#dchips');if(!inp||!box)return;
  function draw(){var list=dosesFor(inp.value),t=T();if(!list.length){box.innerHTML='';return;}
    box.innerHTML='<p>'+esc(t.doseChoose)+'</p>'+list.map(function(m,i){var on=ds.value.trim()===m[2];return '<button type="button" class="dchip'+(on?' on':'')+'" data-i="'+i+'">'+esc(m[2])+'</button>';}).join('');
    [].forEach.call(box.querySelectorAll('.dchip'),function(b){b.addEventListener('click',function(){var m=list[+b.dataset.i];ds.value=m[2];
      [].forEach.call(f.querySelectorAll('input[name=w]'),function(c){c.checked=(c.value===m[4]);});draw();});});}
  inp.addEventListener('input',draw);inp.addEventListener('change',draw);ds.addEventListener('input',draw);
  f.addEventListener('click',function(e){if(e.target.closest('.sugg button'))setTimeout(draw,0);});
  draw();}
function bindMedSuggest(){var f=sheet.querySelector('form')||sheet,inp=f.querySelector('[name=name]');if(!inp)return;inp.setAttribute('autocomplete','off');
  var picked=false;var box=document.createElement('div');box.className='sugg';box.hidden=true;inp.insertAdjacentElement('afterend',box);var cur=[];
  function show(){cur=medSuggest(inp.value);if(!cur.length||picked){box.hidden=true;return;}
    box.innerHTML=cur.map(function(m,i){return '<button type="button" data-i="'+i+'"><strong>'+esc(m[0])+' <b class="sdose">'+esc(m[2])+'</b></strong><small>'+esc(m[1])+'</small></button>';}).join('');box.hidden=false;}
  inp.addEventListener('input',function(){picked=false;show();});inp.addEventListener('focus',show);inp.addEventListener('blur',function(){setTimeout(function(){box.hidden=true;},180);});
  box.addEventListener('mousedown',function(e){e.preventDefault();});
  box.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var m=cur[+b.dataset.i];inp.value=m[0];
    picked=true;var ds=f.querySelector('[name=dose]');if(ds)ds.value=m[2];
    var hw=f.querySelector('[name=how]');if(hw&&!hw.value.trim())hw.value=(HOWS[m[3]][S.lang]||HOWS[m[3]].de);
    [].forEach.call(f.querySelectorAll('input[name=w]'),function(c){c.checked=(c.value===m[4]);});
    box.hidden=true;toast(T().medFilled);});
}
function sheetMed(id){
  var t=T(),ex=null;S.meds.forEach(function(m){if(m.id===id)ex=m;});var m=ex||{name:'',dose:'',how:'',when:['evening']};
  var checks='<div class="field"><span>'+esc(t.medWhen)+'</span><div class="checks">'+SLOTS.concat(['weekly']).map(function(s){return '<label><input type="checkbox" name="w" value="'+s+'"'+(m.when.indexOf(s)>=0?' checked':'')+'><span>'+esc(s==='weekly'?t.weekly:t.slots[s])+'</span></label>';}).join('')+'</div></div>'+
    '<label class="field"><span>'+esc(t.weekday)+' ('+esc(t.weekly)+')</span><select class="input" name="day">'+[1,2,3,4,5,6,0].map(function(n){return '<option value="'+n+'"'+(+(m.day==null?wd():m.day)===n?' selected':'')+'>'+esc(wdName(n))+'</option>';}).join('')+'</select></label>';
  openSheet('<h2>'+esc(ex?t.editMed:t.addMed)+'</h2>'+fText('name',t.medName,m.name,'',true)+fText('dose',t.medDose,m.dose,t.medDoseEx,true)+'<div class="dchips" id="dchips"></div>'+checks+fActions(!!ex),
  function(f){var w=[].map.call(f.querySelectorAll('input[name=w]:checked'),function(x){return x.value;});var nm=f.querySelector('[name=name]').value.trim(),ds=f.dose.value.trim();
    if(!nm||!ds||!w.length){showErr(f,S.lang==='en'?'Please fill in name, dose and time.':S.lang==='tr'?'Lütfen ad, doz ve zamanı girin.':'Bitte Name, Dosierung und Zeitpunkt angeben.');return false;}
    var dy=+f.querySelector('[name=day]').value;if(ex){ex.name=nm;ex.dose=ds;ex.when=w;ex.day=dy;}else S.meds.push({id:uid(),name:nm,dose:ds,how:'',when:w,day:dy,since:today(),src:PM?'praxis':undefined});save();render();toast(t.saved);},
  function(a,f){if(a==='del'){var b=f.querySelector('[data-sact=del]');if(!b.dataset.sure){b.dataset.sure='1';b.textContent='?';showErr(f,t.medDeleteQ);return;}S.meds=S.meds.filter(function(x){return x.id!==id;});save();sheet.close();render();toast(t.deleted);}});
  bindMedSuggest();bindDoseChips();
}

/* ---------- Befinden ---------- */
function moodFor(d){for(var i=0;i<S.mood.length;i++)if(S.mood[i].d===d)return S.mood[i];return null;}
function vMood(){
  var t=T(),days=rangeDays(),es=days.map(moodFor),got=es.filter(function(x){return x&&x.mood!=null;});
  var av=function(k){return got.length?got.reduce(function(s,x){return s+x[k];},0)/got.length:null;};
  var h='<div class="pagehead"><h1>'+esc(t.moodTitle)+'</h1><p>'+esc(RANGE===14?t.moodSub:t.rngLast.replace('{r}',t.rng[RANGE>91?2:1]))+'</p></div>';
  h+='<div class="kpis"><div class="kpi"><span>'+esc(t.avgHot)+'</span><strong>'+(got.length?num(av('hot')):'–')+'</strong></div><div class="kpi"><span>'+esc(t.avgMood)+'</span><strong class="kf">'+(got.length?'<span class="fc fc'+Math.round(av('mood'))+' sm">'+face(Math.round(av('mood')))+'</span>'+num(av('mood')):'–')+'</strong></div><div class="kpi"><span>'+esc(t.avgEnergy)+'</span><strong>'+(got.length?num(av('energy')):'–')+' <small class="muted" style="font-size:.8rem">/ 5</small></strong></div></div>';
  var mx=Math.max.apply(null,[4].concat(got.map(function(x){return x.hot;})));
  var info=days.map(function(d,i){var e=es[i];return e?fdw(d)+': '+e.hot+' '+t.hotDayShort+' · '+t.moodQ+' '+e.mood+'/5 · '+t.energyQ+' '+e.energy+'/5':fdw(d)+': –';});
  h+=(hotOn()?'<div class="card"><h2>'+esc(t.hotDayShort)+' '+esc(t.perDay)+'</h2>'+(RANGE>14?hotWeekChart(days):'<div class="chart" data-info="'+esc(JSON.stringify(info))+'"><svg viewBox="0 0 340 150" role="img" aria-label="'+esc(t.hotDayShort)+'">'+barChart(days,es.map(function(e){return e?e.hot:null;}),mx)+'</svg><div class="chartinfo muted">'+esc(t.tapBar)+'</div></div>')+'</div>':'')+(RANGE>14?moodTrendChart(days):'');
  var all=S.mood.filter(function(x){return x.mood!=null;}).sort(byDate).slice(0,7);
  h+=dayCal('mood')+'<div class="card"><h2>'+esc(T().dcLast7)+'</h2>'+(all.length?'<ul class="list">'+all.map(function(x){return '<li><div class="mrow"><span class="fc fc'+x.mood+' sm">'+face(x.mood)+'</span><div><div class="t">'+esc(fdw(x.d))+'</div><div class="m">'+(hotOn()?x.hot+' '+esc(t.hotDayShort)+' · ':'')+esc(t.moodQ)+' '+x.mood+'/5 · '+esc(t.energyQ)+' '+x.energy+'/5'+(x.note?' · '+esc(x.note):'')+'</div></div></div><button class="edit" data-act="editMood" data-d="'+x.d+'" aria-label="'+esc(t.edit)+'">'+ic('pen')+'</button></li>';}).join('')+'</ul>':'<p class="empty">'+esc(t.none)+'</p>')+'</div>';
  return h;
}
function sheetMood(d){
  var t=T(),ex=moodFor(d||today()),e=ex||{d:d||today(),hot:0,mood:null,energy:null,note:''};
  openSheet('<h2>'+esc(t.addMood)+'</h2>'+fDate(e.d)+fStepper('hot',t.hotDay,e.hot,0,30,1,'',0)+fScale('mood',t.moodQ,e.mood)+fScale('energy',t.energyQ,e.energy)+fText('note',t.note,e.note)+fActions(!!ex),
  function(f){var mo=radio(f,'mood'),en=radio(f,'energy');if(!mo||!en){showErr(f,S.lang==='en'?'Please choose mood and energy.':S.lang==='tr'?'Lütfen ruh hali ve enerjiyi seçin.':'Bitte Stimmung und Energie auswählen.');return false;}
    var dd=f.d.value||today();S.mood=S.mood.filter(function(x){return x.d!==dd&&x.d!==e.d;});
    S.mood.push({d:dd,hot:+f.querySelector('input[name=hot]').value,mood:+mo,energy:+en,note:f.note.value.trim()});save();render();toast(t.saved);},
  function(a){if(a==='del'){S.mood=S.mood.filter(function(x){return x.d!==e.d;});save();sheet.close();render();toast(t.deleted);}});
}

/* ---------- Heute ---------- */
function vToday(){
  var t=T(),hr=new Date().getHours(),greet=t.hello[(hr>=5&&hr<11)?0:(hr>=11&&hr<18)?1:2]+(S.name?', '+S.name:'');
  var h='<div class="pagehead"><h1>'+esc(greet)+'</h1><p>'+esc(fd(today(),{weekday:'long',day:'numeric',month:'long'}))+'</p></div>';
  h+=installHint();
  var isEmpty=!S.sleep.length&&!S.weight.length&&!S.meds.length&&!S.mood.length;
  if(isEmpty)h+='<div class="welcome">'+esc(t.emptyStart)+'</div>';
  if(genDue())h+=dueBanner();
  var sl=sleepFor(today());
  h+='<div class="card tint1"><div class="row"><div><h2>'+esc(t.lastNight)+'</h2>'+(sl?'<div class="big">'+num(sl.h)+' '+t.h+'</div><div class="small">'+(sl.through?esc(t.legendThrough):esc(t.legendNot))+(sl.hot?' · '+esc(t.hotDayShort):'')+'</div>':'')+'</div>'+(sl?'<button class="edit" data-act="editSleep" data-d="'+sl.d+'" aria-label="'+esc(t.edit)+'">'+ic('pen')+'</button>':'')+'</div>'+(sl?'':'<button class="btn" data-act="addSleep" style="margin-top:10px">'+ic('plus')+esc(t.enterSleep)+'</button>')+'</div>';
  h+='<div class="card"><h2>'+esc(t.medsToday)+'</h2>'+medChecklist()+'</div>';
  var mo=moodFor(today());
  h+='<div class="card tint2"><div class="row"><div><h2>'+esc(t.moodToday)+'</h2>'+(mo?'<div class="small">'+mo.hot+' '+esc(t.hotDayShort)+' · '+esc(t.moodQ)+' '+mo.mood+'/5 · '+esc(t.energyQ)+' '+mo.energy+'/5</div>':'')+'</div>'+(mo?'<button class="edit" data-act="editMood" data-d="'+mo.d+'" aria-label="'+esc(t.edit)+'">'+ic('pen')+'</button>':'')+'</div>'+(mo?'':'<button class="btn" data-act="addMood" style="margin-top:10px">'+ic('plus')+esc(t.enterMood)+'</button>')+'</div>';
  var lw=S.weight.slice().sort(byDate)[0];
  h+='<div class="card tint3"><div class="row"><div><h2>'+esc(t.weightLast)+'</h2>'+(lw?'<div class="big">'+num(lw.kg)+' '+t.kg+'</div><div class="small muted">'+esc(fdl(lw.d))+'</div>':'')+'</div><button class="btn sm" data-act="addWeight">'+ic('plus')+esc(t.add)+'</button></div></div>';
  return h;
}

/* ---------- Installation ---------- */
var deferredPrompt=null,installHidden=false;
try{installHidden=sessionStorage.getItem('pa-ih')==='1';}catch(e){}
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredPrompt=e;if(view==='fill')render();});
function standalone(){return (window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true;}
function installHint(){
  if(standalone()||installHidden)return '';
  var t=T(),ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
  if(!ios&&!deferredPrompt)return '';
  return '<div class="install"><span class="di">'+ic('phone')+'</span><div><strong>'+esc(t.installTitle)+'</strong><p>'+(ios?esc(t.installIos):'')+'</p>'+(deferredPrompt?'<button class="btn sm" data-act="install">'+esc(t.installBtn)+'</button> ':'')+'<button class="btn sm ghost" data-act="hideInstall">'+esc(t.later)+'</button></div></div>';
}

/* ---------- Einstellungen ---------- */
function vSettings(){
  var t=T();
  var h='<div class="card setrow"><h2>'+esc(t.language)+'</h2><div class="lang">'+['de','en','tr'].map(function(l){return '<button data-act="lang" data-l="'+l+'" aria-pressed="'+(S.lang===l)+'">'+l.toUpperCase()+'</button>';}).join('')+'</div></div>';
  h+='<div class="card setrow"><label class="field"><span>'+esc(t.yourName)+'</span><input class="input" id="nameIn" type="text" maxlength="40" value="'+esc(S.name)+'" autocomplete="given-name"></label><small class="muted">'+esc(t.yourNameHint)+'</small></div>';
  h+='<div class="card setrow"><h2>'+esc(t.textSize)+'</h2><div class="lang"><button data-act="big" data-b="0" aria-pressed="'+!S.big+'">'+esc(t.textNormal)+'</button><button data-act="big" data-b="1" aria-pressed="'+!!S.big+'" style="font-size:1.2em">'+esc(t.textBig)+'</button></div></div>';
  h+='<div class="card setrow"><h2>'+esc(t.autoF)+'</h2><p class="sub">'+esc(t.autoFD)+'</p><div class="lang"><button data-act="autoF" data-b="1" aria-pressed="'+(S.autoForm!==false)+'">'+esc(t.autoOn)+'</button><button data-act="autoF" data-b="0" aria-pressed="'+(S.autoForm===false)+'">'+esc(t.autoOff)+'</button></div></div>';
  h+=reminderCard();
  h+='<div class="card setrow"><h2>'+esc(t.pmTitle)+'</h2><p class="sub">'+esc(t.pmHint)+'</p><button class="btn light" data-act="pmStart">'+ic('pen')+esc(t.pmOpen)+'</button></div>';
  h+='<div class="card setrow"><h2>'+esc(t.program)+'</h2><p class="sub">'+esc(t.programHint)+'</p><p style="margin:0;font-weight:600;color:var(--navy)">'+esc(modsText())+'</p><button class="btn light" data-act="go" data-v="setup">'+esc(t.programEdit)+'</button></div>';
  h+='<div class="card setrow"><h2>'+esc(t.report)+'</h2><p class="sub">'+esc(t.reportHint)+'</p><button class="btn" data-act="go" data-v="report">'+ic('doc')+esc(t.report)+'</button></div>';
  h+='<div class="card setrow"><h2>'+esc(t.backup)+'</h2><p class="sub">'+esc(t.backupHint)+'</p><button class="btn light" data-act="export">'+esc(t.exportB)+'</button><label class="btn light" style="position:relative">'+esc(t.importB)+'<input type="file" id="importIn" accept="application/json,.json" style="position:absolute;inset:0;opacity:0;cursor:pointer"></label></div>';
  h+='<div class="card setrow"><h2>'+esc(t.demo)+'</h2><p class="sub">'+esc(t.demoHint)+'</p><button class="btn light" data-act="demo">'+esc(t.demo)+'</button></div>';
  h+='<div class="card setrow"><h2>'+esc(t.privacyTitle)+'</h2><p class="sub" style="color:var(--ink)">'+esc(t.privacy)+'</p><button class="btn light" data-act="wipe" style="color:var(--danger)">'+esc(t.wipe)+'</button></div>';
  h+='<p class="foot">'+esc(t.practice)+'<br><a href="https://www.frauenarzt-berlin-charlottenburg.de/frauenaerztin-stefania-kilavuz-2/" target="_blank" rel="noopener">'+esc(t.imprint)+'</a> · <a href="https://www.frauenarzt-berlin-charlottenburg.de/datenschutzerklarung/" target="_blank" rel="noopener">'+esc(t.privacyLink)+'</a></p>';
  return h;
}
function exportData(){
  var blob=new Blob([JSON.stringify(S,null,1)],{type:'application/json'}),a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download='proud-aging-sicherung-'+today()+'.json';document.body.appendChild(a);a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},500);
}
function importData(file){
  var t=T(),r=new FileReader();r.onload=function(){try{var d=JSON.parse(r.result);if(!d||d.v!==1||!Array.isArray(d.sleep)||!Array.isArray(d.meds))throw 0;var b=blank();for(var k in b)if(!(k in d))d[k]=b[k];S=d;save();render();toast(t.importOk);}catch(e){toast(t.importBad);}};r.readAsText(file);
}
function confirmSheet(q,label,fn){var t=T();openSheet('<h2>'+esc(q)+'</h2><div class="actions"><button type="button" class="btn light" data-close>'+esc(t.cancel)+'</button><button type="submit" class="btn danger">'+esc(label)+'</button></div>',function(){fn();});}

/* ---------- Bericht ---------- */
function vReport(){
  var t=T(),from=addMonths(today(),-3),inR=function(x){return x.d>=from;};
  var sl=S.sleep.filter(inR).sort(byDate),wt=S.weight.filter(inR).sort(byDate),mo=S.mood.filter(inR).sort(byDate);
  var h='<div class="card report"><h1>'+esc(t.repTitle)+'</h1><p class="meta">'+(S.name?esc(t.repFor)+': '+esc(S.name)+' · ':'')+(S.who?esc(t['who_'+S.who])+' · ':'')+(S.age?S.age+' '+esc(t.yrs)+' · ':'')+esc(t.repPeriod)+': '+esc(fdl(from))+' – '+esc(fdl(today()))+'<br>'+esc(t.repCreated)+' '+esc(fdl(today()))+' · Proud Aging</p>';
  // Schlaf
  var avg=sl.length?sl.reduce(function(s,x){return s+x.h;},0)/sl.length:null;
  h+='<div class="sect"><h2>'+esc(t.repSleep)+'</h2>';
  if(S.gen)h+='<p class="sum"><strong>'+esc(t.repGen)+'</strong> ('+esc(fdl(S.gen.at))+'): '+esc(t.genEin)+' '+(S.gen.ein?t.yes:t.no)+' · '+esc(t.genDurch)+' '+(S.gen.durch?t.yes:t.no)+'</p>';
  h+='<p class="sum">'+sl.length+' '+esc(t.repNights)+' · '+esc(t.avgSleep)+' '+(avg==null?'–':num(avg)+' '+t.h)+' · '+esc(t.through)+' '+sl.filter(function(x){return x.through;}).length+' · '+esc(t.hotNights)+' '+sl.filter(function(x){return x.hot;}).length+'</p>';
  if(sl.length)h+='<div class="tw"><table><thead><tr><th>'+esc(t.date)+'</th><th>'+esc(t.sleepHours)+'</th><th>'+esc(t.through)+'</th><th>'+esc(t.hotDayShort)+'</th></tr></thead><tbody>'+sl.map(function(x){return '<tr><td>'+esc(fd(x.d,{day:'2-digit',month:'2-digit',year:'numeric'}))+'</td><td>'+num(x.h)+' '+t.h+'</td><td>'+(x.through?t.yes:t.no)+'</td><td>'+(x.hot?t.yes:t.no)+(x.note?' – '+esc(x.note):'')+'</td></tr>';}).join('')+'</tbody></table></div>';
  h+='</div>';
  // Gewicht
  h+='<div class="sect"><h2>'+esc(t.repWeight)+'</h2>';
  if(wt.length){var a=wt[wt.length-1].kg,b=wt[0].kg;h+='<p class="sum">'+num(a)+' → '+num(b)+' '+t.kg+' ('+(b-a>0?'+':'−')+num(Math.abs(b-a))+' '+t.kg+')'+(S.goal?' · '+esc(t.goal)+' '+num(S.goal)+' '+t.kg:'')+'</p><div class="tw"><table><thead><tr><th>'+esc(t.date)+'</th><th>'+esc(t.weightKg)+'</th></tr></thead><tbody>'+wt.map(function(x){return '<tr><td>'+esc(fd(x.d,{day:'2-digit',month:'2-digit',year:'numeric'}))+'</td><td>'+num(x.kg)+'</td></tr>';}).join('')+'</tbody></table></div>';}
  else h+='<p class="sum muted">'+esc(t.none)+'</p>';
  h+='</div>';
  if(S.glp1){var gr=S.gi.filter(inR);h+='<p class="sum">'+esc(t.gi)+': '+gr.filter(function(x){return x.v;}).length+' / '+gr.length+' '+esc(t.repDays)+'</p>';}
  // Medikation
  h+='<div class="sect"><h2>'+esc(t.repMeds)+'</h2>';
  if(S.meds.length){var tot=0,ok=0;for(var i=0;i<30;i++){var d=addDays(today(),-i);askDoses(d).forEach(function(x){tot++;if(takenOn(d,x.k))ok++;});}
    h+='<div class="tw"><table><thead><tr><th>'+esc(t.medName)+'</th><th>'+esc(t.medDose)+'</th><th>'+esc(t.medWhen)+'</th></tr></thead><tbody>'+S.meds.map(function(m){return '<tr><td>'+esc(m.name)+(m.how?'<br><span class="muted">'+esc(m.how)+'</span>':'')+'</td><td>'+esc(m.dose)+'</td><td>'+m.when.map(function(s){return esc(slotLabel(m,s));}).join(', ')+'</td></tr>';}).join('')+'</tbody></table></div><p class="sum">'+(S.lang==='en'?'Marked as taken (last 30 days)':S.lang==='tr'?'Alındı olarak işaretlenen (son 30 gün)':'Als genommen abgehakt (letzte 30 Tage)')+': '+ok+' / '+tot+' ('+(tot?Math.round(ok/tot*100):0)+' %)</p>';}
  else h+='<p class="sum muted">'+esc(t.none)+'</p>';
  h+='</div>';
  // Befinden
  h+='<div class="sect"><h2>'+esc(t.repMood)+'</h2>';
  if(mo.length){var av=function(k){return mo.reduce(function(s,x){return s+x[k];},0)/mo.length;};
    h+='<p class="sum">'+mo.length+' '+esc(t.repDays)+' · '+esc(t.avgHot)+' '+num(av('hot'))+' · '+esc(t.avgMood)+' '+num(av('mood'))+'/5 · '+esc(t.avgEnergy)+' '+num(av('energy'))+'/5</p><div class="tw"><table><thead><tr><th>'+esc(t.date)+'</th><th>'+esc(t.hotDayShort)+'</th><th>'+esc(t.moodQ)+'</th><th>'+esc(t.energyQ)+'</th></tr></thead><tbody>'+mo.map(function(x){return '<tr><td>'+esc(fd(x.d,{day:'2-digit',month:'2-digit',year:'numeric'}))+'</td><td>'+x.hot+'</td><td>'+x.mood+'/5</td><td>'+x.energy+'/5'+(x.note?' – '+esc(x.note):'')+'</td></tr>';}).join('')+'</tbody></table></div>';}
  else h+='<p class="sum muted">'+esc(t.none)+'</p>';
  h+='</div>';
  if(mods().aes&&S.aes.length){h+='<div class="sect"><h2>'+esc(t.tabs.aes)+'</h2><div class="tw"><table><thead><tr><th>'+esc(t.date)+'</th><th>'+esc(t.aesType)+'</th><th>'+esc(t.aesSatL)+'</th></tr></thead><tbody>'+S.aes.slice().sort(byDate).map(function(x){var c=x.chk||{},bad=Object.keys(c).some(function(k){return c[k]==='bad';}),mild=Object.keys(c).some(function(k){return c[k]==='mild';});return '<tr><td>'+esc(fd(x.d,{day:'2-digit',month:'2-digit',year:'2-digit'}))+'</td><td>'+esc(aesName(x))+(x.area?' · '+esc(x.area):'')+(x.again!=null?'<br><span class="muted">'+esc(t.q_aesR)+' '+(x.again?t.yes:t.no)+'</span>':'')+(bad?'<br><strong>'+esc(t.aesBad)+'</strong>':mild?'<br><span class="muted">'+esc(t.aesMild)+'</span>':'')+'</td><td>'+(x.sat?x.sat+'/5':'–')+'</td></tr>';}).join('')+'</tbody></table></div>'+(S.skin.length?'<p class="sum">'+esc(t.skinL)+': '+num(S.skin.filter(inR).reduce(function(q,x){return q+x.v;},0)/Math.max(1,S.skin.filter(inR).length))+'/5</p>':'')+(S.wish&&S.wish.areas.length?'<p class="sum"><strong>'+esc(t.wishTitle)+':</strong> '+esc(S.wish.areas.map(function(w){return t.wishAreas[w];}).join(', '))+' ('+esc(fdl(S.wish.at))+')</p>':'')+'</div>';}
  h+='</div>';
  h+='<div class="stack noprint" style="margin-top:4px"><button class="btn" data-act="print">'+ic('doc')+esc(t.repPrint)+'</button>'+(navigator.share?'<button class="btn light" data-act="shareRep">'+ic('share')+esc(t.repShare)+'</button>':'')+'</div>';
  return h;
}
function shareReport(){
  var el=root.querySelector('.report');if(!el||!navigator.share)return;
  var txt=el.innerText.replace(/\n{3,}/g,'\n\n');
  navigator.share({title:T().repTitle,text:txt}).catch(function(){});
}



/* ---------- Programm einrichten ---------- */
var MODS=['sleep','mood','meds','weight','aes'];
function parseCode(c){c=String(c||'').toUpperCase().replace(/[^A-Z]/g,'');if(c.indexOf('PA')===0)c=c.slice(2);
  if(!c||/[^SBMGAHW]/.test(c))return null;var m={aes:c.indexOf('H')>=0,sleep:c.indexOf('S')>=0,mood:c.indexOf('B')>=0,meds:c.indexOf('M')>=0||c.indexOf('A')>=0,weight:c.indexOf('G')>=0||c.indexOf('A')>=0};
  return {mods:m,glp1:c.indexOf('A')>=0,hot:c.indexOf('W')>=0};}
function vSetup(){
  var t=T(),M=S.mods||{sleep:false,mood:false,meds:false,weight:false,aes:false};
  var h='<div class="pagehead"><h1>'+esc(t.setupTitle)+'</h1><p>'+esc(t.setupSub)+'</p></div>';
  h+='<div class="card about"><h2>'+esc(t.aboutYou)+'</h2><p class="sub">'+esc(t.whoHint)+'</p><div class="whos" role="radiogroup" aria-label="'+esc(t.whoQ)+'">'+['meno','woman','man'].map(function(w){return '<label class="whoc"><input type="radio" name="who" value="'+w+'"'+(S.who===w?' checked':'')+'><span>'+esc(t['who_'+w])+'</span></label>';}).join('')+'</div>'+
    '<label class="modc hotc"><input type="checkbox" name="hot"'+(hotOn()?' checked':'')+'><span class="mc"><span></span><span><strong>'+esc(t.hotAsk)+'</strong><small>'+esc(t.hotAskD)+'</small></span><span class="tick">'+ic('check')+'</span></span></label>'+
    '<label class="field agef"><span>'+esc(t.ageL)+' <small class="muted">('+esc(t.ageHint)+')</small></span><span class="agerow"><input class="input" id="ageIn" type="number" inputmode="numeric" min="18" max="99" value="'+(S.age||'')+'" placeholder="54"><em>'+esc(t.yrs)+'</em></span></label></div>';
  h+='<div class="card"><label class="field"><span>'+esc(t.codeLabel)+'</span><small>'+esc(t.codeHint)+'</small><div class="coderow"><input class="input" id="codeIn" type="text" autocapitalize="characters" autocomplete="off" placeholder="PA-SBM" maxlength="12"><button class="btn" data-act="codeApply">'+esc(t.codeApply)+'</button></div></label></div>';
  h+='<p class="muted" style="margin:14px 4px 8px">'+esc(t.orChoose)+'</p>';
  var icn={sleep:'sleep',mood:'mood',meds:'meds',weight:'weight',aes:'aes'};
  h+=MODS.map(function(k){var on=!!M[k];return '<label class="modc"><input type="checkbox" name="mod" value="'+k+'"'+(on?' checked':'')+'><span class="mc"><span class="hc-i">'+ic(icn[k])+'</span><span><strong>'+esc(modLabel(k))+'</strong><small>'+esc(modLabel(k,1))+'</small></span><span class="tick">'+ic('check')+'</span></span></label>'+
    (k==='meds'?'<label class="modc sub"><input type="checkbox" name="medask"'+(S.medAsk!==false?' checked':'')+'><span class="mc"><span></span><span><strong>'+esc(t.medAsk)+'</strong><small>'+esc(t.medAskD)+'</small></span><span class="tick">'+ic('check')+'</span></span></label>':'')+
    (k==='weight'?'<label class="modc sub"><input type="checkbox" name="glp1"'+(S.glp1?' checked':'')+'><span class="mc"><span></span><span><strong>'+esc(t.mod_glp1)+'</strong><small>'+esc(t.mod_glp1D)+'</small></span><span class="tick">'+ic('check')+'</span></span></label>':'');}).join('');
  h+='<p class="err" id="setupErr" hidden>'+esc(t.setupNeedOne)+'</p><button class="btn full" data-act="setupDone" style="margin:14px 0 20px">'+esc(t.setupDone)+'</button>';
  return h;
}
function afterSetup(ch){F=null;if(ch&&!PM){startForm(today());}else setView(PM?'praxis':'fill');}
function applySetup(m,g){if(g){m.weight=true;m.meds=true;}var old=JSON.stringify([S.mods,!!S.glp1]);S.mods=m;S.glp1=!!g;var ch=old!==JSON.stringify([m,!!g]);if(ch&&S.filled)delete S.filled[today()];save();return ch&&!!JSON.parse(old)[0];}
function modsText(){var t=T(),M=mods();return MODS.filter(function(k){return M[k];}).map(function(k){return t['mod_'+k]+(k==='weight'&&S.glp1?' ('+t.mod_glp1+')':'');}).join(' · ');}

/* ---------- Praxis ---------- */
var PM=false;
var PRAXIS={pin:'2008',tel:'+49304145353',book:'https://www.doctolib.de/frauenarzt/berlin/stefania-kilavuz'};
function dDiff(a,b){return Math.round((parse(b)-parse(a))/864e5);}

/* ---------- Ästhetik ---------- */
var AES={wrinkle:16,filler:40,polyn:3,booster:4,prp:4,needling:6,other:0};
function aesName(x){var t=T();return x?(x.type==='other'&&x.label?x.label:t.aesTypes[x.type]||''):'';}
function aesById(id){for(var i=0;i<S.aes.length;i++)if(S.aes[i].id===id)return S.aes[i];return null;}
function aesCheckFor(d){var r=null;S.aes.forEach(function(x){var n=dDiff(x.d,d),c=x.chk||{};if(n<1||n>7)return;
  var okBefore=Object.keys(c).some(function(k){return k<d&&c[k]==='ok';});if(!okBefore||c[d])r=r&&r.d>x.d?r:x;});return r;}
function aesSatFor(d){var r=null;S.aes.forEach(function(x){var n=dDiff(x.d,d);if(n<14||n>60)return;if(!x.sat||x.satAt===d)r=x;});return r;}
function skinFor(d){for(var i=0;i<S.skin.length;i++)if(S.skin[i].d===d)return S.skin[i];return null;}
function skinDue(d){if(skinFor(d))return true;var last=null;S.skin.forEach(function(x){if(x.d<d&&(!last||x.d>last))last=x.d;});return !last||last<=addDays(d,-7);}
function wishDue(d){if(!S.wish)return S.aes.length>0;return S.wish.at===d||S.wish.at<=addDays(d,-90);}
function aesDue(x){return x.next?addDays(x.d,x.next*7):null;}
function aesRecall(){var last={};S.aes.forEach(function(x){var k=x.type+'|'+(x.label||'');if(!last[k]||last[k].d<x.d)last[k]=x;});
  var r=null;Object.keys(last).forEach(function(k){var x=last[k],due=aesDue(x);if(due&&due<=addDays(today(),14)&&(!r||due<aesDue(r)))r=x;});return r;}
function aesRecallCard(){if(!mods().aes)return '';var x=aesRecall();if(!x)return '';var t=T(),due=aesDue(x),over=due<=today();
  return '<div class="recall"><span class="hc-i">'+ic('aes')+'</span><div><strong>'+esc(t.recallTitle)+'</strong><p>'+esc((over?t.recallOver:t.recallSoon).replace('{t}',aesName(x)).replace('{d}',fdl(due)))+'</p><div class="row2"><button class="btn" data-act="book">'+ic('cal')+esc(t.book)+'</button><a class="btn light" href="tel:'+PRAXIS.tel+'">'+ic('tel')+esc(t.call)+'</a></div></div></div>';}
function vAes(){var t=T(),all=S.aes.slice().sort(byDate);
  var h='<div class="pagehead"><h1>'+esc(t.tabs.aes)+'</h1><p>'+esc(t.aesSub)+'</p></div>';
  h+=aesRecallCard();
  h+='<div class="card">'+(all.length?'<ul class="list">'+all.map(function(x){var due=aesDue(x);return '<li><div class="mrow">'+(x.sat?'<span class="fc fc'+x.sat+' sm">'+face(x.sat)+'</span>':'<span class="aesdot">'+ic('aes')+'</span>')+'<div><div class="t">'+esc(aesName(x))+'</div><div class="m">'+esc(fdl(x.d))+(x.area?' · '+esc(x.area):'')+(due?'<br>'+esc(t.aesNext)+' '+esc(fdl(due)):'')+'</div></div></div><button class="edit" data-act="editAes" data-id="'+x.id+'" aria-label="'+esc(t.edit)+'">'+ic('pen')+'</button></li>';}).join('')+'</ul>':'<p class="empty">'+esc(t.aesEmpty)+'</p>')+'</div>';
  var sk=S.skin.slice().sort(function(a,b){return a.d<b.d?-1:1;}).slice(-12);if(sk.length)h+='<div class="card skincard"><h2>'+esc(t.skinTitle)+'</h2><div class="skrow"><span class="fc fc'+sk[sk.length-1].v+'">'+face(sk[sk.length-1].v)+'</span><div><strong>'+esc(t.scale[sk[sk.length-1].v-1])+'</strong><small class="muted">'+esc(fdl(sk[sk.length-1].d))+'</small></div></div>'+(sk.length>1?'<div class="skbar">'+sk.map(function(x){return '<i class="fc'+x.v+'" style="height:'+(x.v*20)+'%" title="'+esc(fd(x.d))+'"></i>';}).join('')+'</div>':'')+'</div>';
  if(S.wish&&S.wish.areas.length)h+='<div class="card"><h2>'+esc(t.wishTitle)+'</h2><div class="wchips ro">'+S.wish.areas.map(function(w){return '<span class="wchip on">'+esc(t.wishAreas[w])+'</span>';}).join('')+'</div><p class="muted" style="margin:10px 0 0">'+esc(t.wishNote)+'</p></div>';
  h+='<button class="btn full" data-act="addAes" style="margin-bottom:12px">'+ic('plus')+esc(t.aesAdd)+'</button>';
  return h;}
function sheetAes(id){var t=T(),ex=id?aesById(id):null,x=ex||{type:'wrinkle',area:'',d:today(),next:AES.wrinkle,label:''};
  var opts=Object.keys(AES).map(function(k){return '<option value="'+k+'"'+(x.type===k?' selected':'')+'>'+esc(t.aesTypes[k])+'</option>';}).join('');
  var wk=[0,2,3,4,6,8,12,16,24,36,40,52].map(function(n){return '<option value="'+n+'"'+(+x.next===n?' selected':'')+'>'+esc(n?t.inWeeks.replace('{n}',n):t.noNext)+'</option>';}).join('');
  openSheet('<h2>'+esc(ex?t.aesEdit:t.aesAdd)+'</h2><label class="field"><span>'+esc(t.aesType)+'</span><select class="input" name="type">'+opts+'</select></label>'+
    '<label class="field" data-other'+(x.type==='other'?'':' hidden')+'><span>'+esc(t.aesLabel)+'</span><input class="input" name="label" value="'+esc(x.label||'')+'" maxlength="60"></label>'+
    fText('area',t.aesArea,x.area,t.aesAreaEx)+fDate(x.d)+'<label class="field"><span>'+esc(t.aesNextL)+'</span><select class="input" name="next">'+wk+'</select><small class="muted">'+esc(t.aesNextHint)+'</small></label>'+fActions(!!ex),
  function(f){var o={type:f.type.value,label:f.label.value.trim(),area:f.area.value.trim(),d:f.d.value||today(),next:+f.next.value};
    if(PM)o.src='praxis';if(ex)Object.assign(ex,o);else{o.id=uid();S.aes.push(o);}save();render();toast(t.saved);},
  function(a,f){if(a==='del'){var b=f.querySelector('[data-sact=del]');if(!b.dataset.sure){b.dataset.sure='1';b.textContent='?';showErr(f,t.aesDelQ);return;}S.aes=S.aes.filter(function(y){return y.id!==id;});save();sheet.close();render();toast(t.deleted);}});
  var f=sheet.querySelector('form');f.type.addEventListener('change',function(){f.next.value=String(AES[f.type.value]);f.querySelector('[data-other]').hidden=f.type.value!=='other';});
}

/* ---------- Fortschritt & Weg ---------- */
function spark(vals,col){if(vals.length<2)return '';var mn=Math.min.apply(null,vals),mx=Math.max.apply(null,vals),r=(mx-mn)||1;
  var pts=vals.map(function(v,i){return (i/(vals.length-1)*96+2).toFixed(1)+','+(30-(v-mn)/r*26).toFixed(1);});
  return '<svg class="spark" viewBox="0 0 100 34" preserveAspectRatio="none" aria-hidden="true"><polyline points="'+pts.join(' ')+'" fill="none" stroke="'+col+'" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg>';}
function ring(p){var c=2*Math.PI*15,o=c*(1-p);return '<svg class="ring" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15" fill="none" stroke="rgba(28,46,74,.12)" stroke-width="4"/><circle cx="18" cy="18" r="15" fill="none" stroke="#3E9B6A" stroke-width="4" stroke-linecap="round" stroke-dasharray="'+c.toFixed(1)+'" stroke-dashoffset="'+o.toFixed(1)+'" transform="rotate(-90 18 18)"/></svg>';}
function progressCard(){var t=T(),M=mods(),tiles=[];var asc=function(a){return a.slice().sort(function(x,y){return x.d<y.d?-1:1;});};
  if(M.weight){var w=asc(S.weight);if(w.length>=2){var dw=w[0].kg-w[w.length-1].kg;if(dw>=0.5)tiles.push(['c2','−'+num(dw)+' '+t.kg,t.prWeight.replace('{d}',fd(w[0].d,{day:'numeric',month:'short'})),spark(w.map(function(x){return x.kg;}),'#4F8F5F')]);}}
  if(M.sleep){var s=asc(S.sleep);if(s.length>=14){var a1=s.slice(0,7).reduce(function(q,x){return q+x.h;},0)/7,a2=s.slice(-7).reduce(function(q,x){return q+x.h;},0)/7;if(a2-a1>=0.3)tiles.push(['c1','+'+num(a2-a1)+' '+t.h,t.prSleep,spark(s.slice(-14).map(function(x){return x.h;}),'#5B8DB8')]);}}
  if(M.mood){var m=asc(S.mood);if(m.length>=14){var h1=m.slice(0,7).reduce(function(q,x){return q+x.hot;},0)/7,h2=m.slice(-7).reduce(function(q,x){return q+x.hot;},0)/7;if(h1>0&&(h1-h2)/h1>=0.2)tiles.push(['c3','−'+Math.round((h1-h2)/h1*100)+' %',t.prHot,spark(m.slice(-14).map(function(x){return x.hot;}),'#C9762B')]);
    var e1=m.slice(0,7).reduce(function(q,x){return q+x.mood;},0)/7,e2=m.slice(-7).reduce(function(q,x){return q+x.mood;},0)/7;if(e2-e1>=0.4)tiles.push(['c4','<span class="fc fc'+Math.round(e2)+' sm">'+face(Math.round(e2))+'</span>+'+num(e2-e1),t.prMood,'']);}}
  if(M.aes){var k2=S.skin.slice().sort(function(a,b){return a.d<b.d?-1:1;});if(k2.length>=4){var s1=(k2[0].v+k2[1].v)/2,s2=(k2[k2.length-1].v+k2[k2.length-2].v)/2;if(s2-s1>=0.5)tiles.push(['c5','<span class="fc fc'+Math.round(s2)+' sm">'+face(Math.round(s2))+'</span>+'+num(s2-s1),t.prSkin,'']);}}
  if(M.meds&&S.meds.length){var tot=0,ok=0;for(var i=0;i<7;i++){var d=addDays(today(),-i);askDoses(d).forEach(function(x){tot++;if(takenOn(d,x.k))ok++;});}if(tot>=3&&ok/tot>=0.8)tiles.push(['c4',Math.round(ok/tot*100)+' %',t.prMeds,ring(ok/tot)]);}
  if(!tiles.length)return '';
  return '<section class="prog"><h2>'+esc(t.prTitle)+'</h2><p class="muted">'+esc(t.prSub)+'</p><div class="ptiles">'+tiles.slice(0,4).map(function(x){return '<div class="ptile '+x[0]+'"><strong>'+x[1]+'</strong><span>'+esc(x[2])+'</span>'+x[3]+'</div>';}).join('')+'</div></section>';}
function streak(){var n=0,d=today();if(!dayDone(d))d=addDays(d,-1);while(dayDone(d)){n++;d=addDays(d,-1);}return n;}
var MSTONES=[7,14,30,60,100,180];
function streakBadge(){var t=T(),n=streak(),tot=Object.keys(S.filled||{}).length;if(n<2&&tot<2)return '';
  var big=MSTONES.indexOf(n)>=0;
  if(big){var sp='';for(var k=0;k<10;k++){var a=k*36,dist=78+(k%2)*22;sp+='<i style="--a:'+a+'deg;--d:'+dist+'px;--dl:'+(.25+(k%3)*.06)+'s">'+FLAME+'</i>';}
    return '<div class="msburst" role="status"><div class="msb-star">'+sp+'<span class="msb-core">'+FLAME+'</span></div><strong>'+esc(t.msReached.replace('{n}',n))+'</strong><p>'+esc(t.streakBig)+'</p></div>';}
  var msg=n>=2?t.streak.replace('{n}',n):t.totalDays.replace('{n}',tot);
  return '<div class="streak"><span class="sb">'+ic('star',true)+'</span><div><strong>'+esc(msg)+'</strong></div></div>';}
function journeyCard(){var t=T(),ev=[],M=mods();
  var fl=Object.keys(S.filled||{}).sort();if(fl.length)ev.push({d:fl[0],i:'pen',x:t.jStart});
  [7,30,100].forEach(function(n){if(fl.length>=n)ev.push({d:fl[n-1],i:'star',x:t.jDays.replace('{n}',n),c:'gold'});});
  if(M.meds){var by={};S.meds.forEach(function(m){if(m.since){(by[m.since]=by[m.since]||[]).push(m.name);}});Object.keys(by).forEach(function(d){ev.push({d:d,i:'meds',x:t.jMeds+': '+by[d].join(', ')});});}
  (S.doseLog||[]).forEach(function(z,i){ev.push({d:z.d,i:'meds',x:(i?t.jDoseUp:t.jDoseStart).replace('{m}',z.name).replace('{d}',z.dose)});});
  if(M.aes)S.aes.forEach(function(x){ev.push({d:x.d,i:'aes',x:aesName(x)+(x.area?' · '+x.area:''),c:'rose'});});
  if(M.weight){var w=S.weight.slice().sort(function(a,b){return a.d<b.d?-1:1;});if(w.length){var st=w[0].kg,got=0;w.forEach(function(x){var k=Math.floor((st-x.kg)/2);while(k>got){got++;ev.push({d:x.d,i:'weight',x:t.jKg.replace('{n}',got*2),c:'green'});}});}}
  if(ev.length<2)return '';
  ev.sort(byDate);var nx=M.aes?aesRecall():null,fut=null;S.aes.forEach(function(x){var due=aesDue(x);if(due&&due>today()&&(!fut||due<aesDue(fut)))fut=x;});
  var h='<section class="journey card"><h2>'+esc(t.jTitle)+'</h2><ol>';
  if(fut&&M.aes)h+='<li class="fut"><span class="jd">'+ic('cal')+'</span><div><small>'+esc(fd(aesDue(fut),{day:'numeric',month:'short',year:'numeric'}))+'</small><strong>'+esc(t.jNext.replace('{t}',aesName(fut)))+'</strong></div></li>';
  var lim=jOpen?ev.length:3;h+=ev.slice(0,lim).map(function(e){return '<li class="'+(e.c||'')+'"><span class="jd">'+ic(e.i,e.i==='star')+'</span><div><small>'+esc(fd(e.d,{day:'numeric',month:'short',year:'numeric'}))+'</small><strong>'+esc(e.x)+'</strong></div></li>';}).join('');
  return h+'</ol>'+(ev.length>3?'<button class="linkbtn" data-act="jMore">'+esc(jOpen?t.jLess:t.jMore)+'</button>':'')+'</section>';}
var jOpen=false;

/* ---------- Kalender-Erinnerung ---------- */
function reminderCard(){var t=T();return '<div class="card setrow"><h2>'+esc(t.remTitle)+'</h2><p class="sub">'+esc(t.remHint)+'</p><label class="field"><span>'+esc(t.remTime)+'</span><input class="input" type="time" id="remT" value="'+(S.remAt||'20:00')+'"></label><button class="btn" data-act="ics">'+ic('cal')+esc(t.remBtn)+'</button></div>';}
function downloadIcs(tm){var t=T(),hm=tm.split(':'),d0=today().replace(/-/g,''),url=location.href.split('#')[0];S.remAt=tm;save();
  var ev=function(uidv,start,rule,sum){return ['BEGIN:VEVENT','UID:'+uidv+'@proud-aging','DTSTAMP:'+d0+'T000000Z','DTSTART:'+start,'DURATION:PT5M','RRULE:'+rule,'SUMMARY:'+sum,'DESCRIPTION:'+url,'URL:'+url,'BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:'+sum,'TRIGGER:PT0M','END:VALARM','END:VEVENT'].join('\r\n');};
  var out=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Proud Aging//App//DE','CALSCALE:GREGORIAN',ev('daily',d0+'T'+hm[0]+hm[1]+'00','FREQ=DAILY',t.remDaily)];
  S.meds.forEach(function(m){if(m.when.indexOf('weekly')<0)return;var d=today();while(wd(d)!==+m.day)d=addDays(d,1);out.push(ev('w-'+m.id,d.replace(/-/g,'')+'T090000','FREQ=WEEKLY',t.remWeekly.replace('{m}',m.name+' '+m.dose)));});
  out.push('END:VCALENDAR');
  var blob=new Blob([out.join('\r\n')],{type:'text/calendar'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='proud-aging-erinnerung.ics';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},800);toast(t.remOk);}


/* ---------- Praxis-Modus ---------- */
function sheetPin(){var t=T();openSheet('<h2>'+esc(t.pmTitle)+'</h2><p class="sub">'+esc(t.pmPinHint)+'</p><label class="field"><span>'+esc(t.pmPin)+'</span><input class="input" name="pin" type="password" inputmode="numeric" autocomplete="off" maxlength="8" style="letter-spacing:.4em;font-size:1.4rem"></label>'+fActions(false),
  function(f){if(f.pin.value!==PRAXIS.pin){showErr(f,t.pmWrong);return false;}PM=true;view='praxis';render();window.scrollTo(0,0);});}
function nextAppt(){var n=today(),r=null;S.appts.forEach(function(x){if(x.d>=n&&(!r||x.d+x.time<r.d+r.time))r=x;});return r;}
var APPT=['ctrl','video','aes','first','lab'];
function apptCard(){var x=nextAppt();if(!x)return '';var t=T(),n=dDiff(today(),x.d);
  return '<div class="apptc"><span class="hc-i">'+ic('cal')+'</span><div><small>'+esc(n===0?t.apToday:n===1?t.apTomorrow:t.apNext)+'</small><strong>'+esc(fd(x.d,{weekday:'long',day:'numeric',month:'long'}))+(x.time?' · '+esc(x.time)+(t.clock?' '+esc(t.clock):''):'')+'</strong><span>'+esc(t.apTypes[x.type]||'')+(x.note?' · '+esc(x.note):'')+'</span></div></div>';}
function pnoteCard(inHub){if(!S.pnote||!S.pnote.text)return '';if(!inHub&&S.pnote.hidden)return '';if(inHub&&!S.pnote.hidden)return '';var t=T();return '<div class="pnote">'+(inHub?'':'<button class="pn-x" data-act="pnoteHide" aria-label="'+esc(t.pnoteHide)+'">✕</button>')+'<small>'+esc(t.pnoteFrom)+' · '+esc(fdl(S.pnote.d))+'</small><p>'+esc(S.pnote.text)+'</p></div>';}
function sheetAppt(){var t=T();openSheet('<h2>'+esc(t.apSet)+'</h2>'+fDate(addDays(today(),28))+'<label class="field"><span>'+esc(t.apTime)+'</span><input class="input" type="time" name="tm" value="10:00"></label><label class="field"><span>'+esc(t.apType)+'</span><select class="input" name="ty">'+APPT.map(function(k){return '<option value="'+k+'">'+esc(t.apTypes[k])+'</option>';}).join('')+'</select></label>'+fText('note',t.apNote,'',t.apNoteEx)+fActions(false),
  function(f){S.appts.push({id:uid(),d:f.d.value||today(),time:f.tm.value,type:f.ty.value,note:f.note.value.trim()});save();render();toast(t.saved);});
  var dd=sheet.querySelector('[name=d]');if(dd){dd.removeAttribute('max');}}
function sheetPNote(){var t=T(),x=S.pnote||{text:''};openSheet('<h2>'+esc(t.pnoteSet)+'</h2><label class="field"><span>'+esc(t.pnoteL)+'</span><textarea class="input" name="tx" rows="4" maxlength="400" placeholder="'+esc(t.pnoteEx)+'">'+esc(x.text)+'</textarea></label>'+fActions(false),
  function(f){var v=f.tx.value.trim();S.pnote=v?{text:v,d:today()}:null;save();render();toast(t.saved);});}
function vPraxis(){var t=T(),lw=S.weight.slice().sort(byDate)[0],x=nextAppt(),la=S.aes.slice().sort(byDate)[0];
  var tile=function(act,icn,title,sub,extra){return '<button class="ptl" data-act="'+act+'"'+(extra||'')+'><span class="hc-i">'+ic(icn)+'</span><span><strong>'+esc(title)+'</strong><small>'+esc(sub)+'</small></span></button>';};
  var h='<header class="pmhead"><div><small>'+esc(t.pmTitle)+'</small><h1>'+esc(S.name||t.pmPatient)+'</h1><p>'+esc(modsText())+'</p></div><button class="btn light sm" data-act="pmEnd">'+esc(t.pmEnd)+'</button></header>';
  h+='<div class="ptls">';
  h+=tile('addWeight','weight',t.pmWeight,lw?num(lw.kg)+' '+t.kg+' · '+fd(lw.d,{day:'numeric',month:'short'}):'–');
  h+=tile('pmAppt','cal',t.apSet,x?fd(x.d,{day:'numeric',month:'short'})+(x.time?' · '+x.time:''):t.apNone);
  h+=tile('addMed','meds',t.pmMed,S.meds.length+' '+t.pmMedN);
  h+=tile('addAes','aes',t.aesAdd,la?aesName(la)+' · '+fd(la.d,{day:'numeric',month:'short'}):'–');
  h+=tile('pmNote','pen',t.pnoteSet,S.pnote?S.pnote.text.slice(0,40)+(S.pnote.text.length>40?'…':''):t.pmNoNote);
  h+=tile('go','check',t.program,t.pmProgSub,' data-v="setup"');
  h+='</div>';
  if(S.appts.length){h+='<div class="card"><h2>'+esc(t.apList)+'</h2><ul class="list">'+S.appts.slice().sort(function(a,b){return a.d<b.d?-1:1;}).map(function(a){return '<li><div><div class="t">'+esc(fd(a.d,{weekday:'short',day:'numeric',month:'short'}))+(a.time?' · '+esc(a.time):'')+'</div><div class="m">'+esc(t.apTypes[a.type])+(a.note?' · '+esc(a.note):'')+'</div></div><button class="edit" data-act="delAppt" data-id="'+a.id+'" aria-label="'+esc(t.del)+'">✕</button></li>';}).join('')+'</ul></div>';}
  h+='<button class="btn full" data-act="go" data-v="report" style="margin-top:4px">'+ic('chart')+esc(t.pmReport)+'</button>';
  h+='<p class="muted" style="text-align:center;margin:14px 6px 24px;font-size:.85rem">'+esc(t.pmFoot)+'</p>';
  return h;}


/* ---------- Zeitraum & Verlauf ---------- */
var RANGE=14;
function rangeDays(){var a=[],d=today();for(var i=RANGE-1;i>=0;i--)a.push(addDays(d,-i));return a;}
function rangeBar(){var t=T();return '<div class="rng" role="tablist">'+[[14,t.rng[0]],[91,t.rng[1]],[182,t.rng[2]]].map(function(r){return '<button data-act="rng" data-v="'+r[0]+'" aria-pressed="'+(RANGE===r[0])+'">'+esc(r[1])+'</button>';}).join('')+'</div>';}
function weeksOf(days){var w=[];for(var i=0;i<days.length;i+=7)w.push(days.slice(i,i+7));return w;}
function monthTick(d,i,n){var dt=parse(d);return (dt.getDate()<=7||i===0)?dt.toLocaleDateString(T().locale,{month:'short'}):'';}
/* Schlaf: Wochenbalken */
function sleepWeekChart(days){
  var t=T(),wk=weeksOf(days),W=340,H=170,L=26,R=6,TP=10,B=24,bw=(W-L-R)/wk.length,Y=function(v){return TP+(10-v)/10*(H-TP-B);},g='',info=[],last='';
  [0,5,10].forEach(function(v){g+='<line class="gl" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/><text class="ax" x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>';});
  wk.forEach(function(ds,i){var es=ds.map(sleepFor).filter(Boolean),x=L+i*bw+1.5,w=Math.max(2,bw-3);
    if(es.length){var a=es.reduce(function(s,e){return s+e.h;},0)/es.length,th=es.filter(function(e){return e.through;}).length;
      g+='<rect class="bar'+(th/es.length>=.5?' ok':'')+'" x="'+x+'" y="'+Y(a)+'" width="'+w+'" height="'+(Y(0)-Y(a))+'" rx="2"/>';
      info.push(fd(ds[0])+' – '+fd(ds[ds.length-1])+': Ø '+num(a)+' '+t.h+' · '+th+'/'+es.length+' '+t.legendThrough);}
    else info.push(fd(ds[0])+': –');
    g+='<rect class="hit" data-i="'+i+'" x="'+(L+i*bw)+'" y="'+TP+'" width="'+bw+'" height="'+(H-TP-B)+'"/>';
    var mt=monthTick(ds[0],i);if(mt&&mt!==last){last=mt;g+='<text class="ax" x="'+(x)+'" y="'+(H-6)+'">'+esc(mt)+'</text>';}});
  g+='<line class="goal" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(7)+'" y2="'+Y(7)+'"/><text class="goalt" x="'+(W-R)+'" y="'+(Y(7)-5)+'" text-anchor="end">'+esc(t.goal7)+'</text>';
  return '<div class="chart" data-info="'+esc(JSON.stringify(info))+'"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+esc(t.sleepTitle)+'">'+g+'</svg><div class="chartinfo muted">'+esc(t.weekAvgHint)+'</div></div>';}
/* Hitzewallungen: Wochenbalken */
function hotWeekChart(days){
  var t=T(),wk=weeksOf(days),vals=[],info=[];
  wk.forEach(function(ds){var es=ds.map(moodFor).filter(function(e){return e&&e.hot!=null;});var a=es.length?es.reduce(function(s,e){return s+e.hot;},0)/es.length:null;vals.push(a);
    info.push(fd(ds[0])+' – '+fd(ds[ds.length-1])+': '+(a==null?'–':'Ø '+num(a)+' '+t.hotDayShort+' '+t.perDay));});
  var W=340,H=150,L=26,R=6,TP=10,B=24,bw=(W-L-R)/wk.length,mx=Math.max(4,Math.ceil(Math.max.apply(null,vals.filter(function(v){return v!=null;}).concat([0])))),Y=function(v){return TP+(mx-v)/mx*(H-TP-B);},g='',last='';
  [0,Math.round(mx/2),mx].forEach(function(v){g+='<line class="gl" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/><text class="ax" x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>';});
  wk.forEach(function(ds,i){var v=vals[i],x=L+i*bw+1.5,w=Math.max(2,bw-3);if(v!=null)g+='<rect class="bar hot" x="'+x+'" y="'+Y(Math.max(v,.12))+'" width="'+w+'" height="'+(Y(0)-Y(Math.max(v,.12)))+'" rx="2"/>';
    g+='<rect class="hit" data-i="'+i+'" x="'+(L+i*bw)+'" y="'+TP+'" width="'+bw+'" height="'+(H-TP-B)+'"/>';
    var mt=monthTick(ds[0],i);if(mt&&mt!==last){last=mt;g+='<text class="ax" x="'+x+'" y="'+(H-6)+'">'+esc(mt)+'</text>';}});
  return '<div class="chart" data-info="'+esc(JSON.stringify(info))+'"><svg viewBox="0 0 '+W+' '+H+'" role="img">'+g+'</svg><div class="chartinfo muted">'+esc(t.weekAvgHint)+'</div></div>';}
/* Stimmung & Energie: zwei Linien, Wochenschnitt */
function moodTrendChart(days){
  var t=T(),wk=weeksOf(days),pm=[],pe=[],info=[];
  wk.forEach(function(ds){var es=ds.map(moodFor).filter(function(e){return e&&e.mood!=null;});if(!es.length)return;
    var m=es.reduce(function(s,e){return s+e.mood;},0)/es.length,e=es.reduce(function(s,x){return s+x.energy;},0)/es.length,d=ds[Math.floor(ds.length/2)];
    pm.push({d:d,v:m});pe.push({d:d,v:e});info.push(fd(ds[0])+' – '+fd(ds[ds.length-1])+': '+t.moodQ+' Ø '+num(m)+' · '+t.energyQ+' Ø '+num(e));});
  if(pm.length<2)return '';
  var W=340,H=170,L=26,R=10,TP=12,B=24,t0=parse(pm[0].d).getTime(),t1=parse(pm[pm.length-1].d).getTime(),X=function(d){return L+(parse(d).getTime()-t0)/(t1-t0)*(W-L-R);},Y=function(v){return TP+(5-v)/4*(H-TP-B);},g='';
  [1,3,5].forEach(function(v){g+='<line class="gl" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/><text class="ax" x="'+(L-6)+'" y="'+(Y(v)+4)+'" text-anchor="end">'+v+'</text>';});
  var line=function(p,c){return '<polyline fill="none" stroke="'+c+'" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round" points="'+p.map(function(x){return X(x.d).toFixed(1)+','+Y(x.v).toFixed(1);}).join(' ')+'"/>';};
  g+=line(pe,'#C9A227')+line(pm,'#2E7D4F');
  pm.forEach(function(p,i){g+='<circle class="dot" cx="'+X(p.d).toFixed(1)+'" cy="'+Y(p.v).toFixed(1)+'" r="3.5" style="fill:#2E7D4F"/>';});
  g+='<text class="ax" x="'+L+'" y="'+(H-6)+'">'+esc(fd(pm[0].d))+'</text><text class="ax" x="'+(W-R)+'" y="'+(H-6)+'" text-anchor="end">'+esc(fd(pm[pm.length-1].d))+'</text>';
  var n=pm.length;pm.forEach(function(p,i){var x0=i===0?L:(X(pm[i-1].d)+X(p.d))/2,x1=i===n-1?W-R:(X(p.d)+X(pm[i+1].d))/2;g+='<rect class="hit" data-i="'+i+'" x="'+x0+'" y="'+TP+'" width="'+Math.max(1,x1-x0)+'" height="'+(H-TP-B)+'"/>';});
  return '<div class="card"><h2>'+esc(t.moodTrend)+'</h2><div class="chart line-chart" data-info="'+esc(JSON.stringify(info))+'"><svg viewBox="0 0 '+W+' '+H+'" role="img">'+g+'</svg><div class="legend"><span><i style="background:#2E7D4F"></i>'+esc(t.moodQ)+'</span><span><i style="background:#C9A227"></i>'+esc(t.energyQ)+'</span></div><div class="chartinfo muted">'+esc(t.tapPoint)+'</div></div></div>';}

/* ---------- Beispieldaten: 6 Monate ---------- */
function demoData(){
  var t=T(),d0=today(),N=182,s=[],m=[],w=[],gi=[],fl={},log={},skin=[];
  var r=1234567;function rnd(){r=(r*48271)%2147483647;return r/2147483647;}
  var L=S.lang;
  for(var i=N-1;i>=0;i--){var d=addDays(d0,-i),p=(N-1-i)/(N-1);
    if(rnd()<0.08&&i>21)continue; /* einzelne Tage nicht ausgefüllt */
    fl[d]=true;
    var h=5.5+1.6*p+(rnd()-.5)*1.2;h=Math.round(Math.min(9,Math.max(4,h))*2)/2;
    var thr=rnd()<0.18+0.55*p,hn=rnd()<0.65-0.5*p;
    s.push({d:d,h:h,through:thr,hot:hn,note:''});
    var hot=Math.max(0,Math.round(5.2-4.3*p+(rnd()-.5)*2));
    var mood=Math.max(1,Math.min(5,Math.round(2.1+2*p+(rnd()-.5)*1.4))),en=Math.max(1,Math.min(5,Math.round(1.9+2.1*p+(rnd()-.5)*1.4)));
    m.push({d:d,hot:hot,mood:mood,energy:en,note:''});
  }
  /* Gewicht wöchentlich, Wegovy-Start vor 168 Tagen */
  for(var k=N-7;k>=0;k-=7){var dd=addDays(d0,-k),q=(N-7-k)/(N-7);w.push({d:dd,kg:Math.round((88.6-10.4*(1-Math.pow(1-q,1.6))+(rnd()-.5)*0.5)*10)/10});}
  w[2].src='praxis';w[8].src='praxis';w[14].src='praxis';w[20].src='praxis';
  var dl=[[-168,'0,25 mg'],[-140,'0,5 mg'],[-112,'1 mg'],[-84,'1,7 mg'],[-42,'2,4 mg']].map(function(x){return {d:addDays(d0,x[0]),name:'Wegovy',dose:x[1]};});
  /* Magen-Darm: gehäuft nach Dosis-Erhöhung */
  Object.keys(fl).forEach(function(dd){var near=dl.some(function(x){var n=dDiff(x.d,dd);return n>=0&&n<=5;});gi.push({d:dd,v:near?rnd()<0.55:rnd()<0.06});});
  for(var j=0;j<26;j++)skin.push({d:addDays(d0,-7*(25-j)-2),v:Math.max(2,Math.min(5,Math.round(2.8+1.7*j/25+(rnd()-.5))))});
  var tx=L==='en'?{gel:'Estradiol gel',gd:'2 pumps',how:'apply to upper arm or thigh',pg:'Progesterone (micronised)'}:L==='tr'?{gel:'Estradiol jel',gd:'2 pompa',how:'üst kola veya uyluğa sürün',pg:'Progesteron (mikronize)'}:{gel:'Gynokadin Dosiergel',gd:'2 Hübe',how:'auf Oberarm oder Oberschenkel',pg:'Utrogest'};
  var since=addDays(d0,-175),fri=5;
  var meds=[{id:'m0',name:'Wegovy',dose:'2,4 mg',how:L==='en'?'Injection under the skin':L==='tr'?'Deri altına iğne':'Spritze unter die Haut',when:['weekly'],day:fri,since:addDays(d0,-168),src:'praxis'},
    {id:'m1',name:tx.gel,dose:tx.gd,how:tx.how,when:['morning'],since:since,src:'praxis'},
    {id:'m2',name:tx.pg,dose:'200 mg',how:'',when:['night'],since:since,src:'praxis'},
    {id:'m3',name:'Vitamin D3',dose:'2.000 IE',how:'',when:['morning'],since:since}];
  Object.keys(fl).forEach(function(dd){var o={};o['m1:morning']=rnd()<0.95;o['m2:night']=rnd()<0.9;o['m3:morning']=rnd()<0.85;if(wd(dd)===fri)o['m0:weekly']=rnd()<0.97;log[dd]=o;});
  var area=L==='en'?['Forehead, frown lines','Under the eyes']:L==='tr'?['Alın, kaş arası','Göz altı']:['Stirn, Zornesfalte','Augenpartie'];
  var note=L==='en'?'Great progress! From Friday please stay on 2.4 mg. Call us if you feel nauseous.':L==='tr'?'Harika ilerleme! Cumadan itibaren 2,4 mg’da kalın. Mide bulantısında bizi arayın.':'Toller Verlauf! Bitte ab Freitag bei 2,4 mg bleiben. Bei Übelkeit gern anrufen.';
  S=Object.assign(blank(),{lang:S.lang,name:S.name||(L==='tr'?'Ayşe':'Andrea'),who:S.who||'meno',age:S.age||54,big:S.big,
    mods:{sleep:true,mood:true,meds:true,weight:true,aes:true},glp1:true,filled:fl,sleep:s,mood:m,weight:w,goal:75,gi:gi,meds:meds,medLog:log,doseLog:dl,skin:skin,
    gen:{at:addDays(d0,-40),ein:false,durch:true},
    aes:[{id:'a1',type:'wrinkle',area:area[0],d:addDays(d0,-104),next:16,sat:5,again:true,satAt:addDays(d0,-88),src:'praxis'},{id:'a2',type:'polyn',area:area[1],d:addDays(d0,-3),next:3,src:'praxis'}],
    wish:{at:addDays(d0,-20),areas:['eyes','neck']},
    appts:[{id:'p1',d:addDays(d0,12),time:'09:40',type:'ctrl',note:''}],pnote:{text:note,d:addDays(d0,-2)}});
  RANGE=182;save();setView('fill');toast(t.demoOk);
}


/* ---------- Serie & Ausfüll-Kalender ---------- */
var FLAME='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" fill="currentColor"/></svg>';
function bestStreak(){var ds=Object.keys(S.filled||{}).filter(function(d){return S.filled[d];}).sort(),b=0,c=0,prev=null;
  ds.forEach(function(d){c=(prev&&dDiff(prev,d)===1)?c+1:1;if(c>b)b=c;prev=d;});return b;}
function weekDays(){var d=today(),w=(wd(d)+6)%7,a=[];for(var i=0;i<7;i++)a.push(addDays(d,i-w));return a;}
function streakCard(){var t=T(),n=streak(),best=Math.max(bestStreak(),n),done=dayDone(today()),td=today();
  var h='<div class="stc'+(n?'':' zero')+'"><div class="st-top"><span class="st-fl">'+FLAME+'<b>'+n+'</b></span><div class="st-txt"><strong>'+esc(n?(n===1?t.st1:t.stDays.replace('{n}',n)):t.stStart)+'</strong><span>'+esc(done?t.stDone:t.stTodo)+'</span>'+(best>1?'<small>'+esc(t.stBest.replace('{n}',best))+'</small>':'')+'</div></div>';
  h+='<div class="st-week">'+weekDays().map(function(d){var f=dayDone(d),c=d===td?(f?'on today':'today'):d>td?'fut':(f?'on':'off');return '<span class="st-d '+c+'"><small>'+esc(fd(d,{weekday:'short'}).replace('.','').slice(0,2))+'</small><i>'+(f?ic('check'):'')+'</i></span>';}).join('')+'</div>';
  h+='<button class="linkbtn" data-act="cal">'+ic('cal')+esc(t.calOpen)+'</button></div>';
  return h;}
var calOff=0;
function calHTML(){var t=T(),base=parse(today());var y=base.getFullYear(),m=base.getMonth()+calOff;var first=new Date(y,m,1),yy=first.getFullYear(),mm=first.getMonth(),dim=new Date(yy,mm+1,0).getDate(),lead=(first.getDay()+6)%7,td=today(),cnt=0,past=0;
  var g='<div class="cal-h"><button type="button" class="cal-n" data-sact="calPrev" aria-label="‹">‹</button><strong>'+esc(first.toLocaleDateString(t.locale,{month:'long',year:'numeric'}))+'</strong><button type="button" class="cal-n" data-sact="calNext" aria-label="›" '+(calOff>=0?'disabled':'')+'>›</button></div><div class="cal-g">';
  ['Mo','Di','Mi','Do','Fr','Sa','So'].forEach(function(x,i){g+='<span class="cal-wd">'+esc(fd(addDays(weekDays()[0],i),{weekday:'short'}).replace('.','').slice(0,2))+'</span>';});
  for(var i=0;i<lead;i++)g+='<span></span>';
  for(var dd=1;dd<=dim;dd++){var d=yy+'-'+String(mm+1).padStart(2,'0')+'-'+String(dd).padStart(2,'0'),f=dayDone(d);if(d<=td){past++;if(f)cnt++;}
    g+='<span class="cal-d'+(f?' on':'')+(d===td?' today':'')+(d>td?' fut':'')+'">'+dd+'</span>';}
  g+='</div><p class="cal-sum">'+esc(t.calMonth.replace('{n}',cnt).replace('{m}',past))+'</p>';
  return g;}
function sheetCal(){var t=T(),tot=Object.keys(S.filled||{}).filter(function(d){return S.filled[d];}).length,n=streak(),best=Math.max(bestStreak(),n);calOff=0;
  var lastGot=MSTONES.filter(function(x){return best>=x;}).pop(),gi=0;var ms=MSTONES.map(function(x){var got=best>=x;return '<span class="ms'+(got?' got':'')+(x===lastGot?' glow':'')+'"'+(got?' style="--i:'+(gi++)+'"':'')+'>'+(got?FLAME:'')+x+'</span>';}).join('');
  openSheet('<h2>'+esc(t.calTitle)+'</h2><div class="cal-k"><div><b>'+tot+'</b><span>'+esc(t.calTotal)+'</span></div><div><b>'+n+'</b><span>'+esc(t.calCur)+'</span></div><div><b>'+best+'</b><span>'+esc(t.calBest)+'</span></div></div><div id="calbox">'+calHTML()+'</div><p class="cal-ms-t">'+esc(t.ms)+'</p><div class="cal-ms">'+ms+'</div><div class="actions"><button type="button" class="btn full" data-close>'+esc(t.calClose)+'</button></div>',
  function(){},function(a){if(a==='calPrev')calOff--;if(a==='calNext'&&calOff<0)calOff++;var box=sheet.querySelector('#calbox');if(box)box.innerHTML=calHTML();});}


/* ---------- Meine Daten: Kachel-Übersicht ---------- */
function asc(a){return a.slice().sort(function(x,y){return x.d<y.d?-1:1;});}
function avgOf(a,k){return a.length?a.reduce(function(s,x){return s+x[k];},0)/a.length:null;}
function hubTiles(){var t=T(),M=mods(),out=[],td=today(),wk=addDays(td,-6);
  if(M.sleep){var s=asc(S.sleep),l7=s.filter(function(x){return x.d>=wk;}),a7=avgOf(l7,'h'),f7=s.length>=14?avgOf(s.slice(0,7),'h'):null;
    out.push(['sleep','sleep','c1',t.tabs.sleep,a7!=null?'Ø '+num(a7)+' '+t.h:'–',f7!=null&&a7!=null&&a7-f7>=.2?'+'+num(a7-f7)+' '+t.h+' '+t.hubSince:(l7.length?l7.filter(function(x){return x.through;}).length+'/'+l7.length+' '+t.legendThrough:t.hubNone),f7!=null&&a7-f7>=.2]);}
  if(M.mood){var m=asc(S.mood).filter(function(x){return x.mood!=null;}),l=m.filter(function(x){return x.d>=wk;}),mo=avgOf(l,'mood'),h1=m.length>=14?avgOf(m.slice(0,7),'hot'):null,h2=avgOf(l,'hot');
    var better=h1&&h2!=null&&(h1-h2)/h1>=.2;
    out.push(['mood','mood','c4',t.tabs.mood,mo!=null?'<span class="fc fc'+Math.round(mo)+' sm">'+face(Math.round(mo))+'</span>'+num(mo):'–',!hotOn()?(l.length+'/7 '+t.hubDays):better?'−'+Math.round((h1-h2)/h1*100)+' % '+t.hubHot:(h2!=null?'Ø '+num(h2)+' '+t.hotDayShort:t.hubNone),hotOn()&&better,true]);}
  if(M.meds){var tot=0,ok=0;for(var i=0;i<7;i++){var d=addDays(td,-i);askDoses(d).forEach(function(x){tot++;if(takenOn(d,x.k))ok++;});}
    out.push(['meds','meds','c3',t.tabs.meds,tot?Math.round(ok/tot*100)+' %':S.meds.length+'',tot?t.hubTaken:t.pmMedN,tot&&ok/tot>=.9]);}
  if(M.weight){var w=asc(S.weight),lw=w[w.length-1],fw=w[0];
    out.push(['weight','weight','c2',t.tabs.weight,lw?num(lw.kg)+' '+t.kg:'–',w.length>1?(lw.kg-fw.kg>0?'+':'−')+num(Math.abs(lw.kg-fw.kg))+' '+t.kg+' '+t.hubSince:t.hubNone,w.length>1&&lw.kg<fw.kg]);}
  if(M.aes){var la=S.aes.slice().sort(byDate)[0],due=la?aesDue(la):null;
    out.push(['aes','aes','c5',t.tabs.aes,la?aesName(la):'–',la?t.aesLast.replace('{d}',fd(la.d,{day:'numeric',month:'short'})):t.hubNone,false]);}
  return out;}
function vHub(){var t=T();
  var h='<div class="pagehead"><h1>'+esc(t.data)+'</h1><p>'+esc(t.hubSub)+'</p></div>'+balanceCard()+'<div class="hub">';
  h+=hubTiles().map(function(x){var act=x[0]==='cal'?'data-act="cal"':'data-act="dtab" data-t="'+x[0]+'"';
    return '<button class="hubt '+x[2]+'" '+act+'><span class="hb-i">'+ic(x[1],x[1]==='star')+'</span><span class="hb-n">'+esc(x[3])+'</span><strong>'+(x[7]?x[4]:esc(x[4]))+'</strong><small class="'+(x[6]?'up':'')+'">'+esc(x[5])+'</small></button>';}).join('');
  h+='</div><div class="hubfoot"><button class="linkbtn" data-act="go" data-v="report">'+ic('doc')+esc(t.report)+'</button><button class="linkbtn" data-act="otherDay">'+ic('cal')+esc(t.otherDay)+'</button></div>';
  return h;}

/* ---------- Smileys ---------- */
var FACE=['M8 16.5c1.2-2 2.5-2.6 4-2.6s2.8.6 4 2.6','M8.5 15.8c1-1.1 2.2-1.6 3.5-1.6s2.5.5 3.5 1.6','M8.5 15h7','M8.5 14.2c1 1.1 2.2 1.6 3.5 1.6s2.5-.5 3.5-1.6','M7.8 13.6c1.2 2 2.6 2.8 4.2 2.8s3-.8 4.2-2.8'];
function face(i){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.2"/><circle cx="9" cy="10" r=".9" fill="currentColor"/><circle cx="15" cy="10" r=".9" fill="currentColor"/>'+(i===1?'<path d="M7.6 8.2l2 .8M16.4 8.2l-2 .8"/>':'')+'<path d="'+FACE[i-1]+'"/></svg>';}
function battery(i){var b='';for(var j=0;j<i;j++)b+='<rect x="'+(5.2+j*2.6)+'" y="9.2" width="1.8" height="5.6" rx=".5" fill="currentColor" stroke="none"/>';return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="7.5" width="15" height="9" rx="2"/><path d="M20.5 10.5v3"/>'+b+'</svg>';}

/* ---------- Ausfüllen (Start) ---------- */
var fbN=0;
function fbFor(k,v){var f=T().fb,nm=S.name?S.name:'';fbN++;
  var pick=function(x){return x.replace('{n}',nm).replace(/, $|,\s*!$/,'!').replace(' ,',',');};
  if(k==='through')return v?f.through1:f.through0;
  if(k==='hotN')return v?f.hotN1:f.hotN0;
  if(k==='gi')return v?f.gi1:f.gi0;
  if(k==='h')return v>=7?f.h7.replace('{h}',num(v)):v<6?f.hLow:f.gen[fbN%f.gen.length];
  if(k==='mood'||k==='energy'||k==='skin'||k==='aesS')return v>=4?(nm?f.goodN.replace('{n}',nm):f.good):v<=2?f.low:f.mid;
  if(k==='aesR')return f.gen[fbN%f.gen.length];
  return (nm&&fbN%3===0)?f.nameT.replace('{n}',nm):f.gen[fbN%f.gen.length];}
/* Rueckmeldungen nur manchmal: max. 2 pro Fragebogen, nie zweimal hintereinander; Sicherheitshinweis immer */
function fbMaybe(k,v){if(k==='gi'&&v)return fbFor(k,v);
  F.fbC=F.fbC||0;if(F.fbC>=2||F.fbPrev===F.i-1)return null;
  var f=T().fb,txt=fbFor(k,v);if(!txt||f.gen.indexOf(txt)>=0||txt===f.mid||txt===f.nameT.replace('{n}',S.name||''))return null;
  if(Math.random()>.34)return null;F.fbC++;F.fbPrev=F.i;return txt;}
function hotDefault(w){return w!=='man'&&w!=='woman';}
function hotOn(){return S.hot!=null?!!S.hot:hotDefault(S.who);}
function modLabel(k,d){var t=T();if(!hotOn()){if(k==='mood')return d?t.mod_mood2D:t.mod_mood2;if(k==='sleep'&&d)return t.mod_sleep2D;}return t['mod_'+k+(d?'D':'')];}
function dayDone(d){return !!(S.filled&&S.filled[d]);}
function mods(){return S.mods||{sleep:true,mood:true,meds:true,weight:false};}
function giFor(d){for(var i=0;i<S.gi.length;i++)if(S.gi[i].d===d)return S.gi[i];return null;}
function weightDue(d){var has=false,last=null;S.weight.forEach(function(x){if(x.d===d)has=true;if(x.d<d&&(!last||x.d>last))last=x.d;});return has||!last||last<=addDays(d,-7);}
function vFill(){
  var t=T(),hr=new Date().getHours(),greet=t.hello[(hr>=5&&hr<11)?0:(hr>=11&&hr<18)?1:2]+(S.name?', '+S.name:''),n=streak(),done=dayDone(today());
  var h='<div class="homehead"><div><h1>'+esc(greet)+'</h1><p>'+esc(fd(today(),{weekday:'long',day:'numeric',month:'long'}))+'</p></div>'+(n>=1?'<button class="stpill'+(done?' on':'')+'" data-act="cal" aria-label="'+esc(t.stDays.replace('{n}',n))+'">'+FLAME+'<b>'+n+'</b><small>'+esc(n===1?t.stPill1:t.stPill)+'</small></button>':'')+'</div>';
  h+=installHint()+apptCard()+pnoteCard();
  var empty=!S.sleep.length&&!S.weight.length&&!S.meds.length&&!S.mood.length&&!S.aes.length;
  if(empty)h+='<div class="welcome">'+esc(t.emptyStart)+'</div>';
  if(done)h+='<div class="todayok"><span class="ok">'+ic('check')+'</span><div><strong>'+esc(t.fillDone)+'</strong>'+''+'</div><button class="btn ghost sm" data-act="startForm">'+esc(t.change)+'</button></div>';
  else h+='<div class="hero-card"><span class="hc-i">'+ic('pen')+'</span><h2>'+esc(t.fillToday)+'</h2><p>'+esc(t.fillMin)+(genDue()?' '+esc(t.extraGen):'')+'</p><button class="btn big full" data-act="startForm">'+esc(t.fillStart)+' →</button>'+''+'</div>';
  h+=aesRecallCard();
  if(!empty)h+='<button class="overlink" data-act="over"><span class="hc-i">'+ic('chart')+'</span><span><strong>'+esc(t.overTitle)+'</strong><small>'+esc(t.overSub)+'</small></span><span class="arr">→</span></button>';
  return h;
}
function vOver(){var t=T(),h='<div class="pagehead"><h1>'+esc(t.tabs.over)+'</h1></div>';
  h+=streakCard()+progressCard()+journeyCard();
  if(mods().weight&&S.glp1&&!S.meds.some(function(m){return m.when.indexOf('weekly')>=0;}))h+='<div class="welcome">'+esc(T().glp1Tip)+'</div>';
  h+='<button class="linkbtn" data-act="otherDay">'+ic('cal')+esc(t.otherDay)+'</button>';
  return h;}

function daySummary(d){var t=T(),s=sleepFor(d),m=moodFor(d),a=[];
  if(s)a.push(num(s.h)+' '+t.h+' · '+(s.through?t.legendThrough:t.legendNot));
  if(m&&m.mood!=null)a.push(t.moodQ+' '+m.mood+'/5 · '+t.energyQ+' '+m.energy+'/5');var g=giFor(d);if(g&&S.glp1)a.push(t.gi+': '+(g.v?t.yes:t.no));var w=null;S.weight.forEach(function(x){if(x.d===d)w=x;});if(w)a.push(num(w.kg)+' '+t.kg);return a.join(' · ');}
function sheetDay(){var t=T();openSheet('<h2>'+esc(t.chooseDay)+'</h2>'+fDate(addDays(today(),-1))+'<div class="actions"><button type="button" class="btn light" data-close>'+esc(t.cancel)+'</button><button type="submit" class="btn">'+esc(t.start)+'</button></div>',function(f){var d=f.d.value||today();setTimeout(function(){startForm(d);},0);});}

/* ---------- Fragebogen ---------- */
function startForm(d){
  var s=sleepFor(d),m=moodFor(d),w=null;S.weight.forEach(function(x){if(x.d===d)w=x;});
  var meds={};askDoses(d).forEach(function(x){meds[x.k]=takenOn(d,x.k);});
  var M=mods(),steps=[],genHere=S.gen&&S.gen.at===d,gi=giFor(d);
  if(M.sleep){steps.push('h','through');if(hotOn())steps.push('hotN');}
  if(M.mood){if(hotOn())steps.push('hotD');steps.push('mood','energy');}
  if(M.weight&&S.glp1)steps.push('gi');
  if(M.meds&&askDoses(d).length)steps.push('meds');
  if(M.weight&&weightDue(d))steps.push('kg');
  if(M.sleep&&(genDue()||genHere))steps.push('ein','durch');
  var ac=M.aes?aesCheckFor(d):null,as=M.aes?aesSatFor(d):null;if(ac)steps.push('aesC');if(as)steps.push('aesS','aesR');if(M.aes&&skinDue(d))steps.push('skin');if(M.aes&&wishDue(d))steps.push('wish');
  steps.push('note','summary');
  F={d:d,i:0,steps:steps,a:{h:s?s.h:7,through:s?s.through:null,hotN:s?s.hot:null,hotD:m?m.hot:0,mood:m?m.mood:null,energy:m?m.energy:null,meds:meds,kg:w?num(w.kg):'',ein:genHere?S.gen.ein:null,durch:genHere?S.gen.durch:null,aesC:ac?(ac.chk&&ac.chk[d])||null:null,aesR:as&&as.again!=null?as.again:null,skin:skinFor(d)?skinFor(d).v:null,wish:S.wish&&S.wish.at===d?S.wish.areas.slice():[],aesS:as?as.sat||null:null,aesCid:ac?ac.id:null,aesSid:as?as.id:null,gi:gi?gi.v:null,note:(s&&s.note)||''}};
  view='form';render();window.scrollTo(0,0);
}
function req(k){return ['through','hotN','mood','energy','ein','durch','gi','aesC','aesS','aesR','skin'].indexOf(k)>=0;}
var navLock=0;
function formNext(){if(Date.now()<navLock)return;navLock=Date.now()+450;var k=F.steps[F.i];if(req(k)&&F.a[k]==null)return;
  if(k==='kg'&&F.a.kg){var v=pnum(F.a.kg);if(!(v>=25&&v<=300)){var e=root.querySelector('.ferr');if(e)e.hidden=false;return;}}
  if(k==='h'&&F.a.h!=null)F.fb=fbMaybe('h',+F.a.h);
  F.i=Math.min(F.i+1,F.steps.length-1);render();window.scrollTo(0,0);}
function formPrev(){if(Date.now()<navLock)return;navLock=Date.now()+450;if(F.i===0){F=null;setView('fill');return;}F.i--;render();window.scrollTo(0,0);}
function formSkip(){var k=F.steps[F.i];if(k==='kg')F.a.kg='';if(k==='note')F.a.note='';if(k==='wish')F.a.wish=[];F.i++;render();window.scrollTo(0,0);}
var YN=['through','hotN','ein','durch','gi','aesR'];
function formAnswer(k,v){F.a[k]=(k==='mood'||k==='energy'||k==='aesS'||k==='skin')?+v:k==='aesC'?v:v==='1';render();
  if(F.i<F.steps.length-1){var i=F.i;navLock=Date.now()+600;setTimeout(function(){if(F&&F.i===i&&F.a[k]!=null){F.fb=fbMaybe(k,F.a[k]);F.i++;render();window.scrollTo(0,0);navLock=Date.now()+450;}},260);}}
function yesNo(k){var t=T(),v=F.a[k];return '<div class="bigchoice">'+[['1',t.yes],['0',t.no]].map(function(o){var on=v!=null&&(v===(o[0]==='1'));return '<button class="choice'+(on?' on':'')+'" data-act="fAns" data-k="'+k+'" data-val="'+o[0]+'" aria-pressed="'+on+'">'+esc(o[1])+'</button>';}).join('')+'</div>';}
function scale5(k){var t=T(),v=F.a[k],h='<div class="scale5">';for(var i=1;i<=5;i++)h+='<button class="choice'+(v===i?' on':'')+'" data-act="fAns" data-k="'+k+'" data-val="'+i+'" aria-pressed="'+(v===i)+'" aria-label="'+i+' – '+esc(t.scale[i-1])+'"><span class="fc fc'+i+'">'+(k==='energy'?battery(i):face(i))+'</span><small>'+esc(t.scale[i-1])+'</small></button>';return h+'</div>';}
function bigStepper(k,val,min,max,step,unit,dec){var a=' data-act="fStep" data-for="'+k+'" data-min="'+min+'" data-max="'+max+'" data-u="'+esc(unit)+'" data-dec="'+dec+'"';
  return '<div class="bigstep"><button'+a+' data-step="-'+step+'" aria-label="−">−</button><output name="'+k+'" aria-live="polite">'+num(val,dec)+esc(unit)+'</output><button'+a+' data-step="'+step+'" aria-label="+">+</button><input type="hidden" name="'+k+'" value="'+val+'"></div>';}
function vForm(){
  var t=T(),k=F.steps[F.i],n=F.steps.length-1,a=F.a,q='',body='',hint='',opt=false;
  var head='<header class="top"><button class="iconbtn" data-act="fPrev" aria-label="'+esc(t.prev)+'">'+ic('back')+'</button><div class="fday">'+esc(fdw(F.d))+'</div><button class="iconbtn" data-act="fCancel" aria-label="'+esc(t.cancel)+'">✕</button></header>';
  if(k==='summary')return head+vSummary();
  var prog='<div class="fprog"><div class="bar"><i style="width:'+Math.round(F.i/n*100)+'%"></i></div><span>'+esc(t.stepOf.replace('{i}',F.i+1).replace('{n}',n))+'</span></div>';
  if(k==='h'){q=t.q_h;body=bigStepper('h',a.h,0,14,0.5,' '+t.h,1);}
  else if(k==='through'){q=t.q_through;body=yesNo('through');}
  else if(k==='hotN'){q=t.q_hotN;body=yesNo('hotN');}
  else if(k==='hotD'){q=t.q_hotD;body=bigStepper('hotD',a.hotD,0,30,1,'',0);}
  else if(k==='mood'){q=t.q_mood;body=scale5('mood');}
  else if(k==='energy'){q=t.q_energy;body=scale5('energy');}
  else if(k==='meds'){q=t.q_meds;hint=t.q_medsHint;body='<div class="card">'+askDoses(F.d).map(function(x){var on=!!a.meds[x.k];return '<button class="check'+(on?' on':'')+'" data-act="fMed" data-k="'+x.k+'" aria-pressed="'+on+'"><span class="box">'+ic('check')+'</span><span class="ct"><strong>'+esc(x.m.name)+' · '+esc(x.m.dose)+'</strong><span class="small muted">'+esc(slotLabel(x.m,x.s))+'</span></span></button>';}).join('')+'</div>';}
  else if(k==='gi'){q=t.q_gi;hint=t.q_giHint;body=yesNo('gi');}
  else if(k==='kg'){q=t.q_kgWeekly;hint=t.q_kg+' '+t.q_kgHint;opt=true;body='<label class="field"><span>'+esc(t.weightKg)+'</span><input class="input big-in" type="text" inputmode="decimal" name="fkg" value="'+esc(a.kg)+'" placeholder="72'+T().dec+'5"></label><p class="err ferr" hidden>25–300 '+t.kg+'</p>';}
  else if(k==='ein'){q=t.genEin;hint=t.genEinHint;body=yesNo('ein');}
  else if(k==='durch'){q=t.genDurch;hint=t.genDurchHint;body=yesNo('durch');}
  else if(k==='aesC'){var tr=aesById(a.aesCid);q=t.q_aesC;hint=t.q_aesCHint.replace('{t}',aesName(tr)).replace('{d}',fdl(tr.d))+(tr.area?' · '+tr.area:'');body='<div class="bigchoice col">'+[['ok',t.aesOk],['mild',t.aesMild],['bad',t.aesBad]].map(function(o){var on=a.aesC===o[0];return '<button class="choice'+(on?' on':'')+'" data-act="fAns" data-k="aesC" data-val="'+o[0]+'" aria-pressed="'+on+'">'+esc(o[1])+'</button>';}).join('')+'</div>'+(a.aesC==='bad'?'<div class="alert"><strong>'+esc(t.aesCall)+'</strong><a class="btn full" href="tel:'+PRAXIS.tel+'">'+ic('tel')+esc(t.callPraxis)+'</a></div>':'');}
  else if(k==='aesS'){var tr2=aesById(a.aesSid);q=t.q_aesS;hint=t.q_aesCHint.replace('{t}',aesName(tr2)).replace('{d}',fdl(tr2.d))+(tr2.area?' · '+tr2.area:'');body=scale5('aesS');}
  else if(k==='aesR'){q=t.q_aesR;body=yesNo('aesR');}
  else if(k==='skin'){q=t.q_skin;hint=t.q_skinHint;body=scale5('skin');}
  else if(k==='wish'){q=t.q_wish;hint=t.q_wishHint;opt=true;body='<div class="wchips">'+Object.keys(t.wishAreas).map(function(w){var on=a.wish.indexOf(w)>=0;return '<button class="wchip'+(on?' on':'')+'" data-act="fWish" data-w="'+w+'" aria-pressed="'+on+'">'+(on?ic('check'):'')+esc(t.wishAreas[w])+'</button>';}).join('')+'</div>';}
  else if(k==='note'){q=t.q_note;hint=t.q_noteHint;opt=true;body='<textarea class="input" name="fnote" rows="3" maxlength="200">'+esc(a.note)+'</textarea>';}
  var pre=(k==='ein'||k==='durch')?'<span class="fpre">'+esc(t.q_genPre)+'</span>':'';
  var ready=!req(k)||a[k]!=null;
  var nav='<div class="fnav">'+(opt?'<button class="btn light" data-act="fSkip">'+esc(t.skip)+'</button>':'<span></span>')+'<button class="btn" data-act="fNext"'+(ready?'':' disabled aria-disabled="true"')+'>'+esc(t.next)+' →</button></div>';
  var gr='';if(F.fb&&F.i>0){gr='<div class="fb" role="status">'+ic('star',true)+'<span>'+esc(F.fb)+'</span></div>';F.fb=null;}else if(F.i===0&&F.d===today()){var hr=new Date().getHours();gr='<div class="fgreet"><strong>'+esc(t.hello[(hr>=5&&hr<11)?0:(hr>=11&&hr<18)?1:2]+(S.name?', '+S.name:''))+'</strong><span>'+esc(t.fgreetSub)+'</span></div>';}
  return head+gr+prog+'<section class="fq">'+pre+'<h1>'+esc(q)+'</h1>'+(hint?'<p class="muted">'+esc(hint)+'</p>':'')+body+'</section>'+nav;
}
function ansText(k){var t=T(),a=F.a,v=a[k];
  if(k==='h')return num(v)+' '+t.h; if(k==='hotD')return String(v);
  if(k==='mood'||k==='energy'||k==='aesS'||k==='skin')return v+'/5 · '+t.scale[v-1];
  if(k==='wish')return v.length?v.map(function(w){return t.wishAreas[w];}).join(', '):t.notGiven;
  if(k==='aesC')return {ok:t.aesOk,mild:t.aesMild,bad:t.aesBad}[v]||'–';
  if(k==='meds'){var ds=askDoses(F.d),n=ds.filter(function(x){return a.meds[x.k];}).length;return n+' / '+ds.length+' '+t.taken;}
  if(k==='kg')return v?num(pnum(v))+' '+t.kg:t.notGiven; if(k==='note')return v?v:t.notGiven;
  return v==null?'–':(v?t.yes:t.no);}
function qLabel(k){var t=T();return {h:t.q_h,through:t.q_through,hotN:t.q_hotN,hotD:t.q_hotD,mood:t.q_mood,energy:t.q_energy,meds:t.q_meds,kg:t.q_kg,ein:t.genEin,durch:t.genDurch,note:t.q_note,gi:t.q_gi,aesC:t.aesCheckL,aesS:t.aesSatL,aesR:t.q_aesR,skin:t.skinL,wish:t.wishL}[k];}
function vSummary(){var t=T();
  return '<section class="fq"><h1>'+esc(t.summary)+'</h1><p class="muted">'+esc(t.summaryHint)+'</p><div class="card"><ul class="list sumlist">'+F.steps.slice(0,-1).map(function(k,i){return '<li><div><div class="m">'+esc(qLabel(k))+'</div><div class="t">'+esc(ansText(k))+'</div></div><button class="btn ghost sm" data-act="fJump" data-i="'+i+'">'+esc(t.change)+'</button></li>';}).join('')+'</ul></div></section><div class="fnav"><button class="btn light" data-act="fPrev">'+esc(t.prev)+'</button><button class="btn" data-act="fSave">'+esc(t.saveAll)+'</button></div>';}
function formSave(){
  var t=T(),d=F.d,a=F.a;
  var has=function(k){return F.steps.indexOf(k)>=0;};
  if(has('h')){S.sleep=S.sleep.filter(function(x){return x.d!==d;});S.sleep.push({d:d,h:a.h,through:!!a.through,hot:!!a.hotN,note:a.note||''});}
  if(has('mood')){S.mood=S.mood.filter(function(x){return x.d!==d;});S.mood.push({d:d,hot:a.hotD,mood:a.mood,energy:a.energy,note:has('h')?'':(a.note||'')});}
  if(has('gi')){S.gi=S.gi.filter(function(x){return x.d!==d;});S.gi.push({d:d,v:!!a.gi});}
  if(has('aesC')){var tc=aesById(a.aesCid);if(tc){tc.chk=tc.chk||{};tc.chk[d]=a.aesC;}}
  if(has('aesS')){var ts=aesById(a.aesSid);if(ts){ts.sat=a.aesS;ts.satAt=d;if(a.aesR!=null)ts.again=!!a.aesR;}}
  if(has('skin')&&a.skin){S.skin=S.skin.filter(function(x){return x.d!==d;});S.skin.push({d:d,v:a.skin});}
  if(has('wish'))S.wish={at:d,areas:a.wish.slice()};
  S.filled[d]=true;
  if(F.steps.indexOf('meds')>=0){S.medLog[d]=S.medLog[d]||{};for(var k in a.meds)S.medLog[d][k]=!!a.meds[k];}
  if(has('kg')){var kg=pnum(a.kg);S.weight=S.weight.filter(function(x){return x.d!==d;});if(kg>=25&&kg<=300)S.weight.push(PM?{d:d,kg:Math.round(kg*10)/10,src:'praxis'}:{d:d,kg:Math.round(kg*10)/10});}
  if(F.steps.indexOf('ein')>=0&&a.ein!=null&&a.durch!=null)S.gen={at:d,ein:!!a.ein,durch:!!a.durch};
  save();var dd=d;F=null;view='done';root.className='app formmode'+(REDUCED?'':' pa-in');lastKey='done';lastFi=-1;
  var isToday=dd===today(),ins=isToday?insight():'';var nb=checkBadges();var nbH=nb.length?'<div class="newbdg">'+nb.map(function(id){var B=t.bdg[id];return '<div class="nb"><span class="bi">'+badgeIc(id)+'</span><div><small>'+esc(t.bdgNew)+'</small><strong>'+esc(B[0])+'</strong><p>'+esc(B[1])+'</p></div></div>';}).join('')+'</div>':'';
  root.innerHTML='<section class="donep">'+(isToday&&MSTONES.indexOf(streak())<0?'<div class="dn-burst" aria-hidden="true">'+[0,1,2,3,4,5,6,7].map(function(k){return '<i style="--a:'+(k*45)+'deg;--dl:'+(k%2?.08:0)+'s">'+FLAME+'</i>';}).join('')+'</div>':'')+'<span class="hc-i big pop">'+ic('check')+'</span><h1>'+esc(isToday?(S.name?t.doneTitleN.replace('{n}',S.name):t.doneTitle):t.doneTitle)+'</h1><p>'+esc(t.doneText.replace('{d}',fdl(dd)))+'</p>'+nbH+(ins?'<div class="insight">'+ic('star',true)+'<span>'+esc(ins)+'</span></div>':'')+streakBadge()+(isToday&&streak()>=1?'<div class="dn-week">'+weekDays().map(function(x){var f=dayDone(x),c=x===today()?'on today':x>today()?'fut':(f?'on':'off');return '<span class="st-d '+c+'"><small>'+esc(fd(x,{weekday:'short'}).replace('.','').slice(0,2))+'</small><i>'+(f?ic('check'):'')+'</i></span>';}).join('')+'</div><p class="dn-next">'+esc(t.doneNext.replace('{n}',streak()+1))+'</p>':'')+'<button class="btn full" data-act="go" data-v="data">'+esc(t.toData)+'</button><button class="btn light full" data-act="go" data-v="fill">'+esc(t.toStart)+'</button>'+(S.remAt?'':'<button class="btn ghost full" data-act="settings">'+ic('bell')+esc(t.remTitle)+'</button>')+'</section>';
  window.scrollTo(0,0);
}

function insight(){var t=T(),I=t.ins,td=today(),wk=addDays(td,-6);
  var sl=asc(S.sleep);
  if(sl.length>=14){var a=avgOf(sl.slice(0,7),'h'),b=avgOf(sl.filter(function(x){return x.d>=wk;}),'h');if(a!=null&&b!=null&&b-a>=.3)return I.sleepUp.replace('{x}',num(b-a));}
  if(hotOn()){var mo=asc(S.mood).filter(function(x){return x.hot!=null;});if(mo.length>=14){var h1=avgOf(mo.slice(0,7),'hot'),h2=avgOf(mo.filter(function(x){return x.d>=wk;}),'hot');if(h1>0&&h2!=null&&(h1-h2)/h1>=.2)return I.hotDown.replace('{p}',Math.round((h1-h2)/h1*100));}}
  var w=asc(S.weight);if(w.length>=2){var dk=w[w.length-1].kg-w[0].kg;if(dk<=-1&&mods().weight)return I.kgDown.replace('{x}',num(Math.abs(dk)));}
  var tot=Object.keys(S.filled||{}).filter(function(d){return S.filled[d];}).length;
  if(tot<=1)return I.first;if(streak()>=3)return I.streak.replace('{n}',streak());return I.gen;}

/* ---------- Waage & Etappen: Weg ins Gleichgewicht ---------- */
function clamp01(x){return Math.max(0,Math.min(1,x));}
function inWin(a,from,to){return a.filter(function(x){return x.d>=from&&x.d<=to;});}
function hotBase(){var mo=asc(S.mood).filter(function(x){return x.hot!=null;});return mo.length>=7?avgOf(mo.slice(0,7),'hot'):null;}
function balanceParts(end){var M=mods(),from=addDays(end,-6),P={};
  if(M.sleep){var sl=inWin(S.sleep,from,end);if(sl.length>=3){var ah=avgOf(sl,'h'),th=sl.filter(function(x){return x.through;}).length/sl.length;P.sleep=clamp01(ah/7)*.6+th*.4;}}
  var mo=inWin(S.mood,from,end).filter(function(x){return x.mood!=null;});
  if(M.mood&&mo.length>=3){P.mood=(clamp01((avgOf(mo,'mood')-1)/3)+clamp01((avgOf(mo,'energy')-1)/3))/2;
    if(hotOn()){var hb=hotBase(),hc=avgOf(mo,'hot');if(hb!=null&&hb>0)P.hot=hc<=.5?1:clamp01((hb-hc)/hb/.5);}}
  var v=['sleep','mood','hot'].filter(function(k){return P[k]!=null;}).map(function(k){return P[k];});
  P.s=v.length?v.reduce(function(a,b){return a+b;},0)/v.length:null;return P;}
function balanceAt(end){return balanceParts(end).s;}
function balanceStart(){var all=Object.keys(S.filled||{}).filter(function(d){return S.filled[d];}).sort();if(all.length<10)return null;return balanceAt(addDays(all[0],6));}
function balAngle(sc){return sc==null?-10:-(1-sc)*16;}
function stonesSVG(x,n,kind){var P=[[-16,93],[-5,93],[6,93],[17,93],[0,85]],h='';for(var i=0;i<n;i++){var px=x+P[i][0],py=P[i][1];h+=kind==='l'?'<circle cx="'+px+'" cy="'+(py-1)+'" r="5.5" class="stone"/>':'<path d="M'+px+' '+(py-8)+' l2 4.6 4.6 2 -4.6 2 -2 4.6 -2 -4.6 -4.6 -2 4.6 -2z" class="leaf"/>';}return h;}
function scaleSVG(sc){var a=balAngle(sc),t=T(),nl=sc==null?3:Math.round((1-sc)*5),nr=sc==null?1:Math.round(sc*5);
  var pan=function(x,lbl,cls,n){return '<g class="sc-pan '+cls+'" style="transform-origin:'+x+'px 52px;transform:rotate('+(-a)+'deg)"><line x1="'+x+'" y1="52" x2="'+(x-27)+'" y2="96"/><line x1="'+x+'" y1="52" x2="'+(x+27)+'" y2="96"/><g class="cargo">'+stonesSVG(x,n,cls)+'</g><path d="M'+(x-36)+' 96 h72 a36 15 0 0 1 -72 0z" class="bowl"/><text x="'+x+'" y="130" text-anchor="middle">'+esc(lbl)+'</text></g>';};
  return '<svg class="scale'+(sc!=null&&sc>=.9?' calm':'')+'" viewBox="0 0 300 156" role="img" aria-label="'+esc(t.balTitle)+'"><defs><linearGradient id="bmG" gradientUnits="userSpaceOnUse" x1="54" y1="0" x2="246" y2="0"><stop offset="0" stop-color="#2E4A70"/><stop offset=".5" stop-color="#1C2E4A"/><stop offset="1" stop-color="#2E4A70"/></linearGradient><radialGradient id="glw"><stop offset="0" stop-color="#E8C77B" stop-opacity=".75"/><stop offset="1" stop-color="#E8C77B" stop-opacity="0"/></radialGradient></defs><ellipse cx="150" cy="146" rx="70" ry="5" class="ground"/><path d="M150 54 L150 140 M116 142 h68" class="post"/><g class="sway"><g class="sc-beam" style="transform-origin:150px 52px;transform:rotate('+a+'deg)"><line x1="54" y1="52" x2="246" y2="52" class="beam"/>'+pan(54,t.balL,'l',nl)+pan(246,t.balR,'r',nr)+'</g></g><circle cx="150" cy="52" r="22" class="glow" fill="url(#glw)"/><circle cx="150" cy="52" r="8" class="pivot"/><path d="M150 38 l3.4 8.6 8.6 3.4 -8.6 3.4 -3.4 8.6 -3.4 -8.6 -8.6 -3.4 8.6 -3.4z" class="pstar"/></svg>';}

/* ---------- Steinturm: Weg ins Gleichgewicht ---------- */
function cairnParts(P){var t=T(),L=[['sleep','sleep',t.tabs.sleep],['mood','mood',t.tabs.mood],['hot','mood',t.hotShort]].filter(function(p){return P[p[0]]!=null;});
  if(!L.length){var M=mods();L=[['sleep','sleep',t.tabs.sleep],['mood','mood',t.tabs.mood]].filter(function(p){return M[p[0]];});if(!L.length)L=[['mood','mood',t.tabs.mood]];}
  return L;}
var STAR={base:130/480,sleep:151/480,mood:178/480,hot:160/480},SW=[176,142,120,104];
/* Lage eines Steins relativ zum Stein darunter: verschoben auf der Woelbung, gekippt um die Auflage */
function stoneTf(i,v,rxLow,hLow){var d=v==null?.65:1-v,dir=i%2?1:-1,dx=d*30*dir,dy=(hLow||30)*.42*Math.pow(dx/(rxLow||70),2)*1.6,rot=d*16*-dir;
  return 'translate('+dx.toFixed(1)+'px,'+dy.toFixed(1)+'px) rotate('+rot.toFixed(1)+'deg)';}
function cairnLay(kinds){var cx=120,L=[],bottom=214;
  kinds.forEach(function(k,i){var w=SW[i],h=w*STAR[k];L.push({k:k,w:w,h:h,x:cx-w/2,y:bottom-h,bot:bottom});bottom=bottom-h+h*.30;});return {cx:cx,L:L};}
function cairnSVG(P){var parts=cairnParts(P),kinds=['base'].concat(parts.map(function(p){return p[0];})),G=cairnLay(kinds),cx=G.cx,L=G.L,sc=P.s;
  var img=function(o,extra){return '<image href="stones/'+o.k+'.webp" x="'+o.x.toFixed(1)+'" y="'+o.y.toFixed(1)+'" width="'+o.w+'" height="'+o.h.toFixed(1)+'" preserveAspectRatio="none"'+(extra||'')+'/>';};
  var h='<ellipse cx="'+cx+'" cy="'+(L[0].bot-3)+'" rx="'+(L[0].w*.5)+'" ry="9" class="ground" filter="url(#cBlur)"/>';
  h+='<g class="stone base">'+img(L[0])+'</g>';
  var open='';parts.forEach(function(p,k){var i=k+1,o=L[i],lo=L[i-1],v=P[p[0]];
    open+='<g class="st" data-k="'+p[0]+'" data-i="'+i+'" data-rx="'+(lo.w/2)+'" data-hl="'+lo.h.toFixed(1)+'" style="transform-origin:'+cx+'px '+(o.bot-2).toFixed(1)+'px;transform:'+stoneTf(i,v,lo.w/2,lo.h)+'">'+
      '<ellipse cx="'+cx+'" cy="'+(o.bot-3).toFixed(1)+'" rx="'+(o.w*.36).toFixed(1)+'" ry="'+(o.h*.13).toFixed(1)+'" class="cao" filter="url(#cAO)"/>'+
      '<g class="stone s-'+p[0]+'" data-act="dtab" data-t="'+p[1]+'">'+img(o)+'</g>';});
  var top=L[L.length-1],ty=top.y-12;
  open+='<g class="ctop"><circle cx="'+cx+'" cy="'+ty+'" r="20" class="glow" fill="url(#cglw)"/><path d="M'+cx+' '+(ty-11)+' l3.3 7.7 7.7 3.3 -7.7 3.3 -3.3 7.7 -3.3 -7.7 -7.7 -3.3 7.7 -3.3z" class="cstar"/></g>';
  h+=open+parts.map(function(){return '</g>';}).join('');
  parts.forEach(function(p,k){var o=L[k+1],v=P[p[0]],y=o.y+o.h*.5;
    h+='<g class="clbl" data-act="dtab" data-t="'+p[1]+'"><circle cx="246" cy="'+y.toFixed(1)+'" r="4" class="cd cd-'+p[0]+'"/><text x="256" y="'+(y+4.5).toFixed(1)+'"><tspan class="cn">'+esc(p[2])+'</tspan><tspan class="cv" dx="6" id="cv-'+p[0]+'">'+(v!=null?Math.round(v*100)+' %':'–')+'</tspan></text></g>';});
  return '<svg class="cairn'+(sc!=null&&sc>=.9?' calm':'')+'" viewBox="0 0 400 226" role="img" aria-label="'+esc(T().balTitle)+'"><defs><filter id="cBlur" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="4"/></filter><filter id="cAO" x="-30%" y="-150%" width="160%" height="400%"><feGaussianBlur stdDeviation="2.4"/></filter><radialGradient id="cglw"><stop offset="0" stop-color="#E8C77B" stop-opacity=".85"/><stop offset="1" stop-color="#E8C77B" stop-opacity="0"/></radialGradient></defs>'+h+'</svg>';}
var BALSER=[];
function balSeries(){var all=Object.keys(S.filled||{}).filter(function(d){return S.filled[d];}).sort(),out=[];
  if(all.length>=7){for(var d=addDays(all[0],6);d<today();d=addDays(d,7))out.push(d);}
  out.push(today());out=out.slice(-26);return out.map(function(d){return {d:d,p:balanceParts(d)};});}
function balLvl(sc){var t=T();return sc==null?t.balNo:sc>=.9?t.bal4:sc>=.7?t.bal3:sc>=.4?t.bal2:t.bal1;}
function balanceCard(){if(!S.badges)checkBadges(true);var t=T();BALSER=balSeries();var n=BALSER.length,cur=BALSER[n-1].p,sc=cur.s,st=n>1?BALSER[0].p.s:null,L=badgeList(),got=L.filter(function(b){return S.badges&&S.badges[b.id];});
  var h='<div class="card balc"><div class="bal-h"><h2>'+esc(t.balTitle2)+'</h2><strong id="balPct">'+(sc!=null?Math.round(sc*100)+'&#8202;%':'–')+'</strong></div><div id="balSvg">'+cairnSVG(cur)+'</div>';
  h+='<p class="bal-l"><span id="balLvl">'+esc(balLvl(sc))+'</span>'+(sc!=null&&st!=null&&sc-st>=.05?' <span class="up" id="balUp">+'+Math.round((sc-st)*100)+' '+esc(t.balSince)+'</span>':'')+'</p>';
  if(n>2)h+='<div class="bal-time"><input type="range" id="balRange" min="0" max="'+(n-1)+'" step="1" value="'+(n-1)+'" aria-label="'+esc(t.balTime)+'"><div class="bt-l"><span>'+esc(t.balStart)+'</span><b id="balWhen">'+esc(t.today)+'</b><span>'+esc(t.today)+'</span></div></div>';
  h+='<button class="bal-et" data-act="badges"><span class="be-s">'+got.slice(0,4).map(function(b){return '<i>'+badgeIc(b.id)+'</i>';}).join('')+'</span><span>'+esc(t.etappen)+' <b>'+got.length+' / '+L.length+'</b></span><em>→</em></button></div>';
  return h;}
function balShow(i){var it=BALSER[i];if(!it)return;var p=it.p,sc=p.s,t=T(),svg=root.querySelector('#balSvg .cairn');if(!svg)return;
  svg.classList.add('live');svg.classList.toggle('calm',sc!=null&&sc>=.9);
  [].forEach.call(svg.querySelectorAll('.st[data-k]'),function(g){var k=g.dataset.k,v=p[k];g.style.transform=stoneTf(+g.dataset.i,v,+g.dataset.rx,+g.dataset.hl);var tv=root.querySelector('#cv-'+k);if(tv)tv.textContent=v!=null?Math.round(v*100)+' %':'–';});
  root.querySelector('#balPct').innerHTML=sc!=null?Math.round(sc*100)+'&#8202;%':'–';root.querySelector('#balLvl').textContent=balLvl(sc);
  var up=root.querySelector('#balUp');if(up)up.style.visibility=i===BALSER.length-1?'visible':'hidden';
  root.querySelector('#balWhen').textContent=i===BALSER.length-1?t.today:t.balWeek.replace('{d}',fd(it.d,{day:'numeric',month:'short'}));}
function sheetBadges(){var t=T(),L=badgeList();
  openSheet('<h2>'+esc(t.etappen)+'</h2><p class="sub">'+esc(t.etHint)+'</p><div class="badges">'+L.map(function(b){var g=S.badges&&S.badges[b.id],B=t.bdg[b.id];return '<button type="button" class="bdg'+(g?' got':'')+(b.top?' top':'')+'" data-sact="b:'+b.id+'"><span class="bi">'+badgeIc(b.id)+'</span><small>'+esc(B[0])+'</small></button>';}).join('')+'</div><p class="bdg-info" id="bdgInfo">'+esc(t.etTap)+'</p><div class="actions"><button type="button" class="btn full" data-close>'+esc(t.close)+'</button></div>',function(){},
  function(a,f){if(a.indexOf('b:')!==0)return;var id=a.slice(2),bb=BADGES.filter(function(x){return x.id===id;})[0],B=t.bdg[id],gd=S.badges&&S.badges[id];
    [].forEach.call(f.querySelectorAll('.bdg'),function(x){x.classList.toggle('sel',x.dataset.sact===a);});
    f.querySelector('#bdgInfo').innerHTML='<strong>'+esc(B[0])+'</strong> – '+esc(B[1])+' <em>'+esc(gd?t.bdgGot.replace('{d}',fd(gd,{day:'numeric',month:'short'})):(bb.pr?t.etOpen+' '+bb.pr():t.etOpen))+'</em>';});}
var BADGES=[
  {id:'start',m:null,ok:function(){return Object.keys(S.filled||{}).length>=1;}},
  {id:'week',m:null,ok:function(){return Math.max(bestStreak(),streak())>=7;},pr:function(){return Math.max(bestStreak(),streak())+'/7';}},
  {id:'month',m:null,ok:function(){return Math.max(bestStreak(),streak())>=30;},pr:function(){return Math.max(bestStreak(),streak())+'/30';}},
  {id:'sleep7',m:'sleep',ok:function(){var sl=inWin(S.sleep,addDays(today(),-6),today());return sl.length>=5&&avgOf(sl,'h')>=7;}},
  {id:'calm',m:'sleep',ok:function(){return inWin(S.sleep,addDays(today(),-6),today()).filter(function(x){return x.through;}).length>=5;},pr:function(){return inWin(S.sleep,addDays(today(),-6),today()).filter(function(x){return x.through;}).length+'/5';}},
  {id:'hot25',m:'mood',hot:1,ok:function(){var hb=hotBase(),mo=inWin(S.mood,addDays(today(),-6),today());return hb>0&&mo.length>=4&&(hb-avgOf(mo,'hot'))/hb>=.25;}},
  {id:'hot50',m:'mood',hot:1,ok:function(){var hb=hotBase(),mo=inWin(S.mood,addDays(today(),-6),today());return hb>0&&mo.length>=4&&(hb-avgOf(mo,'hot'))/hb>=.5;}},
  {id:'mood4',m:'mood',ok:function(){var mo=inWin(S.mood,addDays(today(),-6),today()).filter(function(x){return x.mood!=null;});return mo.length>=5&&avgOf(mo,'mood')>=4;}},
  {id:'energy4',m:'mood',ok:function(){var mo=inWin(S.mood,addDays(today(),-6),today()).filter(function(x){return x.energy!=null;});return mo.length>=5&&avgOf(mo,'energy')>=4;}},
  {id:'meds90',m:'meds',ok:function(){var tot=0,ok=0;for(var i=0;i<28;i++){var d=addDays(today(),-i);doses(d).forEach(function(x){tot++;if(takenOn(d,x.k))ok++;});}return tot>=20&&ok/tot>=.9;}},
  {id:'kg5',m:'weight',ok:function(){var w=asc(S.weight);return w.length>=2&&(w[0].kg-w[w.length-1].kg)/w[0].kg>=.05;}},
  {id:'balance',m:null,top:1,ok:function(){var b=balanceAt(today());return b!=null&&b>=.9;}}];
function badgeList(){var M=mods();return BADGES.filter(function(b){return (!b.m||M[b.m])&&(!b.hot||hotOn());});}
function checkBadges(silent){if(!S.mods)return [];var first=!S.badges;S.badges=S.badges||{};var nw=[];
  badgeList().forEach(function(b){if(!S.badges[b.id]){var ok=false;try{ok=b.ok();}catch(e){}if(ok){S.badges[b.id]=today();nw.push(b.id);}}});
  if(nw.length)save();return (silent||first)?[]:nw;}
function badgeIc(id){return id==='balance'?'<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="19" rx="8" ry="2.6"/><ellipse cx="12" cy="14.2" rx="6.2" ry="2.2"/><ellipse cx="12" cy="10" rx="4.6" ry="1.9"/><path d="M12 2.2l1.1 2.5 2.5 1.1-2.5 1.1-1.1 2.5-1.1-2.5-2.5-1.1 2.5-1.1z"/></svg>':FLAME;}
function vData(){
  var t=T(),M=mods();
  if(!dataTab||dataTab==='over'||!(M[dataTab]))return vHub();
  var name=t.tabs[dataTab];
  var h='<button class="backlink" data-act="dtab" data-t="">'+ic('back')+esc(t.data)+'</button>';
  h+='<div class="pagehead"><h1>'+esc(name)+'</h1></div>'+(dataTab==='meds'||dataTab==='aes'?'':rangeBar());
  var inner=({sleep:vSleep,weight:vWeight,meds:vMeds,mood:vMood,aes:vAes}[dataTab])();
  inner=inner.replace(/^<div class="pagehead"><h1>[^<]*<\/h1>(<p>[^<]*<\/p>)?<\/div>/,function(m,p1){return p1?'<p class="muted" style="margin:0 2px 12px">'+p1.replace(/<\/?p>/g,'')+'</p>':'';});
  return h+inner;
}

/* ---------- Ereignisse ---------- */
root.addEventListener('click',function(e){
  var b=e.target.closest('[data-act]');if(!b)return;var a=b.dataset.act,t=T();
  if(a==='go'){if(b.dataset.v==='data'&&view!=='report')dataTab=null;setView(b.dataset.v);}
  else if(a==='settings')setView('settings');
  else if(a==='codeApply'){var r=parseCode((document.getElementById('codeIn')||{}).value);if(!r){toast(t.codeBad);return;}var oh=hotOn();S.hot=r.hot;var ch=applySetup(r.mods,r.glp1)||(!!S.mods&&oh!==hotOn());toast(t.codeOk);afterSetup(ch);}
  else if(a==='setupDone'){var wsel=root.querySelector('input[name=who]:checked');if(!wsel){var e0=root.querySelector('#setupErr');e0.textContent=T().setupNeedWho;e0.hidden=false;root.querySelector('.about').scrollIntoView({behavior:'smooth',block:'center'});return;}var oldWho=S.who;S.who=wsel.value;var ag=parseInt((root.querySelector('#ageIn')||{}).value,10);S.age=(ag>=18&&ag<=99)?ag:null;var whoCh=!!oldWho&&oldWho!==S.who;var hcb=root.querySelector('input[name=hot]'),oldHot=hotOn();S.hot=hcb?hcb.checked:null;whoCh=whoCh||(!!S.mods&&oldHot!==hotOn());var m={};MODS.forEach(function(k){var c=root.querySelector('input[name=mod][value='+k+']');m[k]=!!(c&&c.checked);});if(!MODS.some(function(k){return m[k];})){var e1=root.querySelector('#setupErr');e1.textContent=T().setupNeedOne;e1.hidden=false;return;}var g=root.querySelector('input[name=glp1]'),ma=root.querySelector('input[name=medask]');var oldAsk=S.medAsk!==false;S.medAsk=!ma||ma.checked;var first=!S.mods;var ch=applySetup(m,g&&g.checked)||(oldAsk!==S.medAsk&&!!S.mods)||whoCh;if(whoCh&&S.filled)delete S.filled[today()];save();toast(ch?t.progNew:t.saved);afterSetup(ch||(first&&!dayDone(today())));}
  else if(a==='pmStart')sheetPin();
  else if(a==='pmEnd'){PM=false;view='fill';render();toast(T().pmEnded);}
  else if(a==='pmAppt')sheetAppt();
  else if(a==='pmNote')sheetPNote();
  else if(a==='delAppt'){S.appts=S.appts.filter(function(x){return x.id!==b.dataset.id;});save();render();}
  else if(a==='fWish'){var w=b.dataset.w,ix=F.a.wish.indexOf(w);if(ix>=0)F.a.wish.splice(ix,1);else F.a.wish.push(w);render();}
  else if(a==='rng'){RANGE=+b.dataset.v;render();}
  else if(a==='cal')sheetCal();
  else if(a==='pnoteHide'){if(S.pnote){S.pnote.hidden=true;save();render();toast(T().pnoteHidden);}}
  else if(a==='over'){dataTab=null;setView('data');window.scrollTo(0,0);}
  else if(a==='jMore'){jOpen=!jOpen;render();}
  else if(a==='big'){S.big=b.dataset.b==='1';save();render();}
  else if(a==='autoF'){S.autoForm=b.dataset.b==='1';save();render();}
  else if(a==='ics')downloadIcs((document.getElementById('remT')||{}).value||'20:00');
  else if(a==='addAes')sheetAes();
  else if(a==='editAes')sheetAes(b.dataset.id);
  else if(a==='book'){window.open(PRAXIS.book,'_blank','noopener');}
  else if(a==='startForm')startForm(b.dataset.d||today());
  else if(a==='otherDay')sheetDay();
  else if(a==='dtab'){var toT=b.dataset.t||null,fromT=dataTab;if(toT&&!fromT)xfHubY=window.scrollY;var go=function(){DC={sleep:0,mood:0,weight:0};dataTab=toT;render();window.scrollTo(0,(!toT&&fromT)?xfHubY:0);};
    if(!REDUCED&&toT&&b.classList.contains('hubt'))xfExpand(b,go);
    else{go();if(!REDUCED&&!toT&&fromT)xfCollapse(fromT);}}
  else if(a==='fNext')formNext();
  else if(a==='fPrev')formPrev();
  else if(a==='fSkip')formSkip();
  else if(a==='fAns'){if(Date.now()<navLock)return;if(navigator.vibrate){try{navigator.vibrate(8);}catch(err){}}formAnswer(b.dataset.k,b.dataset.val);}
  else if(a==='fMed'){var mk=b.dataset.k;F.a.meds[mk]=!F.a.meds[mk];render();}
  else if(a==='fJump'){F.i=+b.dataset.i;render();window.scrollTo(0,0);}
  else if(a==='fSave')formSave();
  else if(a==='fCancel'){F=null;setView('fill');}
  else if(a==='fStep'){var inp=root.querySelector('input[name="'+b.dataset.for+'"]'),v=Math.min(+b.dataset.max,Math.max(+b.dataset.min,Math.round((+inp.value+(+b.dataset.step))*10)/10));inp.value=v;F.a[b.dataset.for]=v;root.querySelector('output[name="'+b.dataset.for+'"]').textContent=num(v,b.dataset.dec==='0'?0:1)+(b.dataset.u||'');}
  else if(a==='badges')sheetBadges();
  else if(a==='bdg'){var bb=BADGES.filter(function(x){return x.id===b.dataset.id;})[0],BT=T().bdg[bb.id],gd=S.badges&&S.badges[bb.id];toast(BT[0]+' – '+(gd?T().bdgGot.replace('{d}',fd(gd,{day:'numeric',month:'short'})):BT[1]+(bb.pr?' ('+bb.pr()+')':'')));}
  else if(a==='dcNav'){var kk=b.dataset.k;DC[kk]=Math.min(0,(DC[kk]||0)+(+b.dataset.dir));render();}
  else if(a==='addSleep')sheetSleep();
  else if(a==='editSleep')sheetSleep(b.dataset.d);
  else if(a==='gen')sheetGen();
  else if(a==='addWeight')sheetWeight();
  else if(a==='editWeight')sheetWeight(b.dataset.d);
  else if(a==='goal')sheetGoal();
  else if(a==='addMed')sheetMed();
  else if(a==='editMed')sheetMed(b.dataset.id);
  else if(a==='addMood')sheetMood();
  else if(a==='editMood')sheetMood(b.dataset.d);
  else if(a==='take'){var d=today(),k=b.dataset.k;S.medLog[d]=S.medLog[d]||{};S.medLog[d][k]=!S.medLog[d][k];save();var y=window.scrollY;render();window.scrollTo(0,y);}
  else if(a==='lang'){S.lang=b.dataset.l;save();render();}
  else if(a==='export')exportData();
  else if(a==='demo')confirmSheet(t.demoHint,t.demo,demoData);
  else if(a==='wipe')confirmSheet(t.wipeQ,t.wipe,function(){var l=S.lang;S=blank();S.lang=l;save();setView('setup');toast(t.wiped);});
  else if(a==='print'){try{window.print();}catch(err){}}
  else if(a==='shareRep')shareReport();
  else if(a==='install'&&deferredPrompt){deferredPrompt.prompt();deferredPrompt.userChoice.then(function(){deferredPrompt=null;render();});}
  else if(a==='hideInstall'){installHidden=true;try{sessionStorage.setItem('pa-ih','1');}catch(err){}render();}
});
/* v26: Im Fragebogen nach rechts wischen = zurück (folgt dem Finger) */
var fsw=null;
root.addEventListener('touchstart',function(e){fsw=null;if(view!=='form'||!F||e.touches.length!==1)return;var t=e.touches[0];
  if(t.clientX<24||e.target.closest('input,textarea,select,.chart'))return;fsw={x:t.clientX,y:t.clientY,on:false,dx:0,v:0,lx:t.clientX,lt:Date.now()};},{passive:true});
root.addEventListener('touchmove',function(e){if(!fsw)return;var t=e.touches[0],dx=t.clientX-fsw.x,dy=t.clientY-fsw.y;
  if(!fsw.on){if(Math.abs(dx)<10&&Math.abs(dy)<10)return;if(dx>0&&Math.abs(dx)>1.3*Math.abs(dy)&&Date.now()>=navLock){fsw.on=true;fsw.x=t.clientX;}else{fsw=null;return;}}
  if(e.cancelable)e.preventDefault();var d=Math.max(0,t.clientX-fsw.x);fsw.dx=d;var now=Date.now();if(now>fsw.lt){fsw.v=(t.clientX-fsw.lx)/(now-fsw.lt);fsw.lx=t.clientX;fsw.lt=now;}
  var q=root.querySelector('.fq');if(q){q.style.transition='none';q.style.transform='translate3d('+(d*.6).toFixed(1)+'px,0,0)';q.style.opacity=String(Math.max(.5,1-d/600));}},{passive:false});
function fswEnd(){if(!fsw)return;var g=fsw;fsw=null;if(!g.on)return;var q=root.querySelector('.fq');
  if((g.dx>80||(g.v>.45&&g.dx>35))&&Date.now()>=navLock){formPrev();return;}
  if(q){q.style.transition='transform .22s cubic-bezier(.2,.9,.25,1),opacity .22s';q.style.transform='';q.style.opacity='';setTimeout(function(){q.style.transition='';},240);}}
root.addEventListener('touchend',fswEnd);root.addEventListener('touchcancel',fswEnd);
root.addEventListener('input',function(e){if(!F)return;if(e.target.name==='fkg')F.a.kg=e.target.value;if(e.target.name==='fnote')F.a.note=e.target.value;});
document.addEventListener('input',function(e){if(e.target&&e.target.id==='balRange'){balShow(+e.target.value);try{if(navigator.vibrate)navigator.vibrate(4);}catch(x){}}});
root.addEventListener('change',function(e){
  if(e.target.id==='importIn'&&e.target.files[0])importData(e.target.files[0]);
  if(e.target.name==='hot')e.target.dataset.touched='1';
  if(e.target.name==='who'){var hc=root.querySelector('input[name=hot]');if(hc&&!hc.dataset.touched)hc.checked=hotDefault(e.target.value);}
  if(e.target.id==='nameIn'){S.name=e.target.value.trim();save();toast(T().saved);}
});

/* ---------- Start ---------- */
try{if(!S.badges)checkBadges(true);}catch(e){}
/* Schnellstart wie ein Widget: Tipp aufs App-Symbol oeffnet direkt den heutigen Fragebogen */
function canAutoForm(){return !!(S.mods&&S.lang&&!PM&&!F&&!dayDone(today()));}
var wantForm=/[?&]start=form\b/.test(location.search)||location.hash==='#fragebogen',wasUpd=false;
try{wasUpd=!!sessionStorage.getItem('pa-upd');}catch(e){}
if(wantForm&&history.replaceState)history.replaceState(null,'',location.pathname);
if(canAutoForm()&&!wasUpd&&(wantForm||S.autoForm!==false))startForm(today());else render();
var hiddenAt=0;
document.addEventListener('visibilitychange',function(){
  if(document.visibilityState==='hidden'){hiddenAt=Date.now();return;}
  if(hiddenAt&&Date.now()-hiddenAt>20*60000&&S.autoForm!==false&&view!=='form'&&!document.querySelector('.sheet[open],dialog[open]')&&canAutoForm())startForm(today());
});
if('serviceWorker' in navigator&&location.protocol==='https:'){navigator.serviceWorker.register('sw.js').then(function(reg){
    var chk=function(){if(document.visibilityState==='visible')reg.update().catch(function(){});};
    setInterval(chk,15000);document.addEventListener('visibilitychange',chk);window.addEventListener('focus',chk);
  }).catch(function(){});
  var hadCtl=!!navigator.serviceWorker.controller,pendingReload=false;
  var doReload=function(){if(F){pendingReload=true;return;}try{sessionStorage.setItem('pa-upd','1');}catch(e){}location.reload();};
  navigator.serviceWorker.addEventListener('controllerchange',function(){if(hadCtl)doReload();hadCtl=true;});
  setInterval(function(){if(pendingReload&&!F)doReload();},2000);
  try{if(sessionStorage.getItem('pa-upd')){sessionStorage.removeItem('pa-upd');setTimeout(function(){var t=document.createElement('div');t.className='updtoast';t.textContent=(S.lang==='en'?'App updated':S.lang==='tr'?'Uygulama güncellendi':'App aktualisiert');document.body.appendChild(t);setTimeout(function(){t.remove();},2600);},400);}}catch(e){}}
})();

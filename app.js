(()=>{
const R=window.MOONIE_ROUTINES||[],A=window.MOONIE_ASANAS||{};
const $=id=>document.getElementById(id);
const F={relajada:'🌿 Relajada','en-calma':'🕯️ En calma','con-energia':'☀️ Con energía',liberada:'🌬️ Liberada',conectada:'🌙 Conectada',dormir:'😴 Dormir',fuerte:'🔥 Fuerte',concentrada:'🎯 Concentrada',flexible:'🌸 Flexible',equilibrio:'🌳 En equilibrio'};
const STYLE_ORDER=['Hatha','Yin','Restaurativo','Vinyasa','Movilidad','Yin restaurativo','Hatha suave','Hatha movilidad','Hatha + equilibrio','Yin + meditación'];
const STYLE_META={
 Hatha:['☀️','Fuerza, movilidad y presencia'],Yin:['🌙','Permanencia, escucha y profundidad'],Restaurativo:['🕯️','Descanso y regulación'],Vinyasa:['🌊','Movimiento unido a la respiración'],Movilidad:['🌿','Espacio y movimiento consciente'],
 'Yin restaurativo':['🌙','Calma profunda y liberación'],'Hatha suave':['☀️','Hatha amable y accesible'],'Hatha movilidad':['🌿','Movilidad activa'],'Hatha + equilibrio':['🌳','Estabilidad y concentración'],'Yin + meditación':['🌌','Introspección y silencio']
};
const STYLE_INFO={
 Hatha:{origin:'Tradición del yoga postural',what:'Una práctica completa que combina posturas, respiración, estabilidad y atención. El ritmo suele ser pausado y didáctico, dejando tiempo para comprender cada asana.',feel:'Presente, estable y despierta.',benefits:['Fuerza y movilidad global','Conciencia corporal','Equilibrio entre esfuerzo y descanso'],suitable:'Ideal si quieres aprender bases del yoga, ganar fuerza funcional y practicar con atención.',care:'No necesitas llegar al máximo de una postura. Prioriza una respiración estable y una alineación cómoda.'},
 Yin:{origin:'Práctica contemporánea inspirada en tradiciones taoístas y del yoga',what:'Posturas mayoritariamente pasivas mantenidas durante varios minutos. La intención es crear espacio, observar sensaciones y cultivar quietud, sin forzar.',feel:'Lenta, introspectiva y profunda.',benefits:['Movilidad pasiva y tolerancia al estiramiento','Relajación','Atención plena'],suitable:'Ideal para días de poca energía, trabajo de movilidad suave o momentos de introspección.',care:'La sensación debe ser intensa pero sostenible, nunca dolorosa. Usa soportes cuando los necesites.'},
 Restaurativo:{origin:'Yoga restaurativo moderno',what:'Utiliza soportes para colocar el cuerpo de forma cómoda y permitir que el esfuerzo disminuya. La práctica prioriza descanso, respiración y presencia.',feel:'Sostenida, segura y reparadora.',benefits:['Descanso profundo','Regulación de la respiración','Disminución de tensión'],suitable:'Ideal para recuperar energía y para prácticas suaves.',care:'Ajusta cada soporte para que puedas respirar sin esfuerzo y salir de la postura lentamente.'},
 Vinyasa:{origin:'Tradición moderna del yoga dinámico',what:'Une movimiento y respiración en secuencias fluidas. Las transiciones forman parte de la práctica y el ritmo puede ser variable.',feel:'Fluida, activa y rítmica.',benefits:['Coordinación','Resistencia','Movilidad dinámica'],suitable:'Ideal si disfrutas moverte y enlazar posturas con la respiración.',care:'Reduce el ritmo si la respiración se vuelve entrecortada o pierdes control.'},
 Movilidad:{origin:'Enfoque contemporáneo de movilidad consciente',what:'Combina movimientos articulares, control motor y posturas de yoga para explorar rangos de movimiento de manera progresiva.',feel:'Exploratoria, libre y corporal.',benefits:['Rango de movimiento','Control articular','Calentamiento consciente'],suitable:'Ideal para empezar el día o complementar otras prácticas.',care:'Explora el rango sin rebotes ni dolor; la calidad del movimiento importa más que la amplitud.'},
 'Yin restaurativo':{origin:'Enfoque híbrido de Yin y yoga restaurativo',what:'Combina permanencias suaves con apoyos y momentos de descanso. Busca profundidad sin convertir la intensidad en un objetivo.',feel:'Muy calmante y contenida.',benefits:['Liberación de tensión','Descanso','Conciencia de sensaciones'],suitable:'Ideal para tardes y noches o cuando necesitas bajar revoluciones.',care:'Sal de las posturas lentamente y deja unos segundos para notar la respuesta del cuerpo.'},
 'Hatha suave':{origin:'Adaptación amable del Hatha',what:'Secuencias accesibles, con transiciones sencillas y más espacio para respirar. Mantiene el enfoque de presencia del Hatha con menor demanda física.',feel:'Amable, estable y acogedora.',benefits:['Movilidad suave','Fuerza básica','Confianza en la práctica'],suitable:'Ideal para principiantes o días en los que quieres moverte sin exigirte.',care:'Puedes reducir la amplitud o apoyar rodillas y manos cuando lo necesites.'},
 'Hatha movilidad':{origin:'Hatha con énfasis en movilidad',what:'Integra posturas de Hatha con movimientos preparatorios para explorar caderas, columna, hombros y piernas.',feel:'Desbloqueante y activa.',benefits:['Movilidad activa','Coordinación','Preparación corporal'],suitable:'Ideal como práctica corta de movilidad o calentamiento.',care:'No conviertas la movilidad en un estiramiento agresivo; trabaja con control.'},
 'Hatha + equilibrio':{origin:'Hatha con trabajo de equilibrio',what:'Utiliza posturas estables y equilibrios para entrenar atención, propiocepción y control corporal.',feel:'Enraizada y concentrada.',benefits:['Equilibrio','Estabilidad','Concentración'],suitable:'Ideal si quieres trabajar presencia y control.',care:'Practica cerca de una pared si el equilibrio es nuevo para ti.'},
 'Yin + meditación':{origin:'Práctica contemplativa híbrida',what:'Combina posturas Yin con pausas de observación y meditación. El objetivo es crear un espacio tranquilo para mirar hacia dentro.',feel:'Silenciosa, lunar e introspectiva.',benefits:['Atención plena','Relajación','Conexión con las sensaciones'],suitable:'Ideal para la noche o para cerrar el día con calma.',care:'Mantén una postura meditativa cómoda; cambia de posición si aparece dolor o adormecimiento intenso.'}
};
let cur=null,idx=0,left=0,total=0,interval=null,activeStyle='all';
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function fmt(s){s=Math.max(0,Math.round(s));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function pdata(id){return A[id]||{name:id,cat:'Práctica',instruction:'Muévete lentamente y adapta la postura a tu cuerpo.',breath:'Respira de forma natural y cómoda.',transition:'Sal con calma y prepara la siguiente postura.'}}
function styleKey(r){return r.style||'Otros'}
function renderFeelings(){
 $('feelings').innerHTML=Object.entries(F).map(([k,v])=>`<button class="chip" data-feel="${k}">${v}</button>`).join('');
 $('feelings').onclick=e=>{let b=e.target.closest('[data-feel]');if(!b)return;document.querySelectorAll('#feelings .chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');let m=R.filter(r=>r.feelings.includes(b.dataset.feel)).sort((a,b)=>a.duration-b.duration).slice(0,3);$('recommendations').innerHTML=m.map(card).join('');$('recommended').classList.remove('hidden');bind($('recommendations'));$('recommended').scrollIntoView({behavior:'smooth'})}
}
function card(r){return`<article class="routine"><button data-open="${r.id}">Empezar</button><h3>${r.number}. ${esc(r.name)}</h3><p>${esc(r.description)}</p><div class="tags"><span class="tag">⏱ ${r.duration} min</span><span class="tag">${esc(r.style)}</span><span class="tag">${esc(r.level)}</span></div></article>`}
function bind(c){c.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>open(b.dataset.open))}
function renderStyleFilters(){
 const styles=[...new Set(R.map(styleKey))].sort((a,b)=>{let ia=STYLE_ORDER.indexOf(a),ib=STYLE_ORDER.indexOf(b);return (ia<0?99:ia)-(ib<0?99:ib)});
 $('styleFilters').innerHTML=`<button class="chip active" data-style="all">✨ Todos <span>${R.length}</span></button>`+styles.map(s=>`<button class="chip" data-style="${esc(s)}">${(STYLE_META[s]||['🧘🏻‍♀️',''])[0]} ${esc(s)} <span>${R.filter(r=>styleKey(r)===s).length}</span></button>`).join('');
 $('styleFilters').onclick=e=>{let b=e.target.closest('[data-style]');if(!b)return;activeStyle=b.dataset.style;document.querySelectorAll('#styleFilters .chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderGroups(activeStyle)};
}
function renderGroups(filter='all'){
 const pool=filter==='all'?R:R.filter(r=>styleKey(r)===filter);
 const groups={};pool.forEach(r=>(groups[styleKey(r)]??=[]).push(r));
 const keys=Object.keys(groups).sort((a,b)=>{let ia=STYLE_ORDER.indexOf(a),ib=STYLE_ORDER.indexOf(b);return (ia<0?99:ia)-(ib<0?99:ib)});
 $('count').textContent=filter==='all'?`${R.length} prácticas · ${keys.length} estilos`:`${pool.length} prácticas`;
 $('routines').innerHTML=keys.map(s=>{let meta=STYLE_META[s]||['🧘🏻‍♀️','Práctica de yoga'];return `<section class="styleSection"><div class="styleHead"><div><span class="styleIcon">${meta[0]}</span><div><button class="styleTitle" data-style-open="${esc(s)}">${esc(s)} ↗</button><p>${esc(meta[1])}</p></div></div><span class="styleCount">${groups[s].length}</span></div><div class="list">${groups[s].map(card).join('')}</div></section>`}).join('');
 bind($('routines')); $('routines').querySelectorAll('[data-style-open]').forEach(b=>b.onclick=()=>openStyle(b.dataset.styleOpen));
}
function render(){renderStyleFilters();renderGroups(activeStyle)}
function openStyle(style){
 const info=STYLE_INFO[style]||{origin:'Moonie Yoga',what:'Una colección de prácticas para explorar este enfoque.',feel:'A tu ritmo.',benefits:['Movimiento consciente'],suitable:'Elige la práctica que mejor encaje contigo.',care:'Escucha tu cuerpo y adapta las posturas.'};
 const meta=STYLE_META[style]||['🧘🏻‍♀️','Práctica de yoga'];
 const rs=R.filter(r=>styleKey(r)===style);
 $('home').classList.remove('active');$('practice').classList.remove('active');$('styleDetail').classList.add('active');
 $('styleDetailContent').innerHTML=`<div class="styleHero"><div class="styleHeroIcon">${meta[0]}</div><small>ESTILO DE YOGA</small><h1>${esc(style)}</h1><p>${esc(info.origin)}</p></div><div class="styleIntro card"><h2>¿Qué encontrarás aquí?</h2><p>${esc(info.what)}</p><div class="styleFeeling">${meta[0]} ${esc(info.feel)}</div></div><div class="styleGrid"><div class="card"><h3>✨ Beneficios</h3><ul>${info.benefits.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="card"><h3>🌙 ¿Para quién?</h3><p>${esc(info.suitable)}</p></div><div class="card"><h3>🫶 Práctica segura</h3><p>${esc(info.care)}</p></div></div><div class="title"><h2>Prácticas de ${esc(style)}</h2><small>${rs.length} disponibles</small></div><div class="list">${rs.map(card).join('')}</div>`;
 bind($('styleDetailContent'));scrollTo(0,0);
}
function closeStyle(){ $('styleDetail').classList.remove('active'); $('home').classList.add('active'); scrollTo(0,0); }
function open(id){cur=R.find(r=>r.id===id);if(!cur)return;idx=0;$('home').classList.remove('active');$('practice').classList.add('active');$('header').innerHTML=`<div class="practiceHead"><h1>${esc(cur.name)}</h1><p>${esc(cur.description)}</p><div class="meta"><span>⏱ ${cur.duration} min</span><span>${esc(cur.style)}</span><span>${esc(cur.level)}</span></div></div>`;load(0);scrollTo(0,0)}
function load(i){stop();idx=Math.max(0,Math.min(i,cur.poses.length-1));let p=pdata(cur.poses[idx]);total=Math.max(30,Math.round(cur.duration*60/cur.poses.length));left=total;$('poseNo').textContent=`Postura ${idx+1} de ${cur.poses.length} · ${p.cat}`;$('poseName').textContent=p.name;$('phase').textContent=idx<Math.max(2,cur.poses.length*.2)?'Llegada y calentamiento':idx<cur.poses.length*.6?'Trabajo principal':idx===cur.poses.length-1?'Cierre':'Compensación';$('duration').textContent='⏱ '+fmt(total);$('instruction').textContent=p.instruction;$('breath').textContent=p.breath;$('transition').textContent=p.transition;ui()}
function ui(){$('clock').textContent=fmt(left);$('bar').style.width=((total-left)/total*100)+'%';$('play').textContent=interval?'Ⅱ':'▶'}
function start(){if(interval||left<=0)return;interval=setInterval(()=>{left--;ui();if(left<=0){stop();if(idx<cur.poses.length-1)setTimeout(()=>load(idx+1),350)}},1000);ui()}
function stop(){if(interval){clearInterval(interval);interval=null}ui()}
function reset(){load(idx)}
function home(){stop();$('practice').classList.remove('active');$('home').classList.add('active');scrollTo(0,0)}
$('play').onclick=()=>interval?stop():start();$('prev').onclick=()=>{if(idx>0)load(idx-1)};$('next').onclick=()=>{if(idx<cur.poses.length-1)load(idx+1)};$('reset').onclick=reset;$('back').onclick=home;$('styleBack').onclick=closeStyle;$('homeBtn').onclick=home;$('finish').onclick=()=>{stop();alert('Práctica terminada ✨ Tómate unos segundos para notar cómo estás.');home()};
document.onkeydown=e=>{if(!$('practice').classList.contains('active'))return;if(e.code==='Space'){e.preventDefault();interval?stop():start()}if(e.key==='ArrowRight')$('next').click();if(e.key==='ArrowLeft')$('prev').click();if(e.key.toLowerCase()==='r')reset()};
renderFeelings();render();
})();

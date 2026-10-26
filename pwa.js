(()=>{let prompt=null;const button=document.getElementById('install'),help=document.getElementById('installHelp');
const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
if(standalone())help.textContent='האפליקציה פתוחה בחלון עצמאי. להפעלת מדידה לחצו על הפעלת חיישנים.';
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();prompt=event;if(!standalone())button.hidden=false});
button.addEventListener('click',async()=>{if(!prompt)return;const current=prompt;prompt=null;button.hidden=true;try{await current.prompt();await current.userChoice}catch{help.textContent='אפשר להתקין דרך תפריט Chrome: ⋮ ← הוספה למסך הבית ← התקנה.'}});
window.addEventListener('appinstalled',()=>{prompt=null;button.hidden=true;help.textContent='ההתקנה הושלמה. פתחו את ״קו ישר״ מהסמל במסך הבית.'});
if('serviceWorker' in navigator&&window.isSecureContext){window.addEventListener('load',async()=>{try{await navigator.serviceWorker.register('./sw.js',{scope:'./'});await navigator.serviceWorker.ready;help.textContent+=' הכלים נשמרו לשימוש ללא אינטרנט.'}catch{help.textContent+=' השמירה לשימוש ללא אינטרנט לא הושלמה. נסו לרענן עם חיבור פעיל.'}})}
})();

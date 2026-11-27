/* اتصال سريع — English layer. Arabic stays the source; when English is on, the screen text is translated. */
(function(){
  let lang=null;
  try{lang=localStorage.getItem('sd-lang')}catch(e){}
  if(lang!=='ar'&&lang!=='en')lang=/^ar/i.test(navigator.language||'ar')?'ar':'en';
  window.LANG=lang;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='en'?'ltr':'rtl';
  window.setLang=l=>{try{localStorage.setItem('sd-lang',l)}catch(e){}location.reload()};
  window.L=(ar,en)=>lang==='en'?en:ar;
})();

const I18N={
  'اتصال سريع':'Speed Dial','المفضلة':'Favorites','العائلة':'Family','الأصدقاء':'Friends','العمل':'Work','الأقارب':'Relatives','أخرى':'Other','الجيران':'Neighbors','خدمات ضرورية':'Essential services',
  'اسم':'name','أسماء':'names','إضافة':'Add','تعديل':'Edit','تم':'Done','مسح':'Clear','تأكيد المسح':'Confirm clear','الإعدادات':'Settings',
  'تغيير اسم الصفحة':'Rename page','إخفاء الأسماء':'Hide names','إعادة الاتصال':'Recent',
  'آخر من تواصلت معهم يظهرون هنا للاتصال بضغطة وحدة':'People you contacted recently appear here for one-tap calling',
  '☁️ احفظ نسخة من أسماءك في Google Drive — اضغط هنا':'☁️ Back up your names to Google Drive — tap here',
  'الأسماء الموجودة أمثلة — اضغط «تعديل» لتغييرها أو حذفها':'These names are examples — tap “Edit” to change or delete them',
  'الصفحة فارغة — اضغط + لإضافة أول اسم':'This page is empty — tap + to add the first name',
  'اتصال':'Call','واتساب':'WhatsApp','رسالة':'Message','فيسبوك':'Facebook','تويتر X':'X (Twitter)','انستقرام':'Instagram','تيك توك':'TikTok','سناب':'Snapchat','سناب شات':'Snapchat',
  'بدون رقم':'No number','نسخ الرقم':'Copy number','تم نسخ الرقم':'Number copied','لا يوجد رقم':'No number',
  'اسم جديد':'New name','تعديل الاسم':'Edit name','اختيار صورة':'Choose photo','🖼️ صورة من الاستوديو':'🖼️ Photo from library','حذف الصورة':'Remove photo',
  'اختيار من جهات الاتصال':'Pick from contacts','الاسم':'Name','الصفحة':'Page','رقم الجوال (مع رمز الدولة)':'Mobile number (with country code)',
  'واتساب (رابط أو رقم — اختياري)':'WhatsApp (link or number — optional)','فيسبوك (اسم المستخدم)':'Facebook (username)',
  'الخلفية — لون أو تدرّج (إذا ما فيه صورة)':'Background — color or gradient (if no photo)','حفظ':'Save','حذف':'Delete','إلغاء':'Cancel','تأكيد الحذف':'Confirm delete',
  'تم الحفظ':'Saved','تم الحذف':'Deleted','تمت إضافة الصورة':'Photo added','تم حذف الصورة':'Photo removed',
  'إضافة أسماء':'Add names','📇 من جهات الاتصال':'📇 From contacts','اختر اسم أو أكثر مرة وحدة':'Pick one or more at once','✍️ إضافة يدوي':'✍️ Add manually',
  'جهات الاتصال':'Contacts','اختر الأسماء':'Choose names','أضفهم إلى صفحة':'Add them to page','🔎 ابحث بالاسم أو الرقم':'🔎 Search name or number',
  'اختر اللي تبيهم':'Select the ones you want','المحدد يُضاف':'Selected ones will be added','تحديد الكل':'Select all','ما اخترت أي اسم':'No names selected',
  'ما لقيت أسماء في الملف':'No names found in the file','ما لقيت أسماء فيها أرقام':'No contacts with phone numbers found','تعذّر فتح جهات الاتصال':'Couldn’t open contacts',
  'اسمح لاتصال سريع بجهات الاتصال من إعدادات الآيفون':'Allow Speed Dial to access Contacts in iPhone Settings',
  'استيراد جهات الاتصال':'Import contacts','الآيفون ما يسمح للمواقع تقرأ جهات الاتصال مباشرة، فالطريقة:':'iPhone doesn’t let websites read contacts directly, so:',
  '١. افتح تطبيق':'1. Open the','واختر الشخص (أو اضغط مطولاً على قائمة لتصدير مجموعة)':'app and choose the person (or long-press a list to export a group)',
  '٢. اضغط':'2. Tap','مشاركة جهة الاتصال':'Share Contact','ثم':'then','حفظ في الملفات':'Save to Files','٣. ارجع هنا واضغط «اختيار الملف»':'3. Come back here and tap “Choose file”',
  'اختيار الملف':'Choose file','لوحة الاتصال':'Keypad','إغلاق':'Close','أدخل الرقم':'Enter number','اكتب رقماً أولاً':'Type a number first',
  'المظهر':'Appearance','الخطوط':'Fonts','حجم الخط':'Text size','شكل الأيقونة':'Icon shape','لون النص':'Text color','أيقونات ثلاثية الأبعاد':'3D icons',
  'خانة إعادة الاتصال':'Recent box','الإجراء عند الضغط على الاسم':'Action when tapping a name','أي حركة لم تُخصَّص لقناة تفتح قائمة الخيارات الكاملة.':'Any gesture not assigned opens the full options menu.',
  'نقرة واحدة':'Single tap','نقرة مزدوجة':'Double tap','ضغطة مطولة':'Long press','لا شيء':'Nothing',
  'دائري':'Circle','مربع مدور':'Rounded square','مربع':'Square','أبيض':'White','أسود':'Black','اضغط للتغيير':'tap to change','اضغط للتبديل':'tap to toggle',
  'ظاهرة':'Shown','مخفية':'Hidden','مفعّلة':'On','غير مفعّلة':'Off','مفعّل':'On','غير مفعّل':'Off','الأسماء والصور مخفية':'names and photos hidden',
  'الأيقونات صارت 3D':'Icons are now 3D','رجعت الأيقونات مسطحة':'Icons are flat again','تم إخفاء الأسماء':'Names hidden','الأسماء ظاهرة':'Names shown','تم إخفاء الخانة':'Box hidden',
  'الصفحات — اضغط على الصفحة لتعديل اسمها ولونها وخلفيتها':'Pages — tap a page to edit its name, color and background','إضافة صفحة':'Add page',
  'اسم الصفحة':'Page name','لون الصفحة':'Page color','الخلفية':'Background','تدرج':'Gradient','لون سادة':'Solid color','نقاط':'Dots','توهج':'Glow','ليلي':'Night','صورة':'Photo',
  'تقديم الصفحة':'Move page up','تم تغيير الترتيب':'Order changed','تم حفظ الصفحة':'Page saved',
  'النسخ الاحتياطي':'Backup','حفظ نسخة في Google Drive أو الملفات':'Save a copy to Google Drive or Files','ما أخذت نسخة للحين':'No backup yet',
  'استرجاع من ملف':'Restore from file','اختر ملف النسخة من Google Drive أو الملفات':'Choose the backup file from Google Drive or Files',
  'نسخ بياناتي كنص':'Copy my data as text','انسخ النص واحفظه في الملاحظات':'Copy the text and keep it in Notes','استرجاع من نسخة':'Restore from text','الصق النص المحفوظ':'Paste the saved text',
  'نسخة بياناتك':'Your data','انسخ النص كاملاً واحفظه في مكان آمن.':'Copy all the text and keep it somewhere safe.','نسخ':'Copy','تم النسخ':'Copied','حدد النص وانسخه':'Select the text and copy it',
  'استرجاع نسخة':'Restore backup','الصق النص اللي حفظته سابقاً. سيستبدل البيانات الحالية.':'Paste the text you saved earlier. It will replace current data.','استرجاع':'Restore',
  'تم الاسترجاع':'Restored','تم الاسترجاع ✓':'Restored ✓','الملف غير صحيح':'Invalid file','النص غير صحيح — تأكد أنك نسخته كاملاً':'Invalid text — make sure you copied all of it',
  'اختر Google Drive أو حفظ في الملفات':'Choose Google Drive or Save to Files','تم تنزيل ملف النسخة':'Backup file downloaded','نسخة اتصال سريع':'Speed Dial backup',
  'استيراد من جهات الاتصال':'Import from contacts','أضف أسماء من جوالك دفعة وحدة':'Add names from your phone in one go',
  'إعادة التطبيق للبداية':'Reset the app','اضغط مرة ثانية للتأكيد':'Tap again to confirm','تمت الإعادة':'Reset done','تم مسح القائمة':'List cleared',
  'البيانات محفوظة على هذا الجهاز فقط. خذ نسخة احتياطية قبل مسح بيانات المتصفح.':'Data is stored on this device only. Make a backup before clearing browser data.',
  'اختر الخط اللي يعجبك، ويتغير فوراً.':'Pick a font you like — it changes instantly.','يكبّر الأسماء والعناوين في كل الصفحات.':'Enlarges names and titles on all pages.',
  'صغير':'Small','عادي':'Normal','كبير':'Large','أكبر':'Larger','لوبو':'Loopo','بلكس':'Plex','تجوال':'Tajawal','القاهرة':'Cairo','المراعي':'Almarai','تشانغا':'Changa','كوفي':'Kufi','أميري (نسخ)':'Amiri (Naskh)','رقعة':'Ruqaa','لاله‌زار':'Lalezar',
  'الآن':'now','أمس':'yesterday','الذاكرة ممتلئة — جرّب صورة أصغر':'Storage is full — try a smaller photo',
  'اتصال سريع برو':'Speed Dial Pro','عندك برو 👑':'You have Pro 👑','مفعّل — شكراً لدعمك ❤️':'Active — thanks for your support ❤️',
  'أسماء بلا حدود وكل الخطوط — مرة وحدة للأبد':'Unlimited names & all fonts — once, forever','الخطوط الإضافية من مميزات برو.':'Extra fonts are a Pro feature.',
  'استرجاع المشتريات':'Restore purchases','لاحقاً':'Later','جارٍ الشراء…':'Purchasing…','اشترِ برو':'Buy Pro','جارٍ استرجاع المشتريات…':'Restoring purchases…',
  'ما لقينا شراء على هذا الحساب':'No purchase found on this account','المتجر مو جاهز، جرّب بعد لحظات':'Store isn’t ready, try again in a moment','ما تمت العملية':'Purchase didn’t complete',
  'تعذّر الاتصال بالمتجر':'Couldn’t connect to the App Store','مبروك! صار عندك اتصال سريع برو 👑':'Congrats! You now have Speed Dial Pro 👑',
  'اللغة':'Language','رجوع':'Back','عام':'General','لون':'Color','English':'English','العربية':'العربية'
};
const I18N_RX=[
  [/^(\d+) (اسم|أسماء)$/,(m,n)=>`${n} ${n==1?'name':'names'}`],
  [/^قبل (\d+) د$/,(m,n)=>`${n}m ago`],[/^قبل (\d+) س$/,(m,n)=>`${n}h ago`],[/^قبل (\d+) أيام$/,(m,n)=>`${n}d ago`],
  [/^آخر نسخة: (.+)$/,(m,a)=>`Last backup: ${trCore(a)||a}`],
  [/^جهات الاتصال \((\d+)\)$/,(m,n)=>`Contacts (${n})`],[/^اختر الأسماء \((\d+)\)$/,(m,n)=>`Choose names (${n})`],
  [/^المحدد: (\d+)$/,(m,n)=>`Selected: ${n}`],[/^لون (\d+)$/,(m,n)=>`Color ${n}`],[/^تدرج (\d+)$/,(m,n)=>`Gradient ${n}`],[/^صفحة (\d+)$/,(m,n)=>`Page ${n}`],
  [/^يحذف كل الأسماء \((\d+)\) والصفحات$/,(m,n)=>`Deletes all names (${n}) and pages`],
  [/^تمت إضافة (\d+) أسماء$/,(m,n)=>`Added ${n} ${n==1?'name':'names'}`],[/^تم استرجاع (\d+) اسم$/,(m,n)=>`Restored ${n} names`],
  [/^تم جلب (.+)$/,(m,a)=>`Fetched ${a==='الجهة'?'contact':a}`],
  [/^ما عنده (.+) — أضفه من «تعديل»$/,(m,a)=>`No ${trCore(a)||a} — add it from “Edit”`],[/^أضف حساب (.+) من «تعديل»$/,(m,a)=>`Add a ${trCore(a)||a} account from “Edit”`],
  [/^وصلت (\d+) اسم في النسخة المجانية\.$/,(m,n)=>`You’ve reached ${n} names in the free version.`],
  [/^النسخة المجانية لين (\d+) اسم، وعندك (\d+)\.$/,(m,a,b)=>`The free version allows up to ${a} names, and you have ${b}.`]
];
function trCore(s){if(I18N[s]!=null)return I18N[s];for(const [rx,f] of I18N_RX){const m=s.match(rx);if(m)return f(...m)}return null}
function trText(raw){
  const s=raw.trim();if(!s||!/[؀-ۿ]/.test(s))return null;
  let r=trCore(s);if(r!=null)return raw.replace(s,r);
  const m=s.match(/^([^\p{L}\p{N}]*)([\s\S]*?)([^\p{L}\p{N}).]*)$/u);
  if(m&&m[2]&&m[2]!==s){r=trCore(m[2]);if(r!=null)return raw.replace(s,m[1]+r+m[3])}
  for(const sep of [' — ',' · ','، ',' – ']){if(s.includes(sep)){const parts=s.split(sep).map(p=>trText(p)??p);return raw.replace(s,parts.join(sep==='، '?', ':sep))}}
  return null;
}
function trNode(n){
  if(n.nodeType===3){const t=trText(n.nodeValue);if(t!=null&&t!==n.nodeValue)n.nodeValue=t;return}
  if(n.nodeType!==1||n.tagName==='SCRIPT'||n.tagName==='STYLE'||n.tagName==='TEXTAREA'||n.hasAttribute('data-raw'))return;
  for(const a of ['placeholder','aria-label','title']){const v=n.getAttribute(a);if(v){const t=trText(v);if(t!=null)n.setAttribute(a,t)}}
  for(const c of n.childNodes)trNode(c);
}
if(window.LANG==='en'){
  const run=()=>{trNode(document.body);
    new MutationObserver(ms=>{for(const m of ms){if(m.type==='characterData')trNode(m.target);else m.addedNodes.forEach(trNode)}}).observe(document.body,{childList:true,subtree:true,characterData:true})};
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',run):run();
}

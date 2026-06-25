window.addEventListener('load',()=>{
['.top','.hero','footer'].forEach((s,i)=>{
const e=document.querySelector(s);
setTimeout(()=>{
e.style.transition='all .9s cubic-bezier(.22,1,.36,1)';
e.style.opacity=1;
e.style.transform='translateY(0)';
},150+i*180);
});
});
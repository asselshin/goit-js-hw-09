const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body;let d=null;function n(){a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{d=setInterval(n,1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(d),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.c5e29495.js.map

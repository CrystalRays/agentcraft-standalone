exports.id=918,exports.ids=[918],exports.modules={9177:e=>{e.exports={"copy-to-clipboard-content":"CopyToClipboard_copy-to-clipboard-content__cxI0e"}},918:(e,t,o)=>{"use strict";o.d(t,{Z:()=>CopyToClipboard});var l=o(997),r=o(6689),c=o(2247),i=o(8198),n=o(3625),a=o(9177),s=o.n(a);function CopyToClipboard({value:e,content:t,truncate:o,width:a="auto"}){let p=function({timeout:e=2e3}={}){let[t,o]=(0,r.useState)(null),[l,c]=(0,r.useState)(!1),[i,n]=(0,r.useState)(null),handleCopyResult=t=>{clearTimeout(i),n(setTimeout(()=>c(!1),e)),c(t)};return{copy:e=>{if("clipboard"in navigator)navigator.clipboard.writeText(e).then(()=>handleCopyResult(!0)).catch(e=>o(e));else{let t=document.createElement("textarea");t.value=e,t.style.position="absolute",t.style.left="-999999px",document.body.prepend(t),t.select();try{document.execCommand("copy")}catch(e){console.error(e)}finally{t.remove(),handleCopyResult(!0)}}},reset:()=>{c(!1),o(null),clearTimeout(i)},error:t,copied:l}}({timeout:500});return l.jsx(c.Tooltip,{label:p.copied?"已复制":"复制",withArrow:!0,position:"right",children:(0,l.jsxs)(c.Flex,{onClick:()=>p.copy(e),mih:50,style:{width:a},gap:"xs",justify:"flex-start",align:"center",direction:"row",wrap:"nowrap",children:[t?l.jsx(c.Text,{truncate:o,className:s()["copy-to-clipboard-content"],children:t}):null,l.jsx(c.ActionIcon,{color:p.copied?"teal":"gray",children:p.copied?l.jsx(i.Z,{size:"1rem"}):l.jsx(n.Z,{size:"1rem"})})]})})}}};
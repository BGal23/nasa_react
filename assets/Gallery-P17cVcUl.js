import{r as S,u as h,a as l,j as e,f,g as R,s as j,c as m}from"./index-FdQ9Ivu6.js";import C from"./Loader-iyfKhIO5.js";const w="_display_1uz1e_1",O="_button_1uz1e_6",x={display:w,button:O},y=t=>t.photos.items,T=t=>t.photos.isLoading,N=t=>t.photos.date,L=t=>t.filters.modalData,q=()=>{const[t,s]=S.useState(-1),o=h(),n=l(T),i=l(N),a=l(y).length,c=()=>a===0?e.jsx("b",{children:"Sorry, there are no photos from this day. Try changing the date."}):a<6||a===t?e.jsx("b",{children:"These are all the photos we found."}):e.jsx("button",{className:x.button,type:"button",onClick:p,children:"Load more"}),p=()=>{o(f({date:i,isNextPage:!0})),s(a)};return e.jsx("div",{className:x.display,children:!n&&c()})},E="_photo_13flk_1",b={photo:E};var D={exports:{}},F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",I=F,$=I;function P(){}function v(){}v.resetWarningCache=P;var W=function(){function t(n,i,a,c,p,d){if(d!==$){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}t.isRequired=t;function s(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:s,element:t,elementType:t,instanceOf:s,node:t,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:v,resetWarningCache:P};return o.PropTypes=o,o};D.exports=W();var B=D.exports;const g=R(B),k=({photo:t})=>{const s=l(y),o=h(),n=i=>{const a=Number(i.currentTarget.id),c=s.find(p=>p.id===a);return o(j(c))};return e.jsx("li",{className:b.li,id:t.id,onClick:n,children:e.jsx("img",{className:b.photo,src:t.img_src,alt:"marian photo"})})};k.propTypes={photo:g.shape({id:g.number.isRequired,img_src:g.string.isRequired})};const M="_gallery_o7ted_1",G={gallery:M},z=()=>{const t=l(y),s=l(T);return e.jsxs("ul",{className:G.gallery,children:[t.map(o=>e.jsx(k,{photo:o},o.id)),s&&e.jsx(C,{})]})},U="_modal_14rt9_1",V="_photo_14rt9_15",A="_button_14rt9_20",_={modal:U,photo:V,button:A},H=()=>{const t=l(L),s=h(),o=n=>{if(n.target.tagName==="DIV"||n.target.type==="button")return s(j(""))};return e.jsx(e.Fragment,{children:t&&e.jsx("div",{className:_.modal,onClick:o,children:e.jsxs("div",{children:[e.jsx("button",{className:_.button,type:"button",children:"╳"}),e.jsx("img",{className:_.photo,src:t.img_src})]})})})},Y="_range_1a8kq_1",J="_buttons_1a8kq_6",K="_date_1a8kq_11",Q="_folder_1a8kq_16",X="_button_1a8kq_6",Z="_rightSide_1a8kq_39",u={range:Y,buttons:J,date:K,folder:Q,button:X,rightSide:Z},tt=()=>{const t=h(),s=l(N),o=new Date("2012-08-06").getTime(),n=new Date,i=864e5,a=new Date(s).getTime(),c=async d=>{let r;return typeof d=="object"?r=d.currentTarget.value:r=d,isNaN(r)||(r=new Date(Number(r)),r=await m(r)),t(f({date:r,isNextPage:!1}))},p=d=>{d.currentTarget.name==="+"?c(a+i):c(a-i)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"range",className:u.range,onChange:c,value:a,min:o,max:n.getTime(),step:i}),e.jsxs("div",{className:u.folder,children:[e.jsx("div",{children:"2012-08-06"}),e.jsxs("div",{className:u.buttons,children:[e.jsx("button",{className:u.button,name:"-",onClick:p,children:"-"}),e.jsx("input",{type:"date",className:u.date,value:s,onChange:c,min:"2012-08-06",max:m(n)}),e.jsx("button",{className:u.button,name:"+",onClick:p,children:"+"})]}),e.jsx("div",{className:u.rightSide,children:m(n)})]})]})},ot=()=>e.jsxs(e.Fragment,{children:[e.jsx(tt,{}),e.jsx(z,{}),e.jsx(q,{}),e.jsx(H,{})]});export{ot as default};
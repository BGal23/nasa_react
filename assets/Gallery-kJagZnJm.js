import{u as l,a,j as e,f as g,g as P,s as x,L as v}from"./index-A1TIyJYc.js";import N from"./Loader-eg_No91e.js";import{F as R}from"./Footer-jT-rRaUt.js";const k="_display_1uz1e_1",O="_button_1uz1e_6",u={display:k,button:O},y=t=>t.photos.items,_=t=>t.photos.isLoading,S=t=>t.photos.date,L=t=>t.filters.modalData,C=()=>{const t=l(),s=a(S),o=()=>t(g({date:s,isNextPage:!0})),n=a(_);return e.jsx("div",{className:u.display,children:!n&&e.jsx("button",{className:u.button,type:"button",onClick:o,children:"Load more"})})},F="_photo_k2uq3_1",E={photo:F};var j={exports:{}},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w=I,$=w;function f(){}function b(){}b.resetWarningCache=f;var M=function(){function t(n,r,c,i,m,D){if(D!==$){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function s(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:s,element:t,elementType:t,instanceOf:s,node:t,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:b,resetWarningCache:f};return o.PropTypes=o,o};j.exports=M();var W=j.exports;const p=P(W),T=({photo:t})=>{const s=a(y),o=l(),n=r=>{const c=Number(r.currentTarget.id),i=s.find(m=>m.id===c);return o(x(i))};return e.jsx("li",{id:t.id,onClick:n,children:e.jsx("img",{className:E.photo,src:t.img_src,alt:"marian photo"})})};T.propTypes={photo:p.shape({id:p.number.isRequired,img_src:p.string.isRequired})};const q="_gallery_1v0d8_1",G={gallery:q},z=()=>{const t=a(y),s=a(_);return e.jsxs("ul",{className:G.gallery,children:[t.map(o=>e.jsx(T,{photo:o},o.id)),s&&e.jsx(N,{})]})},B="_modal_1icdc_1",U="_photo_1icdc_15",V="_button_1icdc_19",d={modal:B,photo:U,button:V},A=()=>{const t=a(L),s=l(),o=n=>{if(n.target.tagName==="DIV"||n.target.type==="button")return s(x(""))};return e.jsx(e.Fragment,{children:t&&e.jsx("div",{className:d.modal,onClick:o,children:e.jsxs("div",{children:[e.jsx("button",{className:d.button,type:"button",children:"╳"}),e.jsx("img",{className:d.photo,src:t.img_src}),e.jsx("h3",{children:"Photo data:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Earth date: ",t.earth_date]}),e.jsxs("li",{children:["Mars sol: ",t.sol]}),e.jsxs("li",{children:["Rover: ",t.rover.name]}),e.jsxs("li",{children:["Camera: ",t.camera.full_name]}),e.jsxs("li",{children:["Link to original photo: ",e.jsx(v,{to:t.img_src,children:"-link-"})]})]})]})})})},H="_date_1mk1v_1",Y={date:H},Z=()=>{const t=l(),s=new Date("2012-8-6").getTime(),o=new Date().getTime(),n=r=>{const c=r.target.value,i=new Date(Number(c)).toISOString().replace("T22:00:00.000Z","").split("-0").join("-");t(g({date:i,isNextPage:!1}))};return e.jsx(e.Fragment,{children:e.jsx("input",{className:Y.date,type:"range",onChange:n,min:s,max:o,step:864e5})})},X=()=>e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),e.jsx(z,{}),e.jsx(C,{}),e.jsx(R,{}),e.jsx(A,{})]});export{X as default};

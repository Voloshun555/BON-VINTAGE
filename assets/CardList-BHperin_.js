import{j as e,C as P,c as B,a as v,p as S,q as T,t as E,r as p,o as Q,v as R,w as W,x as O,y as z,g as G,e as J}from"./index-CF48arxZ.js";const K="_containerCard_1868h_1",U="_containerImg_1868h_18",X="_catalogImg_1868h_21",Y="_buttonHeart_1868h_26",Z="_iconHeart_1868h_31",ee="_item_1868h_36",te="_itemTitle_1868h_43",se="_itemPrice_1868h_47",ne="_itemList_1868h_51",ae="_btnBascket_1868h_56",x={containerCard:K,containerImg:U,catalogImg:X,buttonHeart:Y,iconHeart:Z,item:ee,itemTitle:te,itemPrice:se,itemList:ne,btnBascket:ae},oe="_buttonHeartActive_182pk_1",ie="_iconHeart_182pk_5",q={buttonHeartActive:oe,iconHeart:ie},D=({isFavorite:r,onClick:t,buttonHeart:c,iconHeart:d})=>e.jsx("button",{className:`${c} `,onClick:t,"aria-label":r?"Видалити з улюбленого":"Додати до улюбленого",children:e.jsx(P,{className:`${d} ${q.iconHeart} ${r?q.buttonHeartActive:""}`})}),ce=({image:r,price:t,title:c,description:d,id:l,addFavoriteList:s,removeFavoriteList:_,isFavorite:m,onClick:n})=>{const o=()=>{m?_(l):s(l)};return e.jsxs("li",{className:x.containerCard,children:[e.jsxs("div",{className:x.containerImg,children:[e.jsx("img",{className:x.catalogImg,src:r,alt:c||"Зображення продукту",onClick:n}),e.jsx(D,{buttonHeart:`${x.buttonHeart}`,iconHeart:x.iconHeart,isFavorite:m,onClick:o})]}),e.jsxs("div",{className:x.item,children:[e.jsx("h3",{className:x.itemTitle,children:d}),e.jsxs("p",{className:x.itemPrice,children:["Ціна: ",t]})]}),e.jsx("button",{className:x.btnBascket,"aria-label":"Додати до кошика",children:"додати до кошику"})]})},L=()=>{const r=B(),t=v(S);return{addFavoriteList:s=>{r(T(s))},removeFavoriteList:s=>{r(E(s))},isFavorite:s=>t.includes(s)}},re="_modal_2ymq5_2",le="_closeButton_2ymq5_7",de="_wrapInfo_2ymq5_14",me="_imageContainer_2ymq5_24",_e="_mainImage_2ymq5_39",ue="_buttonHeart_2ymq5_50",he="_iconHeart_2ymq5_61",ge="_gallery_2ymq5_66",xe="_galleryItem_2ymq5_89",pe="_galleryImage_2ymq5_101",ve="_videoContainer_2ymq5_107",ye="_galleryVideo_2ymq5_120",je="_playButton_2ymq5_126",Ce="_containerDescription_2ymq5_142",Ne="_titleDes_2ymq5_150",Ie="_productDetails_2ymq5_153",be="_productInfo_2ymq5_159",fe="_addBasket_2ymq5_164",ke="_priceInfo_2ymq5_172",He="_videoModal_2ymq5_177",Fe="_videoModalContent_2ymq5_189",qe="_modalVideo_2ymq5_194",Me="_closeVideoButton_2ymq5_199",i={modal:re,closeButton:le,wrapInfo:de,imageContainer:me,mainImage:_e,buttonHeart:ue,iconHeart:he,gallery:ge,galleryItem:xe,galleryImage:pe,videoContainer:ve,galleryVideo:ye,playButton:je,containerDescription:Ce,titleDes:Ne,productDetails:Ie,productInfo:be,addBasket:fe,priceInfo:ke,videoModal:He,videoModalContent:Fe,modalVideo:qe,closeVideoButton:Me},Be=({onClose:r,data:t})=>{const[c,d]=p.useState(t.mainImage),[l,s]=p.useState(null),_=()=>s(null),{isFavorite:m,addFavoriteList:n,removeFavoriteList:o}=L(),u=()=>{m(t.id)?o(t.id):n(t.id)};return e.jsxs("div",{className:i.modal,children:[e.jsx("button",{className:i.closeButton,onClick:r,children:"Вернутись назад"}),e.jsxs("div",{className:i.wrapInfo,children:[e.jsxs("div",{children:[e.jsxs("div",{className:i.imageContainer,children:[e.jsx("img",{className:i.mainImage,src:c,alt:"Головне зображення"}),e.jsx(D,{buttonHeart:`${i.buttonHeart}`,iconHeart:i.iconHeart,isFavorite:m(t.id),onClick:u}),e.jsx("ul",{className:i.gallery,children:t.gallery.map((a,g)=>e.jsx("li",{className:i.galleryItem,children:a.type==="image"?e.jsx("img",{className:i.galleryImage,src:a.url,alt:a.description||`Зображення ${g+1}`,onClick:()=>d(a.url)}):a.type==="video"?e.jsxs("div",{className:i.videoContainer,children:[e.jsxs("video",{className:i.galleryVideo,controls:!1,children:[e.jsx("source",{src:a.url.replace(".mp4",".webm"),type:"video/webm"}),"Ваш браузер не підтримує відео."]}),e.jsx("button",{className:i.playButton,onClick:()=>s(a.url),children:"▶ Play"})]}):null},g))})]}),e.jsx("button",{className:i.addBasket,children:"ДОДАТИ ДО КОШИКУ"}),e.jsxs("ul",{className:i.priceInfo,children:[e.jsx("li",{children:"€ 222"}),e.jsxs("li",{children:[t.price,": грн"]})]})]}),e.jsxs("div",{className:i.containerDescription,children:[e.jsxs("h1",{className:i.titleDes,children:[t.title," ",e.jsx("span",{children:t.country})]}),e.jsxs("ul",{className:i.productDetails,children:[e.jsxs("li",{children:[t.category,", деколь, метал"]}),e.jsx("li",{children:"Висота 8 см (10,5 см з кришкою) "}),e.jsx("li",{children:"Діаметр 6 см"}),e.jsx("li",{children:"У відмінному стані! Оригінальна упаковка"})]}),e.jsxs("ul",{className:i.productInfo,children:[e.jsx("li",{children:"Egg coddler від Royal Worcester - це традиційний британський предмет кухонного начиння, розроблений для зручного та вишуканого приготування яєць у водяній бані. Цей стиль посуду став популярним у 19 столітті і продовжує використовуватись досі. Egg coddler від Royal Worcester є не тільки корисним кухонним предметом та елегантним елементом сервірування столу, але й предметом колекціонування завдяки своїй якості та художній цінності."}),e.jsx("li",{children:"Наші товари є вінтажними, з історією та попереднім використанням. Можливі ознаки старіння, що характерні для класичного вінтажного стилю. Тим не менш, усі предмети залишаються в гарному стані та готовими до використання. Ми ретельно вказуємо стан кожного предмета в описі. Просимо вас уважно вивчити фотографії товарів, оскільки вони є важливою частиною опису та доповнюють його"}),e.jsx("li",{children:"Рекомендую ознайомитися з іншими нашими товарами, щоб зменшити витрати на доставку."}),e.jsx("li",{children:"Якщо у вас виникли запитання, не соромтеся звертатися до нас. Ми завжди готові допомогти!"})]})]})]}),l&&e.jsx("div",{className:i.videoModal,onClick:_,children:e.jsxs("div",{className:i.videoModalContent,onClick:a=>a.stopPropagation(),children:[e.jsxs("video",{className:i.modalVideo,controls:!0,autoPlay:!0,children:[e.jsx("source",{src:l,type:"video/mp4"}),"Ваш браузер не підтримує відео."]}),e.jsx("button",{className:i.closeVideoButton,onClick:_,children:"✖"})]})})]})},De="_container_15ya4_1",Le="_pagination_15ya4_11",$e="_paginationItem_15ya4_15",we="_paginationLink_15ya4_30",Ve="_isActive_15ya4_33",Ae="_prevContainer_15ya4_36",Pe="_prev_15ya4_36",Se="_next_15ya4_40",h={container:De,pagination:Le,paginationItem:$e,paginationLink:we,isActive:Ve,prevContainer:Ae,prev:Pe,next:Se},Te=({totalCards:r,cardsPerPage:t,currentPage:c,setCurrentPage:d})=>{const l=Q({maxWidth:833}),s=Math.ceil(r/t),_=l?4:12;let m=Math.max(1,c-Math.floor(_/2)),n=m+_-1;n>s&&(n=s,m=Math.max(1,n-_+1));const o=Array.from({length:n-m+1},(a,g)=>m+g),u=a=>{a>=1&&a<=s&&d(a)};return e.jsxs("section",{className:h.container,children:[!l&&e.jsx("button",{className:h.prev,disabled:c===1,onClick:()=>u(c-1),children:"<--"}),m>2&&e.jsxs("div",{className:h.prevContainer,children:[e.jsx("button",{className:h.prev,disabled:c===1,onClick:()=>u(1),children:"1"}),e.jsx("button",{className:h.prev,onClick:()=>u(m-1),children:"..."})]}),e.jsx("ul",{className:h.pagination,children:o.map(a=>e.jsx("li",{className:`${h.paginationItem} ${c===a?h.isActive:""}`,onClick:()=>u(a),children:e.jsx("a",{href:"#",className:h.paginationLink,children:a})},a))}),n<s&&e.jsxs("div",{className:h.prevContainer,children:[e.jsx("button",{className:h.next,onClick:()=>u(n+1),children:"..."}),e.jsx("button",{className:h.next,disabled:c===s,onClick:()=>u(s),children:s})]}),!l&&e.jsx("button",{className:h.next,disabled:c===s,onClick:()=>u(c+1),children:"-->"})]})},Ee=r=>{const t=B(),c=v(R),d=v(W),l=v(O),s=v(z),_=p.useMemo(()=>Array.isArray(r)?r.filter(({title:n,description:o,country:u,category:a,material:g})=>{const y=c.toLowerCase();return[n,o,u,a,g].some(j=>j.toLowerCase().includes(y))&&(!l||a===l)&&(!d||g===d)}):[],[r,c,l,d]);return p.useEffect(()=>{if(d&&!l){const n=[...new Set(r.filter(o=>d===o.material).map(o=>o.category))];n.length>0&&t(G(n))}if(l&&!d){const n=[...new Set(r.filter(o=>l===o.category).map(o=>o.material))];n.length>0&&t(J(n))}},[r,l,d,t]),p.useMemo(()=>_.length?[..._].sort((n,o)=>{switch(s){case"newest":return new Date(o.createdAt)-new Date(n.createdAt);case"highPrice":return o.price-n.price;case"lowPrice":return n.price-o.price;default:return 0}}):[],[_,s])},Qe="_containerCards_19p8f_1",Re="_container_19p8f_1",M={containerCards:Qe,container:Re},Oe=({data:r,isLoading:t,isError:c})=>{const[d,l]=p.useState(!1),[s,_]=p.useState(null),[m,n]=p.useState(1),[o]=p.useState(12),{isFavorite:u,addFavoriteList:a,removeFavoriteList:g}=L(),y=(C=null)=>{l(!d),_(C)},j=Ee(r),I=m*o,$=I-o,b=j.slice($,I);return e.jsx("div",{className:M.container,children:d?e.jsx(Be,{onClose:y,data:s}):e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:M.containerCards,children:[t&&e.jsx("div",{children:"...Loading"}),c&&e.jsx("div",{children:"...Error"}),!t&&!c&&b.map(({mainImage:C,country:f,id:N,price:k,title:H,description:F,gallery:w,category:V,material:A})=>e.jsx(ce,{id:N,image:C,country:f,price:k,title:H,description:F,addFavoriteList:a,removeFavoriteList:g,isFavorite:u(N),onClick:()=>y({mainImage:C,country:f,id:N,price:k,title:H,description:F,gallery:w,category:V,material:A})},N))]}),b.length>0?e.jsx(Te,{totalCards:j.length,cardsPerPage:o,currentPage:m,setCurrentPage:n}):null]})})};export{Oe as C};

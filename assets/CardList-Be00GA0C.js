import{j as e,C as T,c as D,a as v,p as E,q as Q,t as R,r as p,o as W,v as q,w as O,x as z,y as G,g as J,e as K}from"./index-Bv6L7i7f.js";const U="_containerCard_1868h_1",X="_containerImg_1868h_18",Y="_catalogImg_1868h_21",Z="_buttonHeart_1868h_26",ee="_iconHeart_1868h_31",te="_item_1868h_36",se="_itemTitle_1868h_43",ne="_itemPrice_1868h_47",ae="_itemList_1868h_51",oe="_btnBascket_1868h_56",x={containerCard:U,containerImg:X,catalogImg:Y,buttonHeart:Z,iconHeart:ee,item:te,itemTitle:se,itemPrice:ne,itemList:ae,btnBascket:oe},ie="_buttonHeartActive_182pk_1",ce="_iconHeart_182pk_5",M={buttonHeartActive:ie,iconHeart:ce},L=({isFavorite:l,onClick:t,buttonHeart:i,iconHeart:d})=>e.jsx("button",{className:`${i} `,onClick:t,"aria-label":l?"Видалити з улюбленого":"Додати до улюбленого",children:e.jsx(T,{className:`${d} ${M.iconHeart} ${l?M.buttonHeartActive:""}`})}),re=({image:l,price:t,title:i,description:d,id:c,addFavoriteList:n,removeFavoriteList:u,isFavorite:_,onClick:s})=>{const r=()=>{_?u(c):n(c)};return e.jsxs("li",{className:x.containerCard,children:[e.jsxs("div",{className:x.containerImg,children:[e.jsx("img",{className:x.catalogImg,src:l,alt:i||"Зображення продукту",onClick:s}),e.jsx(L,{buttonHeart:`${x.buttonHeart}`,iconHeart:x.iconHeart,isFavorite:_,onClick:r})]}),e.jsxs("div",{className:x.item,children:[e.jsx("h3",{className:x.itemTitle,children:d}),e.jsxs("p",{className:x.itemPrice,children:["Ціна: ",t]})]}),e.jsx("button",{className:x.btnBascket,"aria-label":"Додати до кошика",children:"додати до кошику"})]})},$=()=>{const l=D(),t=v(E);return{addFavoriteList:n=>{l(Q(n))},removeFavoriteList:n=>{l(R(n))},isFavorite:n=>t.includes(n)}},le="_modal_f2w0w_2",de="_closeButton_f2w0w_7",_e="_wrapInfo_f2w0w_14",me="_imageContainer_f2w0w_24",ue="_mainImage_f2w0w_39",he="_buttonHeart_f2w0w_50",ge="_iconHeart_f2w0w_61",xe="_gallery_f2w0w_66",pe="_galleryItem_f2w0w_89",ve="_galleryImage_f2w0w_101",je="_videoContainer_f2w0w_107",Ce="_galleryVideo_f2w0w_120",fe="_playButton_f2w0w_126",we="_containerDescription_f2w0w_142",ye="_titleDes_f2w0w_150",Ne="_productDetails_f2w0w_153",Ie="_productInfo_f2w0w_159",be="_addBasket_f2w0w_164",ke="_priceInfo_f2w0w_172",He="_videoModal_f2w0w_177",Fe="_videoModalContent_f2w0w_189",Me="_modalVideo_f2w0w_194",Be="_closeVideoButton_f2w0w_199",o={modal:le,closeButton:de,wrapInfo:_e,imageContainer:me,mainImage:ue,buttonHeart:he,iconHeart:ge,gallery:xe,galleryItem:pe,galleryImage:ve,videoContainer:je,galleryVideo:Ce,playButton:fe,containerDescription:we,titleDes:ye,productDetails:Ne,productInfo:Ie,addBasket:be,priceInfo:ke,videoModal:He,videoModalContent:Fe,modalVideo:Me,closeVideoButton:Be},De=({onClose:l,data:t})=>{const[i,d]=p.useState(t.mainImage),[c,n]=p.useState(null),u=()=>n(null),{isFavorite:_,addFavoriteList:s,removeFavoriteList:r}=$(),m=()=>{_(t.id)?r(t.id):s(t.id)};return e.jsxs("div",{className:o.modal,children:[e.jsx("button",{className:o.closeButton,onClick:l,children:"Вернутись назад"}),e.jsxs("div",{className:o.wrapInfo,children:[e.jsxs("div",{children:[e.jsxs("div",{className:o.imageContainer,children:[e.jsx("img",{className:o.mainImage,src:i,alt:"Головне зображення"}),e.jsx(L,{buttonHeart:`${o.buttonHeart}`,iconHeart:o.iconHeart,isFavorite:_(t.id),onClick:m}),e.jsx("ul",{className:o.gallery,children:t.gallery.map((a,g)=>e.jsx("li",{className:o.galleryItem,children:a.type==="image"?e.jsx("img",{className:o.galleryImage,src:a.url,alt:a.description||`Зображення ${g+1}`,onClick:()=>d(a.url)}):a.type==="video"?e.jsxs("div",{className:o.videoContainer,children:[e.jsxs("video",{className:o.galleryVideo,controls:!1,children:[e.jsx("source",{src:a.url.replace(".mp4",".webm"),type:"video/webm"}),"Ваш браузер не підтримує відео."]}),e.jsx("button",{className:o.playButton,onClick:()=>n(a.url),children:"▶ Play"})]}):null},g))})]}),e.jsx("button",{className:o.addBasket,children:"ДОДАТИ ДО КОШИКУ"}),e.jsxs("ul",{className:o.priceInfo,children:[e.jsx("li",{children:"€ 222"}),e.jsxs("li",{children:[t.price,": грн"]})]})]}),e.jsxs("div",{className:o.containerDescription,children:[e.jsxs("h1",{className:o.titleDes,children:[t.title," ",e.jsx("span",{children:t.country})]}),e.jsxs("ul",{className:o.productDetails,children:[e.jsxs("li",{children:[t.category,", деколь, метал"]}),e.jsx("li",{children:"Висота 8 см (10,5 см з кришкою) "}),e.jsx("li",{children:"Діаметр 6 см"}),e.jsx("li",{children:"У відмінному стані! Оригінальна упаковка"})]}),e.jsxs("ul",{className:o.productInfo,children:[e.jsx("li",{children:"Egg coddler від Royal Worcester - це традиційний британський предмет кухонного начиння, розроблений для зручного та вишуканого приготування яєць у водяній бані. Цей стиль посуду став популярним у 19 столітті і продовжує використовуватись досі. Egg coddler від Royal Worcester є не тільки корисним кухонним предметом та елегантним елементом сервірування столу, але й предметом колекціонування завдяки своїй якості та художній цінності."}),e.jsx("li",{children:"Наші товари є вінтажними, з історією та попереднім використанням. Можливі ознаки старіння, що характерні для класичного вінтажного стилю. Тим не менш, усі предмети залишаються в гарному стані та готовими до використання. Ми ретельно вказуємо стан кожного предмета в описі. Просимо вас уважно вивчити фотографії товарів, оскільки вони є важливою частиною опису та доповнюють його"}),e.jsx("li",{children:"Рекомендую ознайомитися з іншими нашими товарами, щоб зменшити витрати на доставку."}),e.jsx("li",{children:"Якщо у вас виникли запитання, не соромтеся звертатися до нас. Ми завжди готові допомогти!"})]})]})]}),c&&e.jsx("div",{className:o.videoModal,onClick:u,children:e.jsxs("div",{className:o.videoModalContent,onClick:a=>a.stopPropagation(),children:[e.jsxs("video",{className:o.modalVideo,controls:!0,autoPlay:!0,children:[e.jsx("source",{src:c,type:"video/mp4"}),"Ваш браузер не підтримує відео."]}),e.jsx("button",{className:o.closeVideoButton,onClick:u,children:"✖"})]})})]})},Le="_container_15ya4_1",$e="_pagination_15ya4_11",Ve="_paginationItem_15ya4_15",Ae="_paginationLink_15ya4_30",Pe="_isActive_15ya4_33",Se="_prevContainer_15ya4_36",Te="_prev_15ya4_36",Ee="_next_15ya4_40",h={container:Le,pagination:$e,paginationItem:Ve,paginationLink:Ae,isActive:Pe,prevContainer:Se,prev:Te,next:Ee},Qe=({totalCards:l,cardsPerPage:t,currentPage:i,setCurrentPage:d})=>{const c=W({maxWidth:833}),n=Math.ceil(l/t),u=c?4:12;let _=Math.max(1,i-Math.floor(u/2)),s=_+u-1;s>n&&(s=n,_=Math.max(1,s-u+1));const r=Array.from({length:s-_+1},(a,g)=>_+g),m=a=>{a>=1&&a<=n&&d(a)};return e.jsxs("section",{className:h.container,children:[!c&&e.jsx("button",{className:h.prev,disabled:i===1,onClick:()=>m(i-1),children:"<--"}),_>2&&e.jsxs("div",{className:h.prevContainer,children:[e.jsx("button",{className:h.prev,disabled:i===1,onClick:()=>m(1),children:"1"}),e.jsx("button",{className:h.prev,onClick:()=>m(_-1),children:"..."})]}),e.jsx("ul",{className:h.pagination,children:r.map(a=>e.jsx("li",{className:`${h.paginationItem} ${i===a?h.isActive:""}`,onClick:()=>m(a),children:e.jsx("a",{href:"#",className:h.paginationLink,children:a})},a))}),s<n&&e.jsxs("div",{className:h.prevContainer,children:[e.jsx("button",{className:h.next,onClick:()=>m(s+1),children:"..."}),e.jsx("button",{className:h.next,disabled:i===n,onClick:()=>m(n),children:n})]}),!c&&e.jsx("button",{className:h.next,disabled:i===n,onClick:()=>m(i+1),children:"-->"})]})},Re=l=>{const t=D(),i=v(q),d=v(O),c=v(z),n=v(G),u=p.useMemo(()=>Array.isArray(l)?l.filter(({title:s,description:r,country:m,category:a,material:g})=>{const w=i.toLowerCase();return[s,r,m,a,g].some(j=>j.toLowerCase().includes(w))&&(!c||a===c)&&(!d||g===d)}):[],[l,i,c,d]);return p.useEffect(()=>{if(d&&!c){const s=[...new Set(l.filter(r=>d===r.material).map(r=>r.category))];s.length>0&&t(J(s))}if(c&&!d){const s=[...new Set(l.filter(r=>c===r.category).map(r=>r.material))];s.length>0&&t(K(s))}},[l,c,d,t]),p.useMemo(()=>u.length?[...u].sort((s,r)=>{switch(n){case"newest":return new Date(r.createdAt)-new Date(s.createdAt);case"highPrice":return r.price-s.price;case"lowPrice":return s.price-r.price;default:return 0}}):[],[u,n])},We="_containerCards_19p8f_1",qe="_container_19p8f_1",B={containerCards:We,container:qe},ze=({data:l,isLoading:t,isError:i,style:d})=>{const[c,n]=p.useState(!1),[u,_]=p.useState(null),[s,r]=p.useState(1),[m]=p.useState(12),{isFavorite:a,addFavoriteList:g,removeFavoriteList:w}=$(),j=(C=null)=>{n(!c),_(C)},y=Re(l),N=s*m,V=N-m,I=y.slice(V,N);return e.jsx("div",{className:`${B.container} ${d}`,children:c?e.jsx(De,{onClose:j,data:u}):e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:B.containerCards,children:[t&&e.jsx("div",{children:"...Loading"}),i&&e.jsx("div",{children:"...Error"}),!t&&!i&&I.map(({mainImage:C,country:b,id:f,price:k,title:H,description:F,gallery:A,category:P,material:S})=>e.jsx(re,{id:f,image:C,country:b,price:k,title:H,description:F,addFavoriteList:g,removeFavoriteList:w,isFavorite:a(f),onClick:()=>j({mainImage:C,country:b,id:f,price:k,title:H,description:F,gallery:A,category:P,material:S})},f))]}),I.length>0?e.jsx(Qe,{totalCards:y.length,cardsPerPage:m,currentPage:s,setCurrentPage:r}):null]})})};export{ze as C};

import{u as n,j as r}from"./index-C0n9PaG1.js";import{u as c,C as d}from"./CardList-GfulEVhw.js";import{s as f}from"./Home.module-C8ooPR02.js";const p=()=>{const{data:s=[],isLoading:o,isError:a}=c(12),i=n(t=>t.favorite),e=s.filter(t=>i.includes(t.id));return r.jsx("section",{className:f.containerFavorite,children:r.jsx(d,{data:e,isLoading:o,isError:a})})};export{p as default};
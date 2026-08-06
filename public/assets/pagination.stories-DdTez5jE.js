import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-B7Te67-h.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{a as r,o as i}from"./iframe-6KOUnMFo.js";import{r as a,t as o}from"./button-B6nocP7H.js";import{Bt as s,ft as c,t as l,ut as u}from"./lucide-react-DwrYPWFq.js";function d({className:e,...t}){return(0,v.jsx)(`nav`,{role:`navigation`,"aria-label":`pagination`,"data-slot":`pagination`,className:r(`mx-auto flex w-full justify-center`,e),...t})}function f({className:e,...t}){return(0,v.jsx)(`ul`,{"data-slot":`pagination-content`,className:r(`flex items-center gap-0.5`,e),...t})}function p({...e}){return(0,v.jsx)(`li`,{"data-slot":`pagination-item`,...e})}function m({className:e,isActive:t,size:n=`icon`,...i}){return(0,v.jsx)(o,{variant:t?`outline`:`ghost`,size:n,className:r(e),nativeButton:!1,render:(0,v.jsx)(`a`,{"aria-current":t?`page`:void 0,"data-slot":`pagination-link`,"data-active":t,...i})})}function h({className:e,text:t=`Previous`,...n}){return(0,v.jsxs)(m,{"aria-label":`Go to previous page`,size:`default`,className:r(`pl-1.5!`,e),...n,children:[(0,v.jsx)(c,{"data-icon":`inline-start`}),(0,v.jsx)(`span`,{className:`hidden sm:block`,children:t})]})}function g({className:e,text:t=`Next`,...n}){return(0,v.jsxs)(m,{"aria-label":`Go to next page`,size:`default`,className:r(`pr-1.5!`,e),...n,children:[(0,v.jsx)(`span`,{className:`hidden sm:block`,children:t}),(0,v.jsx)(u,{"data-icon":`inline-end`})]})}function _({className:e,...t}){return(0,v.jsxs)(`span`,{"aria-hidden":!0,"data-slot":`pagination-ellipsis`,className:r(`flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4`,e),...t,children:[(0,v.jsx)(s,{}),(0,v.jsx)(`span`,{className:`sr-only`,children:`More pages`})]})}var v,y=e((()=>{t(),i(),a(),l(),v=n(),d.__docgenInfo={description:``,methods:[],displayName:`Pagination`},f.__docgenInfo={description:``,methods:[],displayName:`PaginationContent`},_.__docgenInfo={description:``,methods:[],displayName:`PaginationEllipsis`},p.__docgenInfo={description:``,methods:[],displayName:`PaginationItem`},m.__docgenInfo={description:``,methods:[],displayName:`PaginationLink`,props:{isActive:{required:!1,tsType:{name:`boolean`},description:``},size:{defaultValue:{value:`"icon"`,computed:!1},required:!1}}},g.__docgenInfo={description:``,methods:[],displayName:`PaginationNext`,props:{text:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Next"`,computed:!1}}}},h.__docgenInfo={description:``,methods:[],displayName:`PaginationPrevious`,props:{text:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Previous"`,computed:!1}}}}})),b,x,S,C,w,T;e((()=>{y(),b=n(),x={title:`UI/Pagination`,component:d,tags:[`autodocs`]},S={render:()=>(0,b.jsx)(d,{children:(0,b.jsxs)(f,{children:[(0,b.jsx)(p,{children:(0,b.jsx)(h,{href:`#`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`1`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,isActive:!0,children:`2`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`3`})}),(0,b.jsx)(p,{children:(0,b.jsx)(_,{})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`10`})}),(0,b.jsx)(p,{children:(0,b.jsx)(g,{href:`#`})})]})})},C={render:()=>(0,b.jsx)(d,{children:(0,b.jsxs)(f,{children:[(0,b.jsx)(p,{children:(0,b.jsx)(h,{href:`#`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,isActive:!0,children:`1`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`2`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`3`})}),(0,b.jsx)(p,{children:(0,b.jsx)(g,{href:`#`})})]})})},w={render:()=>(0,b.jsx)(d,{children:(0,b.jsxs)(f,{children:[(0,b.jsx)(p,{children:(0,b.jsx)(h,{href:`#`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`1`})}),(0,b.jsx)(p,{children:(0,b.jsx)(_,{})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`4`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,isActive:!0,children:`5`})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`6`})}),(0,b.jsx)(p,{children:(0,b.jsx)(_,{})}),(0,b.jsx)(p,{children:(0,b.jsx)(m,{href:`#`,children:`20`})}),(0,b.jsx)(p,{children:(0,b.jsx)(g,{href:`#`})})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">20</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`FirstPage`,`ManyPages`]}))();export{S as Default,C as FirstPage,w as ManyPages,T as __namedExportsOrder,x as default};
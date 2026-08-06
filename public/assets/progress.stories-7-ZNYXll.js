import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{a as n,o as r}from"./iframe-6KOUnMFo.js";import{c as i,i as a,n as o,o as s,t as c,u as l}from"./progress-ClYBo5QP.js";function u({className:e,children:t,value:r,...i}){return(0,h.jsxs)(l,{value:r,"data-slot":`progress`,className:n(`flex flex-wrap gap-3`,e),...i,children:[t,(0,h.jsx)(d,{children:(0,h.jsx)(f,{})})]})}function d({className:e,...t}){return(0,h.jsx)(i,{className:n(`relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted`,e),"data-slot":`progress-track`,...t})}function f({className:e,...t}){return(0,h.jsx)(s,{"data-slot":`progress-indicator`,className:n(`h-full bg-primary transition-all`,e),...t})}function p({className:e,...t}){return(0,h.jsx)(o,{className:n(`text-sm font-medium`,e),"data-slot":`progress-label`,...t})}function m({className:e,...t}){return(0,h.jsx)(a,{className:n(`ml-auto text-sm text-muted-foreground tabular-nums`,e),"data-slot":`progress-value`,...t})}var h,g=e((()=>{c(),r(),h=t(),u.__docgenInfo={description:``,methods:[],displayName:`Progress`},d.__docgenInfo={description:``,methods:[],displayName:`ProgressTrack`},f.__docgenInfo={description:``,methods:[],displayName:`ProgressIndicator`},p.__docgenInfo={description:``,methods:[],displayName:`ProgressLabel`},m.__docgenInfo={description:``,methods:[],displayName:`ProgressValue`}})),_,v,y,b,x,S,C,w;e((()=>{g(),_=t(),v={title:`UI/Progress`,component:u,tags:[`autodocs`]},y={args:{value:25}},b={args:{value:50}},x={args:{value:75}},S={render:()=>(0,_.jsxs)(u,{value:60,children:[(0,_.jsx)(p,{children:`Uploading...`}),(0,_.jsx)(m,{})]})},C={render:()=>(0,_.jsxs)(`div`,{className:`flex w-full max-w-md flex-col gap-6`,children:[(0,_.jsxs)(u,{value:25,children:[(0,_.jsx)(p,{children:`25%`}),(0,_.jsx)(m,{})]}),(0,_.jsxs)(u,{value:50,children:[(0,_.jsx)(p,{children:`50%`}),(0,_.jsx)(m,{})]}),(0,_.jsxs)(u,{value:75,children:[(0,_.jsx)(p,{children:`75%`}),(0,_.jsx)(m,{})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 25
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Progress value={60}>
            <ProgressLabel>Uploading...</ProgressLabel>
            <ProgressValue />
        </Progress>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-md flex-col gap-6">
            <Progress value={25}>
                <ProgressLabel>25%</ProgressLabel>
                <ProgressValue />
            </Progress>
            <Progress value={50}>
                <ProgressLabel>50%</ProgressLabel>
                <ProgressValue />
            </Progress>
            <Progress value={75}>
                <ProgressLabel>75%</ProgressLabel>
                <ProgressValue />
            </Progress>
        </div>
}`,...C.parameters?.docs?.source}}},w=[`Quarter`,`Half`,`ThreeQuarters`,`WithLabelAndValue`,`AllValues`]}))();export{C as AllValues,b as Half,y as Quarter,x as ThreeQuarters,S as WithLabelAndValue,w as __namedExportsOrder,v as default};
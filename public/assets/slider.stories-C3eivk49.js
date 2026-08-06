import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{a as i,o as a}from"./iframe-DdLYgxee.js";import{c as o,i as s,n as c,o as l,t as u,u as d}from"./slider-D_EPwW26.js";function f({className:e,defaultValue:t,value:n,min:r=0,max:a=100,...u}){let f=p.useMemo(()=>Array.isArray(n)?n:Array.isArray(t)?t:[r,a],[n,t,r,a]);return(0,m.jsx)(d,{className:i(`data-horizontal:w-full data-vertical:h-full`,e),"data-slot":`slider`,defaultValue:t,value:n,min:r,max:a,thumbAlignment:`edge`,...u,children:(0,m.jsxs)(o,{className:`relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col`,children:[(0,m.jsx)(l,{"data-slot":`slider-track`,className:`relative grow overflow-hidden rounded-full bg-muted select-none data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1`,children:(0,m.jsx)(c,{"data-slot":`slider-range`,className:`bg-primary select-none data-horizontal:h-full data-vertical:w-full`})}),Array.from({length:f.length},(e,t)=>(0,m.jsx)(s,{"data-slot":`slider-thumb`,className:`relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50`},t))]})})}var p,m,h=e((()=>{p=t(n(),1),u(),a(),m=r(),f.__docgenInfo={description:``,methods:[],displayName:`Slider`,props:{min:{defaultValue:{value:`0`,computed:!1},required:!1},max:{defaultValue:{value:`100`,computed:!1},required:!1}}}})),g,_,v,y,b,x;e((()=>{h(),g=r(),_={title:`UI/Slider`,component:f,tags:[`autodocs`]},v={args:{defaultValue:[50],max:100,min:0},decorators:[e=>(0,g.jsx)(`div`,{className:`w-[300px]`,children:(0,g.jsx)(e,{})})]},y={args:{defaultValue:[25,75],max:100,min:0},decorators:[e=>(0,g.jsx)(`div`,{className:`w-[300px]`,children:(0,g.jsx)(e,{})})]},b={args:{defaultValue:[50],max:100,min:0,step:10},decorators:[e=>(0,g.jsx)(`div`,{className:`w-[300px]`,children:(0,g.jsx)(e,{})})]},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    max: 100,
    min: 0
  },
  decorators: [Story => <div className="w-[300px]">
                <Story />
            </div>]
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [25, 75],
    max: 100,
    min: 0
  },
  decorators: [Story => <div className="w-[300px]">
                <Story />
            </div>]
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 10
  },
  decorators: [Story => <div className="w-[300px]">
                <Story />
            </div>]
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Range`,`WithSteps`]}))();export{v as Default,y as Range,b as WithSteps,x as __namedExportsOrder,_ as default};
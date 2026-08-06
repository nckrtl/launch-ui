import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-B7Te67-h.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{a as r,o as i}from"./iframe-B7K0Ky36.js";import{n as a,t as o}from"./separator-BhjAGLF9.js";import{c as s,i as c,n as l,o as u,t as d,u as f}from"./scroll-area-B0cG1BLx.js";function p({className:e,children:t,...n}){return(0,h.jsxs)(f,{"data-slot":`scroll-area`,className:r(`relative`,e),...n,children:[(0,h.jsx)(s,{"data-slot":`scroll-area-viewport`,className:`size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1`,children:t}),(0,h.jsx)(m,{}),(0,h.jsx)(l,{})]})}function m({className:e,orientation:t=`vertical`,...n}){return(0,h.jsx)(u,{"data-slot":`scroll-area-scrollbar`,"data-orientation":t,orientation:t,className:r(`flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent`,e),...n,children:(0,h.jsx)(c,{"data-slot":`scroll-area-thumb`,className:`relative flex-1 rounded-full bg-border`})})}var h,g=e((()=>{t(),d(),i(),h=n(),p.__docgenInfo={description:``,methods:[],displayName:`ScrollArea`},m.__docgenInfo={description:``,methods:[],displayName:`ScrollBar`,props:{orientation:{defaultValue:{value:`"vertical"`,computed:!1},required:!1}}}})),_,v,y,b,x,S;e((()=>{g(),a(),_=n(),v={title:`UI/ScrollArea`,component:p,tags:[`autodocs`]},y=Array.from({length:50},(e,t)=>`Item ${t+1}`),b={render:()=>(0,_.jsx)(p,{className:`h-72 w-48 rounded-md border`,children:(0,_.jsxs)(`div`,{className:`p-4`,children:[(0,_.jsx)(`h4`,{className:`mb-4 text-sm font-medium leading-none`,children:`Tags`}),y.map(e=>(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`text-sm`,children:e}),(0,_.jsx)(o,{className:`my-2`})]},e))]})})},x={render:()=>(0,_.jsx)(p,{className:`h-[300px] w-[350px] rounded-md border p-4`,children:(0,_.jsxs)(`div`,{className:`space-y-4`,children:[(0,_.jsx)(`h4`,{className:`text-sm font-medium leading-none`,children:`Long Article`}),Array.from({length:10},(e,t)=>(0,_.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`},t))]})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map(tag => <div key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                    </div>)}
            </div>
        </ScrollArea>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
            <div className="space-y-4">
                <h4 className="text-sm font-medium leading-none">Long Article</h4>
                {Array.from({
        length: 10
      }, (_, i) => <p key={i} className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>)}
            </div>
        </ScrollArea>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`LongContent`]}))();export{b as Default,x as LongContent,S as __namedExportsOrder,v as default};
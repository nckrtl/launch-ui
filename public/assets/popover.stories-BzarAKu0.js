import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-B7Te67-h.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{a as r,o as i}from"./iframe-nNUnpThA.js";import{r as a,t as o}from"./button-BwUDZS94.js";import{n as s,t as c}from"./input-T9zO6xIP.js";import{c as l,f as u,i as d,m as f,n as p,o as m,t as h,u as g}from"./popover-EaAUbRfn.js";function _({...e}){return(0,C.jsx)(f,{"data-slot":`popover`,...e})}function v({...e}){return(0,C.jsx)(u,{"data-slot":`popover-trigger`,...e})}function y({className:e,align:t=`center`,alignOffset:n=0,side:i=`bottom`,sideOffset:a=4,...o}){return(0,C.jsx)(g,{children:(0,C.jsx)(l,{align:t,alignOffset:n,side:i,sideOffset:a,className:`isolate z-50`,children:(0,C.jsx)(m,{"data-slot":`popover-content`,className:r(`z-50 flex w-72 origin-(--transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,e),...o})})})}function b({className:e,...t}){return(0,C.jsx)(`div`,{"data-slot":`popover-header`,className:r(`flex flex-col gap-0.5 text-sm`,e),...t})}function x({className:e,...t}){return(0,C.jsx)(d,{"data-slot":`popover-title`,className:r(`font-medium`,e),...t})}function S({className:e,...t}){return(0,C.jsx)(p,{"data-slot":`popover-description`,className:r(`text-muted-foreground`,e),...t})}var C,w=e((()=>{t(),h(),i(),C=n(),_.__docgenInfo={description:``,methods:[],displayName:`Popover`},y.__docgenInfo={description:``,methods:[],displayName:`PopoverContent`,props:{align:{defaultValue:{value:`"center"`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`0`,computed:!1},required:!1},side:{defaultValue:{value:`"bottom"`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`4`,computed:!1},required:!1}}},S.__docgenInfo={description:``,methods:[],displayName:`PopoverDescription`},b.__docgenInfo={description:``,methods:[],displayName:`PopoverHeader`},x.__docgenInfo={description:``,methods:[],displayName:`PopoverTitle`},v.__docgenInfo={description:``,methods:[],displayName:`PopoverTrigger`}})),T,E,D,O,k,A;e((()=>{a(),s(),w(),T=n(),E={title:`UI/Popover`,component:_,tags:[`autodocs`]},D={render:()=>(0,T.jsxs)(_,{children:[(0,T.jsx)(v,{render:(0,T.jsx)(o,{variant:`outline`}),children:`Open popover`}),(0,T.jsxs)(y,{children:[(0,T.jsxs)(b,{children:[(0,T.jsx)(x,{children:`Dimensions`}),(0,T.jsx)(S,{children:`Set the dimensions for the layer.`})]}),(0,T.jsxs)(`div`,{className:`grid gap-2`,children:[(0,T.jsxs)(`div`,{className:`grid grid-cols-3 items-center gap-4`,children:[(0,T.jsx)(`label`,{className:`text-sm`,htmlFor:`width`,children:`Width`}),(0,T.jsx)(c,{id:`width`,defaultValue:`100%`,className:`col-span-2`})]}),(0,T.jsxs)(`div`,{className:`grid grid-cols-3 items-center gap-4`,children:[(0,T.jsx)(`label`,{className:`text-sm`,htmlFor:`height`,children:`Height`}),(0,T.jsx)(c,{id:`height`,defaultValue:`25px`,className:`col-span-2`})]})]})]})]})},O={render:()=>(0,T.jsxs)(_,{children:[(0,T.jsx)(v,{render:(0,T.jsx)(o,{variant:`outline`}),children:`Info`}),(0,T.jsx)(y,{children:(0,T.jsxs)(b,{children:[(0,T.jsx)(x,{children:`Help`}),(0,T.jsx)(S,{children:`This is a simple popover with a title and description.`})]})})]})},k={render:()=>(0,T.jsx)(`div`,{className:`flex min-h-[200px] items-end justify-center`,children:(0,T.jsxs)(_,{children:[(0,T.jsx)(v,{render:(0,T.jsx)(o,{variant:`outline`}),children:`Open above`}),(0,T.jsx)(y,{side:`top`,children:(0,T.jsx)(`p`,{className:`text-sm`,children:`This popover appears above the trigger button.`})})]})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
                Open popover
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>Dimensions</PopoverTitle>
                    <PopoverDescription>
                        Set the dimensions for the layer.
                    </PopoverDescription>
                </PopoverHeader>
                <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                        <label className="text-sm" htmlFor="width">Width</label>
                        <Input id="width" defaultValue="100%" className="col-span-2" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                        <label className="text-sm" htmlFor="height">Height</label>
                        <Input id="height" defaultValue="25px" className="col-span-2" />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
                Info
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>Help</PopoverTitle>
                    <PopoverDescription>
                        This is a simple popover with a title and description.
                    </PopoverDescription>
                </PopoverHeader>
            </PopoverContent>
        </Popover>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex min-h-[200px] items-end justify-center">
            <Popover>
                <PopoverTrigger render={<Button variant="outline" />}>
                    Open above
                </PopoverTrigger>
                <PopoverContent side="top">
                    <p className="text-sm">This popover appears above the trigger button.</p>
                </PopoverContent>
            </Popover>
        </div>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Simple`,`TopPlacement`]}))();export{D as Default,O as Simple,k as TopPlacement,A as __namedExportsOrder,E as default};
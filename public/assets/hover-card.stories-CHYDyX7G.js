import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{a as n,o as r}from"./iframe-B7K0Ky36.js";import{c as i,i as a,n as o,o as s,t as c,u as l}from"./preview-card-DOnWZxFo.js";function u({...e}){return(0,p.jsx)(l,{"data-slot":`hover-card`,...e})}function d({...e}){return(0,p.jsx)(s,{"data-slot":`hover-card-trigger`,...e})}function f({className:e,side:t=`bottom`,sideOffset:r=4,align:s=`center`,alignOffset:c=4,...l}){return(0,p.jsx)(i,{"data-slot":`hover-card-portal`,children:(0,p.jsx)(a,{align:s,alignOffset:c,side:t,sideOffset:r,className:`isolate z-50`,children:(0,p.jsx)(o,{"data-slot":`hover-card-content`,className:n(`z-50 w-64 origin-(--transform-origin) rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`,e),...l})})})}var p,m=e((()=>{c(),r(),p=t(),u.__docgenInfo={description:``,methods:[],displayName:`HoverCard`},d.__docgenInfo={description:``,methods:[],displayName:`HoverCardTrigger`},f.__docgenInfo={description:``,methods:[],displayName:`HoverCardContent`,props:{side:{defaultValue:{value:`"bottom"`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`4`,computed:!1},required:!1},align:{defaultValue:{value:`"center"`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`4`,computed:!1},required:!1}}}})),h,g,_,v,y;e((()=>{m(),h=t(),g={title:`UI/HoverCard`,component:u,tags:[`autodocs`]},_={render:()=>(0,h.jsxs)(u,{children:[(0,h.jsx)(d,{children:(0,h.jsx)(`a`,{href:`#`,className:`text-sm font-medium underline underline-offset-4`,children:`@nextjs`})}),(0,h.jsx)(f,{children:(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(`p`,{className:`text-sm font-semibold`,children:`Next.js`}),(0,h.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`The React Framework — created and maintained by @vercel.`}),(0,h.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Joined December 2021`})]})})]})},v={render:()=>(0,h.jsx)(`div`,{className:`flex min-h-[200px] items-end justify-center`,children:(0,h.jsxs)(u,{children:[(0,h.jsx)(d,{children:(0,h.jsx)(`a`,{href:`#`,className:`text-sm font-medium underline underline-offset-4`,children:`Hover for details`})}),(0,h.jsx)(f,{side:`top`,children:(0,h.jsx)(`p`,{className:`text-sm`,children:`This hover card appears above the trigger.`})})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <HoverCard>
            <HoverCardTrigger>
                <a href="#" className="text-sm font-medium underline underline-offset-4">
                    @nextjs
                </a>
            </HoverCardTrigger>
            <HoverCardContent>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">Next.js</p>
                    <p className="text-sm text-muted-foreground">
                        The React Framework — created and maintained by @vercel.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Joined December 2021
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex min-h-[200px] items-end justify-center">
            <HoverCard>
                <HoverCardTrigger>
                    <a href="#" className="text-sm font-medium underline underline-offset-4">
                        Hover for details
                    </a>
                </HoverCardTrigger>
                <HoverCardContent side="top">
                    <p className="text-sm">This hover card appears above the trigger.</p>
                </HoverCardContent>
            </HoverCard>
        </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithSideTop`]}))();export{_ as Default,v as WithSideTop,y as __namedExportsOrder,g as default};
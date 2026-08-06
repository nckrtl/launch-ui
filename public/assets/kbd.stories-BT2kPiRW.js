import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{a as n,o as r}from"./iframe-B7K0Ky36.js";function i({className:e,...t}){return(0,o.jsx)(`kbd`,{"data-slot":`kbd`,className:n(`pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3`,e),...t})}function a({className:e,...t}){return(0,o.jsx)(`kbd`,{"data-slot":`kbd-group`,className:n(`inline-flex items-center gap-1`,e),...t})}var o,s=e((()=>{r(),o=t(),i.__docgenInfo={description:``,methods:[],displayName:`Kbd`},a.__docgenInfo={description:``,methods:[],displayName:`KbdGroup`}})),c,l,u,d,f,p;e((()=>{s(),c=t(),l={title:`UI/Kbd`,component:i,tags:[`autodocs`]},u={args:{children:`K`}},d={render:()=>(0,c.jsxs)(a,{children:[(0,c.jsx)(i,{children:`⌘`}),(0,c.jsx)(i,{children:`K`})]})},f={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between gap-8`,children:[(0,c.jsx)(`span`,{className:`text-sm`,children:`Copy`}),(0,c.jsxs)(a,{children:[(0,c.jsx)(i,{children:`⌘`}),(0,c.jsx)(i,{children:`C`})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center justify-between gap-8`,children:[(0,c.jsx)(`span`,{className:`text-sm`,children:`Paste`}),(0,c.jsxs)(a,{children:[(0,c.jsx)(i,{children:`⌘`}),(0,c.jsx)(i,{children:`V`})]})]}),(0,c.jsxs)(`div`,{className:`flex items-center justify-between gap-8`,children:[(0,c.jsx)(`span`,{className:`text-sm`,children:`Undo`}),(0,c.jsxs)(a,{children:[(0,c.jsx)(i,{children:`⌘`}),(0,c.jsx)(i,{children:`Z`})]})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'K'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
        </KbdGroup>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-8">
                <span className="text-sm">Copy</span>
                <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>C</Kbd>
                </KbdGroup>
            </div>
            <div className="flex items-center justify-between gap-8">
                <span className="text-sm">Paste</span>
                <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>V</Kbd>
                </KbdGroup>
            </div>
            <div className="flex items-center justify-between gap-8">
                <span className="text-sm">Undo</span>
                <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>Z</Kbd>
                </KbdGroup>
            </div>
        </div>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Shortcut`,`MultipleShortcuts`]}))();export{u as Default,f as MultipleShortcuts,d as Shortcut,p as __namedExportsOrder,l as default};
import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{a as n,o as r}from"./iframe-nNUnpThA.js";function i({ratio:e,className:t,...r}){return(0,a.jsx)(`div`,{"data-slot":`aspect-ratio`,style:{"--ratio":e},className:n(`relative aspect-(--ratio)`,t),...r})}var a,o=e((()=>{r(),a=t(),i.__docgenInfo={description:``,methods:[],displayName:`AspectRatio`,props:{ratio:{required:!0,tsType:{name:`number`},description:``}}}})),s,c,l,u,d,f;e((()=>{o(),s=t(),c={title:`UI/AspectRatio`,component:i,tags:[`autodocs`]},l={render:()=>(0,s.jsx)(`div`,{className:`w-[450px]`,children:(0,s.jsx)(i,{ratio:16/9,children:(0,s.jsx)(`img`,{src:`https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80`,alt:`Landscape photograph`,className:`size-full rounded-lg object-cover`})})})},u={render:()=>(0,s.jsx)(`div`,{className:`w-[300px]`,children:(0,s.jsx)(i,{ratio:1,children:(0,s.jsx)(`div`,{className:`flex size-full items-center justify-center rounded-lg bg-muted`,children:(0,s.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`1:1`})})})})},d={render:()=>(0,s.jsx)(`div`,{className:`w-[250px]`,children:(0,s.jsx)(i,{ratio:3/4,children:(0,s.jsx)(`div`,{className:`flex size-full items-center justify-center rounded-lg bg-muted`,children:(0,s.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`3:4`})})})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[450px]">
            <AspectRatio ratio={16 / 9}>
                <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Landscape photograph" className="size-full rounded-lg object-cover" />
            </AspectRatio>
        </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
            <AspectRatio ratio={1}>
                <div className="flex size-full items-center justify-center rounded-lg bg-muted">
                    <span className="text-sm text-muted-foreground">1:1</span>
                </div>
            </AspectRatio>
        </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[250px]">
            <AspectRatio ratio={3 / 4}>
                <div className="flex size-full items-center justify-center rounded-lg bg-muted">
                    <span className="text-sm text-muted-foreground">3:4</span>
                </div>
            </AspectRatio>
        </div>
}`,...d.parameters?.docs?.source}}},f=[`Widescreen`,`Square`,`Portrait`]}))();export{d as Portrait,u as Square,l as Widescreen,f as __namedExportsOrder,c as default};
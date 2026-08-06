import{i as e}from"./preload-helper-CT_b8DTk.js";import{o as t,r as n}from"./useRenderElement-CLC7beMa.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{a as i,o as a}from"./iframe-DdLYgxee.js";import{r as o,t as s}from"./use-render-C5E2kwDc.js";import{n as c,t as l}from"./dist-Hqe30GM4.js";function u({className:e,variant:n=`default`,render:r,...a}){return o({defaultTagName:`span`,props:t({className:i(d({variant:n}),e)},a),render:r,state:{slot:`badge`,variant:n}})}var d,f=e((()=>{n(),s(),c(),a(),d=l(`group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!`,{variants:{variant:{default:`bg-primary text-primary-foreground [a]:hover:bg-primary/80`,secondary:`bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80`,destructive:`bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20`,outline:`border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground`,ghost:`hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50`,link:`text-primary underline-offset-4 hover:underline`}},defaultVariants:{variant:`default`}})})),p,m,h,g,_,v,y,b;e((()=>{f(),p=r(),m={title:`UI/Badge`,component:u,tags:[`autodocs`]},h={args:{children:`Badge`}},g={args:{variant:`secondary`,children:`Secondary`}},_={args:{variant:`destructive`,children:`Destructive`}},v={args:{variant:`outline`,children:`Outline`}},y={render:()=>(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,p.jsx)(u,{variant:`default`,children:`Default`}),(0,p.jsx)(u,{variant:`secondary`,children:`Secondary`}),(0,p.jsx)(u,{variant:`destructive`,children:`Destructive`}),(0,p.jsx)(u,{variant:`outline`,children:`Outline`})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Secondary`,`Destructive`,`Outline`,`AllVariants`]}))();export{y as AllVariants,h as Default,_ as Destructive,v as Outline,g as Secondary,b as __namedExportsOrder,m as default};
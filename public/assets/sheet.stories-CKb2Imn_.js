import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{r as n,t as r}from"./button-B6nocP7H.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./sheet-sToESMlR.js";var d,f,p,m,h;e((()=>{n(),l(),d=t(),f={title:`UI/Sheet`,component:u,tags:[`autodocs`]},p={render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(s,{asChild:!0,children:(0,d.jsx)(r,{variant:`outline`,children:`Open Sheet`})}),(0,d.jsxs)(o,{children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{children:`Sheet Title`}),(0,d.jsx)(c,{children:`This is a sheet that slides in from the right.`})]}),(0,d.jsx)(`div`,{className:`p-4`,children:(0,d.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Sheet content goes here.`})})]})]})},m={render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(s,{asChild:!0,children:(0,d.jsx)(r,{variant:`outline`,children:`Open Left Sheet`})}),(0,d.jsxs)(o,{side:`left`,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{children:`Left Sheet`}),(0,d.jsx)(c,{children:`This sheet slides in from the left.`})]}),(0,d.jsx)(`div`,{className:`p-4`,children:(0,d.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Sheet content goes here.`})})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Sheet Title</SheetTitle>
                    <SheetDescription>
                        This is a sheet that slides in from the right.
                    </SheetDescription>
                </SheetHeader>
                <div className="p-4">
                    <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
                </div>
            </SheetContent>
        </Sheet>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Left Sheet</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Left Sheet</SheetTitle>
                    <SheetDescription>
                        This sheet slides in from the left.
                    </SheetDescription>
                </SheetHeader>
                <div className="p-4">
                    <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
                </div>
            </SheetContent>
        </Sheet>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`LeftSide`]}))();export{p as Default,m as LeftSide,h as __namedExportsOrder,f as default};
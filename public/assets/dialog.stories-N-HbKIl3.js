import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{r as n,t as r}from"./button-B6nocP7H.js";import{a as i,c as a,i as o,l as s,o as c,r as l,s as u,t as d}from"./dialog-W5pzn9cf.js";var f,p,m,h,g;e((()=>{n(),s(),f=t(),p={title:`UI/Dialog`,component:d,tags:[`autodocs`]},m={render:()=>(0,f.jsxs)(d,{children:[(0,f.jsx)(a,{render:(0,f.jsx)(r,{variant:`outline`}),children:`Open Dialog`}),(0,f.jsxs)(l,{children:[(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{children:`Edit Profile`}),(0,f.jsx)(o,{children:`Make changes to your profile here. Click save when you're done.`})]}),(0,f.jsx)(`div`,{className:`grid gap-4 py-4`,children:(0,f.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Dialog content goes here.`})}),(0,f.jsx)(i,{children:(0,f.jsx)(r,{children:`Save changes`})})]})]})},h={render:()=>(0,f.jsxs)(d,{children:[(0,f.jsx)(a,{render:(0,f.jsx)(r,{variant:`outline`}),children:`View Details`}),(0,f.jsxs)(l,{showCloseButton:!1,children:[(0,f.jsxs)(c,{children:[(0,f.jsx)(u,{children:`Details`}),(0,f.jsx)(o,{children:`Here are the details you requested.`})]}),(0,f.jsx)(`div`,{className:`py-4`,children:(0,f.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Some detailed information displayed in the dialog body.`})}),(0,f.jsx)(i,{showCloseButton:!0,children:(0,f.jsx)(r,{children:`Confirm`})})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
                Open Dialog
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <p className="text-sm text-muted-foreground">
                        Dialog content goes here.
                    </p>
                </div>
                <DialogFooter>
                    <Button>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
                View Details
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle>Details</DialogTitle>
                    <DialogDescription>
                        Here are the details you requested.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                        Some detailed information displayed in the dialog body.
                    </p>
                </div>
                <DialogFooter showCloseButton>
                    <Button>Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithCloseInFooter`]}))();export{m as Default,h as WithCloseInFooter,g as __namedExportsOrder,p as default};
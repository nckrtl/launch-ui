import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{a as n,o as r}from"./iframe-BO5it63R.js";import{n as i,t as a}from"./dist-wXpA760M.js";import{r as o,t as s}from"./button-Dn8eJ8G9.js";import{J as c,Q as l,t as u,v as d}from"./lucide-react-DwrYPWFq.js";function f({className:e,...t}){return(0,v.jsx)(`div`,{"data-slot":`empty`,className:n(`flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance`,e),...t})}function p({className:e,...t}){return(0,v.jsx)(`div`,{"data-slot":`empty-header`,className:n(`flex max-w-sm flex-col items-center gap-2`,e),...t})}function m({className:e,variant:t=`default`,...r}){return(0,v.jsx)(`div`,{"data-slot":`empty-icon`,"data-variant":t,className:n(y({variant:t,className:e})),...r})}function h({className:e,...t}){return(0,v.jsx)(`div`,{"data-slot":`empty-title`,className:n(`text-sm font-medium tracking-tight`,e),...t})}function g({className:e,...t}){return(0,v.jsx)(`div`,{"data-slot":`empty-description`,className:n(`text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary`,e),...t})}function _({className:e,...t}){return(0,v.jsx)(`div`,{"data-slot":`empty-content`,className:n(`flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance`,e),...t})}var v,y,b=e((()=>{i(),r(),v=t(),y=a(`mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0`,{variants:{variant:{default:`bg-transparent`,icon:`flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4`}},defaultVariants:{variant:`default`}}),f.__docgenInfo={description:``,methods:[],displayName:`Empty`},p.__docgenInfo={description:``,methods:[],displayName:`EmptyHeader`},h.__docgenInfo={description:``,methods:[],displayName:`EmptyTitle`},g.__docgenInfo={description:``,methods:[],displayName:`EmptyDescription`},_.__docgenInfo={description:``,methods:[],displayName:`EmptyContent`},m.__docgenInfo={description:``,methods:[],displayName:`EmptyMedia`,props:{variant:{defaultValue:{value:`"default"`,computed:!1},required:!1}}}})),x,S,C,w,T,E;e((()=>{u(),o(),b(),x=t(),S={title:`UI/Empty`,component:f,tags:[`autodocs`]},C={render:()=>(0,x.jsx)(f,{children:(0,x.jsxs)(p,{children:[(0,x.jsx)(m,{children:(0,x.jsx)(c,{className:`size-10 text-muted-foreground`})}),(0,x.jsx)(h,{children:`No results found`}),(0,x.jsx)(g,{children:`There are no items to display at this time.`})]})})},w={render:()=>(0,x.jsx)(f,{children:(0,x.jsxs)(p,{children:[(0,x.jsx)(m,{variant:`icon`,children:(0,x.jsx)(d,{})}),(0,x.jsx)(h,{children:`No search results`}),(0,x.jsx)(g,{children:`Try adjusting your search or filter to find what you're looking for.`})]})})},T={render:()=>(0,x.jsxs)(f,{children:[(0,x.jsxs)(p,{children:[(0,x.jsx)(m,{variant:`icon`,children:(0,x.jsx)(l,{})}),(0,x.jsx)(h,{children:`No documents yet`}),(0,x.jsx)(g,{children:`Get started by creating your first document.`})]}),(0,x.jsx)(_,{children:(0,x.jsx)(s,{children:`Create document`})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Empty>
            <EmptyHeader>
                <EmptyMedia>
                    <InboxIcon className="size-10 text-muted-foreground" />
                </EmptyMedia>
                <EmptyTitle>No results found</EmptyTitle>
                <EmptyDescription>
                    There are no items to display at this time.
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <SearchIcon />
                </EmptyMedia>
                <EmptyTitle>No search results</EmptyTitle>
                <EmptyDescription>
                    Try adjusting your search or filter to find what you're looking for.
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <FileTextIcon />
                </EmptyMedia>
                <EmptyTitle>No documents yet</EmptyTitle>
                <EmptyDescription>
                    Get started by creating your first document.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button>Create document</Button>
            </EmptyContent>
        </Empty>
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithIconVariant`,`WithAction`]}))();export{C as Default,T as WithAction,w as WithIconVariant,E as __namedExportsOrder,S as default};
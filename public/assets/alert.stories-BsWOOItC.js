import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-B7Te67-h.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{a as r,o as i}from"./iframe-B7K0Ky36.js";import{n as a,t as o}from"./dist-Cd5wg63X.js";import{Wt as s,t as c,u as l}from"./lucide-react-DwrYPWFq.js";function u({className:e,variant:t,...n}){return(0,m.jsx)(`div`,{"data-slot":`alert`,role:`alert`,className:r(h({variant:t}),e),...n})}function d({className:e,...t}){return(0,m.jsx)(`div`,{"data-slot":`alert-title`,className:r(`font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground`,e),...t})}function f({className:e,...t}){return(0,m.jsx)(`div`,{"data-slot":`alert-description`,className:r(`text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4`,e),...t})}function p({className:e,...t}){return(0,m.jsx)(`div`,{"data-slot":`alert-action`,className:r(`absolute top-2 right-2`,e),...t})}var m,h,g=e((()=>{t(),a(),i(),m=n(),h=o(`group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-card text-card-foreground`,destructive:`bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current`}},defaultVariants:{variant:`default`}}),u.__docgenInfo={description:``,methods:[],displayName:`Alert`},d.__docgenInfo={description:``,methods:[],displayName:`AlertTitle`},f.__docgenInfo={description:``,methods:[],displayName:`AlertDescription`},p.__docgenInfo={description:``,methods:[],displayName:`AlertAction`}})),_,v,y,b,x,S;e((()=>{c(),g(),_=n(),v={title:`UI/Alert`,component:u,tags:[`autodocs`]},y={render:()=>(0,_.jsxs)(u,{children:[(0,_.jsx)(l,{}),(0,_.jsx)(d,{children:`Heads up!`}),(0,_.jsx)(f,{children:`You can add components to your app using the CLI.`})]})},b={render:()=>(0,_.jsxs)(u,{variant:`destructive`,children:[(0,_.jsx)(s,{}),(0,_.jsx)(d,{children:`Error`}),(0,_.jsx)(f,{children:`Your session has expired. Please log in again.`})]})},x={render:()=>(0,_.jsxs)(u,{children:[(0,_.jsx)(d,{children:`Note`}),(0,_.jsx)(f,{children:`This is a simple alert without an icon.`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the CLI.
            </AlertDescription>
        </Alert>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
                This is a simple alert without an icon.
            </AlertDescription>
        </Alert>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Destructive`,`WithoutIcon`]}))();export{y as Default,b as Destructive,x as WithoutIcon,S as __namedExportsOrder,v as default};
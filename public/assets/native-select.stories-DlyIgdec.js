import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-B7Te67-h.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{a as r,o as i}from"./iframe-BO5it63R.js";import{mt as a,t as o}from"./lucide-react-DwrYPWFq.js";function s({className:e,size:t=`default`,...n}){return(0,u.jsxs)(`div`,{className:r(`group/native-select relative w-fit has-[select:disabled]:opacity-50`,e),"data-slot":`native-select-wrapper`,"data-size":t,children:[(0,u.jsx)(`select`,{"data-slot":`native-select`,"data-size":t,className:`h-8 w-full min-w-0 appearance-none rounded-lg border border-input bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,...n}),(0,u.jsx)(a,{className:`pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground select-none`,"aria-hidden":`true`,"data-slot":`native-select-icon`})]})}function c({...e}){return(0,u.jsx)(`option`,{"data-slot":`native-select-option`,...e})}function l({className:e,...t}){return(0,u.jsx)(`optgroup`,{"data-slot":`native-select-optgroup`,className:r(e),...t})}var u,d=e((()=>{t(),i(),o(),u=n(),s.__docgenInfo={description:``,methods:[],displayName:`NativeSelect`,props:{size:{required:!1,tsType:{name:`union`,raw:`"sm" | "default"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"default"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}},l.__docgenInfo={description:``,methods:[],displayName:`NativeSelectOptGroup`},c.__docgenInfo={description:``,methods:[],displayName:`NativeSelectOption`}})),f,p,m,h,g,_;e((()=>{d(),f=n(),p={title:`UI/NativeSelect`,component:s,tags:[`autodocs`]},m={render:()=>(0,f.jsxs)(s,{children:[(0,f.jsx)(c,{value:``,children:`Select an option`}),(0,f.jsx)(c,{value:`apple`,children:`Apple`}),(0,f.jsx)(c,{value:`banana`,children:`Banana`}),(0,f.jsx)(c,{value:`cherry`,children:`Cherry`})]})},h={render:()=>(0,f.jsxs)(s,{size:`sm`,children:[(0,f.jsx)(c,{value:``,children:`Select a fruit`}),(0,f.jsx)(c,{value:`apple`,children:`Apple`}),(0,f.jsx)(c,{value:`banana`,children:`Banana`}),(0,f.jsx)(c,{value:`cherry`,children:`Cherry`})]})},g={render:()=>(0,f.jsxs)(s,{children:[(0,f.jsx)(c,{value:``,children:`Choose a vehicle`}),(0,f.jsxs)(l,{label:`Cars`,children:[(0,f.jsx)(c,{value:`sedan`,children:`Sedan`}),(0,f.jsx)(c,{value:`suv`,children:`SUV`}),(0,f.jsx)(c,{value:`coupe`,children:`Coupe`})]}),(0,f.jsxs)(l,{label:`Trucks`,children:[(0,f.jsx)(c,{value:`pickup`,children:`Pickup`}),(0,f.jsx)(c,{value:`semi`,children:`Semi`})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect>
            <NativeSelectOption value="">Select an option</NativeSelectOption>
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
        </NativeSelect>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect size="sm">
            <NativeSelectOption value="">Select a fruit</NativeSelectOption>
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
        </NativeSelect>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <NativeSelect>
            <NativeSelectOption value="">Choose a vehicle</NativeSelectOption>
            <NativeSelectOptGroup label="Cars">
                <NativeSelectOption value="sedan">Sedan</NativeSelectOption>
                <NativeSelectOption value="suv">SUV</NativeSelectOption>
                <NativeSelectOption value="coupe">Coupe</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Trucks">
                <NativeSelectOption value="pickup">Pickup</NativeSelectOption>
                <NativeSelectOption value="semi">Semi</NativeSelectOption>
            </NativeSelectOptGroup>
        </NativeSelect>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Small`,`WithOptGroups`]}))();export{m as Default,h as Small,g as WithOptGroups,_ as __namedExportsOrder,p as default};
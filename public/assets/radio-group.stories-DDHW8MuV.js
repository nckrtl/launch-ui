import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{a as n,o as r}from"./iframe-BO5it63R.js";import{a as i,i as a,n as o,s,t as c}from"./radio-group-fzllTeGE.js";import{n as l,t as u}from"./label-D29Uvn-X.js";function d({className:e,...t}){return(0,p.jsx)(o,{"data-slot":`radio-group`,className:n(`grid w-full gap-2`,e),...t})}function f({className:e,...t}){return(0,p.jsx)(s,{"data-slot":`radio-group-item`,className:n(`group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary`,e),...t,children:(0,p.jsx)(i,{"data-slot":`radio-group-indicator`,className:`flex size-4 items-center justify-center`,children:(0,p.jsx)(`span`,{className:`absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground`})})})}var p,m=e((()=>{a(),c(),r(),p=t(),d.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`},f.__docgenInfo={description:``,methods:[],displayName:`RadioGroupItem`}})),h,g,_,v,y;e((()=>{m(),l(),h=t(),g={title:`UI/RadioGroup`,component:d,tags:[`autodocs`]},_={render:()=>(0,h.jsxs)(d,{defaultValue:`option-1`,children:[(0,h.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,h.jsx)(f,{value:`option-1`,id:`option-1`}),(0,h.jsx)(u,{htmlFor:`option-1`,children:`Option One`})]}),(0,h.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,h.jsx)(f,{value:`option-2`,id:`option-2`}),(0,h.jsx)(u,{htmlFor:`option-2`,children:`Option Two`})]}),(0,h.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,h.jsx)(f,{value:`option-3`,id:`option-3`}),(0,h.jsx)(u,{htmlFor:`option-3`,children:`Option Three`})]})]})},v={render:()=>(0,h.jsxs)(d,{defaultValue:`comfortable`,children:[(0,h.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,h.jsx)(f,{value:`comfortable`,id:`comfortable`}),(0,h.jsx)(u,{htmlFor:`comfortable`,children:`Comfortable`})]}),(0,h.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,h.jsx)(f,{value:`compact`,id:`compact`}),(0,h.jsx)(u,{htmlFor:`compact`,children:`Compact`})]}),(0,h.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,h.jsx)(f,{value:`spacious`,id:`spacious`,disabled:!0}),(0,h.jsx)(u,{htmlFor:`spacious`,className:`opacity-50`,children:`Spacious (disabled)`})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-1">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-1" id="option-1" />
                <Label htmlFor="option-1">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-2" id="option-2" />
                <Label htmlFor="option-2">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-3" id="option-3" />
                <Label htmlFor="option-3">Option Three</Label>
            </div>
        </RadioGroup>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="comfortable" />
                <Label htmlFor="comfortable">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="compact" />
                <Label htmlFor="compact">Compact</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="spacious" id="spacious" disabled />
                <Label htmlFor="spacious" className="opacity-50">Spacious (disabled)</Label>
            </div>
        </RadioGroup>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithDisabledOption`]}))();export{_ as Default,v as WithDisabledOption,y as __namedExportsOrder,g as default};
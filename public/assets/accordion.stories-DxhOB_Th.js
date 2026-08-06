import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{a as n,o as r}from"./iframe-B7K0Ky36.js";import{ct as i,mt as a,t as o}from"./lucide-react-DwrYPWFq.js";import{c as s,i as c,n as l,o as u,t as d,u as f}from"./accordion-BJ-oGLJj.js";function p({className:e,...t}){return(0,_.jsx)(f,{"data-slot":`accordion`,className:n(`flex w-full flex-col`,e),...t})}function m({className:e,...t}){return(0,_.jsx)(s,{"data-slot":`accordion-item`,className:n(`not-last:border-b`,e),...t})}function h({className:e,children:t,...r}){return(0,_.jsx)(u,{className:`flex`,children:(0,_.jsxs)(c,{"data-slot":`accordion-trigger`,className:n(`group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground`,e),...r,children:[t,(0,_.jsx)(a,{"data-slot":`accordion-trigger-icon`,className:`pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden`}),(0,_.jsx)(i,{"data-slot":`accordion-trigger-icon`,className:`pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline`})]})})}function g({className:e,children:t,...r}){return(0,_.jsx)(l,{"data-slot":`accordion-content`,className:`overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up`,...r,children:(0,_.jsx)(`div`,{className:n(`h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4`,e),children:t})})}var _,v=e((()=>{d(),r(),o(),_=t(),p.__docgenInfo={description:``,methods:[],displayName:`Accordion`},m.__docgenInfo={description:``,methods:[],displayName:`AccordionItem`},h.__docgenInfo={description:``,methods:[],displayName:`AccordionTrigger`},g.__docgenInfo={description:``,methods:[],displayName:`AccordionContent`}})),y,b,x,S,C;e((()=>{v(),y=t(),b={title:`UI/Accordion`,component:p,tags:[`autodocs`]},x={render:()=>(0,y.jsxs)(p,{children:[(0,y.jsxs)(m,{children:[(0,y.jsx)(h,{children:`Is it accessible?`}),(0,y.jsx)(g,{children:(0,y.jsx)(`p`,{children:`Yes. It adheres to the WAI-ARIA design pattern.`})})]}),(0,y.jsxs)(m,{children:[(0,y.jsx)(h,{children:`Is it styled?`}),(0,y.jsx)(g,{children:(0,y.jsx)(`p`,{children:`Yes. It comes with default styles that match the other components' aesthetic.`})})]}),(0,y.jsxs)(m,{children:[(0,y.jsx)(h,{children:`Is it animated?`}),(0,y.jsx)(g,{children:(0,y.jsx)(`p`,{children:`Yes. It's animated by default, but you can disable it if you prefer.`})})]})]})},S={render:()=>(0,y.jsxs)(p,{defaultValue:[0],children:[(0,y.jsxs)(m,{children:[(0,y.jsx)(h,{children:`First item (open by default)`}),(0,y.jsx)(g,{children:(0,y.jsx)(`p`,{children:`This accordion item is expanded when the page loads.`})})]}),(0,y.jsxs)(m,{children:[(0,y.jsx)(h,{children:`Second item`}),(0,y.jsx)(g,{children:(0,y.jsx)(`p`,{children:`This item starts collapsed.`})})]}),(0,y.jsxs)(m,{children:[(0,y.jsx)(h,{children:`Third item`}),(0,y.jsx)(g,{children:(0,y.jsx)(`p`,{children:`This item also starts collapsed.`})})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion>
            <AccordionItem>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Yes. It comes with default styles that match the other
                        components' aesthetic.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Yes. It's animated by default, but you can disable it if
                        you prefer.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion defaultValue={[0]}>
            <AccordionItem>
                <AccordionTrigger>First item (open by default)</AccordionTrigger>
                <AccordionContent>
                    <p>This accordion item is expanded when the page loads.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionTrigger>Second item</AccordionTrigger>
                <AccordionContent>
                    <p>This item starts collapsed.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionTrigger>Third item</AccordionTrigger>
                <AccordionContent>
                    <p>This item also starts collapsed.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`OpenByDefault`]}))();export{x as Default,S as OpenByDefault,C as __namedExportsOrder,b as default};
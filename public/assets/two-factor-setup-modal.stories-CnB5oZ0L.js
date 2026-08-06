import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./two-factor-setup-modal-ZWO5QNmG.js";var r,i,a,o,s,c;e((()=>{n(),r={title:`Components/TwoFactorSetupModal`,component:t},i={args:{open:!0,onOpenChange:()=>{},qrCodeSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="black"/><path d="M6 6h12v12H6z" fill="white"/></svg>`,manualSetupKey:`ABCD-EFGH-IJKL`,recoveryCodes:[`111111`,`222222`],onEnable:()=>console.log(`enable requested`),onConfirm:e=>console.log(`confirm`,e),onFetchSetupData:()=>console.log(`fetch setup data`)}},a={args:{...i.args,confirmationRequired:!0}},o={args:{...i.args,errors:{code:`The confirmation code is not valid.`}}},s={args:{...i.args,processing:!0}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: () => {},
    qrCodeSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="black"/><path d="M6 6h12v12H6z" fill="white"/></svg>',
    manualSetupKey: 'ABCD-EFGH-IJKL',
    recoveryCodes: ['111111', '222222'],
    onEnable: () => console.log('enable requested'),
    onConfirm: (code: string) => console.log('confirm', code),
    onFetchSetupData: () => console.log('fetch setup data')
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Step1.args,
    confirmationRequired: true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Step1.args,
    errors: {
      code: 'The confirmation code is not valid.'
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Step1.args,
    processing: true
  }
}`,...s.parameters?.docs?.source}}},c=[`Step1`,`Step2`,`WithError`,`Processing`]}))();export{s as Processing,i as Step1,a as Step2,o as WithError,c as __namedExportsOrder,r as default};
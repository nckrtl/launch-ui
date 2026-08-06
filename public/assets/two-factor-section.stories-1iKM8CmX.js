import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,r as a,t as o}from"./dist-DzTDLrYO.js";import{n as s,t as c}from"./two-factor-section-DRuWKOCw.js";var l,u,d,f,p,m,h;e((()=>{l=t(n(),1),o(),c(),u=r(),d={title:`Components/TwoFactorSection`,component:s},f={args:{enabled:!1,manualSetupKey:`ABCD-EFGH-IJKL`,onEnable:()=>console.log(`enable`),onFetchSetupData:()=>console.log(`fetch setup data`),onFetchRecoveryCodes:()=>console.log(`fetch recovery codes`)}},p={args:{enabled:!0,qrCodeSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="black"/><path d="M6 6h12v12H6z" fill="white"/></svg>`,manualSetupKey:`ABCD-EFGH-IJKL`,recoveryCodes:[`AA11BB22`,`CC33DD44`,`EE55FF66`],onDisable:()=>console.log(`disable`),onFetchRecoveryCodes:()=>console.log(`fetch recovery codes`),onRegenerateCodes:()=>console.log(`regenerate codes`),onEnable:()=>console.log(`enable`),onConfirm:e=>console.log(`confirm`,e),onFetchSetupData:()=>console.log(`fetch setup data`)}},m={render:()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{className:`space-y-2`,children:[(0,u.jsx)(s,{enabled:!1,manualSetupKey:`ABCD-EFGH-IJKL`,qrCodeSvg:`<svg/>`,confirmationRequired:!1,onEnable:()=>console.log(`onEnable`),onFetchSetupData:()=>console.log(`fetch setup data`),onConfirm:e=>console.log(`confirm`,e)}),(0,u.jsx)(`button`,{type:`button`,onClick:()=>t(!e),className:`text-xs text-muted-foreground underline`,children:`toggle debug control`})]})},play:async({canvasElement:e})=>{let t=a(e);await i.click(t.getByRole(`button`,{name:/enable two-factor authentication/i}))}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: false,
    manualSetupKey: 'ABCD-EFGH-IJKL',
    onEnable: () => console.log('enable'),
    onFetchSetupData: () => console.log('fetch setup data'),
    onFetchRecoveryCodes: () => console.log('fetch recovery codes')
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    enabled: true,
    qrCodeSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="black"/><path d="M6 6h12v12H6z" fill="white"/></svg>',
    manualSetupKey: 'ABCD-EFGH-IJKL',
    recoveryCodes: ['AA11BB22', 'CC33DD44', 'EE55FF66'],
    onDisable: () => console.log('disable'),
    onFetchRecoveryCodes: () => console.log('fetch recovery codes'),
    onRegenerateCodes: () => console.log('regenerate codes'),
    onEnable: () => console.log('enable'),
    onConfirm: (code: string) => console.log('confirm', code),
    onFetchSetupData: () => console.log('fetch setup data')
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(false);
    return <div className="space-y-2">
                <TwoFactorSection enabled={false} manualSetupKey="ABCD-EFGH-IJKL" qrCodeSvg="<svg/>" confirmationRequired={false} onEnable={() => console.log('onEnable')} onFetchSetupData={() => console.log('fetch setup data')} onConfirm={code => console.log('confirm', code)} />
                <button type="button" onClick={() => setVisible(!visible)} className="text-xs text-muted-foreground underline">
                    toggle debug control
                </button>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /enable two-factor authentication/i
    }));
  }
}`,...m.parameters?.docs?.source}}},h=[`Disabled`,`Enabled`,`SetupFlow`]}))();export{f as Disabled,p as Enabled,m as SetupFlow,h as __namedExportsOrder,d as default};
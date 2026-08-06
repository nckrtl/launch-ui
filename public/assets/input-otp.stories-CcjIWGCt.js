import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{a as n,i as r,n as i,r as a,t as o}from"./input-otp-bO1prpQj.js";var s,c,l,u,d,f;e((()=>{n(),s=t(),c={title:`UI/InputOTP`,component:o,tags:[`autodocs`]},l={render:()=>(0,s.jsxs)(o,{maxLength:6,children:[(0,s.jsxs)(i,{children:[(0,s.jsx)(r,{index:0}),(0,s.jsx)(r,{index:1}),(0,s.jsx)(r,{index:2})]}),(0,s.jsx)(a,{}),(0,s.jsxs)(i,{children:[(0,s.jsx)(r,{index:3}),(0,s.jsx)(r,{index:4}),(0,s.jsx)(r,{index:5})]})]})},u={render:()=>(0,s.jsx)(o,{maxLength:4,children:(0,s.jsxs)(i,{children:[(0,s.jsx)(r,{index:0}),(0,s.jsx)(r,{index:1}),(0,s.jsx)(r,{index:2}),(0,s.jsx)(r,{index:3})]})})},d={render:()=>(0,s.jsx)(o,{maxLength:6,pattern:`^[0-9]*$`,children:(0,s.jsxs)(i,{children:[(0,s.jsx)(r,{index:0}),(0,s.jsx)(r,{index:1}),(0,s.jsx)(r,{index:2}),(0,s.jsx)(r,{index:3}),(0,s.jsx)(r,{index:4}),(0,s.jsx)(r,{index:5})]})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={6}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={4}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
            </InputOTPGroup>
        </InputOTP>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <InputOTP maxLength={6} pattern="^[0-9]*$">
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
}`,...d.parameters?.docs?.source}}},f=[`SixDigit`,`FourDigit`,`WithPattern`]}))();export{u as FourDigit,l as SixDigit,d as WithPattern,f as __namedExportsOrder,c as default};
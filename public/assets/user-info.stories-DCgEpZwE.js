import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./user-info-C86dFq8G.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),a={id:1,name:`John Doe`,email:`john@example.com`,avatar:void 0,email_verified_at:`2024-01-01T00:00:00.000Z`,created_at:`2024-01-01T00:00:00.000Z`,updated_at:`2024-01-01T00:00:00.000Z`},o={title:`App/UserInfo`,component:n,tags:[`autodocs`]},s={render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,i.jsx)(n,{user:a})})},c={render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,i.jsx)(n,{user:{...a,avatar:`https://github.com/shadcn.png`}})})},l={render:()=>(0,i.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,i.jsx)(n,{user:a,showEmail:!0})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
            <UserInfo user={mockUser} />
        </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
            <UserInfo user={{
      ...mockUser,
      avatar: 'https://github.com/shadcn.png'
    }} />
        </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
            <UserInfo user={mockUser} showEmail />
        </div>
}`,...l.parameters?.docs?.source}}},u=[`WithFallbackInitials`,`WithAvatar`,`WithEmail`]}))();export{c as WithAvatar,l as WithEmail,s as WithFallbackInitials,u as __namedExportsOrder,o as default};
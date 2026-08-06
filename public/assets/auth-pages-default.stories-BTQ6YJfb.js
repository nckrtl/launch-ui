import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,r,t as i}from"./dist-DzTDLrYO.js";import{_ as a,a as o,b as s,c,d as l,g as u,i as d,m as f,n as p,p as m,s as h,t as g,u as _,y as v}from"./two-factor-challenge-DqR5T80O.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{i(),v(),u(),m(),_(),h(),d(),g(),y=t(),b=()=>(0,y.jsx)(`span`,{className:`rounded bg-muted px-2 py-1 text-xs`,children:`LOGO`}),x=e=>t=>{console.log(`[Auth Story] ${e}:`,t)},S={title:`Pages/Auth/Variants/Simple`,parameters:{layout:`fullscreen`}},C={render:()=>(0,y.jsx)(s,{logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`login`)(e)})},w={render:()=>(0,y.jsx)(s,{logo:(0,y.jsx)(b,{}),status:`Welcome back`,onSubmit:e=>x(`login`)(e)})},T={render:()=>(0,y.jsx)(s,{logo:(0,y.jsx)(b,{}),errors:{email:`Email is required.`,password:`Password is incorrect.`},onSubmit:e=>x(`login`)(e)})},E={render:()=>(0,y.jsx)(s,{logo:(0,y.jsx)(b,{}),processing:!0,onSubmit:e=>x(`login`)(e)})},D={render:()=>(0,y.jsx)(a,{logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`register`)(e)})},O={render:()=>(0,y.jsx)(a,{logo:(0,y.jsx)(b,{}),errors:{name:`A name is required.`,email:`Please enter a valid email.`,password:`Password is too short.`},onSubmit:e=>x(`register`)(e)})},k={render:()=>(0,y.jsx)(a,{logo:(0,y.jsx)(b,{}),processing:!0,onSubmit:e=>x(`register`)(e)})},A={render:()=>(0,y.jsx)(f,{logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`forgot-password`)(e)})},j={render:()=>(0,y.jsx)(f,{logo:(0,y.jsx)(b,{}),status:`A password reset link has been sent.`,onSubmit:e=>x(`forgot-password`)(e)})},M={render:()=>(0,y.jsx)(f,{logo:(0,y.jsx)(b,{}),errors:{email:`Unknown email address.`},onSubmit:e=>x(`forgot-password`)(e)})},N={render:()=>(0,y.jsx)(l,{token:`token`,email:`john@example.com`,logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`reset-password`)(e)})},P={render:()=>(0,y.jsx)(l,{token:`token`,email:`john@example.com`,logo:(0,y.jsx)(b,{}),errors:{password:`Password must be longer than 8 characters.`,password_confirmation:`Passwords do not match.`},onSubmit:e=>x(`reset-password`)(e)})},F={render:()=>(0,y.jsx)(c,{logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`confirm-password`)(e)})},I={render:()=>(0,y.jsx)(c,{logo:(0,y.jsx)(b,{}),errors:{password:`Wrong password.`},onSubmit:e=>x(`confirm-password`)(e)})},L={render:()=>(0,y.jsx)(o,{logo:(0,y.jsx)(b,{}),onResend:()=>console.log(`resend verification`),onLogout:()=>console.log(`logout`)})},R={render:()=>(0,y.jsx)(o,{logo:(0,y.jsx)(b,{}),status:`A new verification link has been sent.`,onResend:()=>console.log(`resend verification`),onLogout:()=>console.log(`logout`)})},z={render:()=>(0,y.jsx)(p,{logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`two-factor-challenge`)(e),onRecoverySubmit:e=>x(`two-factor-recovery`)(e)})},B={render:()=>(0,y.jsx)(p,{logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`two-factor-challenge`)(e),onRecoverySubmit:e=>x(`two-factor-recovery`)(e)}),play:async({canvasElement:e})=>{let t=r(e);await n.click(t.getByRole(`button`,{name:/use a recovery code/i}))}},V={render:()=>(0,y.jsx)(p,{logo:(0,y.jsx)(b,{}),errors:{code:`The provided authentication code is invalid.`,recovery_code:`Recovery code is invalid.`},onSubmit:e=>x(`two-factor-challenge`)(e),onRecoverySubmit:e=>x(`two-factor-recovery`)(e)})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <LoginPage logo={<MockLogo />} onSubmit={form => handleSubmit('login')(form)} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <LoginPage logo={<MockLogo />} status="Welcome back" onSubmit={form => handleSubmit('login')(form)} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <LoginPage logo={<MockLogo />} errors={{
    email: 'Email is required.',
    password: 'Password is incorrect.'
  }} onSubmit={form => handleSubmit('login')(form)} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <LoginPage logo={<MockLogo />} processing onSubmit={form => handleSubmit('login')(form)} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <RegisterPage logo={<MockLogo />} onSubmit={form => handleSubmit('register')(form)} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <RegisterPage logo={<MockLogo />} errors={{
    name: 'A name is required.',
    email: 'Please enter a valid email.',
    password: 'Password is too short.'
  }} onSubmit={form => handleSubmit('register')(form)} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <RegisterPage logo={<MockLogo />} processing onSubmit={form => handleSubmit('register')(form)} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ForgotPasswordPageProps = {
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('forgot-password')(form)
    };
    return <ForgotPasswordPage {...props} />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ForgotPasswordPageProps = {
      logo: <MockLogo />,
      status: 'A password reset link has been sent.',
      onSubmit: form => handleSubmit('forgot-password')(form)
    };
    return <ForgotPasswordPage {...props} />;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ForgotPasswordPageProps = {
      logo: <MockLogo />,
      errors: {
        email: 'Unknown email address.'
      },
      onSubmit: form => handleSubmit('forgot-password')(form)
    };
    return <ForgotPasswordPage {...props} />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ResetPasswordPageProps = {
      token: 'token',
      email: 'john@example.com',
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('reset-password')(form)
    };
    return <ResetPasswordPage {...props} />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ResetPasswordPageProps = {
      token: 'token',
      email: 'john@example.com',
      logo: <MockLogo />,
      errors: {
        password: 'Password must be longer than 8 characters.',
        password_confirmation: 'Passwords do not match.'
      },
      onSubmit: form => handleSubmit('reset-password')(form)
    };
    return <ResetPasswordPage {...props} />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ConfirmPasswordPageProps = {
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('confirm-password')(form)
    };
    return <ConfirmPasswordPage {...props} />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ConfirmPasswordPageProps = {
      logo: <MockLogo />,
      errors: {
        password: 'Wrong password.'
      },
      onSubmit: form => handleSubmit('confirm-password')(form)
    };
    return <ConfirmPasswordPage {...props} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: VerifyEmailPageProps = {
      logo: <MockLogo />,
      onResend: () => console.log('resend verification'),
      onLogout: () => console.log('logout')
    };
    return <VerifyEmailPage {...props} />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: VerifyEmailPageProps = {
      logo: <MockLogo />,
      status: 'A new verification link has been sent.',
      onResend: () => console.log('resend verification'),
      onLogout: () => console.log('logout')
    };
    return <VerifyEmailPage {...props} />;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: TwoFactorChallengePageProps = {
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('two-factor-challenge')(form),
      onRecoverySubmit: form => handleSubmit('two-factor-recovery')(form)
    };
    return <TwoFactorChallengePage {...props} />;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: TwoFactorChallengePageProps = {
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('two-factor-challenge')(form),
      onRecoverySubmit: form => handleSubmit('two-factor-recovery')(form)
    };
    return <TwoFactorChallengePage {...props} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /use a recovery code/i
    }));
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: TwoFactorChallengePageProps = {
      logo: <MockLogo />,
      errors: {
        code: 'The provided authentication code is invalid.',
        recovery_code: 'Recovery code is invalid.'
      },
      onSubmit: form => handleSubmit('two-factor-challenge')(form),
      onRecoverySubmit: form => handleSubmit('two-factor-recovery')(form)
    };
    return <TwoFactorChallengePage {...props} />;
  }
}`,...V.parameters?.docs?.source}}},H=[`LoginDefault`,`LoginWithStatus`,`LoginWithErrors`,`LoginProcessing`,`RegisterDefault`,`RegisterWithErrors`,`RegisterProcessing`,`ForgotPasswordDefault`,`ForgotPasswordWithStatus`,`ForgotPasswordWithErrors`,`ResetPasswordDefault`,`ResetPasswordWithErrors`,`ConfirmPasswordDefault`,`ConfirmPasswordWithErrors`,`VerifyEmailDefault`,`VerifyEmailWithStatus`,`TwoFactorChallengeDefault`,`TwoFactorChallengeRecoveryMode`,`TwoFactorChallengeWithErrors`]}))();export{F as ConfirmPasswordDefault,I as ConfirmPasswordWithErrors,A as ForgotPasswordDefault,M as ForgotPasswordWithErrors,j as ForgotPasswordWithStatus,C as LoginDefault,E as LoginProcessing,T as LoginWithErrors,w as LoginWithStatus,D as RegisterDefault,k as RegisterProcessing,O as RegisterWithErrors,N as ResetPasswordDefault,P as ResetPasswordWithErrors,z as TwoFactorChallengeDefault,B as TwoFactorChallengeRecoveryMode,V as TwoFactorChallengeWithErrors,L as VerifyEmailDefault,R as VerifyEmailWithStatus,H as __namedExportsOrder,S as default};
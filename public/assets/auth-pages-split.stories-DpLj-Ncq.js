import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,r,t as i}from"./dist-DzTDLrYO.js";import{_ as a,a as o,b as s,c,d as l,g as u,i as d,m as f,n as p,p as m,s as h,t as g,u as _,y as v}from"./two-factor-challenge-DqR5T80O.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{i(),v(),u(),m(),_(),h(),d(),g(),y=t(),b=()=>(0,y.jsx)(`span`,{className:`rounded bg-muted px-2 py-1 text-xs`,children:`LOGO`}),x=e=>t=>{console.log(`[Auth Split Story] ${e}:`,t)},S={variant:`split`,name:`Craft App`},C={title:`Pages/Auth/Variants/Split`,parameters:{layout:`fullscreen`}},w={render:()=>(0,y.jsx)(s,{...S,logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`login`)(e)})},T={render:()=>(0,y.jsx)(f,{...S,logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`forgot-password`)(e)})},E={render:()=>(0,y.jsx)(a,{...S,logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`register`)(e)})},D={render:()=>(0,y.jsx)(l,{...S,token:`token`,email:`john@example.com`,logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`reset-password`)(e)})},O={render:()=>(0,y.jsx)(c,{...S,logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`confirm-password`)(e)})},k={render:()=>(0,y.jsx)(o,{...S,logo:(0,y.jsx)(b,{}),onResend:()=>console.log(`resend verification`),onLogout:()=>console.log(`logout`)})},A={render:()=>(0,y.jsx)(p,{...S,logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`two-factor-challenge`)(e),onRecoverySubmit:e=>x(`two-factor-recovery`)(e)})},j={render:()=>(0,y.jsx)(p,{...S,logo:(0,y.jsx)(b,{}),onSubmit:e=>x(`two-factor-challenge`)(e),onRecoverySubmit:e=>x(`two-factor-recovery`)(e)}),play:async({canvasElement:e})=>{let t=r(e);await n.click(t.getByRole(`button`,{name:/use a recovery code/i}))}},M={render:()=>(0,y.jsx)(s,{...S,logo:(0,y.jsx)(b,{}),status:`Welcome back`,onSubmit:e=>x(`login`)(e)})},N={render:()=>(0,y.jsx)(s,{...S,logo:(0,y.jsx)(b,{}),errors:{email:`Email is required.`,password:`Password is incorrect.`},onSubmit:e=>x(`login`)(e)})},P={render:()=>(0,y.jsx)(s,{...S,logo:(0,y.jsx)(b,{}),processing:!0,onSubmit:e=>x(`login`)(e)})},F={render:()=>(0,y.jsx)(a,{...S,logo:(0,y.jsx)(b,{}),errors:{name:`A name is required.`,email:`Please enter a valid email.`,password:`Password is too short.`},onSubmit:e=>x(`register`)(e)})},I={render:()=>(0,y.jsx)(a,{...S,logo:(0,y.jsx)(b,{}),processing:!0,onSubmit:e=>x(`register`)(e)})},L={render:()=>(0,y.jsx)(f,{...S,logo:(0,y.jsx)(b,{}),status:`A password reset link has been sent.`,onSubmit:e=>x(`forgot-password`)(e)})},R={render:()=>(0,y.jsx)(f,{...S,logo:(0,y.jsx)(b,{}),errors:{email:`Unknown email address.`},onSubmit:e=>x(`forgot-password`)(e)})},z={render:()=>(0,y.jsx)(l,{...S,token:`token`,email:`john@example.com`,logo:(0,y.jsx)(b,{}),errors:{password:`Password must be longer than 8 characters.`,password_confirmation:`Passwords do not match.`},onSubmit:e=>x(`reset-password`)(e)})},B={render:()=>(0,y.jsx)(c,{...S,logo:(0,y.jsx)(b,{}),errors:{password:`Wrong password.`},onSubmit:e=>x(`confirm-password`)(e)})},V={render:()=>(0,y.jsx)(o,{...S,logo:(0,y.jsx)(b,{}),status:`A new verification link has been sent.`,onResend:()=>console.log(`resend verification`),onLogout:()=>console.log(`logout`)})},H={render:()=>(0,y.jsx)(p,{...S,logo:(0,y.jsx)(b,{}),errors:{code:`The provided authentication code is invalid.`,recovery_code:`Recovery code is invalid.`},onSubmit:e=>x(`two-factor-challenge`)(e),onRecoverySubmit:e=>x(`two-factor-recovery`)(e)})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <LoginPage {...base as LoginPageProps} logo={<MockLogo />} onSubmit={form => handleSubmit('login')(form)} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ForgotPasswordPageProps = {
      ...base,
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('forgot-password')(form)
    };
    return <ForgotPasswordPage {...props} />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <RegisterPage {...base as any} logo={<MockLogo />} onSubmit={form => handleSubmit('register')(form)} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ResetPasswordPageProps = {
      ...base,
      token: 'token',
      email: 'john@example.com',
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('reset-password')(form)
    };
    return <ResetPasswordPage {...props} />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ConfirmPasswordPageProps = {
      ...base,
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('confirm-password')(form)
    };
    return <ConfirmPasswordPage {...props} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: VerifyEmailPageProps = {
      ...base,
      logo: <MockLogo />,
      onResend: () => console.log('resend verification'),
      onLogout: () => console.log('logout')
    };
    return <VerifyEmailPage {...props} />;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: TwoFactorChallengePageProps = {
      ...base,
      logo: <MockLogo />,
      onSubmit: form => handleSubmit('two-factor-challenge')(form),
      onRecoverySubmit: form => handleSubmit('two-factor-recovery')(form)
    };
    return <TwoFactorChallengePage {...props} />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: TwoFactorChallengePageProps = {
      ...base,
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <LoginPage {...base as LoginPageProps} logo={<MockLogo />} status="Welcome back" onSubmit={form => handleSubmit('login')(form)} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <LoginPage {...base as LoginPageProps} logo={<MockLogo />} errors={{
    email: 'Email is required.',
    password: 'Password is incorrect.'
  }} onSubmit={form => handleSubmit('login')(form)} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <LoginPage {...base as LoginPageProps} logo={<MockLogo />} processing onSubmit={form => handleSubmit('login')(form)} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <RegisterPage {...base as any} logo={<MockLogo />} errors={{
    name: 'A name is required.',
    email: 'Please enter a valid email.',
    password: 'Password is too short.'
  }} onSubmit={form => handleSubmit('register')(form)} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <RegisterPage {...base as any} logo={<MockLogo />} processing onSubmit={form => handleSubmit('register')(form)} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ForgotPasswordPageProps = {
      ...base,
      logo: <MockLogo />,
      status: 'A password reset link has been sent.',
      onSubmit: form => handleSubmit('forgot-password')(form)
    };
    return <ForgotPasswordPage {...props} />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ForgotPasswordPageProps = {
      ...base,
      logo: <MockLogo />,
      errors: {
        email: 'Unknown email address.'
      },
      onSubmit: form => handleSubmit('forgot-password')(form)
    };
    return <ForgotPasswordPage {...props} />;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ResetPasswordPageProps = {
      ...base,
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: ConfirmPasswordPageProps = {
      ...base,
      logo: <MockLogo />,
      errors: {
        password: 'Wrong password.'
      },
      onSubmit: form => handleSubmit('confirm-password')(form)
    };
    return <ConfirmPasswordPage {...props} />;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: VerifyEmailPageProps = {
      ...base,
      logo: <MockLogo />,
      status: 'A new verification link has been sent.',
      onResend: () => console.log('resend verification'),
      onLogout: () => console.log('logout')
    };
    return <VerifyEmailPage {...props} />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const props: TwoFactorChallengePageProps = {
      ...base,
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
}`,...H.parameters?.docs?.source}}},U=[`LoginDefault`,`ForgotPasswordDefault`,`RegisterDefault`,`ResetPasswordDefault`,`ConfirmPasswordDefault`,`VerifyEmailDefault`,`TwoFactorChallengeDefault`,`TwoFactorChallengeRecoveryMode`,`LoginWithStatus`,`LoginWithErrors`,`LoginProcessing`,`RegisterWithErrors`,`RegisterProcessing`,`ForgotPasswordWithStatus`,`ForgotPasswordWithErrors`,`ResetPasswordWithErrors`,`ConfirmPasswordWithErrors`,`VerifyEmailWithStatus`,`TwoFactorChallengeWithErrors`]}))();export{O as ConfirmPasswordDefault,B as ConfirmPasswordWithErrors,T as ForgotPasswordDefault,R as ForgotPasswordWithErrors,L as ForgotPasswordWithStatus,w as LoginDefault,P as LoginProcessing,N as LoginWithErrors,M as LoginWithStatus,E as RegisterDefault,I as RegisterProcessing,F as RegisterWithErrors,D as ResetPasswordDefault,z as ResetPasswordWithErrors,A as TwoFactorChallengeDefault,j as TwoFactorChallengeRecoveryMode,H as TwoFactorChallengeWithErrors,k as VerifyEmailDefault,V as VerifyEmailWithStatus,U as __namedExportsOrder,C as default};
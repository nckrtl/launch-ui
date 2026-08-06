const dummyFn = Object.assign(
    (...args: any[]) => ({ url: '#', method: 'get' }),
    {
        form: (...args: any[]) => ({ action: '#', method: 'post' }),
    }
);

export const regenerateRecoveryCodes = dummyFn;
export const confirm = dummyFn;
export const qrCode = dummyFn;
export const recoveryCodes = dummyFn;
export const secretKey = dummyFn;
export default dummyFn;

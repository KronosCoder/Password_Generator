// const optionList  = ['numbers' , 'uppercase' , 'lowercase' , 'symbols']
// const pwdLength = 21
export default async function PasswordGenerator (optionList , pwdLength) {
    const numbers = '0123456789';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+[]{};:?';

    let chars = ''
    
    if (optionList.includes('numbers')) chars += numbers
    if (optionList.includes('lowercase')) chars += lowercase
    if (optionList.includes('uppercase')) chars += uppercase
    if (optionList.includes('symbols')) chars += symbols
    
    return new Promise((resolve) => {
        setTimeout(() => {
            let pwd = ''    
            for (let i = 0; i < pwdLength; i++) {
                pwd += chars.charAt(Math.floor(Math.random() * chars.length))
            }
            resolve(pwd)
        } , 2000)
    })
}

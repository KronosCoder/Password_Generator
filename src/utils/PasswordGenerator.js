// const optionList = ['numbers', 'uppercase', 'lowercase', 'symbols'];
// const pwdLength = 21;
export default async function PasswordGenerator(optionList, pwdLength) {
    return new Promise((resolve) => {
        setTimeout(() => {
        const chars = {
            numbers: '0123456789',
            symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz'
        };
        
        let charset = '';
        optionList.forEach(option => {
            if (chars[option]) charset += chars[option];
        });
        
        if (!charset) charset = chars.lowercase; 
        
        let password = '';
        for (let i = 0; i < pwdLength; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        resolve(password);
        }, 1500);
    });
}
// function test(optionList, pwdLength) {
//     const chars = {
//         numbers: '0123456789',
//         symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
//         uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//         lowercase: 'abcdefghijklmnopqrstuvwxyz'
//     };
    
//     let charset = '';
//     optionList.forEach(option => {
//         if (chars[option]) charset += chars[option];
//     });
    
//     if (!charset) charset = chars.lowercase; 
    
//     let password = '';
//     for (let i = 0; i < pwdLength; i++) {
//         password += charset.charAt(Math.floor(Math.random() * charset.length));
//     }
// }

// console.log(await PasswordGenerator(optionList , pwdLength))
// console.log(test(optionList , pwdLength))

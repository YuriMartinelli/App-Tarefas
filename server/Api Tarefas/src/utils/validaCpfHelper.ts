export default function cpfEhValido(cpf: string): boolean{
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;

    // if (/^(\d)\1+$/.test(cpf)) return false;

    // let sum = 0;
    // for (let i = 0; i < 9; i++) {
    //     sum += parseInt(cpf.charAt(i)) * (10 - i);
    // }
    // let firstDigit = (sum * 10) % 11;
    // if (firstDigit === 10 || firstDigit === 11) firstDigit = 0;

    // if (firstDigit !== parseInt(cpf.charAt(9))) return false;

    // sum = 0;
    // for (let i = 0; i < 10; i++) {
    //     sum += parseInt(cpf.charAt(i)) * (11 - i);
    // }
    // let secondDigit = (sum * 10) % 11;
    // if (secondDigit === 10 || secondDigit === 11) secondDigit = 0;

    // if (secondDigit !== parseInt(cpf.charAt(10))) return false;

    return true;
}
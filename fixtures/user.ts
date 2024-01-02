import { User } from "../interfaces/user";

export const validUser: User = {
    displayName:'twitter',
    credential:{
        login: 'twitter',
        password:'123',
        errorMessage: ''
    }
};
export const incorrectUserPassword: User = {
    displayName:'twitter',
    credential:{
        login: 'twitter',
        password:'123',
        errorMessage: 'ล็อกอินหรือรหัสผ่านไม่ถูกต้อง'
    }
};

export const suspendedUser: User = {
    displayName:'jomyut',
    credential:{
        login: 'jomyut',
        password:'123456',
        errorMessage: 'ล็อกอินถูกระงับ'
    }
};

export const invalidUsers: User[] = [incorrectUserPassword,suspendedUser]


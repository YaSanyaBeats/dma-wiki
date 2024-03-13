import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                login: {label: 'login', type: 'text', required: true},
                password: {label: 'password', type: 'password', required: true}
            },
            async authorize(credentials) {
                if(credentials?.login === 'admin' && credentials.password === '123') {

                    let user = {id: '1', login: 'admin'};
                    return user as User;
                }
                return null;
            }
        })
    ]
}
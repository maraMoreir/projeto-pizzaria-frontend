export class AuthTokenError extends Error {
    constructor() {
        super("Erro com token de autenticação.")
    }
};
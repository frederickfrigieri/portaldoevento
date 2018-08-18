import { Injectable } from '@angular/core';
import { IUsuarioAutenticadoModel } from '../../models/autenticacao/usuario-autenticado-model';
import { ITokenModel } from '../../models/toke/token-model';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }

    armazenar(usuarioAutenticado: IUsuarioAutenticadoModel): void {
        console.log('Gravar objeto do usuário no localstorage');
    }

    obterToke(): ITokenModel {
        console.log('retorna o token');

        return null;
    }

    limpar(): void {
        console.log('limpa o token');
    }
}

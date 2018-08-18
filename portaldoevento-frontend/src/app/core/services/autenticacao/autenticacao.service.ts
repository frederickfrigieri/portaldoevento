import { Injectable } from '@angular/core';
import { IEntrarModel } from '../../models/autenticacao/entrar-model';
import { TokenService } from '../token/token-service';
import { IUsuarioAutenticadoModel } from '../../models/autenticacao/usuario-autenticado-model';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {

    constructor(private tokenService: TokenService) { }

    entrar(model: IEntrarModel): void {
        console.log('chama api para logar');

        let usuarioAutenticado: IUsuarioAutenticadoModel = null;

        this.tokenService.armazenar(usuarioAutenticado);
    }

    sair(): void {
        console.log('limpar o token');

        this.tokenService.limpar();
    }
}

import { IUsuarioAutenticadoModel } from "../autenticacao/usuario-autenticado-model";

export interface ITokenModel {
    token: string;
    usuarioAutenticado: IUsuarioAutenticadoModel
}

import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { UserAuthService } from "../services/user-auth.service";
import { firstValueFrom } from "rxjs";

export const authGuard: CanActivateFn = async (route, state) => {
  const _userService = inject(UserService);
  const _userAuthService =  inject(UserAuthService);
  const _router = inject(Router);

  //Não possui token no localstorage
  const HAS_TOKEN = _userAuthService.getUserToken();
  if(!HAS_TOKEN) {
    console.warn('VAZIO');
    return _router.navigate(['/login']);
  }
  console.log('TEM TOKEN ->', HAS_TOKEN);

  try {
    // Tenta validar o token no back
    await firstValueFrom(_userService.validateUser());

    // Se o token é valido e a rota não é a de login, permite o acesso para a rota desejada
    return true;

  } catch (error) {
    // Se a requisição de validação falhar (token inválido), redireciona para o login
      return _router.navigate(['/login']);
  }

  return true;
}

import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user-info.service';
import { inject } from '@angular/core';
import { Role } from '../users.config';

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);
  
  if(userService.isLoggedIn) {
    if(userService.userRole === Role.ADMIN) {
      return true;
    }
    router.navigate(['profile']);
    return false;
  }
  router.navigate(['login']);
  return false;
};
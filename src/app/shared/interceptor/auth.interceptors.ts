import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = getJwtToken();
  if (jwtToken) {
    var cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return next(cloned);
  }
  return next(req);
};

function getJwtToken(): string | null {
const platformId = inject(PLATFORM_ID);
  let tokens: any = isPlatformBrowser(platformId) ? localStorage?.getItem('JWT_TOKEN') : '';
  if (!tokens) return null;
  const token = JSON.parse(tokens).token;
  return token;
}
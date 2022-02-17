/**
 * @file 图片加载服务
 * @desc app/services/image-loader
 * @author Surmon <https://github.com/surmon-china>
 */

import { Injectable } from '@angular/core';
import { TOKEN, TOKEN_EXPIRES_IN, TOKEN_BIRTH_TIME } from '../../constants/auth';

@Injectable()
export class TokenService {

  public getToken(): string {
    let res = localStorage.getItem(TOKEN);
    if (!res) res = ''
    return res
  }

  public removeToken(): void {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(TOKEN_EXPIRES_IN);
    localStorage.removeItem(TOKEN_BIRTH_TIME);
  }

  public setOrReplaceToken(token: string, expires_in: number): void {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(TOKEN_EXPIRES_IN, String(expires_in));
    localStorage.setItem(TOKEN_BIRTH_TIME, String(+new Date() / 1000));
  }

  // 检查 token 的存在和有效性
  public isTokenValid(): boolean {
    const token: string | null = this.getToken();
    let tokenIsOk = false
    if (token.length > 0 && token.split('.').length === 3) {
      tokenIsOk = true
    }
    return tokenIsOk;
  }

  // 获取 token 此刻至过期时间的时间（秒）
  public getCountdown(): number {
    const expiresIn = Number(localStorage.getItem(TOKEN_EXPIRES_IN));
    const borthTime = Number(localStorage.getItem(TOKEN_BIRTH_TIME));
    const deadLine = borthTime + expiresIn;
    const now = +new Date() / 1000;
    return deadLine > now
      ? Math.floor(deadLine - now)
      : 0;
  }
}

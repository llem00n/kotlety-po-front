import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _token?: string;

  get token(): string | undefined {
    return this._token
  }

  constructor() { }
}

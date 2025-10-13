import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _selectedComponent: string; // No initial value

  constructor() {
    this._selectedComponent = ''; // Initialize to empty, or you can leave it uninitialized if you control it via your logic
  }

  get selectedComponent(): string {
    return this._selectedComponent;
  }

  set selectedComponent(value: string) {
    this._selectedComponent = value;
  }
}

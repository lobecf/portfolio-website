import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public imageUrl!: string;

  setImageUrl(url: string) {
  this.imageUrl = url;
  }

  getImageUrl(): string {
  return this.imageUrl;
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-about-intro-content',
  templateUrl: './about-intro-content.component.html',
  styleUrl: './about-intro-content.component.css'
})
export class AboutIntroContentComponent {
  constructor(public dialog: MatDialog, private modalService: ModalService) {}
  
  openModal(imageUrl: string) {
  this.modalService.setImageUrl(imageUrl);
  this.dialog.open(ImageModalComponent);
  }
  }

import { Component, Inject } from '@angular/core';
import { ModalService } from '../modal.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent {
  constructor(public modalService: ModalService, public dialogRef: MatDialogRef<ImageModalComponent>) {}

  closeModal() {
  this.dialogRef.close();
  }
  }

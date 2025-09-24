import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-content',
  templateUrl: './resume-content.component.html',
  styleUrl: './resume-content.component.css'
})
export class ResumeContentComponent {

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/your-resume.pdf';
    link.download = 'Your_Resume.pdf';
    link.click();
  }

  printPDF() {
    const printWindow = window.open('');
    printWindow!.document.write('<iframe width="100%" height="100%" src="assets/your-resume.pdf"></iframe>');
    printWindow!.document.close();
    printWindow!.print();
  }
}


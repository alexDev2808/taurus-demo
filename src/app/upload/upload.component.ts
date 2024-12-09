import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  formData = {
    name: ''
  };
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  redirect() {
    this.router.navigate(['/home']);
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  onSubmit(event: Event): void {
    // event.preventDefault();
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:3000/api/uploads/item', formData).subscribe({
      next: (response) => {
        console.log('Formulario enviado con éxito', response)
        this.redirect()
      },
      error: (error) => console.error('Error al enviar el formulario', error),
    });

    
  }
  
}

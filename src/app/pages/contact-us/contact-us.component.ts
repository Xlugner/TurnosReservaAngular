import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

@Component({
  selector: 'store-contact-us',
  host: {
    class: 'block w-full',
  },
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {

  formData: ContactForm = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  };

  onSubmit(): void {
    console.log('Formulario enviado:', this.formData);
    // Aquí conectarás la lógica de envío al backend
  }
}
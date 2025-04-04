import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';
import { ValidatorService } from '../../services/validator.service';
import { HoverStringComponent } from '../../../shared/components/hoverString/hoverString.component';

import { Subject, takeUntil } from 'rxjs';
import { translations } from '../../../shared/i18n/translations';
import {
  Language,
  LanguageService,
} from '../../../shared/services/language.service';
import { TextFormatPipe } from "../../../shared/pipes/textFormat.pipe";

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HoverStringComponent,
    TextFormatPipe
],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnDestroy {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  private validatorService = inject(ValidatorService);
  private languageService = inject(LanguageService);

  currentLanguage: Language;
  translations = translations;
  private destroy$ = new Subject<void>();

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  public isLoading = false;
  public isSubmitted = false;
  public failed = false;

  constructor() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.languageService.getLanguage$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((lang) => {
        this.currentLanguage = lang;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const error of Object.keys(errors)) {
      switch (error) {
        case 'required':
          return `Este campo es requerido`;
        case 'pattern':
          return `El formato del correo es incorrecto`;
      }
    }
    return null;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const formData = this.myForm.value;
    formData.access_key = environment.WEB3FORM_KEY;

    this.http.post('https://api.web3forms.com/submit', formData).subscribe(
      (response: any) => {
        console.log('Form submitted successfully', response);
        this.isSubmitted = true;
        this.isLoading = false;
        this.myForm.reset();
      },
      (error: any) => {
        console.error('Error submitting form', error);
        this.isLoading = false;
        this.failed = true;
      }
    );
  }

  fieldIsValid(field: string): boolean | null {
    return this.validatorService.fieldIsValid(this.myForm, field);
  }
}

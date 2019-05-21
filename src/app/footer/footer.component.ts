import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  form: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
    });
  }

  onSubmit(value): void {
    console.log("Submitted");
  }
}

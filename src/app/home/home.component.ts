import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    label = 'First Name';

    constructor(private fb: FormBuilder) {}

    myform: FormGroup = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
    });

    onSubmit() {
        console.log(this.myform.value);
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  label = 'First Name';
  type = 'text';

  constructor(private fb: FormBuilder) { }

  myform: FormGroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myform.value);
  }

}

import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
    FormGroup,
} from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
    @Input() label: string;
    @Input() type: string;

    private onChange: (value: any) => void;
    private onTouched: () => void;

    public controlOne = new FormControl('');

    constructor() {}

    doInput() {
        this.onChange(this.controlOne.value);
    }

    doBlur() {
        this.onTouched();
    }
    writeValue(obj: any): void {
        const [controlOne] = String(obj);
        console.log('obj', controlOne);
        this.controlOne.setValue(controlOne);
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.controlOne.disable() : this.controlOne.enable();
    }

    ngOnInit(): void {}
}

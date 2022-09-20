import { Injectable } from '@angular/core';
import { FormControl } from "@angular/forms";

import * as moment from "moment";


@Injectable({
    providedIn: 'root'
})
export class ValidatorsService {

    constructor() { }

    dateValidator(format = "YYYY-MM-DD"): any {
        return (control: FormControl): { [key: string]: any } => {
            const val = moment(control.value, format, true);

            if (!val.isValid()) {
                return { invalidDate: true };
            }

            return { invalidDate: false };
        };
    }
}

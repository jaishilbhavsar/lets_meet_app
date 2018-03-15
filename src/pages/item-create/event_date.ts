import { FormControl } from "@angular/forms";

export class DateValidator {

    static today: any = new Date();
    static isValid(control: FormControl): any {

        if (control.value == this.today) {
            return {
                "You can not create Event today": true
            };
        }

        if (control.value <= this.today) {
            return {
                "Enter a valid Date": true
            };
        }

        return null;
    }
}
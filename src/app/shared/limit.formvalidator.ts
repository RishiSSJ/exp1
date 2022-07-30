import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class LimitValidator{

    static Limit(limit : number) : ValidatorFn{

        return (control : AbstractControl) : ValidationErrors | null => {

            let val = Number(control.value);

            if(isNaN(val) || val > limit){
                return {"limit": {"limitValue": limit, "actualValue": val}}
            }

            return null;
        }
    }

}
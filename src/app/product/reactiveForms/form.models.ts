import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from "../../shared/limit.formvalidator";

export class ProductFormControl extends FormControl{

    label! : string;
    modelProperty! : string;

    constructor(label : string, property : string, value : any, validator : any){

        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages() : string[]{
        let messages : string[] = [];
        if(this.errors){
            for(let errorName in this.errors){
                switch(errorName){
                    case "required":
                        messages.push(`You must enter a ${this.label}`);
                        break;
                    case "minlength":
                        messages.push(`A ${this.label} must be atleast ${this.errors['minlength'].requiredlength} characters`);
                        break;
                    case "pattern":
                        messages.push(`The ${this.label} contains illegal characters`);
                        break;
                    case "limit":
                        messages.push(`The ${this.label} must be less than ${this.errors['limit'].limitValue}, You have entered ${this.errors['limit'].actualValue} `);
                        break;
                }
            }
        }        
        return messages;
    }//CLASS GET VALIDATION MESSAGES ENDS

}

//Form Group to hold Form Controls
export class ProductFormGroup extends FormGroup{
    
    constructor(){
        super({
            productName : new ProductFormControl("Product Name", "productName", "", Validators.required),

            productCode : new ProductFormControl("Product Code", "productCode", "",
            Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])),

            price : new ProductFormControl("Price", "price", "",
            Validators.compose([Validators.required, Validators.pattern("^[0-9\.]+$"), 
            LimitValidator.Limit(5000)])),

            starRating: new ProductFormControl("Star Rating", "starRating", "",
            Validators.compose([Validators.required, Validators.pattern("^[0-9\.]+$")]))
        });        
    }

    //Method to retrieve all the controls in the form group
    get productControls() : ProductFormControl[]{
        return Object.keys(this.controls).map(k => this.controls[k] as ProductFormControl);
    }

    //Method is to retrieve the validation error messages for single control in the form group
    getValidationMessages(name : string) : string[]{
        return (this.controls[name] as ProductFormControl).getValidationMessages();
    }

    //To retrieve the summary of the validation messages
    getFormValidationMessages() : string[]{
        let messages : string[] = [];
        Object.values(this.controls).forEach(c => messages.push(...(c as ProductFormControl).getValidationMessages()));
        return messages;
    }
}
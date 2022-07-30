import { Component } from "@angular/core";
import { NgForm, NgModel, ValidationErrors } from "@angular/forms";
import { Product } from "./product";

@Component({
    selector: "product-form",
    templateUrl: "./product-form.html"
})
export class ProductFormComponent{
    pageTitle = "Product Form"

    newProduct : Product = new Product();

    get jsonProduct(){
        return JSON.stringify(this.newProduct)
    }

    addProduct(p : Product){
        console.log("New Product " + this.jsonProduct)
    }

    getMessages(errs : ValidationErrors | null, name : string) : string[]{
        let messages : string[] = [];
        for(let errorName in errs){
            switch(errorName){
                case "required":
                    messages.push(`You must enter a ${name}`);
                    break;
                case "minlength":
                    messages.push(`A ${name} must be atleast ${errs['minlength'].requiredlength} characters`);
                    break;
                case "pattern":
                    messages.push(`The ${name} contains illegal characters`);
                    break;
            }
        }
        return messages;
    }//CLASS GETMESSAGES ENDS

    getValidationMessages(state : NgModel, thingName?: string){
        let thing : string = state.path?.[0] ?? thingName;
        return this.getMessages(state.errors, thing);
    }

    //To return the summary of validation messages for all the controls
    getFormValidationMessages(form : NgForm){
        let messages : string[] = [];
        Object.keys(form.controls).forEach(k => {
            this.getMessages(form.controls[k].errors, k)
            .forEach(m => messages.push(m))
        });
        return messages;
    }

    formSubmitted = false;
    submitForm(form : NgForm){
        this.formSubmitted = true;

        if(form.valid){
            this.addProduct(this.newProduct);
            this.newProduct = new Product;
            form.resetForm();
            this.formSubmitted = false;
        }
    }

}
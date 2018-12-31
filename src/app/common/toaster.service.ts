import { Injectable } from "@angular/core";
declare let toastr: any;
@Injectable()
export class ToasterService {


    displaySuccessToast(msg: string, title?: string) {
        
        toastr.success(msg, title);
        console.log("after toaster");
    }
}
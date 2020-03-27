
import { Component } from '@angular/core';
@Component({
    selector : 'app-warning-alert',
    //templateUrl: './warning-alert.html'
    template: `
    <p> Warning message alert</p>
    ` ,
    styles: [
        `
        p {
            color: mistyrose;
            font-weight: bold;
            font-style: initial;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            border: 1px solid red;
            background-color: red;
        }
        `

    ]
})

export class warningComponent{

}
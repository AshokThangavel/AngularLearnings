// Create own component
import { Component } from '@angular/core';
@Component({
    selector : 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{
    user:string='Ashok';
    Username:string = 'AK';
    //id:number = 123;

    getIDNumber(){
        return 123;
    }

}
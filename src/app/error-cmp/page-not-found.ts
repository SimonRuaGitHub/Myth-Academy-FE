import { Component, OnInit } from '@angular/core';

@Component({
    selector:'page-not-found',
    templateUrl:'page-not-found.html',
    styles:['']
})
export class PageNotFound implements OnInit{

    ngOnInit(): void {
        console.log("Error 404")
    }

}
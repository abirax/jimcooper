
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles:[` li > a.active {color:#F97924;}`]
})

export class NavBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
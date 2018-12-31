import { Component, OnInit } from "@angular/core";
@Component(
    {
        templateUrl: 'car-details.component.html'

    }
)
export class CarDetailsComponent implements OnInit {
    ngOnInit(): void {

    }

    // cardetails: any[];
    carDetails = [
        {
            id: 1,
            car: 'Nissan',
            Make: [{ variant: 'Rogue' }, { variant: 'CX6' }, { variant: 'CX9' }, { variant: 'CX5' }]
        },
        {
            id: 2,
            car: 'Subaru',
            Make: [{ variant: 'Forrester' }, { variant: 'outback' }, { variant: 'imprezza' }]
        },
        {
            id: 3,
            car: 'Honda',
            Make: [{
                variant: 'City',

            }, { variant: 'CRV' }, { variant: 'BRV' }]
        },
    ]

    models:any[];
    onMakeChange(id:number)
    {
this.models=this.carDetails.find(m=>m.id==id).Make;
    }
}
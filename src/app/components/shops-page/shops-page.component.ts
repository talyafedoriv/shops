
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shops-page',
  templateUrl: './shops-page.component.html',
  styleUrls: ['./shops-page.component.scss']
})
  
  
export class ShopsPageComponent implements OnInit {
  shops: any[] = [
    {
      address: 'Baikova St, 6, Kyiv, Ukraine, 02000',
      shoppingCenter: 'Shopping Center 1',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
      phoneNumber: '+1234567890'
    },
    {
      address: 'Akademika Hlushkova Ave, 1, Kyiv, Ukraine, 03127',
      shoppingCenter: 'Shopping Center 2',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
      phoneNumber: '+9876543210'
    },
     {
      address: 'Volodymyrska St, 24, Kyiv, Ukraine, 01001',
      shoppingCenter: 'Shopping Center 3',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
      phoneNumber: '+9876543210'
    },
      {
      address: 'Svobody Ave, 28, L`viv, L`vivs`ka oblast, Ukraine, 79000',
      shoppingCenter: 'Shopping Center 4',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
      phoneNumber: '+9876543210'
    },
       {
      address: 'Rynok Square, Ivano-Frankivs`k, Ivano-Frankivs`ka oblast, Ukraine, 76000',
      shoppingCenter: 'Shopping Center 5',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
      phoneNumber: '+9876543210'
    },
       {
      address: 'Lavrska St, 27, Kyiv, Ukraine, 02000',
      shoppingCenter: 'Shopping Center 6',
      workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
      phoneNumber: '+9876543210'
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
}


import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-shops-page',
  templateUrl: './shops-page.component.html',
  styleUrls: ['./shops-page.component.scss']
})
  
  
export class ShopsPageComponent  {
  shops: any[] = [
  {
    address: 'Baikova St, 6, Kyiv, Ukraine, 02000',
    shoppingCenter: 'Shopping Center 1',
    workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
    phoneNumber: '+1234567890',
    mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.305068841146!2d30.511132099999994!3d50.4167875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf24714de219%3A0xae4aa21898cabbf2!2z0LLRg9C70LjRhtGPINCR0LDQudC60L7QstCwLCA2LCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDAw!5e0!3m2!1suk!2sde!4v1703516042387!5m2!1suk!2sde')
  },
  {
    address: 'Akademika Hlushkova Ave, 1, Kyiv, Ukraine, 03127',
    shoppingCenter: 'Shopping Center 2',
    workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
    phoneNumber: '+9876543210',
    mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.1944553471885!2d30.481725599999994!3d50.381573499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8ee62d1afc5%3A0x8df1481998e578e4!2z0L_RgNC-0YHQv9C10LrRgiDQkNC60LDQtNC10LzRltC60LAg0JPQu9GD0YjQutC-0LLQsCwgMSwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2sde!4v1703516877080!5m2!1suk!2sde')
  },
  {
    address: 'Volodymyrska St, 24, Kyiv, Ukraine, 01001',
    shoppingCenter: 'Shopping Center 3',
    workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
    phoneNumber: '+9876543210',
    mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.3880085076535!2d30.5132707!3d50.452498999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5b96b2e79f%3A0x1dd988a6b35556f6!2z0LLRg9C70LjRhtGPINCS0L7Qu9C-0LTQuNC80LjRgNGB0YzQutCwLCAyNCwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2sde!4v1703516893577!5m2!1suk!2sde')
  },
  {
    address: 'Svobody Ave, 28, L`viv, L`vivs`ka oblast, Ukraine, 79000',
    shoppingCenter: 'Shopping Center 4',
    workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
    phoneNumber: '+9876543210',
    mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.3880085076535!2d30.5132707!3d50.452498999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5b96b2e79f%3A0x1dd988a6b35556f6!2z0LLRg9C70LjRhtGPINCS0L7Qu9C-0LTQuNC80LjRgNGB0YzQutCwLCAyNCwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2sde!4v1703516893577!5m2!1suk!2sde')
  },
  {
    address: 'Rynok Square, Ivano-Frankivs`k, Ivano-Frankivs`ka oblast, Ukraine, 76000',
    shoppingCenter: 'Shopping Center 5',
    workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
    phoneNumber: '+9876543210',
    mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9177478131674!2d24.026193!3d49.844003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add72fc62a5ed%3A0x4f055af633dad430!2z0L_RgNC-0YHQv9C10LrRgiDQodCy0L7QsdC-0LTQuCwgMjgsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDRl9C90LAsIDc5MDAw!5e0!3m2!1suk!2sde!4v1703516910035!5m2!1suk!2sde')
  },
  {
    address: 'Lavrska St, 27, Kyiv, Ukraine, 02000',
    shoppingCenter: 'Shopping Center 6',
    workingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 3:00 PM',
    phoneNumber: '+9876543210',
    mapUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.782444839903!2d30.563052100000007!3d50.4265249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf76e60ec0ef%3A0x129cd4af50798bb9!2z0LLRg9C70LjRhtGPINCb0LDQstGA0YHRjNC60LAsIDI3LCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAyMDAw!5e0!3m2!1suk!2sde!4v1703516936790!5m2!1suk!2sde')
  },
];


  constructor(private sanitizer: DomSanitizer) { }


 toggleMapVisibility(shop: any): void {

    shop.showMap = !shop.showMap;
  }
}

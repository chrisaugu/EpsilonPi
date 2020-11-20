// in raido.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { RadioService } from "../shared/services/radio.service";

@Injectable()
export class RadiosResolver implements Resolve<any> {

  constructor(private raidoService: RadioService) { }

  resolve() {
    return new Promise((resolve, reject) => {

      let breadcrumbs = [
        { url: '/', label: 'Radios' }
      ];

      // get raido from local json file
      this.raidoService.getRadios()
      // .then(
      //   raido => {
      //     return resolve({
      //       raido: raido,
      //       breadcrumbs: breadcrumbs
      //     });
      //   },
      //   err => {
      //     return resolve(null);
      //   }
      // )
    });
  }
}

import { FormControl } from '@angular/forms';

export class Emailvalidator {
  static validEmail(fc: FormControl) {
    if (fc.value != undefined) {
      let parrern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (parrern.test(fc.value)) {
        return null;
      } else {
        return ({ validEmail: true })
      }
    } else {
      return null;
    }
  }
}

// Validator: Allow Numeric Characters Only
export class NumericCharactersvalidator {
  static validNumericCharacters(fc: FormControl) {
    if (fc.value != undefined) {
      let parrern = /[0-9]/;
      if (parrern.test(fc.value)) {
        return null;
      } else {
        return ({ validNumericCharacters: true })
      }
    } else {
      return null;
    }
  }
}


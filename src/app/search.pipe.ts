import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( itemarr: any[], value: string, property: string) {
    console.log(itemarr, value, property);

    if (itemarr.length === 0) {
      return itemarr;
    }

    if (!value || !property) {
      return itemarr;
    }

    const result = itemarr.filter((item) => {
      if (property == 'id') {
        return item[property] == value;
      } else if (property == 'companyname') {
        return item.company.name.toLowerCase().includes(value.toLowerCase());
      } else if (property == 'designation') {
        return item.company.designation
          .toLowerCase()
          .includes(value.toLowerCase());
      } else {
        return (
          item[property] &&
          item[property].toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    console.log(result);

    return result;
  }

}

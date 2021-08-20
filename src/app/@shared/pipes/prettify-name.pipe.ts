import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettifyName'
})
export class PrettifyNamePipe implements PipeTransform {

  prettyNames = {
    'nidoran-f': 'nidoran♀',
    'nidoran-m': 'nidoran♂',
    'mr-mime': 'mr. mime',
    'deoxys-normal': 'deoxys',
    'wormadam-plant': 'wormadam',
    'mime-jr': 'mime jr.',
    'giratina-altered': 'giratina',
    'shaymin-land': 'shaymin',
    'basculin-red-striped': 'basculin',
    'darmanitan-standard': 'darmanitan',
    'tornadus-incarnate': 'tornadus',
    'thundurus-incarnate': 'thundurus',
    'landorus-incarnate': 'landorus',
    'keldeo-ordinary': 'keldeo',
    'meloetta-aria': 'meloetta',
    'meowstic-male': 'meowstic',
    'aegislash-shield': 'aegislash',
    'pumpkaboo-average': 'pumpkaboo',
    'gourgeist-average': 'gourgeist',
    'oricorio-baile': 'oricorio',
    'lycanroc-midday': 'lycanroc',
    'wishiwashi-solo': 'wishiwashi',
    'type-null': 'type: null',
    'minior-red-meteor': 'minior',
    'mimikyu-disguised': 'mimikyu',
    'tapu-koko': 'tapu koko',
    'tapu-lele': 'tapu lele',
    'tapu-bulu': 'tapu bulu',
    'tapu-fini': 'tapu fini'
  };

  transform(value: string): string {
    return JSON.parse(JSON.stringify(this.prettyNames))[value] || value;
  }

}

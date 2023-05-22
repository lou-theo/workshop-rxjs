import { delay, from, map, merge, Observable, of, Subject } from 'rxjs';

const ADDRESSES = [
  '1 rue de la paix, Paris',
  '15 avenue des champs elysées, Paris',
  '1 rue de la paix, Lyon',
  '39 rue de Molsheim, Strasbourg',
  '1 rue de la paix, Marseille',
];

function filterAddresses(addresses: string[], search: string): string[] {
  return addresses.filter((address) => address.toLowerCase().indexOf(search.toLowerCase()) !== -1);
}

export function getAddressesCompletion(search: string): Observable<string[]> {
  let delayTime = 0;
  switch (filterAddresses(ADDRESSES, search).length) {
    case 1:
      delayTime = 100;
      break;
    case 3:
      delayTime = 800;
      break;
  }
  return of(ADDRESSES).pipe(
    map((addresses) => filterAddresses(addresses, search)),
    delay(delayTime),
  );
}

export function getUserInput(): Observable<string> {
  return merge(
    new Subject<string>().asObservable(),
    from(['r', 'ru', 'rue', 'rue ', 'rue d', 'rue de', 'rue de ']),
    from([
      'rue de l',
      'rue de la',
      'rue de la ',
      'rue de la p',
      'rue de la pa',
      'rue de la paix',
      'rue de la paix,',
      'rue de la paix, ',
    ]).pipe(delay(300)),
    from(['rue de la paix, P']).pipe(delay(800)),
  );
}

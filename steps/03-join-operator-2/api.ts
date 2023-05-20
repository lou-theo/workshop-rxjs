import { delay, map, Observable, of } from 'rxjs';

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
  return of(ADDRESSES).pipe(
    map((addresses) => filterAddresses(addresses, search)),
    delay(filterAddresses(ADDRESSES, search).length === 1 ? 100 : 1000),
  );
}

export function getUserInput(): Observable<string> {
  return new Observable((subscriber) => {
    subscriber.next('r');
    subscriber.next('ru');
    subscriber.next('rue');
    subscriber.next('rue ');
    subscriber.next('rue d');
    subscriber.next('rue de');
    subscriber.next('rue de ');

    setTimeout(() => {
      subscriber.next('rue de l');
      subscriber.next('rue de la');
      subscriber.next('rue de la ');
      subscriber.next('rue de la p');
      subscriber.next('rue de la pa');
      subscriber.next('rue de la paix');
      subscriber.next('rue de la paix,');
      subscriber.next('rue de la paix, ');
    }, 100);

    setTimeout(() => {
      subscriber.next('rue de la paix, P');
      subscriber.complete();
    }, 1_000);
  });
}

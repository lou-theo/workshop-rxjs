import { delay, map, Observable, of } from 'rxjs';

export function getAddressesCompletion(search: string): Observable<string[]> {
  return of([
    '1 rue de la paix, Paris',
    '15 avenue des champs elysées, Paris',
    '1 rue de la paix, Lyon',
    '39 rue de Molsheim, Strasbourg',
    '1 rue de la paix, Marseille',
  ]).pipe(
    map((addresses) => addresses.filter((address) => address.toLowerCase().indexOf(search.toLowerCase()) !== -1)),
    delay(100),
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

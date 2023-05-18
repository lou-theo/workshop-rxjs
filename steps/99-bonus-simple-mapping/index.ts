import { of } from 'rxjs';

// ---------------------------------------
// Correction du post LinkedIn de Jonathan
// ---------------------------------------
//
// Le nouvel observable devra contenir un tableau
// de trainers correct :
//
// ['Anthony PENA', 'Jonathan MOLZA'] au lieu de
// ['Anthony PENA, Jonathan MOLZA']
//
// ---------------------------------------

const freeTraining = of({
  course: 'RxJS',
  place: 'Sfeir Nantes',
  date: '26/01/2023',
  trainers: ['Anthony PENA, Jonathan MOLZA'],
});

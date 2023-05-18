import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function introSlides() {
  return [
    '00-intro/00-TITLE.md',
    '00-intro/01-what-is-rxjs.md',
    '00-intro/02-reactivex.md',
    '00-intro/03-pure-functions.md',
  ];
}

function fundamentalsSlides() {
  return ['01-fundamentals/00-transition.md'];
}

function commonPitfallsSlides() {
  return ['common-pitfalls/forget-unsubscribe.md', 'common-pitfalls/complete-is-not-finally.md'];
}

function workshop() {
  return [...introSlides(), ...fundamentalsSlides(), ...commonPitfallsSlides()].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(workshop);

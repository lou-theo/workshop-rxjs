import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module

function workshop() {
  return [].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(workshop);

import { SfeirThemeInitializer } from "../web_modules/sfeir-school-theme/sfeir-school-theme.mjs";
import { slides } from "./slides-list.js";

// To change the slides order / list, juste reorder / remove / add slides in the markdown directory
// then run `npm run generate-slide-list` to update the `slides-list.js` file

function workshop() {
  return slides.map((slidePath) => ({ path: slidePath }));
}

SfeirThemeInitializer.init(workshop);

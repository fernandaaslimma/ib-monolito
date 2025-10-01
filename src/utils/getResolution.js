import { SCREEN_MD } from "./constants";
export function isMediumDevice() {
  if (window.screen.availWidth < SCREEN_MD) {
    return true;
  }
}

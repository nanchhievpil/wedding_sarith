import { guest } from './app/guest/guest.js';

((mac) => {
    mac.undangan = guest.init();
})(mac);
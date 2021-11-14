import { error, alert, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const stack = new Stack({
  dir1: 'up',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
  spacing1: 36,
  spacing2: 36,
  push: 'bottom',
  context: document.body,
});

function pnotifyError() {
  error({
    text: 'Empty query string!',
    maxTextHeight: null,
    delay: 3000,
  });
}

function pnotifyAlert() {
  alert({
    text: 'Oops pictures are over!',
    maxTextHeight: null,
    delay: 3000,

    stack: stack,
  });
}

export { pnotifyError, pnotifyAlert };

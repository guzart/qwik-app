import { component$, useStyles$ } from '@builder.io/qwik';

import styles from './input.css?inline';

export const Input = component$(() => {
  useStyles$(styles);
  return <input type="text" placeholder="Enter your name" />;
});

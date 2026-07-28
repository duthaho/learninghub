/**
 * Central site configuration.
 * Change these values in one place; components read from here.
 */
export const site = {
  name: 'learninghub',
  tagline: 'backend systems, understood, not memorised',
};

export const support = {
  /** Turn the whole "Buy me a coffee" feature on/off. */
  enabled: true,
  /** Your Buy Me a Coffee page → buymeacoffee.com/<handle>. */
  handle: 'duthaho',
  /** Button label. */
  label: 'Buy me a coffee',
  /** Longer invitation used in the larger article/footer block. */
  blurb: "If a deep-dive saved you an afternoon, you can say thanks with a coffee. It keeps the next one coming.",
};

export const supportUrl = `https://www.buymeacoffee.com/${support.handle}`;

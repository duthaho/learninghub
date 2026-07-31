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

export const newsletter = {
  /** Turn the subscribe panels on/off. */
  enabled: true,
  /** Your Substack publication base URL (no trailing slash). */
  url: 'https://duthaho.substack.com',
  title: 'Get new deep-dives by email',
  blurb: 'One backend system at a time, explained properly. New parts land on my Substack — no spam, unsubscribe anytime.',
  cta: 'Subscribe',
};

/** Substack subscribe page; pass ?email= to prefill. */
export const subscribeUrl = `${newsletter.url}/subscribe`;

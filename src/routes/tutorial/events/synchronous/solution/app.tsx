import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const aHref = useSignal<Element>();
  useVisibleTask$(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      window.open('http://qwik.builder.io');
    };
    aHref.value!.addEventListener('click', handler);
    return () => aHref.value!.removeEventListener('click', handler);
  });

  return (
    <a href="/" ref={aHref}>
      click me!
    </a>
  );
});

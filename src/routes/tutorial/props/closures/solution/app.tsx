import { component$, $, type PropFunction } from '@builder.io/qwik';

export default component$(() => {
  const goodbye$ = $(() => alert('Good Bye!'));
  return (
    <main>
      <MyComponent goodbye$={goodbye$} hello$={async (name) => alert('Hello ' + name)} />
    </main>
  );
});

interface MyComponentProps {
  goodbye$: PropFunction<() => void>;
  hello$: PropFunction<(name: string) => void>;
}
export const MyComponent = component$((props: MyComponentProps) => {
  return (
    <p>
      <button onClick$={props.goodbye$}>good bye</button>
      <button onClick$={async () => await props.hello$('World')}>hello</button>
    </p>
  );
});

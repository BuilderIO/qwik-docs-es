import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ counter: { count: 0 } }, { deep: true });

  return (
    <>
      <Display counter={store.counter} />
      <button onClick$={() => store.counter.count++}>+1</button>
    </>
  );
});

interface DisplayProps {
  counter: { count: number };
}
export const Display = component$((props: DisplayProps) => {
  return <p>Count: {props.counter.count}</p>;
});

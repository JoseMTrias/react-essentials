export default function TabButton({ children }) {
  function handleClick() {
    console.log('testing the button');
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}

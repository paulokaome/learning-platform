import { Logo } from "../assets/Logo";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-darkGray-700 border-b border-darkGray-500">
      <Logo />
    </header>
  );
}

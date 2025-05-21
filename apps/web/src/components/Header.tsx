import { Link } from "@tanstack/react-router";
import Container from "./Container";

export default function Header() {
  return (
    <header className="h-auto sticky top-0 z-40 w-full bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center gap-2">
              <p className="text-3xl font-bold font-dmserif">Medium</p>
              <div className="flex flex-col leading-none text-sm font-medium">
                <p>Written by</p>
                <p>Developer</p>
              </div>
            </Link>
          </div>
          <nav className="relative overflow-hidden">
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  to="/signin"
                  className="inline-flex py-2 text-sm px-4 text-neutral-900 rounded-full"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="bg-neutral-900 px-4 text-sm py-2 text-white inline-flex rounded-full"
                >
                  Create an account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

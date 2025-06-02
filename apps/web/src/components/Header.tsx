import { Avatar, Button, Container, Input } from "@medium/design/components";
import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-2xs">
      <Container>
        <div className="flex items-center gap-4 h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 justify-center bg-neutral-100 rounded-2xl"
            >
              <img src="/medium.svg" className="h-6" />
            </Link>
          </div>
          <div className="flex flex-1 items-center">
            <div className="max-w-80 w-full">
              <Input placeholder="Search topics" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button iconOnly variant="transparent" size="lg">
              <Avatar.AvatarRoot size="sm">
                <Avatar.AvatarImage src="https://i.pinimg.com/75x75_RS/b8/11/e0/b811e076d93b61b61aa5a47c5d5c696c.jpg" />
                <Avatar.AvatarFallback>S</Avatar.AvatarFallback>
              </Avatar.AvatarRoot>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

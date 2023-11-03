import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll className="bg-inherit text-white" isBlurred={false}>
      <NavbarContent/>
      <NavbarContent justify="center" >
        <NavbarItem>
          <Link className="text-white"href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/userlist">
            User List
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white"href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent/>
    </Navbar>
  );
}

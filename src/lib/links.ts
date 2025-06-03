export type NavLink = {
  name: string;
  href: string;
  icon: string;
  description: string;
  tooltip?: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: "bx:home-alt-2",
    description: "Home page, with links to other pages.",
    tooltip: "This is the page you are on, silly goose! 😝",
  },
  {
    name: "Profile",
    href: "/profile",
    icon: "ion:person-circle",
    description: "Learn more about me and my skills.",
    tooltip: "Amber has a lot of skill to show you! ‼️",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: "bx:folder",
    description: "Projects and repositories.",
    tooltip: "This the juicy stuff you looking for... 🔥",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: "fa:newspaper-o",
    description: "Blog posts and articles.",
    tooltip: "Oh, uh this is just my yapping space. 🙃",
  },
];

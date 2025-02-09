import { Link, useLocation } from "@remix-run/react";
import { Code, Home, Layers3, Lightbulb, type LucideProps, NotebookPen, User } from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";

const Github = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Twitter = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Note = () => (
  <svg role="img" viewBox="0 0 493 493" xmlns="http://www.w3.org/2000/svg">
    <title>Note</title>
    <path
      style={{ fill: "#040000" }}
      d="m139.57,142.06c41.19,0,97.6-2.09,138.1-1.04,54.34,1.39,74.76,25.06,75.45,83.53.69,33.06,0,127.73,0,127.73h-58.79c0-82.83.35-96.5,0-122.6-.69-22.97-7.25-33.92-24.9-36.01-18.69-2.09-71.07-.35-71.07-.35v158.96h-58.79v-210.22Z"
    />
  </svg>
);

export const Icons: {
  [x: string]: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
} = {
  home: Home,
  about: User,
  career: Layers3,
  idea: Lightbulb,
  tech: Code,
  blog: NotebookPen,
};

const itemGroups = [
  {
    label: "saijo shota",
    items: [
      {
        key: "home",
        title: "Home",
        url: "/",
        icon: Icons.home,
      },
      {
        key: "about",
        title: "自己紹介",
        url: "/about",
        icon: Icons.about,
      },
      {
        key: "career",
        title: "経歴書",
        url: "/career",
        icon: Icons.career,
      },
    ],
  },
  {
    label: "リンク",
    items: [
      {
        key: "github",
        title: "GitHub",
        url: "https://github.com/saijo-shota-biz",
        icon: Github,
      },
      {
        key: "twitter",
        title: "X(Twitter)",
        url: "https://x.com/saijo_shota",
        icon: Twitter,
      },
      {
        key: "note",
        title: "note",
        url: "https://note.com/saijo_shota",
        icon: Note,
      },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();
  // biome-ignore lint/correctness/useExhaustiveDependencies: location.pathnameが切り替わったらメニューを閉じる
  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname, setOpenMobile]);
  return (
    <Sidebar>
      <SidebarContent>
        {itemGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

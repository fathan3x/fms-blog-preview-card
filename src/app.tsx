import { cn } from "cn";
import "@fontsource-variable/figtree";

import illustration from "./assets/illustration.svg";
import avatar from "./assets/avatar.webp";

export function App() {
  const style = {
    "bg-yellow": "bg-[hsl(47,88%,63%)]",
    "hover-text-yellow": "hover:text-[hsl(47,88%,63%)]",
    "border-gray-950": "border-2 border-[hsl(0,0%,7%)]",
    "text-gray-500": "text-[hsl(0,0%,42%)]",
  };
  return (
    <main
      className={cn(
        "w-screen h-screen p-6 flex items-center justify-center",
        style["bg-yellow"],
      )}
      style={{ fontFamily: "Figtree Variable" }}
    >
      <section
        className={cn(
          "p-6 bg-white rounded-xl max-w-100 space-y-6 shadow-[8px_8px_0px_1px_rgba(0,0,0,1)]",
          style["border-gray-950"],
        )}
      >
        <img src={illustration} className="rounded-lg w-full" />
        <div className="space-y-2">
          <p
            className={cn(
              "font-extrabold w-fit px-3 py-1 rounded",
              style["bg-yellow"],
            )}
          >
            Learning
          </p>
          <p className="font-medium">Published 21 Dec 2023</p>
        </div>
        <a
          href="#"
          className={cn(
            "font-extrabold text-2xl block",
            style["hover-text-yellow"],
          )}
        >
          HTML & CSS Foundations
        </a>
        <p className={cn("font-medium", style["text-gray-500"])}>
          These languages are the backbone of every website, defining structure,
          content, and presentation
        </p>
        <div className="flex items-center gap-2">
          <img
            src={avatar}
            className="rounded-full w-8 h-8 border border-black"
          />
          <p className="font-extrabold">Greg Hooper</p>
        </div>
      </section>
    </main>
  );
}

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";
import { Avatar } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useState, useEffect } from "react";
import { useTheme } from "@heroui/use-theme";

export default function IndexPage() {
  const { theme } = useTheme();
  const [currentImage, setCurrentImage] = useState("/Light Website logo.png");

  useEffect(() => {
    setCurrentImage(theme === "light" ? "/Light Website logo.png" : "/Dark Website logo.png");
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setCurrentImage(newTheme === "light" 
      ? "/Light Website logo.png" 
      : "/Dark Website logo.png"
    );
  };

  return (
    <DefaultLayout onThemeChange={handleThemeChange}>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Avatar 
          className="w-48 h-48 text-tiny" 
          src={currentImage} 
          alt="GhostFreak OS Logo"
        />
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Keep it&nbsp;</span>
          <span className={title({ color: "blue" })}>Simple&nbsp;</span>
          <br />
          <span className={title()}>
            With GhostFreak OS
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Easy To use os and Lightwaight  
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Docs
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Comming soon...
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}

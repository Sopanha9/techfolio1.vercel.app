import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid col-end-auto col-start-auto grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:col-end-[span_3] md:col-start-[span_3] md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <FooterColumn
        title="About"
        links={[
          { text: "About Me", href: "/about" },
          { text: "Education", href: "/education" },
          { text: "Skills", href: "/skills" },
        ]}
      />
      <FooterColumn
        title="Work"
        links={[
          { text: "Experience", href: "/experience" },
          { text: "Projects", href: "/projects" },
          { text: "Certificates", href: "/certificates" },
        ]}
      />
      <FooterColumn
        title="Connect"
        links={[
          { text: "Blog", href: "/blog" },
          { text: "Contact", href: "/contact" },
          { text: "Resume", href: "#" },
        ]}
      />
    </div>
  );
};

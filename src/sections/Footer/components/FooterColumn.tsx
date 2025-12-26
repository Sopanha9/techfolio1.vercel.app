export type FooterColumnProps = {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent">
      <h3 className="font-semibold box-border caret-transparent mb-3">
        {props.title}
      </h3>
      <ul className="box-border caret-transparent list-none pl-0">
        {props.links.map((link, index) => (
          <li
            key={index}
            className={`box-border caret-transparent${index > 0 ? " mt-2" : ""}`}
          >
            <a
              href={link.href}
              className="text-zinc-400 text-sm box-border caret-transparent leading-5 hover:text-teal-500"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

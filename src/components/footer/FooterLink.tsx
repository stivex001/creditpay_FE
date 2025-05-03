type FooterLinkProps = {
  title: string;
  links: { text: string; url: string }[];
};



export const FooterLinkSection = ({ title, links }: FooterLinkProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <div className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

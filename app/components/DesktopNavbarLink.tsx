export default function DesktopNavbarLink({
  title,
  href,
  targetBlank = false,
}: {
  title: string;
  href: string;
  targetBlank?: boolean;
}) {
  return (
    <div className="group">
      <a href={href} target={targetBlank ? "_blank" : "_self"}>{title}</a>
      <div className="duration-150 mx-3 pt-2 border-b-2 border-transparent group-hover:border-white"></div>
    </div>
  );
}

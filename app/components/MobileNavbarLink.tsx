export default function MobileNavbarLink({ title, href }: { title: string, href: string }) {
    return (
        <a href={href} className="hover:font-bold">{title}</a>
    );
}
export default function DesktopNavbarLink({ title, href }: { title: string, href: string }) {
    return (
        <div className="group">
            <a href={href}>{title}</a>
            <div className="duration-150 mx-3 pt-2 border-b-2 border-transparent group-hover:border-white"></div>
        </div>
    );
}
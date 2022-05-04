import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './CustomLink.css'

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div
            className={match ? 'custom-link-active-container' : 'custom-link-disable-container'}
        >
            <div>
                <Link
                    className={match ? 'custom-link-active' : 'custom-link-disable'}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        </div>
    );
}

export default CustomLink;
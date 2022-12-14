import { useMatch, useResolvedPath, NavLink } from "react-router-dom";

function NavButton(props) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const buttonStyle = {
        backgroundColor: "green",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    }

    const activeButtonStyle = {
        backgroundColor: "red",
        border: "none",
        color: "black",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    };

    return (
        <NavLink to={props.to}>
            <button style={match ? activeButtonStyle : buttonStyle}>
                <p>{props.label}</p>
            </button>
        </NavLink>
    )
}
export default NavButton;
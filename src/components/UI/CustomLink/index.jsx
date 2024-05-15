import { Link } from "react-router-dom";

export default function CustomLink(props) {
  const { route, classNames, children } = props;
  return (
    <Link className={classNames} to={route}>
      {children}
    </Link>
  );
}

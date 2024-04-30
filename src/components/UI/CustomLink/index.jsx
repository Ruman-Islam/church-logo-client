import { Link } from "react-router-dom";

export default function CustomLink(props) {
  const { route, children, classNames, styles } = props;
  let link = (
    <Link to={route} className={classNames} style={styles}>
      {children}
    </Link>
  );

  return link;
}

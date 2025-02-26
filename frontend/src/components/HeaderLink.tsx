import { Link } from "react-scroll";

interface HeaderLinkProps {
  to: string;
  activeClassName: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

// HeaderLink 컴포넌트 분리
const HeaderLink: React.FC<HeaderLinkProps> = ({ to, activeClassName, children, onClick, className }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      activeClass={activeClassName}
      className={`hover:text-gray-400 dark:hover:text-gray-400 cursor-pointer transition-all text-base ${className}`} // dark:hover:text-gray-400 추가
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
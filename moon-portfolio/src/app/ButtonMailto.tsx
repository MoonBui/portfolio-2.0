import { Link } from "@react-email/link";

const Linkto = ({link, label} : {link:string, label:string}) => {
  return <Link href={link} style={{ color: 'inherit', textDecoration: 'inherit'}}>{label}</Link>;
};

export default Linkto;
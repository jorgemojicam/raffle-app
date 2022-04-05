import { Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export default function SideBreadcrumb() {
  let location = useLocation();

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Raffle</Breadcrumb.Item>
      <Breadcrumb.Item>{location.pathname.replace("/", "")}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

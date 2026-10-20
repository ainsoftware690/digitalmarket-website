import ServicePage, { serviceMetadata } from "../../components/ServicePage";

export const metadata = serviceMetadata("web-development");

export default function Page() {
  return <ServicePage slug="web-development" />;
}

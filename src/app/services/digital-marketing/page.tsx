import ServicePage, { serviceMetadata } from "../../components/ServicePage";

export const metadata = serviceMetadata("digital-marketing");

export default function Page() {
  return <ServicePage slug="digital-marketing" />;
}

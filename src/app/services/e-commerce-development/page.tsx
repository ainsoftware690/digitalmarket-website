import ServicePage, { serviceMetadata } from "../../components/ServicePage";

export const metadata = serviceMetadata("e-commerce-development");

export default function Page() {
  return <ServicePage slug="e-commerce-development" />;
}

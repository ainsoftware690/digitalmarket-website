import { Container, SectionHeading } from "../ui/SectionHeading";
import ProcessScroll from "./ProcessScroll";

export { PROCESS_STEPS } from "./process-steps";

export function ProcessSection({ tone = "paper" }: { tone?: "paper" | "white" }) {
  return (
    <section aria-labelledby="process-heading" className={`py-20 sm:py-28 ${tone === "white" ? "bg-white" : "bg-paper"}`}>
      <Container>
        <div data-reveal>
        <SectionHeading
          id="process-heading"
          title="How a project runs"
          lead="Five steps, the same every time. You always know what happens next and what it costs."
        />
        </div>
        <ProcessScroll />
      </Container>
    </section>
  );
}

/** Kept for older imports; the new design uses plain backgrounds. */
export function Backdrop() {
  return null;
}

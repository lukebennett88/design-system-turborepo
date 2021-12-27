import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@acme/accordion";
import { Button } from "@acme/button";
import { Checkbox, CheckboxIndicator } from "@acme/checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";

const Flex = styled("div", { display: "flex" });
const Label = styled("label", {
  fontSize: 15,
  lineHeight: 1,
  userSelect: "none",
});

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <h2>Button</h2>
      <Button>Click me</Button>
      <br />
      <h2>Accordion</h2>
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARAI design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>Yes. It's unstyled by default, giving you freedom over the look and feel.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>Yes! You can animate the Accordion with CSS or JavaScript.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <br />
      <h2>Checkbox</h2>
      <form>
        <Flex css={{ alignItems: "center" }}>
          <Checkbox defaultChecked id="c1">
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </Checkbox>
          <Label css={{ paddingLeft: 15 }} htmlFor="c1">
            Accept terms and conditions.
          </Label>
        </Flex>
      </form>
    </div>
  );
}

import * as React from "react";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve } from "@radix-ui/colors";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
  type AccordionContentProps,
  type AccordionHeaderProps,
  type AccordionItemProps,
  type AccordionTriggerProps,
} from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledAccordion = styled(Root, {
  borderRadius: 6,
  width: 300,
  backgroundColor: mauve.mauve6,
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
});

const StyledItem = styled(Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 2px ${mauve.mauve12}`,
  },
});

const StyledHeader = styled(Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 1px 0 ${mauve.mauve6}`,
  '&[data-state="closed"]': { backgroundColor: "white" },
  '&[data-state="open"]': { backgroundColor: "white" },
  "&:hover": { backgroundColor: mauve.mauve2 },
});

const StyledContent = styled(Content, {
  overflow: "hidden",
  fontSize: 15,
  color: mauve.mauve11,
  backgroundColor: mauve.mauve2,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "15px 20px",
});

const StyledChevron = styled(ChevronDownIcon, {
  color: violet.violet10,
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, ...rest }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...rest} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, ...rest }, forwardedRef) => (
  <StyledContent {...rest} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));
AccordionContent.displayName = "AccordionContent";

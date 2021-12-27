import { blackA, violet } from "@radix-ui/colors";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { styled } from "@stitches/react";
import * as React from "react";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  "all": "unset",
  "backgroundColor": "white",
  "width": 25,
  "height": 25,
  "borderRadius": 4,
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "boxShadow": `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: violet.violet11,
});

const Checkbox = StyledCheckbox;
Checkbox.displayName = "Checkbox";

const CheckboxIndicator = StyledIndicator;
CheckboxIndicator.displayName = "CheckboxIndicator";

// Exports
export { Checkbox, CheckboxIndicator };

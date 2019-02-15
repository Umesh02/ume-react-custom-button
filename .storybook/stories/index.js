import React from "react";
import { storiesOf, setAddon } from "@storybook/react";

import ReactCustomButton from "../../src/index";

storiesOf("Custom button", module).addWithJSX("simple", () => (
  <ReactCustomButton />
));

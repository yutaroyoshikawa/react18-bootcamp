import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { DateTimePicker } from "./DateTimePicker";

const meta: ComponentMeta<typeof DateTimePicker> = {
  component: DateTimePicker,
};

export default meta;

export const Base: ComponentStoryObj<typeof DateTimePicker> = {};

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Select, { ISelect } from './Select';

const meta: Meta = {
  title: 'Select',
  component: Select,
};

export default meta;

const Template: Story<ISelect> = () => {
  const [value, setValue] = React.useState('newest');

  return (
    <Select
      label="Sort"
      value={value}
      onChange={(ev: React.FormEvent<HTMLInputElement>) =>
        setValue((ev.target as HTMLSelectElement).value)
      }
    >
      <option value="newest">Newest Releases</option>
      <option value="price">Price</option>
      <option value="curated">Curated</option>
    </Select>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

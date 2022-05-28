import { StylesConfig } from 'react-select';

export const technologiesOptions = [
  { label: 'ReactJs', value: 1 },
  { label: 'NodeJs', value: 2 },
  { label: 'JavaScript', value: 3 },
  { label: 'Flutter', value: 4 },
  { label: 'ReactNative', value: 4 },
  { label: 'Java', value: 5 },
  { label: 'Rust', value: 6 },
];

export const customStyles: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'white',
    borderColor: isFocused ? 'rgb(79 70 229)' : undefined,
    paddingTop: '4px',
    paddingBottom: '4px',
  }),
  option: (styles, { isDisabled, isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? 'rgb(79 70 229 / 0.3)' : undefined,
      color: isFocused ? 'rgb(79 70 229)' : 'black',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: 'rgb(79 70 229 / 0.1)',
      },
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'rgb(79 70 229)',
    backgroundColor: 'rgb(79 70 229 / 0.3)',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: 'rgb(79 70 229)',
    backgroundColor: 'rgb(79 70 229 / 0.3)',
    ':hover': {
      color: 'white',
    },
  }),
};

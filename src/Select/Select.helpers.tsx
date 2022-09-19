import React from 'react';

export function getDisplayedValue(value: any, children: any) {
  const childArray = React.Children.toArray(children);
  const selectedChild: any = childArray.find(
    (child: any) => child.props.value === value
  );

  return selectedChild.props.children;
}

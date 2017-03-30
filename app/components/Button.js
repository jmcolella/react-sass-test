import React from 'react';

export default function Button ( { type, link, disabled, children } ) {
  const attributes = {
    className: type,
    href: link
  };

  if ( !!disabled ) {
    attributes['disabled'] = 'disabled';
  }

  return (
    <a { ...attributes } >
      { children }
    </a>
  )
}

Button.propTypes = {
  type: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.string.isRequired
}

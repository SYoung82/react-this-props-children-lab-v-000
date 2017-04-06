import React from 'react';

export default class ThemeDecorations extends React.Component {
  render() {
    let children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })

    return (
      <div>
        {children}
      </div>
    )
  }
}

import React from 'react'
import formStyles from './formStyles'

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value             : this.props.value || "",
      name              : this.props.name || "",
      options           : this.props.options || {},
      updateStateValues : this.props.updateStateValues,
      haveError         : false
    }
  }

  render() {
    const { name, value, options, hasError } = this.state

    this.state.updateStateValues(this.state.name, this.state.value)

    let placeholder = (!!options.placeholder) ? options.placeholder : name

    let optsValues = (!!options.enum) ? options.enum : []

    return (
      <select
        ref={name}
        className={formStyles.selectClass}
        value={value}
        onChange={e => this.setState({ value: e.target.value })}
      >
        <option value="">{placeholder}</option>
        {optsValues.map(opt => {
          if(typeof opt === "string") {
            return (
              <option
                key={opt}
                value={opt}>
              {opt.substr(0, 1).toUpperCase() + opt.substr(1, opt.length).toLowerCase()}
              </option>)
          }
          else {
            return (
              <option
                key={opt.value}
                value={opt.value}>
                {opt.caption}
              </option>)
          }
        })}
      </select>
    )
  }

}

export default Select

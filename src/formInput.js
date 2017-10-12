/**
* React Mongoose Form Maker
*
* Copyright(c) 2017 Alexandre PENOMBRE
* <aluzed_AT_gmail.com>
*/
import React from 'react'
import Input from './fields/input'
import EnumList from './fields/enumList'
import Select from './fields/select'
import Textarea from './fields/textarea'
import Radio from './fields/radio'
import Checkbox from './fields/checkbox'
import DateField from './fields/datefield'

class FormInput extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let { type } = this.props
    const { label, name, value, options, updateStateValues } = this.props

    let field = null

    // The option.forceField override the current field type
    if(!!options.forceField)
    type = options.forceField.toLowerCase()

    // Check if it has an enum
    if(!!options.enum) {
      switch(type) {
        case "array":
        field = (
          <EnumList
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />)
          break

        case "radio" :
        field = (
          <Radio
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />)
            break

        default :
        field = (
          <Select
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />)
            break
      }
    }
    else {
      switch(type) {
        case "boolean":
        field = (
          <Checkbox
          name={name}
          options={options}
          value={value !== null ? value : false}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />)
        break

        case "string":
        field = (
          <Input
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />)
        break

        case "number":
        options.constraints.push({type: 'ONLYNUMERIC'})
        field = (
          <Input
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />
        )
        break

        case "email":
        options.constraints.push({type: 'ISEMAIL'})
        field = (
          <Input
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />
        )
        break

        case "text":
        field = (
          <Textarea
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />)
        break

        case "date":
        field = (
          <DateField
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />)
        break

        default :
        field = (
          <Input
          name={name}
          options={options}
          value={value !== null ? value : ""}
          formStyles={this.props.formStyles}
          updateStateValues={updateStateValues}
          />)
          break
      }
    }

    let tmpLabel = label

    if(label.length > 1)
    tmpLabel = label.substr(0, 1).toUpperCase() + label.substr(1, label.length).toLowerCase()

    return (
      <div className={this.props.formStyles.formGroupClass}>
      <label htmlFor={name} className={this.props.formStyles.labelClass}>
      {tmpLabel}
      </label>

      {field}
      </div>
    )
  }
}

export default FormInput

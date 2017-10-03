import React, { Component } from 'react'
import FormMaker from '../Forms/formMaker'

class PetForm extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FormMaker
          title="Add a Pet"
          metaUrl="http://localhost:3000/pets/metadata"
          onSubmit={ (values)=>{ console.log(values) } }
          onCancel={ ()=>{ console.log('cancel callback') } } />
      </div>
    );
  }
}

export default PetForm;

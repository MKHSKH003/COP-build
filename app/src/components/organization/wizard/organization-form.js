import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelectOption,
  FormSelect
} from '@patternfly/react-core';

export default ({
  organization,
  setOrganization
}) => {
    const options = [
      { value: 'select social issue', label: 'Select social issue', disabled: false },
      { value: 'Motor', label: 'Motor', disabled: false },
      { value: 'Sport', label: 'Sport', disabled: false },
      { value: 'Finance', label: 'Finance', disabled: false },
      { value: 'Technology', label: 'Technology', disabled: false },
      { value: 'Intertainment', label: 'Intertainment', disabled: false },
      { value: 'Tourism', label: 'Tourism', disabled: false }
    ];

    return (
      <Form isHorizontal>
        <FormGroup
          label="Name"
          isRequired
          fieldId="horizontal-form-name"
          helperText="Please provide organizational name"
        >
          <TextInput
            value={organization.name}
            isRequired
            type="text"
            id="horizontal-form-name"
            aria-describedby="horizontal-form-name-helper"
            name="horizontal-form-name"
            onChange={value => setOrganization({
              ...organization, 
              name: value
            })}
          />
        </FormGroup>
        <FormGroup label="Email" isRequired fieldId="horizontal-form-email">
          <TextInput
            value={organization.email}
            onChange={value => setOrganization({
              ...organization, 
              email: value
            })}
            isRequired
            type="email"
            id="horizontal-form-email"
            name="horizontal-form-email"
          />
        </FormGroup>
        <FormGroup label="Social Issue" fieldId="horizontal-form-title">
          <FormSelect
            value={organization.socialIssue}
            onChange={value => setOrganization({
              ...organization, 
              socialIssue: value
            })}
            id="horzontal-form-title"
            name="horizontal-form-title"
          >
            {options.map((option, index) => (
              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup label="Debsite e.g google.com" isRequired fieldId="horizontal-form-website">
          <TextInput
            value={organization.website}
            onChange={value => setOrganization({
              ...organization, 
              website: value
            })}
            isRequired
            type="text"
            id="horizontal-form-website"
            name="horizontal-form-website"
          />
        </FormGroup>
        <FormGroup label="Description" fieldId="horizontal-form-exp">
          <TextArea
            value={organization.description}
            onChange={value => setOrganization({
              ...organization, 
              description: value
            })}
            name="horizontal-form-exp"
            id="horizontal-form-exp"
          />
        </FormGroup>
      </Form>
    );
}

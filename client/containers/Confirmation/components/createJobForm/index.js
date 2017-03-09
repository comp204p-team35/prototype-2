import React from 'react';
import styles from './styles.css';
import {Input, LongText, Date} from '../../../../components/form';
import {Button} from '../../../../components/button';

export class CreateJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: '',
      due_date: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const inputEl = e.target.name;
    const value = e.target.value;
    console.log(inputEl, ':', value)
    this.setState({[inputEl]: value});
  }

  validateInput(value) {
    return typeof(value) === 'string' && value.replace(/\s/g, '').length > 0;
  }

  validateForm() {
    return Object.values(this.state).reduce(
      (prev, current) => {console.log(prev, current, this.validateInput(current)); return prev && this.validateInput(current)}, true
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let {title, comment, due_date} = this.state;

    // deal with invalid form
    if (!this.validateForm()) {
      return;
    }

    // we have a valid form
    const data = {
      Job: {
        title,
        comment,
        due_date,
        assigned_by_id: 2,
        assigned_to_id: 4,
        patient_id: 1440
      }
    }
    this.props.submitCallback(data);
  }

  render() {
    const {submitCallback, loading} = this.props;
    let {title, comment, due_date} = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <Input value={title} name="title" onChange={this.handleInputChange}/>
        <LongText value={comment} name="comment" onChange={this.handleInputChange}/>
        <Date value={due_date} name="due_date" onChange={this.handleInputChange}/>
        <Button disabled={loading || !this.validateForm()} type="submit">Create Job</Button>
      </form>
    );
  }
};
import React, { Component } from 'react';

class LocOrHandle extends Component {
  render() {
    const onlineBlock =
      <div className='form-row'>
        <div className='col'>
          {!this.props.search ? <div className='form-group'>
            <label htmlFor='handle'>What is your relevant handle or gamertag?</label>
            <input
              name='handle'
              type='text'
              className='form-control'
              id='handle'
              onChange={this.props.handleChange} />
          </div> : ''}
        </div>
      </div>;

    const inpersonBlock = <div>
      <div className='form-row'>
        <div className='col'>
          <div className='form-group'>
            <label htmlFor='address'>Address</label>
            <input
              name='address'
              type='text'
              className='form-control'
              id='address'
              onChange={this.props.handleChange} />
          </div>
        </div>
      </div>
      <div className='form-row'>
        <div className='col-md-6'>
          <div className='form-group'>
            <label htmlFor='city'>City</label>
            <input
              name='city'
              type='text'
              className='form-control'
              id='city'
              onChange={this.props.handleChange} />
          </div>
        </div>
        <div className='col-md-4'>
          <div className='form-group'>
            <label htmlFor='state'>State</label>
            <select
              name='state'
              className='form-control'
              id='state'
              onChange={this.props.handleChange}
            >
              <option value='AL'>Alabama</option>
              <option value='AK'>Alaska</option>
              <option value='AZ'>Arizona</option>
              <option value='AR'>Arkansas</option>
              <option value='CA'>California</option>
              <option value='CO'>Colorado</option>
              <option value='CT'>Connecticut</option>
              <option value='DE'>Delaware</option>
              <option value='DC'>District Of Columbia</option>
              <option value='FL'>Florida</option>
              <option value='GA'>Georgia</option>
              <option value='HI'>Hawaii</option>
              <option value='ID'>Idaho</option>
              <option value='IL'>Illinois</option>
              <option value='IN'>Indiana</option>
              <option value='IA'>Iowa</option>
              <option value='KS'>Kansas</option>
              <option value='KY'>Kentucky</option>
              <option value='LA'>Louisiana</option>
              <option value='ME'>Maine</option>
              <option value='MD'>Maryland</option>
              <option value='MA'>Massachusetts</option>
              <option value='MI'>Michigan</option>
              <option value='MN'>Minnesota</option>
              <option value='MS'>Mississippi</option>
              <option value='MO'>Missouri</option>
              <option value='MT'>Montana</option>
              <option value='NE'>Nebraska</option>
              <option value='NV'>Nevada</option>
              <option value='NH'>New Hampshire</option>
              <option value='NJ'>New Jersey</option>
              <option value='NM'>New Mexico</option>
              <option value='NY'>New York</option>
              <option value='NC'>North Carolina</option>
              <option value='ND'>North Dakota</option>
              <option value='OH'>Ohio</option>
              <option value='OK'>Oklahoma</option>
              <option value='OR'>Oregon</option>
              <option value='PA'>Pennsylvania</option>
              <option value='RI'>Rhode Island</option>
              <option value='SC'>South Carolina</option>
              <option value='SD'>South Dakota</option>
              <option value='TN'>Tennessee</option>
              <option value='TX'>Texas</option>
              <option value='UT'>Utah</option>
              <option value='VT'>Vermont</option>
              <option value='VA'>Virginia</option>
              <option value='WA'>Washington</option>
              <option value='WV'>West Virginia</option>
              <option value='WI'>Wisconsin</option>
              <option value='WY'>Wyoming</option>
            </select>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='form-group'>
            <label htmlFor='zip'>ZIP Code</label>
            <input
              name='zip'
              type='text'
              className='form-control'
              id='zip'
              onChange={this.props.handleChange} />
          </div>
          {this.props.search ? <div className='form-group'>
            <label htmlFor='distance'>Within</label>
            <input
              name='distance'
              type='text'
              className='form-control'
              id='distance'
              onChange={this.props.handleChange} />
          </div>
            : ''}
        </div>
      </div>
    </div>;

    return (
      <div>
        {this.props.online === 'online' ?
          onlineBlock : inpersonBlock
        }
      </div>
    );
  }
}

export default LocOrHandle;
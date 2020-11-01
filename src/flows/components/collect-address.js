import React from 'react';

export default function CollectAddress() {
  return (
    <div>
      <div>
        <label htmlFor="address1">Address</label>
      </div>
      <div>
        <input type="text" name="address1" />
      </div>
      <div>
        <input type="text" name="address2"/>
      </div>
      <div>
        <label htmlFor="city">City</label>
      </div>
      <div>
        <input type="text" name="city"/>
      </div>
      <div>
        <label htmlFor="state">State</label>
      </div>
      <div>
        <input type="text" name="state"/>
      </div>
      <div>
        <label htmlFor="zip">Zip</label>
      </div>
      <div>
        <input type="number" name="zip"/>
      </div>
    </div>
  );
}

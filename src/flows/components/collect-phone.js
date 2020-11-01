import React from 'react';

export default function CollectPhone() {
  return (
    <div>
      <div>
        <label htmlFor="phone">Phone</label>
      </div>
      <div>
        <input type="phone" name="phone" />
      </div>
    </div>
  );
}

import React from 'react';

export default function CollectName() {
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
      </div>
      <div>
        <input type="text" name="name" />
      </div>
    </div>
  );
}

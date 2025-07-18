import React, { useState } from 'react';

function TestInput() {
  const [name, setName] = useState('');

  return (
    <div className="container mt-5">
      <h2>Test Input Box</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="mt-3">You typed: {name}</p>
    </div>
  );
}

export default TestInput;
'use client';

import { useState } from 'react';

export default function DomainSearch() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const response = await fetch('/api/whmcs/domain-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_call: 'domainwhois',
        response_type: 'json',
        domain,
      }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Enter domain"
      />
      <button onClick={handleSearch}>Search Domain</button>
      {result && (
        <div>
          <h3>Domain Search Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

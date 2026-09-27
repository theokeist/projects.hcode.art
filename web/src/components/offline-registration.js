'use client';

import { useEffect } from 'react';

export default function OfflineRegistration() {
  useEffect(() => {
    if (!('serviceWorker' in navigator) || window.location.protocol === 'file:') return;
    navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' })
      .catch(error => console.warn('[HCODE] Offline support could not start:', error));
  }, []);

  return null;
}

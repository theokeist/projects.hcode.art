import './globals.css';
import './portal.css';
import './legacy-portal.css';
import './legacy-zh.css';
import './legacy-ko.css';
import './migration.css';
import OfflineRegistration from '../components/offline-registration';

export const metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'HCODE.ART | Nezávislý digitální ekosystém',
  description: 'Nezávislá full-stack architektura, webové aplikace a jazykové studium.'
};

export default function RootLayout({ children }) {
  return <html lang="cs"><body><OfflineRegistration />{children}</body></html>;
}

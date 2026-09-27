import PageFrame from '../../../components/page-frame';

export const metadata = { title: 'Korejská čítárna · HCODE.ART' };

export default function KoreanReadingPage() {
  return <PageFrame language="ko" current="read" title="Korejská čítárna" description="Výukové věty, zprávy, kultura a přísloví." />;
}

import ClientComponent from '@/components/ClientComponent';
import Link from 'next/link';

export default function ServerComponentPage() {
    console.log('Server');
    return (
    <div>
        <div>サーバー</div>
        <ClientComponent />
        <Link href="/about">About</Link>
    </div>
    );
}
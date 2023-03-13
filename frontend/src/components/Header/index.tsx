import { useContext } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
    const { signOut } = useContext(AuthContext);
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href='/dashboard' legacyBehavior>
                    <Image src="/logo.svg" width={190} height={60} alt={''} />
                </Link>
                <nav className={styles.menuNav}>
                    <Link href="/category" legacyBehavior>
                        <a>Categoria</a>
                    </Link>

                    <Link href="/product" legacyBehavior>
                        <a>Cardápio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#fff" size={24} />
                    </button>
                </nav>
            </div>
        </header>
    )
}
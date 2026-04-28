import React from 'react';
import styles from './legal.module.css';

export default function PrivacyPolicy() {
    return (
        <main className={styles.legalContainer}>
            <div className={styles.content}>
                <h1>Polityka Prywatności</h1>
                <p>Ostatnia aktualizacja: 28 kwietnia 2026 r.</p>

                <section>
                    <h2>1. Informacje ogólne</h2>
                    <p>
                        Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z serwisu internetowego Zielony Talerzyk.
                    </p>
                </section>

                <section>
                    <h2>2. Administrator Danych</h2>
                    <p>
                        Administratorem danych osobowych zawartych w serwisie jest:<br />
                        <strong>Jakub Wiśniewski Browar Dziki Wschód</strong><br />
                        ul. Krakowskie Przedmieście 3, 20-002 Lublin<br />
                        NIP: 714 185 55 52
                    </p>
                </section>

                <section>
                    <h2>3. Gromadzone dane</h2>
                    <p>
                        Serwis zbiera informacje dobrowolnie podane przez użytkownika (np. w formularzu kontaktowym) oraz informacje o parametrach połączenia (oznaczenie czasu, adres IP).
                    </p>
                </section>

                <section>
                    <h2>4. Cele przetwarzania danych</h2>
                    <p>
                        Dane osobowe są przetwarzane w celu:<br />
                        - realizacji usług świadczonych drogą elektroniczną,<br />
                        - kontaktu z Użytkownikiem,<br />
                        - statystycznym i analitycznym.
                    </p>
                </section>

                <section>
                    <h2>5. Pliki Cookies</h2>
                    <p>
                        Serwis korzysta z plików cookies. Są to niewielkie pliki tekstowe wysyłane przez serwer www i przechowywane przez oprogramowanie komputera przeglądarki. Kiedy przeglądarka ponownie połączy się ze stroną, witryna rozpoznaje rodzaj urządzenia, z którego łączy się użytkownik. Parametry pozwalają na odczytanie informacji w nich zawartych jedynie serwerowi, który je utworzył. Cookies ułatwiają więc korzystanie z wcześniej odwiedzonych witryn.
                    </p>
                </section>

                <section>
                    <h2>6. Prawa Użytkownika</h2>
                    <p>
                        Każdy Użytkownik ma prawo do wglądu w swoje dane, ich poprawiania, żądania ich usunięcia lub ograniczenia przetwarzania. W tym celu prosimy o kontakt pod adresem: basmalublin@gmail.com.
                    </p>
                </section>
            </div>
        </main>
    );
}

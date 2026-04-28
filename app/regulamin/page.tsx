import React from 'react';
import styles from '../polityka-prywatnosci/legal.module.css';

export default function TermsAndConditions() {
    return (
        <main className={styles.legalContainer}>
            <div className={styles.content}>
                <h1>Regulamin Serwisu</h1>
                <p>Ostatnia aktualizacja: 28 kwietnia 2026 r.</p>

                <section>
                    <h2>1. Postanowienia ogólne</h2>
                    <p>
                        Niniejszy regulamin określa zasady korzystania z serwisu internetowego Zielony Talerzyk, dostępnego pod adresem strony internetowej.
                    </p>
                </section>

                <section>
                    <h2>2. Definicje</h2>
                    <p>
                        <strong>Serwis</strong> – strona internetowa dostępna pod adresem restauracji.<br />
                        <strong>Użytkownik</strong> – każdy podmiot korzystający z Serwisu.
                    </p>
                </section>

                <section>
                    <h2>3. Usługi świadczone drogą elektroniczną</h2>
                    <p>
                        Serwis umożliwia zapoznanie się z ofertą restauracji, menu, aktualnymi promocjami oraz danymi kontaktowymi.
                    </p>
                </section>

                <section>
                    <h2>4. Dane Firmowe</h2>
                    <p>
                        Właścicielem serwisu jest:<br />
                        <strong>Jakub Wiśniewski Browar Dziki Wschód</strong><br />
                        ul. Królewska 3, 20-109 Lublin<br />
                        NIP: 714 185 55 52<br />
                        Tel: +48 500 068 241<br />
                        Email: zielonatalerzyk@protonmail.com
                    </p>
                </section>

                <section>
                    <h2>5. Odpowiedzialność</h2>
                    <p>
                        Administrator dokłada wszelkich starań, aby informacje zawarte w Serwisie były aktualne i poprawne.
                    </p>
                </section>

                <section>
                    <h2>6. Postanowienia końcowe</h2>
                    <p>
                        Administrator zastrzega sobie prawo do zmiany niniejszego Regulaminu w dowolnym czasie. Zmiany wchodzą w życie z dniem ich opublikowania w Serwisie.
                    </p>
                </section>
            </div>
        </main>
    );
}

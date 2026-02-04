import { Clock, CheckCircle, XCircle } from "lucide-react";
import styles from "./openinghours.module.css";

export default function OpeningHours() {
    const getCurrentDay = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[new Date().getDay()];
    };

    const isOpen = () => {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();

        // Sunday: 12:00 - 20:00
        if (day === 0) return hour >= 12 && hour < 20;
        // Monday-Thursday: 11:00 - 20:00
        if (day >= 1 && day <= 4) return hour >= 11 && hour < 20;
        // Friday: 11:00 - 21:00
        if (day === 5) return hour >= 11 && hour < 21;
        // Saturday: 12:00 - 21:00
        if (day === 6) return hour >= 12 && hour < 21;

        return false;
    };

    const currentDay = getCurrentDay();
    const openNow = isOpen();

    const schedule = [
        { day: 'Sunday', hours: '12:00 PM - 8:00 PM' },
        { day: 'Monday', hours: '11:00 AM - 8:00 PM' },
        { day: 'Tuesday', hours: '11:00 AM - 8:00 PM' },
        { day: 'Wednesday', hours: '11:00 AM - 8:00 PM' },
        { day: 'Thursday', hours: '11:00 AM - 8:00 PM' },
        { day: 'Friday', hours: '11:00 AM - 9:00 PM' },
        { day: 'Saturday', hours: '12:00 PM - 9:00 PM' },
    ];

    return (
        <div className={styles.hoursContainer}>
            <div className={styles.hoursCard}>
                <div className={styles.header}>
                    <Clock className={styles.clockIcon} />
                    <h3 className={styles.title}>Godziny Otwarcia</h3>
                </div>

                <div className={styles.statusBadge}>
                    {openNow ? (
                        <>
                            <CheckCircle className={styles.statusIcon} />
                            <span className={styles.openText}>Otwarte teraz</span>
                        </>
                    ) : (
                        <>
                            <XCircle className={styles.statusIcon} />
                            <span className={styles.closedText}>Zamknięte</span>
                        </>
                    )}
                </div>

                <div className={styles.scheduleList}>
                    {schedule.map((item) => (
                        <div
                            key={item.day}
                            className={`${styles.scheduleItem} ${item.day === currentDay ? styles.today : ''}`}
                        >
                            <span className={styles.dayName}>{item.day}</span>
                            <span className={styles.dayHours}>{item.hours}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

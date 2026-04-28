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

        // Friday & Saturday: 12:00 - 23:00
        if (day === 5 || day === 6) return hour >= 12 && hour < 23;
        
        // Other days: 12:00 - 22:00
        return hour >= 12 && hour < 22;
    };

    const currentDay = getCurrentDay();
    const openNow = isOpen();

    const schedule = [
        { day: 'Sunday', hours: '12:00 PM - 10:00 PM' },
        { day: 'Monday', hours: '12:00 PM - 10:00 PM' },
        { day: 'Tuesday', hours: '12:00 PM - 10:00 PM' },
        { day: 'Wednesday', hours: '12:00 PM - 10:00 PM' },
        { day: 'Thursday', hours: '12:00 PM - 10:00 PM' },
        { day: 'Friday', hours: '12:00 PM - 11:00 PM' },
        { day: 'Saturday', hours: '12:00 PM - 11:00 PM' },
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

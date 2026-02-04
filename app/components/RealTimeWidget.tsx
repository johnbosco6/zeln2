"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar, CloudSun } from "lucide-react";
import styles from "./realtimewidget.module.css";

export default function RealTimeWidget() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [weather, setWeather] = useState<{ temp: number; condition: string } | null>(null);

    useEffect(() => {
        // Update time every 10ms for milliseconds display
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 10);

        // Fetch weather data (using Open-Meteo API for Lublin)
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=51.2465&longitude=22.5684&current_weather=true&timezone=Europe/Warsaw'
                );
                const data = await response.json();
                setWeather({
                    temp: Math.round(data.current_weather.temperature),
                    condition: getWeatherCondition(data.current_weather.weathercode)
                });
            } catch (error) {
                console.error('Weather fetch error:', error);
            }
        };

        fetchWeather();
        // Update weather every 10 minutes
        const weatherTimer = setInterval(fetchWeather, 600000);

        return () => {
            clearInterval(timer);
            clearInterval(weatherTimer);
        };
    }, []);

    const getWeatherCondition = (code: number): string => {
        if (code === 0) return 'Słonecznie';
        if (code <= 3) return 'Częściowo pochmurno';
        if (code <= 67) return 'Deszczowo';
        if (code <= 77) return 'Śnieżnie';
        return 'Pochmurno';
    };

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
        return { hours, minutes, seconds, milliseconds };
    };

    const formatDate = (date: Date) => {
        const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
        const months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
            'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

        return {
            dayName: days[date.getDay()],
            day: date.getDate(),
            month: months[date.getMonth()],
            year: date.getFullYear()
        };
    };

    const time = formatTime(currentTime);
    const dateInfo = formatDate(currentTime);

    return (
        <div className={styles.widget}>
            <div className={styles.widgetCard}>
                {/* Time Display */}
                <div className={styles.timeSection}>
                    <Clock className={styles.icon} />
                    <div className={styles.timeDisplay}>
                        <div className={styles.mainTime}>
                            {time.hours}:{time.minutes}:{time.seconds}
                            <span className={styles.milliseconds}>.{time.milliseconds}</span>
                        </div>
                    </div>
                </div>

                {/* Date Display */}
                <div className={styles.dateSection}>
                    <Calendar className={styles.icon} />
                    <div className={styles.dateDisplay}>
                        <div className={styles.dayName}>{dateInfo.dayName}</div>
                        <div className={styles.fullDate}>
                            {dateInfo.day} {dateInfo.month} {dateInfo.year}
                        </div>
                    </div>
                </div>

                {/* Weather Display */}
                {weather && (
                    <div className={styles.weatherSection}>
                        <CloudSun className={styles.icon} />
                        <div className={styles.weatherDisplay}>
                            <div className={styles.temperature}>{weather.temp}°C</div>
                            <div className={styles.condition}>{weather.condition}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

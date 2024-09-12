package com.example.SpeakingClock.Services;

import java.time.LocalTime;

import org.springframework.stereotype.Service;

@Service
public class ClockService {
    public String convertToWords(String inputTime) {
        try {
            LocalTime time = LocalTime.parse(inputTime);
            int hour = time.getHour();
            int minute = time.getMinute();
            System.out.println("Hour: " + hour + ", Minute: " + minute); // Debug statement

            return "It's " + convertHour(hour) + " " + convertMinute(minute);
        } catch (Exception e) {
            return "Invalid time format. Use HH:mm";
        }
    }

    private String convertHour(int hour) {
        String[] numbers = {
            "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
            "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
        };
        
        if (hour == 0) {
            return "midnight";
        } else if (hour == 12) {
            return "noon";
        } else if (hour < 20) {
            return numbers[hour];
        } else {
            return "twenty " + numbers[hour - 20];
        }
    }

    private String convertMinute(int minute) {
        if (minute == 0) {
            return "";
        } else if (minute < 10) {
            return "oh " + convertSingleDigit(minute);
        } else if (minute < 20) {
            return convertTeen(minute);
        } else {
            int tensDigit = minute / 10;
            int onesDigit = minute % 10;
            String[] tens = {
                "", "ten", "twenty", "thirty", "forty", "fifty"
            };
            return tens[tensDigit] + " " + convertSingleDigit(onesDigit);
        }
    }
    
    private String convertSingleDigit(int digit) {
        String[] numbers = {
            "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
        };
        return numbers[digit];
    }
    
    private String convertTeen(int value) {
        String[] teens = {
            "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
        };
        return teens[value - 10];
    }
    
}

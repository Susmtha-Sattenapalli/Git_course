package com.example.SpeakingClock.Services;


import com.example.SpeakingClock.exception.InvalidTimeFormatException;
import org.springframework.stereotype.Service;

@Service
public class TimeService {

    public String checkTime(String time) {
        // Validate the input format
        if (!time.matches("\\d{2}:\\d{2}")) {
            throw new InvalidTimeFormatException("Invalid time format. Please use HH:MM.");
        }

        String[] parts = time.split(":");
        int hour = Integer.parseInt(parts[0]);
        int minute = Integer.parseInt(parts[1]);

        // Check for Midday and Midnight
        if (hour == 12 && minute == 0) {
            return "It's Midday";
        } else if (hour == 0 && minute == 0) {
            return "It's Midnight";
        } else {
            return "It's not Midday or Midnight.";
        }
    }


}

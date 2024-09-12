package com.example.SpeakingClock.exception;

public class InvalidTimeFormatException extends RuntimeException{

    public InvalidTimeFormatException(String message) {
        super(message);
    }
}

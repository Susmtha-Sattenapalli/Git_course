package com.example.SpeakingClock.Controller;


import com.example.SpeakingClock.Services.TimeService;
import com.example.SpeakingClock.exception.InvalidTimeFormatException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TimeController {
    private final TimeService timeService;

    @Autowired
    public TimeController(TimeService timeService) {
        this.timeService = timeService;
    }

    @GetMapping("/checkTime")
    public String checkTime(@RequestParam String time) {
        return timeService.checkTime(time);
    }

    @ExceptionHandler(InvalidTimeFormatException.class)
    public ResponseEntity<String> handleInvalidTimeFormatException(InvalidTimeFormatException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}

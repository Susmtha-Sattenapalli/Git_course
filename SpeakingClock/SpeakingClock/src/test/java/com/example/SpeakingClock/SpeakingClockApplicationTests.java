package com.example.SpeakingClock;

import com.example.SpeakingClock.Controller.ClockController;
import com.example.SpeakingClock.Services.ClockService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class SpeakingClockApplicationTests {

    @Mock
    private ClockService clockService;

    @InjectMocks
    private ClockController clockController;

    @Test
    void testConvertTimeToWords_ValidInput() {
        String inputTime = "12:34";
        String expectedOutput = "It's noon thirty four";

        Mockito.when(clockService.convertToWords(Mockito.anyString())).thenReturn(expectedOutput);

        ResponseEntity<String> actualOutput = clockController.convertTimeToWords(inputTime);

        assertEquals(expectedOutput, actualOutput);
    }

	@Test
    void testConvertTimeToWords_ValidInput2() {
        String inputTime = "00:00";
        String expectedOutput = "It's midnight";

        Mockito.when(clockService.convertToWords(Mockito.anyString())).thenReturn(expectedOutput);

        ResponseEntity<String> actualOutput = clockController.convertTimeToWords(inputTime);

        assertEquals(expectedOutput, actualOutput);
    }

    @Test
    void testConvertTimeToWords_InvalidInput() {
        String inputTime = "invalidTime";
        String expectedOutput = "Invalid time format. Use HH:mm";

        Mockito.when(clockService.convertToWords(Mockito.anyString())).thenReturn(expectedOutput);

        ResponseEntity<String> actualOutput = clockController.convertTimeToWords(inputTime);

        assertEquals(expectedOutput, actualOutput);
    }

   
}

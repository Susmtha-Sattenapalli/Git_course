package com.example.SpeakingClock.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.SpeakingClock.Services.ClockService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(value = "Time Conversion API" , description="")
@RestController
@RequestMapping("/api")
public class ClockController {
   
    @Autowired
    private ClockService clockService;
   

   @ApiOperation(value = "View a list of available products", response = Iterable.class)
   
   @GetMapping("/time/{inputTime}")
   public ResponseEntity<String> convertTimeToWords(@PathVariable String inputTime) {
        try {
            String result = clockService.convertToWords(inputTime);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
        }
    }


     @GetMapping("/")
       public String Words() {
         return "HI Susmitha";
    }
}

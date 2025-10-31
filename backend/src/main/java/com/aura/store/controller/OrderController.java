package com.aura.store.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @PostMapping
    public Map<String, Object> placeOrder(@RequestBody Map<String, Object> order) {
        return Map.of("status", "success", "message", "Order received successfully");
    }
}

package com.aura.store.controller;

import com.aura.store.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
    @GetMapping
    public List<Product> getAllProducts() {
        return List.of(
            new Product(1, "Wireless Headphones", 2999, "https://images.unsplash.com/photo-1585386959984-a41552231693"),
            new Product(2, "Smart Watch", 4999, "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f"),
            new Product(3, "Gaming Mouse", 1999, "https://images.unsplash.com/photo-1610564558396-501ba1e51e4f"),
            new Product(4, "Laptop Backpack", 1499, "https://images.unsplash.com/photo-1616628182509-cb72c7fa962f")
        );
    }
}

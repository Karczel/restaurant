package ku.restaurant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RestaurantController {
    @GetMapping("/restaurants")
    public String getAllRestaurants() {
        return "All Restaurants";
    }
}

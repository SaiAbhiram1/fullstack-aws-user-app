package com.sai.minibackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository repo;

    // CREATE user
    @PostMapping
    public User addUser(@RequestBody User user) {
        return repo.save(user);
    }

    // GET all users
    @GetMapping
    public List<User> getUsers() {
        return repo.findAll();
    }
}

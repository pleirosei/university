package com.university.students;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by seanlivingston on 11/22/14.
 */
@Controller
public class StudentController {
    @RequestMapping("/home")
    public String home() {
        return "index";
    }
}

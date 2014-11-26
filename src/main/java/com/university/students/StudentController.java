package com.university.students;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by seanlivingston on 11/22/14.
 */
@Controller
@RequestMapping("")
public class StudentController {
    @RequestMapping("/university")
    public String list(Model model) {
        return "students/home";
    }
}

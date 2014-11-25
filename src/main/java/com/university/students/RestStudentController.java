package com.university.students;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by seanlivingston on 11/24/14.
 */
@RestController
@RequestMapping("/university/students")
public class RestStudentController {
    private StudentRepository studentRepository;

    @Autowired
    public RestStudentController (StudentRepository studentRepository) {
        return this.studentRepository = studentRepository;
    }


}

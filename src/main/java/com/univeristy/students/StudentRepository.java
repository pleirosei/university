package com.univeristy.students;

/**
 * Created by seanlivingston on 11/22/14.
 */

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface StudentRepository extends CrudRepository<Student, Integer> {
    List<Student> findById(@Param("id") Integer id);
    List<Student> findByLastName(@Param("lastname") String lastName);
}

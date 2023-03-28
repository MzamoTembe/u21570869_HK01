﻿using Architecture.Models;
using Architecture.ViewModel;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace Architecture.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {

        private readonly ICourseRepository _courseRepository;
        public CourseController(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }

        [HttpGet]
        [Route("GetAllCourses")]
        public async Task<IActionResult> GetAllCourses()
        {
            try
            {
                var results = await _courseRepository.GetAllCourseAsync();
                return Ok(results);
            }
            catch (Exception)
            {
                return StatusCode(500,"Internal Server Error. Please contact support.");
            }
        }

        [HttpGet]
        [Route("GetCourse/{id}")]
        public async Task<IActionResult> GetCourse(int id)
        {
            try
            {
                var course = await _courseRepository.GetCourseAsync(id);
                return Ok(course);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error. Please contact support.");
            }
        }

        [HttpPost]
        [Route("AddCourse")]
        public async Task<IActionResult> AddCourse([FromBody] Course addcourseRequest)
        {
            try
            {
                var course = await _courseRepository.AddCourseAsync(addcourseRequest);
                return Ok(course);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error. Please contact support.");
            }
        }

        [HttpPut]
        [Route("UpdateCourse/{id}")]
        public async Task<IActionResult> UpdateCourse(int id, Course updateCourseRequest)
        {
            try
            {
                var course = await _courseRepository.UpdateCourseAsync(id, updateCourseRequest);
                return Ok(course);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error. Please contact support.");
            }
        }

        [HttpDelete]
        [Route("DeleteCourse/{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            try
            {
                var course = await _courseRepository.DeleteCourseAsync(id);
                return Ok(course);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server Error. Please contact support.");
            }
        }
    }
}

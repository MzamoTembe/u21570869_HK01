using Architecture.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace Architecture.Models
{
    public class CourseRepository : ICourseRepository
    {
        private readonly AppDbContext _appDbContext;

        public CourseRepository(AppDbContext appDbContext)
        {
                _appDbContext = appDbContext;
        }
        public async Task<Course[]> GetAllCourseAsync()
        {
            IQueryable<Course> query = _appDbContext.Courses;
            return await query.ToArrayAsync();
        }

        public async Task<Course> GetCourseAsync(int id)
        {
            IQueryable<Course> query = _appDbContext.Courses.Where(x => x.CourseId == id);
            return await query.FirstAsync();
        }

        public async Task<Course> AddCourseAsync(Course NewCourse)
        {
            try
            {
                await _appDbContext.Courses.AddAsync(NewCourse);
                await _appDbContext.SaveChangesAsync();
                return NewCourse;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<Course> UpdateCourseAsync(int id, Course updateCourseRequest)
        {
            Course updatedCourseRequest = new Course();
            var course = await _appDbContext.Courses.Where(c => c.CourseId == id).FirstAsync();


            if (course == null)
            {
                return course;
            }

            course.Name = updateCourseRequest.Name;
            course.Description = updateCourseRequest.Description;
            course.Duration = updateCourseRequest.Duration;
            _appDbContext.Courses.Update(course);
            await _appDbContext.SaveChangesAsync();

            return course;
        }

        public async Task<Course> DeleteCourseAsync(int id)
        {
            var course = await _appDbContext.Courses.FindAsync(id);

            if (course == null)
            {
                return null;
            }

            _appDbContext.Courses.Remove(course);
            await _appDbContext.SaveChangesAsync();

            return course;
        }
    }
}

using System.Threading.Tasks;

namespace Architecture.Models
{
    public interface ICourseRepository
    {
        // Course
        Task<Course[]> GetAllCourseAsync();

        Task<Course> GetCourseAsync(int id);

        Task<Course> AddCourseAsync(Course NewCourse);
        Task<Course> DeleteCourseAsync(int id);
        Task<Course> UpdateCourseAsync(int id, Course updateCourseRequest);
    }
}

export class CoursesSerivce{
    title = "List of Courses"
    courses = ["Course1", "Course2", "Course3"]
    getCourses(){
        return this.courses;
    }
    getNumberOfCourses(){
        return this.courses.length;
    }
}
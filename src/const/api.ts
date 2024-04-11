export const APIS = {
    GET: {
        services: 'https://sparkeng.pythonanywhere.com/rest/service_list',
        team: 'https://sparkeng.pythonanywhere.com/rest/member_list/',
        studentsProjects: 'https://sparkeng.pythonanywhere.com/rest/student_project_list',
        companyPrjects: 'https://sparkeng.pythonanywhere.com/rest/companyproject_list',
        courses: 'https://sparkeng.pythonanywhere.com/rest/course_list',
        projectsView: {
            IT: 'https://sparkeng.pythonanywhere.com/rest/ProjectCourseView_IT/',
            ARCH: 'https://sparkeng.pythonanywhere.com/rest/ProjectCourseView_ARCH'
        },
    },
    POST: {
        studentProject: 'https://sparkeng.pythonanywhere.com/rest/student_project_request/',
        studentCourse: 'https://sparkeng.pythonanywhere.com/rest/student_course_request/',
        companyRequest: 'https://sparkeng.pythonanywhere.com/rest/company_request/'
    }
};
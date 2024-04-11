import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Img1 from '../assets/web-page.png'
import Icon1 from '../assets/service1.png'
import Img2 from '../assets/serviceImg1.png'
import Icon2 from '../assets/service2.png'
import Img3 from '../assets/serviceImg1.png'
import Icon3 from '../assets/service3.png'
import Img4 from '../assets/Shopify logo.png'
import Icon4 from '../assets/service4.png'
import ProjectImg1 from '../assets/UI Design.png'
import ProjectImg2 from '../assets/Home Page 9.png'
import ProjectImg3 from '../assets/Home Page 8.png'
import ProjectImg4 from '../assets/Home Page 2.png'
import Img from '../assets/Image.png'
import SImg1 from '../assets/Rectangle 9.png'
import SImg2 from '../assets/Rectangle 10.png'
import SImg3 from '../assets/Rectangle 11.png'
import SImg4 from '../assets/Rectangle 10 (1).png'
import CImg1 from '../assets/course1.png'
import CImg2 from '../assets/course2.png'
import CImg3 from '../assets/course3.png'
import CImg4 from '../assets/course4.png'
import CImg5 from '../assets/course5.png'
import CImg6 from '../assets/course6.png'
import FImg1 from '../assets/person1.png'
import FImg2 from '../assets/person2.png'
import FImg3 from '../assets/person3.png'
import ICImg from '../assets/course1-img.png'

// types
import { TCourseInfo, TCourses, TFeedbacks, TFileds, TNavLinksArray, TNavLinksArray2, TProjects, TServices, TServicesData, TSocialMediaContacts, TTeam } from "../types";
import { BiUser } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { MdAccessTime, MdLanguage } from "react-icons/md";

export const socialMediaContacts: TSocialMediaContacts  = [
    {link: '/', icon: <FaInstagram/>},
    {link: '/', icon: <FaWhatsapp/>},
    {link: '/', icon: <FaLinkedin/>},
    {link: '/', icon: <FaXTwitter/>},
];

export const services: TServices = [
    {
        icon: Icon1,
        title: 'Website Developer',
        subtitle: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        url: '/',
        img: Img1,
    },
    {
        icon: Icon2,
        title: 'UI/UX Design',
        subtitle: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        url: '/',
        img: Img2,
    },
    {
        icon: Icon3,
        title: 'Branding',
        subtitle: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        url: '/',
        img: Img3,
    },
    {
        icon: Icon4,
        title: 'E-ecomarcy',
        subtitle: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
        url: '/',
        img: Img4,
    },
];

export const projects: TProjects = [
    {
        title: 'MStore',
        type: 'Development Project',
        subtitle: 'Mangcodeing is bigest company in indonesia, who provides the',
        discription: 'Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress',
        img: ProjectImg1,
        url: '/',
    },
    {
        title: 'Beauty',
        type: 'Development Project',
        subtitle: 'Mangcodeing is bigest company in indonesia, who provides the',
        discription: 'Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress',
        img: ProjectImg2,
        url: '/',
    },
    {
        title: 'Mangcoding',
        type: 'Development Project',
        subtitle: 'Mangcodeing is bigest company in indonesia, who provides the',
        discription: 'Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress',
        img: ProjectImg3,
        url: '/',
    },
    {
        title: 'MangStore',
        type: 'Development Project',
        subtitle: 'Mangcodeing is bigest company in indonesia, who provides the',
        discription: 'Mangcodeing is bigest company in indonesia, who provides the services in Development Website, Shopify and WordPress',
        img: ProjectImg4,
        url: '/',
    },
];

export const team: TTeam = [
    {
        name: 'Danyal Mershed',
        postion: 'Team Leader',
        discription: 
        'Danyal Mershed is an accomplished and dynamic leader with a proven track record of driving teams towards success, with a keen eye for detail and a passion for fostering collaboration, Danyal brings a unique track record blend of strategic thinking and hands-on leadership to every project.',
        rate: 4.5,
        img: Img
    },
    {
        name: 'Moones Mezher',
        postion: 'Full Stack Developer',
        discription: 
        'Moones Mezher is an accomplished and dynamic leader with a proven track record of driving teams towards success, with a keen eye for detail and a passion for fostering collaboration, Danyal brings a unique track record blend of strategic thinking and hands-on leadership to every project.',
        rate: 4.5,
        img: Img
    },
    {
        name: 'Lionel Messi',
        postion: 'Front Stack Developer',
        discription: 
        'Moones Mezher is an accomplished and dynamic leader with a proven track record of driving teams towards success, with a keen eye for detail and a passion for fostering collaboration, Danyal brings a unique track record blend of strategic thinking and hands-on leadership to every project.',
        rate: 4.5,
        img: Img
    },
    {
        name: 'Cristiano Ronaldo',
        postion: 'Backend Stack Developer',
        discription: 
        'Moones Mezher is an accomplished and dynamic leader with a proven track record of driving teams towards success, with a keen eye for detail and a passion for fostering collaboration, Danyal brings a unique track record blend of strategic thinking and hands-on leadership to every project.',
        rate: 4.5,
        img: Img
    }
];

export const servicesData: TServicesData = [
    {
        title: 'Big Data & Business Analytics',
        img: SImg1,
        discription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque assumenda dolorum praesentium facilis officia iusto dolore veritatis maxime voluptate, accusantium rerum exercitationem sit! Repellendus et nam odit nobis laudantium quas?'
    },
    {
        title: 'UI/UX Design',
        img: SImg2,
        discription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque assumenda dolorum praesentium facilis officia iusto dolore veritatis maxime voluptate, accusantium rerum exercitationem sit! Repellendus et nam odit nobis laudantium quas?'
    },
    {
        title: 'Microsoft windows applications',
        img: SImg3,
        discription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque assumenda dolorum praesentium facilis officia iusto dolore veritatis maxime voluptate, accusantium rerum exercitationem sit! Repellendus et nam odit nobis laudantium quas?'
    },
    {
        title: 'Web and Software Development',
        img: SImg4,
        discription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque assumenda dolorum praesentium facilis officia iusto dolore veritatis maxime voluptate, accusantium rerum exercitationem sit! Repellendus et nam odit nobis laudantium quas?'
    },
    {
        title: 'Mobile Application Development',
        img: SImg1,
        discription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque assumenda dolorum praesentium facilis officia iusto dolore veritatis maxime voluptate, accusantium rerum exercitationem sit! Repellendus et nam odit nobis laudantium quas?'
    },
];

export const courses: TCourses = [
    {
        title: 'Web Design Zero to Hero',
        rate: 5,
        ratingCounts: 2,
        img: CImg1,
        price: 28,
        offer: 26,
        url: '/',
    },
    {
        title: 'Web Development Zero to Hero',
        rate: 5,
        ratingCounts: 2,
        img: CImg2,
        price: 28,
        offer: 26,
        url: '/',
    },{
        title: 'Digital Marketing Zero to Hero',
        rate: 5,
        ratingCounts: 2,
        img: CImg3,
        price: 28,
        offer: 26,
        url: '/',
    },{
        title: 'App Design Zero to Hero',
        rate: 5,
        ratingCounts: 2,
        img: CImg4,
        price: 28,
        offer: 26,
        url: '/',
    },{
        title: 'Mobile Design Zero to Hero',
        rate: 5,
        ratingCounts: 2,
        img: CImg5,
        price: 28,
        offer: 26,
        url: '/',
    },{
        title: 'Graphic Design Zero to Hero',
        rate: 5,
        ratingCounts: 2,
        img: CImg6,
        price: 28,
        offer: 26,
        url: '/',
    },{
        title: 'Web Design Zero to Hero',
        rate: 5,
        ratingCounts: 2,
        img: CImg1,
        price: 28,
        offer: 26,
        url: '/',
    },
];

export const feedbacks: TFeedbacks = [
    {
        username: 'Beth Luua',
        text: 'Lorem Ipsum is simply dummy text od the printing and typesetting industry. Lorem Ipsum has been the Industry standard dummy text ever since the 1500s when an unknown printer took.',
        rate: 5,
        userimg: FImg1,
    },
    {
        username: 'Belinda Gomez',
        text: 'Lorem Ipsum is simply dummy text od the printing and typesetting industry. Lorem Ipsum has been the Industry standard dummy xt ever since the 1500s when an unknown printer took.',
        rate: 5,
        userimg: FImg2,
    },
    {
        username: 'Howard Clayton',
        text: 'Lorem Ipsum is simply dummy text od the printing and typesetting industry. Lorem Ipsum has been the Industry standard dummy xt ever since the 1500s when an unknown printer took.',
        rate: 5,
        userimg: FImg3,
    },
];

export const courseInfo: TCourseInfo = {
    title: 'Unconscious Bias',
    popular: true,
    duration: '25mins',
    img: ICImg,
    creator: 'Reena Jacob',
    uploaded: '12/04/2022',
    language: 'English',
    price: 0,
    rate: 4.5,
    ratingCounters: 43435,
    details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur quasi beatae magnam quae non recusandae. Aspernatur, beatae culpa asperiores nesciunt velit vitae libero distinctio nisi sequi neque officia optio.     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur quasi beatae magnam quae non recusandae. Aspernatur, beatae culpa asperiores nesciunt velit vitae libero distinctio nisi sequi neque officia optio.',
    lessons: [
        {title: 'Lesson Title', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur quasi beatae magnam quae non recusandae. Aspernatur, beatae culpa asperiores nesciunt velit vitae libero', url: '/'},
        {title: 'Lesson Title', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur quasi beatae magnam quae non recusandae. Aspernatur, beatae culpa asperiores nesciunt velit vitae libero', url: '/'},
        {title: 'Lesson Title', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur quasi beatae magnam quae non recusandae. Aspernatur, beatae culpa asperiores nesciunt velit vitae libero', url: '/'},
        {title: 'Lesson Title', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur quasi beatae magnam quae non recusandae. Aspernatur, beatae culpa asperiores nesciunt velit vitae libero', url: '/'},
        {title: 'Lesson Title', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur quasi beatae magnam quae non recusandae. Aspernatur, beatae culpa asperiores nesciunt velit vitae libero', url: '/'},
        {title: 'Lesson Title', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque pariatur quasi beatae magnam quae non recusandae. Aspernatur, beatae culpa asperiores nesciunt velit vitae libero', url: '/'},
    ]
}; 

export const navLinksArray: TNavLinksArray = [
    {title: 'About', link: 'about'},
    {title: 'Services', link: 'services'},
    {title: 'Courses', link: 'courses'},
    {title: 'Learn', link: 'learn'},
    {title: 'Course', link: 'course/1'},
];

export const navLinksArray2: TNavLinksArray2  = [
    {title: 'About US', link: 'about'},
    {title: 'Services', link: 'services'},
    {title: 'Courses', link: 'courses'},
    {title: 'Learn', link: 'learn'}
];

export const fields: TFileds = [
    {
        filed: 'Creator',
        value: courseInfo.creator,
        icon: <BiUser/>
    },
    {
        filed: 'Uploaded On',
        value: courseInfo.uploaded,
        icon: <FiUpload/>
    },
    {
        filed: 'Duration',
        value: courseInfo.duration,
        icon: <MdAccessTime/>
    },
    {
        filed: 'Language',
        value: courseInfo.language,
        icon: <MdLanguage/>
    },
];
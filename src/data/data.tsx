import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    BookOpenIcon,
    CalendarIcon,
    FlagIcon,
    MapIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
/*import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';*/
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
/*import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
    About,
    ContactSection,
    ContactType,
    Hero,
    HomepageMeta,
    PortfolioItem,
    SkillGroup,
    Social,
    TestimonialSection,
    TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: 'Siva Sanam Portfolio',
    description: "A Portfolio Website about my professoinal career",
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Contact: 'contact',
    Portfolio: 'portfolio',
    Resume: 'resume',
    Skills: 'skills',
    Stats: 'stats',
    Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
    imageSrc: heroImage,
    name: `I'm Siva Sanam.`,
    description: (
        <>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                I'm a <strong className="text-stone-100">Data Enthusiast</strong>, currently pursuing my Masters
                at <strong className="text-stone-100">University of South Florida</strong> who aspires to become a future <strong className="text-stone-100">Data Scientist/Data Engineer</strong> upon my graduation.
            </p>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                In my free time, you can catch me playing cricket and working out.
            </p>
        </>
    ),
    actions: [
        {
            href: 'https://drive.google.com/file/d/1sqhaxdPAzxKj8hGix4A3g1Ma3JW5uk1m/view?usp=drive_link',
            text: 'Resume',
            primary: true,
            Icon: ArrowDownTrayIcon,
        },
        {
            href: `#${SectionId.Contact}`,
            text: 'Contact',
            primary: false,
        },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilepic,
    description: `I have professional experience of 4 years in the field of Data Analytics. I am driven by my passion for Data Analytics specializing in E Commerce and Banking domains.I strive to be a catalyst in developing innovative solutions that have a lasting impact on society using my Data Analytical skills. I enjoy collaborating with individuals who are passionate about navigating the vast world of data to drive innovation.`,
    aboutItems: [
        {label: 'Location', text: 'Tampa, FL', Icon: MapIcon},
        {label: 'Age', text: '25', Icon: CalendarIcon},
        {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
        {label: 'Interests', text: 'Playing cricket,working out.', Icon: SparklesIcon},
        {label: 'Study', text: 'University of South Florida,USA', Icon: AcademicCapIcon},
        {label: 'Degree', text: 'Masters in Artificial Intelligence and Business Analytics', Icon: BookOpenIcon},
    ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
        name: 'Data Science',
        skills: [
            {
                name: 'Jupyterlab',
                level: 9,
            },
            {
                name: 'Apache Spark ML',
                level: 6,
            },
            {
                name: 'Data Bricks',
                level: 5,
            },
        ],
    },
    {
        name: 'Technologies',
        skills: [
            {
                name: 'Postgres SQL',
                level: 8,
            },
            {
                name: 'Power BI',
                level: 7,
            },
            {
                name: 'Tableau',
                level: 7,
            },
            {
                name: 'Git',
                level: 6,
            },
        ],
    },
    {
        name: 'Programming Languages',
        skills: [
            {
                name: 'SQL',
                level: 9,
            },
            {
                name: 'Python',
                level: 7,
            },
            {
                name: 'R',
                level: 5,
            },
        ],
    },
    {
        name: 'Spoken Languages',
        skills: [
            {
                name: 'English',
                level: 10,
            },
            {
                name: 'Telugu',
                level: 10,
            },
            {
                name: 'Hindi',
                level: 8,
            },
        ],
    },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Online Shoppers Purchase Prediction Model',
        description: 'A ML model to predict user purchase intention from their Online session',
        url: 'https://github.com/Siva-Sanam/Online-Shopping-Purchase-Intention_ML_Model',
        image: porfolioImage1,
    },  
    {
        title: 'Bank Prospective Customer Selection Model',
        description: 'A ML model which predicts whether customer is interested in taking certain Bank offers',
        url: 'https://github.com/Siva-Sanam/Bank-Prospective-Customer-Selection-ML-Model',
        image: porfolioImage2,
    },
    {
        title: 'E Commerce Sales Dashboard Analysis',
        description: 'A PowerBI Dashboard built on Sales to extract useful insights',
        url: 'https://github.com/Siva-Sanam/E-Commerce-Sales-Analysis_Dashboard_PowerBI',
        image: porfolioImage3,
    },
    {
        title: 'Netflix Movies & TV Shows Dashboard',
        description: 'A Tableau Dashbord which showcases data about different movies & Tv Shows on Netflix',
        url: 'https://github.com/Siva-Sanam/Netflix-Tvshows-Movies-Analysis_Dashboard_Tableau',
        image: porfolioImage4,
    },
    {
        title: 'GoDrive Car Rentals',
        description: 'An interactive website where customers can rent their favourite car',
        url: 'http://myweb.usf.edu/~cv628/ASSIGNMENT-3/index.html',
        image: porfolioImage5,
    },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: 'Aug 2023-April 2025',
        location: 'University of South Florida,USA',
        title: 'Masters in Artificial Intelligence and Business Analystics',
        content: <p>I have gained extensive knowledge in Machine Learning, which has significantly enhanced my problem-solving capabilities in the field of Data Science. Additionally, I have developed a strong foundation in database concepts, big data technologies, data warehousing, and cloud computing, equipping me to handle large-scale data processing and storage challenges effectively.</p>,
    },
    /*{
      date: 'March 2003',
      location: 'School of Business',
      title: 'What did you study 101',
      content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
    },*/
];

export const experience: TimelineItem[] = [
    {
        date: 'July 2024 - Present',
        location: 'USF - Office Of Decision Support',
        title: 'Graduate Assistant Data Analyst',
        content: (
            <p>
                • Developed interactive dashboards in Power BI, visualizing over 20 key metrics for the USF College Accountability Project, enhancing data-driven decision-making across multiple departments.
                <br></br>
                • Streamlined data ingestion processes using Microsoft Fabric, reducing data load times from the Student Information Database (SID) by 30%, ensuring real-time access to critical student metrics.
                <br></br>
                • Conducted comprehensive data cleaning and improved data accuracy by 25% in SAAS EG and Excel, leading to more reliable insights for student success research analytics.
                <br></br>
                • Collaborated with cross-functional teams to analyze and query large datasets, enhancing data retrieval efficiency from SID by 40% for research purposes.
            </p>
        ),
    },
    {
        date: 'July 2019 - June 2023',
        location: 'Larsen & Toubro Ltd',
        title: 'Data Analyst',
        content: (
            <p>
                • Data Analyst with 4 years of experience in SQL, Power BI, and Tableau, delivering data-driven insights and visualizations that improved business growth by 20% and enhanced operational efficiency by 30%.
                <br></br>
                • Formulated and executed SQL-based analyses for diverse business challenges; identified trends and implemented data-driven strategies, reducing customer churn by 16% and enriching customer lifetime value by 20%.
                <br></br>
                • Engineered advanced KPI dashboards by analyzing extensive datasets; optimized workflow efficiency, diminishing report preparation time by 20% and generating an additional $90k in revenue for stakeholders.
                <br></br>
                • Led development of user-friendly visualizations with Power BI and Tableau, presenting complex findings to teams and decision-makers, and accelerating decision-making speed by 30%.
            </p>
        ),
    },
    /*{
      date: 'March 2007 - February 2010',
      location: 'Garage Startup Studio',
      title: 'Junior bug fixer',
      content: (
        <p>
          Describe work, special projects, notable achievements, what technologies you have been working with, and
          anything else that would be useful for an employer to know.
        </p>
      ),
    },*/
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
    imageSrc: testimonialImage,
    testimonials: [
        {
            name: 'Rahul Raghuvanshi(Assistant Manager@L&T Ltd)',
            text: 'I enjoyed working with Siva,he is an exemplary individual.His main qualities are his eagerness to learn new things and adapatability to handle different situations. ',
            image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
        },
        {
            name: 'Giridhar R (HOD@NIT Andhra Pradesh,India)',
            text: 'An outstanding individual with excellent academic calibre,he has got that zeal to dive into difficult situations and prosper.',
            image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
        },
    ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
    headerText: 'Get in touch.',
    description: 'You can reach out to me on below handles',
    items: [
        {
            type: ContactType.Email,
            text: 'sanamsiva156@gmail.com',
            href: 'mailto:sanamsiva156@gmail.com',
        },
        {
            type: ContactType.Location,
            text: 'Tampa FL, USA',
            href: 'https://www.google.com/maps/place/Tampa,+FL/@27.9946875,-82.6190928,11z/data=!3m1!4b1!4m6!3m5!1s0x88c2b782b3b9d1e1:0xa75f1389af96b463!8m2!3d27.9516896!4d-82.4587527!16zL20vMG4xcmo?entry=ttu',
        },
        {
            type: ContactType.Instagram,
            text: '@sivasanam_1',
            href: 'https://www.instagram.com/sivasanam_1/',
        },
        {
            type: ContactType.Github,
            text: 'Siva-Sanam',
            href: 'https://github.com/Siva-Sanam',
        },
    ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Siva-Sanam'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sivasanam/'},
    {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sivasanam_1/'},
];

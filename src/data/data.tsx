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
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
/*import porfolioImage10 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-15.jpg';*/
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
               I'm a data professional with 5 years of hands-on experience as a Business Intelligence Engineer and a strong foundation in the data domain. I hold a Master's degree from the University of South Florida and bring a practical, problem-solving mindset to every project I tackle.
            </p>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                In my free time, you can catch me playing cricket and working out.
            </p>
        </>
    ),
    actions: [
        {
            href: 'https://drive.google.com/file/d/1kd6RambXeQ0RDgw-vwesk5L6DURbGCKp/view',
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
    description: `I have professional experience of 5 years in the field of Data Analytics. I am driven by my passion for Data Analytics specializing in E Commerce and Banking domains.I strive to be a catalyst in developing innovative solutions that have a lasting impact on society using my Data Analytical skills. I enjoy collaborating with individuals who are passionate about navigating the vast world of data to drive innovation.`,
    aboutItems: [
        {label: 'Location', text: 'Tampa, FL', Icon: MapIcon},
        {label: 'Age', text: '27', Icon: CalendarIcon},
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
        name: 'Technologies',
        skills: [
            {
                name: 'Apache Airflow',
                level: 9,
            },
            {
                name: 'AWS Services(Glue, Redshift)',
                level: 8,
            },
            {
                name: 'ETL',
                level: 8,
            },
            {
                name: 'Data Bricks',
                level: 8,
            },
            {
                name: 'Snowflake',
                level: 8,
            },
            {
                name: 'Power BI',
                level: 8,
            },
            {
                name: 'Tableau',
                level: 8,
            },
            {
                name: 'Microsoft Fabric',
                level: 7,
            },
        ],
    },
    {
        name: 'Devops',
        skills: [
            {
                name: 'Docker',
                level: 8,
            },
            {
                name: 'Kubernetes',
                level: 8,
            },
            {
                name: 'Github Actions',
                level: 8,
            },
            {
                name: 'Terraform',
                level: 8,
            },
            {
                name: 'Linux',
                level: 8,
            },
            {
                name: 'CI/CD',
                level: 8,
            },
            {
                name: 'REST API Services',
                level: 7,
            },
        ],
    },
   
    {
        name: 'Databases',
        skills: [
            {
                name: 'Postgres SQL',
                level: 8,
            },
            {
                name: 'Microsoft SQLServer',
                level: 8,
            },
            {
                name: 'MySQL',
                level: 8,
            },
        ],
    },
    {
        name: 'Framework & Tools',
        skills: [
            {
                name: 'Agile',
                level: 10,
            },
            {
                name: 'Scrum',
                level: 8,
            },
            {
                name: 'Jira',
                level: 8,
            },
            {
                name: 'Confluence',
                level: 8,
            },
        ],
    },
    {
        name: 'Data Science',
        skills: [
            {
                name: 'Jupyterlab',
                level: 9,
            },
            {
                name: 'Apache Spark ML',
                level: 8,
            },
            {
                name: 'Tensorflow',
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
                name: 'Html',
                level: 9,
            },
            {
                name: 'CSS',
                level: 9,
            },
            {
                name: 'Java Script',
                level: 8,
            },
            {
                name: 'R',
                level: 6,
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
        title: 'Adventure Works Medallion lakehouse',
        description: 'A Medallion architecture pipeline using ADF, Databricks and synapse boosting accuracy to 99.9% and improving BI performance.',
        url: 'https://github.com/Siva-Sanam/Adventure_Works_Spark_Medallion_Architecture_Azure_Project',
        image: porfolioImage10,
    },
    {
        title: 'Customer Churn Analytics ETL pipeline',
        description: 'An Automated ETL pipelines using Airflow, Glue and Redshift, improving reliability 3x and enabling real time insights.',
        url: 'https://github.com/Siva-Sanam/CustomerChurn_Analytics_with_Airflow-AWSGlue_Redshift',
        image: porfolioImage11,
    },
    {
        title: 'Real Time Stock Market Analytics Pipeline',
        description: 'sub-minute stock insights via a Kafka AWS pipeline, cutting decision time by 70% across 10000+ daily records.',
        url: 'https://github.com/Siva-Sanam/Stock_Market_DataPipeline_Using_ApacheKafka-AWSGlue_and_Athena',
        image: porfolioImage12,
    },
    {
        title: 'Netclone DevsecOps Project',
        description: 'A CI/CD Pipeline using jenkins, Docker, kubernetes and Helm to deploy a secure netflix clone.',
        url: 'https://github.com/Siva-Sanam/NetClone_DevSecOps_Project',
        image: porfolioImage13,
    },
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
        title: 'Amazon Sales Datawarehouse Design',
        description: 'Amazon Sales Data Warehouse Design and Analysis with Oracle SQL',
        url: 'https://github.com/Siva-Sanam/Amazon-Sales-Datawarehouse-Design/tree/master',
        image: porfolioImage9, 
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
    {
        title: 'Music Store SQL Analysis',
        description: 'MySQL analysis to optimize data from an online music store.',
        url: 'https://github.com/Siva-Sanam/Data_Analysis_SQL_Project_Music_Store_Sales',
        image: porfolioImage6,
    },
    {
        title: 'Cloud Architecture Design',
        description: 'Designed a scalable and cost-effective AWS cloud architecture for an e-commerce business, optimizing performance, security, and resource utilization.',
        url: 'https://github.com/Siva-Sanam/Cloud-Architecture-Design',
        image: porfolioImage7,
    },
    {
        title: 'NYC Taxi Microsoft Fabric ETL Anlaysis',
        description: 'Automating the full data lifecycle for NYC taxi data, from ingestion to visualization, using Microsoft Fabric data pipelines and flows for automated reporting.',
        url: 'https://github.com/malvik01/Fabric-NYC-Taxi-Data-Project/wiki/01.-Code-used-in-Pipeline:-pl_stg_processing_nyctaxi',
        image: porfolioImage8,
    },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: 'Aug 2023-May 2025',
        location: 'University of South Florida,USA',
        title: 'Masters in Artificial Intelligence and Business Analystics',
        content: <p>Through this program, I have built a robust foundation in <strong>Machine Learning, Data Engineering, and Data Analytics</strong>. My coursework and projects have enhanced my ability to solve complex business problems using AI-driven approaches. I have also gained practical knowledge in <strong>database systems, big data technologies, data warehousing, and cloud computing</strong>, preparing me to manage and process large-scale datasets effectively.</p>,
    },
    {
        date: 'June 2015-May 2019',
        location: 'National Intitute of Technology, Andhra Prdesh',
        title: 'Bachelors of Technology',
        content: <p>During my undergraduate studies, I developed a solid technical foundation in <strong>computer science fundamentals, programming, and data structures</strong>. I was introduced to concepts in <strong>data analytics and software development</strong>, which sparked my interest in the data domain and laid the groundwork for my advanced studies and professional experience in data-driven roles.</p>,
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
        title: 'Data Engineer',
        content: (
            <p>
                - Devised interactive Power BI dashboards that visualize 20+ key metrics for the USF College Accountability Project, offering strategic decision support on student initiatives.
                <br></br>
                - Streamlined data ingestion processes using Microsoft Fabric, reducing data load times from the Student Information Database (SID) by 30%, ensuring real-time access to critical student metrics.
                <br></br>
                - Conducted comprehensive data cleaning and improved data accuracy by 25% in SAAS EG and Excel, leading to more reliable insights for student success research analytics.
                <br></br>
                - Collaborated with cross-functional teams to analyze and query large datasets, enhancing data retrieval efficiency from SID by 40% for research purposes.
            </p>
        ),
    },
    {
        date: 'July 2022 - June 2023',
        location: 'Larsen & Toubro Ltd',
        title: 'Sr.Business Intelligence Engineer',
        content: (
            <p>
                - Designed and orchestrated batch workflows using Apache Airflow and AWS Glue, saving 20+ hours of manual work weekly and enabling timely insights.
                <br></br>
                - Built and managed a centralized data lake on Amazon S3, cataloged with AWS Glue and secured using Lake Formation, enabling unified access and reducing churn by 16%.
                <br></br>
                - Refactored Spark jobs for distributed data processing at scale, reducing ETL runtime by 35% across high-volume datasets.
                <br></br>
                - Integrated Redshift with S3-based reporting pipelines, streamlining delivery cycles by 10% and supporting near real-time analytics.
            </p>
        ),
    },
    {
        date: 'July 2019 - June 2022',
        location: 'Larsen & Toubro Ltd',
        title: 'Jr.Business Intelligence Engineer',
        content: (
            <p>
                - Developed and optimized Spark scripts to process 50K+ records daily, improving data transformation speed by 20% and reducing downstream reporting delays.
                <br></br>
                - Maintained 10+ ETL pipelines using AWS Glue, Lambda, and S3 for modernized ingestion of structured and semi-structured data, supporting business-critical dashboards.
                <br></br>
                - Created and scheduled DAGs in Apache Airflow to automate dependencies across ETL jobs, improving pipeline reliability by 30% and cutting manual oversight by 12 hours/month.
                <br></br>
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

// Destinations data with countries and their partner universities

export interface University {
    name: string;
    website?: string;
    courses?: string[];
}

export interface Country {
    id: string;
    name: string;
    flag: string;
    image: string;
    universities: University[];
    description: string;
    hasUniversityData: boolean;
    // New detailed fields
    climate?: string;
    culture?: string;
    professions?: string;
    advantages_detailed?: { title: string; content: string }[];
    process_detailed?: { step: string; content: string }[];
}

export const destinationsData: Country[] = [
    {
        id: 'usa',
        name: 'United States',
        flag: '/images/flags/usa.jpg',
        image: '/images/destinations/usa.jpg',
        hasUniversityData: true,
        description: 'Home to world-renowned universities and cutting-edge research facilities.',
        climate: "The United States has a diverse climate ranging from the tropical heat of Florida and Hawaii to the arctic cold of Alaska. However, most international students study in regions with a temperate climate. The Northeast and Midwest experience four distinct seasons with warm summers and cold, snowy winters. The South is generally warmer and humid, while the West Coast, particularly California, enjoys a Mediterranean climate with mild, wet winters and dry summers.",
        culture: "American culture is known for its diversity and individualism. It is a melting pot of cultures from around the world, making it very welcoming to international students. Innovation, open-mindedness, and informality are key characteristics. University campuses are vibrant hubs of activity with a strong emphasis on extracurricular involvement, sports, and student organizations.",
        professions: "The US job market is vast and dynamic, particularly in STEM (Science, Technology, Engineering, Mathematics) fields. High-demand professions include Software Engineering, Data Science, Healthcare/Nursing, Finance, and Artificial Intelligence. The Optional Practical Training (OPT) program allows international students to work in their field of study for up to 3 years after graduation (for STEM degrees).",
        advantages_detailed: [
            { title: "Academic Excellence", content: "The US boasts the world's top-ranked universities, offering high-quality education and recognized degrees globally." },
            { title: "Research Opportunities", content: "Students have access to cutting-edge research and technology, with substantial funding and resources available." },
            { title: "Flexible Education System", content: "The credit system allows students to choose from a wide variety of courses and even change majors easily." },
            { title: "Career Support", content: "Universities provide robust career services, internship opportunities, and networking events to help launch careers." }
        ],
        process_detailed: [
            { step: "Research & Counseling", content: "Identify your academic goals and shortlist universities with our expert counselors." },
            { step: "Application", content: "Prepare and submit applications, including transcripts, SOPs, LORs, and standardized test scores (SAT/GRE/GMAT/TOEFL/IELTS)." },
            { step: "I-20 & Visa", content: "Receive acceptance and I-20 form from the university, then apply for the F-1 student visa." },
            { step: "Pre-departure", content: "Arrange finances, accommodation, and travel. Attend our pre-departure orientation." }
        ],
        universities: [
            {
                name: 'California State University, Long Beach',
                website: 'https://www.csulb.edu',
                courses: ['MS Computer Science', 'MBA', 'MS Counseling Psychology', 'Biomedical Engineering', 'Civil Engineering']
            },
            {
                name: 'Clarkson University',
                website: 'https://www.clarkson.edu',
                courses: ['Mechanical Engineering', 'Civil Engineering', 'Computer Science', 'Business Analytics', 'Supply Chain Management']
            },
            { name: 'Dallas Baptist University', website: 'https://www.dbu.edu', courses: ['Business Administration', 'Christian Ministry', 'Psychology', 'Education'] },
            { name: 'DePaul University', website: 'https://www.depaul.edu', courses: ['Film & Television', 'Computer Science', 'Business', 'Communications'] },
            { name: 'Northeastern University', website: 'https://www.northeastern.edu', courses: ['Computer Science', 'Bioengineering', 'Regulatory Affairs', 'Project Management'] },
            { name: 'University of New Haven', website: 'https://www.newhaven.edu', courses: ['Criminal Justice', 'Forensic Science', 'Engineering', 'Business MBA'] },
            { name: 'University of Cincinnati', website: 'https://www.uc.edu', courses: ['Industrial Design', 'Architecture', 'Engineering', 'Medical Sciences'] },
            { name: 'University of Texas, Arlington', website: 'https://www.uta.edu', courses: ['Nursing', 'Engineering', 'Business', 'Social Work'] },
            // Top Ranked Universities
            { name: 'Massachusetts Institute of Technology (MIT)', website: 'https://web.mit.edu/', courses: ['Computer Science', 'Engineering', 'Architecture', 'Physical Sciences'] },
            { name: 'Harvard University', website: 'https://www.harvard.edu/', courses: ['Law', 'Business', 'Medicine', 'Humanities'] },
            { name: 'Stanford University', website: 'https://www.stanford.edu/', courses: ['Computer Science', 'Engineering', 'Business', 'Law'] },
            { name: 'University of California, Berkeley', website: 'https://www.berkeley.edu/', courses: ['Computer Science', 'Business', 'Engineering', 'Law'] },
            { name: 'Princeton University', website: 'https://www.princeton.edu/', courses: ['Public Policy', 'Engineering', 'Social Sciences', 'Humanities'] },
            { name: 'California Institute of Technology (Caltech)', website: 'https://www.caltech.edu/', courses: ['Physics', 'Chemistry', 'Engineering', 'Astronomy'] },
            { name: 'Yale University', website: 'https://www.yale.edu/', courses: ['Law', 'Drama', 'Art', 'Medicine'] },
            { name: 'University of Chicago', website: 'https://www.uchicago.edu/', courses: ['Economics', 'Law', 'Sociology', 'Public Policy'] },
            { name: 'University of Pennsylvania', website: 'https://www.upenn.edu/', courses: ['Finance (Wharton)', 'Nursing', 'Medicine', 'Law'] },
            { name: 'Johns Hopkins University', website: 'https://www.jhu.edu/', courses: ['Medicine', 'Public Health', 'International Studies', 'Biomedical Engineering'] },
            { name: 'Columbia University', website: 'https://www.columbia.edu/', courses: ['Journalism', 'Law', 'Business', 'Arts'] },
            { name: 'University of California, Los Angeles (UCLA)', website: 'https://www.ucla.edu/', courses: ['Film', 'Engineering', 'Business', 'Psychology'] },
            { name: 'New York University (NYU)', website: 'https://www.nyu.edu/', courses: ['Arts', 'Business (Stern)', 'Law', 'Film'] },
            { name: 'University of Michigan - Ann Arbor', website: 'https://umich.edu/', courses: ['Engineering', 'Business', 'Law', 'Medicine'] },
            { name: 'University of Illinois Urbana-Champaign', website: 'https://illinois.edu/', courses: ['Engineering', 'Computer Science', 'Agriculture', 'Library Science'] },
            { name: 'University of Texas at Austin', website: 'https://www.utexas.edu/', courses: ['Petroleum Engineering', 'Business', 'Communications', 'Computer Science'] },
            { name: 'Duke University', website: 'https://duke.edu/', courses: ['Medicine', 'Law', 'Public Policy', 'Business'] },
            { name: 'Cornell University', website: 'https://www.cornell.edu/', courses: ['Hotel Administration', 'Agriculture', 'Engineering', 'Architecture'] },
            { name: 'Northwestern University', website: 'https://www.northwestern.edu/', courses: ['Journalism', 'Kellogg School of Management', 'Engineering', 'Music'] },
            { name: 'Georgia Institute of Technology', website: 'https://www.gatech.edu/', courses: ['Industrial Engineering', 'Aerospace', 'Computing', 'Architecture'] },
            { name: 'University of Washington', website: 'https://www.washington.edu/', courses: ['Computer Science', 'Medicine', 'Nursing', 'Oceanography'] },
            { name: 'University of Wisconsin-Madison', website: 'https://www.wisc.edu/', courses: ['Education', 'Agriculture', 'Economics', 'Communication'] },
            { name: 'Purdue University', website: 'https://www.purdue.edu/', courses: ['Aviation', 'Engineering', 'Pharmacy', 'Agriculture'] },
            { name: 'Pennsylvania State University', website: 'https://www.psu.edu/', courses: ['Supply Chain', 'Engineering', 'Business', 'Meteorology'] },
            { name: 'Ohio State University', website: 'https://www.osu.edu/', courses: ['Business', 'Engineering', 'Medicine', 'Education'] },
            { name: 'University of Florida', website: 'https://www.ufl.edu/', courses: ['Agriculture', 'Pharmacy', 'Engineering', 'Business'] },
            { name: 'Arizona State University', website: 'https://www.asu.edu/', courses: ['Sustainability', 'Innovation', 'Business', 'Engineering'] },
            { name: 'University of Southern California', website: 'https://www.usc.edu/', courses: ['Film', 'Game Design', 'Business', 'Engineering'] },
            { name: 'Carnegie Mellon University', website: 'https://www.cmu.edu/', courses: ['Robotics', 'Artificial Intelligence', 'Drama', 'Computer Science'] },
        ],
    },
    {
        id: 'canada',
        name: 'Canada',
        flag: '/images/flags/canada.jpg',
        image: '/images/destinations/canada.jpg',
        hasUniversityData: true,
        description: 'Quality education with multicultural environment and post-study work opportunities.',
        climate: "Canada offers a varied climate. While winters can be cold with significant snowfall, especially in the prairies and central Canada, summers are generally warm and pleasant. The coastal region of British Columbia enjoy a milder, temperate climate year-round. Students learn to embrace the winter season with activities like skiing and skating.",
        culture: "Canada is famous for its politeness, safety, and inclusivity. It is a multicultural society that encourages diversity and tolerance. The environment is friendly and welcoming to international students, with a strong focus on community and social responsibility. The lifestyle is balanced, valuing both hard work and outdoor recreation.",
        professions: "Canada actively seeks skilled professionals to support its growing economy. Key industries include Technology (AI, Software), Healthcare, Engineering, and Finance. The Post-Graduation Work Permit (PGWP) program is a major attraction, allowing students to work for up to 3 years after graduation and providing a pathway to Permanent Residency (PR).",
        advantages_detailed: [
            { title: "High Academic Standards", content: "Canadian degrees are globally recognized and valued for their high academic rigor." },
            { title: "Affordability", content: "Tuition fees and living costs are generally lower than in the US or UK, offering great value." },
            { title: "Pathway to PR", content: "Canada offers clear and supportive immigration pathways for international graduates." },
            { title: "Safe & Welcoming", content: "Consistently ranked as one of the safest countries with a high quality of life." }
        ],
        process_detailed: [
            { step: "Course Selection", content: "Choose a program that aligns with your career goals and previous education." },
            { step: "Admission", content: "Apply to a Designated Learning Institution (DLI) and receive your Letter of Acceptance." },
            { step: "Study Permit", content: "Apply for a Canadian Study Permit (visa). You may need a provincial attestation letter." },
            { step: "Arrival", content: "Plan your travel and accommodation. We assist with pre-departure briefings." }
        ],
        universities: [
            {
                name: 'University of Waterloo',
                website: 'https://uwaterloo.ca',
                courses: ['Computer Science', 'Civil Engineering', 'Actuarial Science', 'Nanotechnology', 'Business']
            },
            {
                name: 'University of Canada West',
                website: 'https://www.ucanwest.ca',
                courses: ['MBA', 'Bachelor of Commerce', 'Associate of Arts']
            },
            { name: 'Simon Fraser University', website: 'https://www.sfu.ca', courses: ['Business', 'Computing Science', 'Engineering Science', 'Interactive Arts'] },
            { name: 'Ryerson University International College', website: 'https://www.ryerson.ca', courses: ['Business Management', 'International Economics', 'Arts', 'Science'] },
            { name: 'University of Saskatchewan', website: 'https://www.usask.ca', courses: ['Agriculture', 'Engineering', 'Nursing', 'Veterinary Medicine'] },
            { name: 'University of Regina', website: 'https://www.uregina.ca', courses: ['Computer Science', 'Petrolum Engineering', 'Education', 'Business Admin'] },
            // Top Ranked Universities
            { name: 'University of Toronto', website: 'https://www.utoronto.ca/', courses: ['Computer Science', 'Business', 'Engineering', 'Life Sciences'] },
            { name: 'McGill University', website: 'https://www.mcgill.ca/', courses: ['Medicine', 'Law', 'Engineering', 'Management'] },
            { name: 'University of British Columbia (UBC)', website: 'https://www.ubc.ca/', courses: ['Forestry', 'Computer Science', 'Business', 'International Relations'] },
            { name: 'University of Alberta', website: 'https://www.ualberta.ca/', courses: ['Petroleum Engineering', 'Paleontology', 'Nursing', 'Computing Science'] },
            { name: 'McMaster University', website: 'https://www.mcmaster.ca/', courses: ['Health Sciences', 'Engineering', 'Business', 'Humanities'] },
            { name: 'University of Montreal', website: 'https://www.umontreal.ca/en/', courses: ['AI & Data Science', 'Medicine', 'Law', 'Pharmacy'] },
            { name: 'Western University', website: 'https://www.uwo.ca/', courses: ['Business (Ivey)', 'Medical Sciences', 'Engineering', 'Education'] },
            { name: 'University of Calgary', website: 'https://www.ucalgary.ca/', courses: ['Kinesiology', 'Engineering', 'Business', 'Veterinary Medicine'] },
            { name: 'University of Ottawa', website: 'https://www.uottawa.ca/en', courses: ['Law', 'Political Science', 'Medicine', 'Engineering'] },
            { name: 'Dalhousie University', website: 'https://www.dal.ca/', courses: ['Marine Biology', 'Law', 'Medicine', 'Agriculture'] },
            { name: 'York University', website: 'https://www.yorku.ca/', courses: ['Business (Schulich)', 'Law (Osgoode)', 'Psychology', 'Film'] },
            { name: 'University of Manitoba', website: 'https://umanitoba.ca/', courses: ['Agriculture', 'Medicine', 'Engineering', 'Architecture'] },
            { name: 'Laval University', website: 'https://www.ulaval.ca/en', courses: ['Forestry', 'Agriculture', 'Geomatics', 'Food Sciences'] },
            { name: 'University of New Brunswick', website: 'https://www.unb.ca/', courses: ['Forestry', 'Engineering', 'Computer Science', 'Business'] },
            { name: 'University of Victoria', website: 'https://www.uvic.ca/', courses: ['Law', 'Climate Science', 'Engineering', 'Ocean Sciences'] },
            { name: 'Concordia University', website: 'https://www.concordia.ca/', courses: ['Engineering', 'Business', 'Film Animation', 'Computer Science'] },
            { name: 'Carleton University', website: 'https://carleton.ca/', courses: ['Journalism', 'Public Affairs', 'Aerospace Engineering', 'Architecture'] },
            { name: 'Memorial University of Newfoundland', website: 'https://www.mun.ca/', courses: ['Ocean Engineering', 'Medicine', 'Marine Biology', 'Business'] },
            { name: 'Toronto Metropolitan University (Ryerson)', website: 'https://www.torontomu.ca/', courses: ['Media Production', 'Nursing', 'Engineering', 'Business Management'] },
        ],
    },
    {
        id: 'india',
        name: 'India',
        flag: '/images/flags/india.jpg',
        image: '/images/destinations/india.jpg',
        hasUniversityData: true,
        description: 'A global education hub offering world-class technical and management education at affordable costs.',
        climate: "India has a tropical climate that varies by region. The north experiences distinct hot summers, monsoon rains, and cold winters. The south is generally tropical and humid year-round. The monsoon season (June-September) brings rain to most of the country. Winters in major education hubs like Delhi can be cold, while Bangalore and Pune enjoy pleasant weather throughout the year.",
        culture: "India is a land of incredible diversity, with numerous languages, festivals, and cuisines. The culture emphasizes family values, respect for education ('Vidhya'), and hospitality ('Atithi Devo Bhava'). Students get to experience vibrant festivals like Diwali and Holi. The academic environment is competitive yet collaborative, with a strong focus on engineering and medicine.",
        professions: "India is the world's IT and outsourcing capital. Key sectors include Information Technology, Pharmaceuticals, Biotechnology, Automotive, and Space Research. There is a huge demand for Software Engineers, Data Scientists, Doctors, and Chartered Accountants. The startup ecosystem is also booming, offering opportunities in entrepreneurship.",
        advantages_detailed: [
            { title: "Quality Engineering", content: "Home to IITs and NITs, which are globally recognized for excellence in engineering." },
            { title: "Affordable Education", content: "Cost of education is significantly lower compared to US/UK for high-quality technical degrees." },
            { title: "IT Hubs", content: "Bangalore, Hyderabad, and Pune offer immense internship and job opportunities in Tech." },
            { title: "Cultural Richness", content: "Experience a vibrant mix of traditions, food, and history while studying." }
        ],
        process_detailed: [
            { step: "Entrance Exams", content: "Clear national/state level exams like JEE Mains, GATE, or EAMCET depending on the course." },
            { step: "Counseling", content: "Participate in centralized counseling (JoSAA/State Boards) for seat allocation." },
            { step: "Admission", content: "Submit documents and pay fees to confirm your seat at the allotted college." },
            { step: "Hostel/PG", content: "Arrange for on-campus hostel or private PG accommodation near the college." }
        ],
        universities: [
            // Featured Universities (User Requested)
            { name: 'Vellore Institute of Technology (VIT)', website: 'https://vit.ac.in/', courses: ['Computer Science', 'Biotech', 'Mechanical', 'Electronics'] },
            { name: 'SRM Institute of Science and Technology, Chennai', website: 'https://www.srmist.edu.in/', courses: ['Biotech', 'Genetic Eng', 'Nanotech', 'CSE'] },
            { name: 'Chandigarh University', website: 'https://www.chandigarhuniversity.ac.in/', courses: ['B.E. CSE', 'MBA', 'Hotel Management', 'Biotech'] },
            { name: 'Amity University', website: 'https://www.amity.edu/', courses: ['Biotech', 'Forensic Science', 'Nanotech', 'Fashion'] },
            { name: 'Lovely Professional University (LPU)', website: 'https://www.lpu.in/', courses: ['B.Tech CSE', 'MBA', 'Interior Design', 'Agriculture'] },
            { name: 'Thapar Institute of Engineering & Technology', website: 'https://www.thapar.edu/', courses: ['Computer Engineering', 'Biomedical', 'Chemical', 'MBA'] },
            { name: 'Jain (Deemed-to-be University) Bengaluru', website: 'https://www.jainuniversity.ac.in/', courses: ['CMS', 'Engineering', 'Psychology', 'Commerce'] },
            { name: 'Koneru Lakshmaiah Education Foundation (KL University)', website: 'https://www.kluniversity.in/', courses: ['IoT', 'Cloud Computing', 'Cyber Security', 'AI & DS'] },
            { name: 'Manipal Academy of Higher Education (MAHE)', website: 'https://manipal.edu/', courses: ['Medicine (KMC)', 'Engineering (MIT)', 'Dental', 'Hotel Management'] },
            { name: 'Cambridge Institute of Technology Bengaluru', website: 'https://engg.cambridge.edu.in/', courses: ['CSE', 'AI & ML', 'ISE', 'MBA'] },
            { name: 'Sharda University', website: 'https://www.sharda.ac.in/', courses: ['Medical', 'Dental', 'Engineering', 'Law'] },
            { name: 'Parul University', website: 'https://paruluniversity.ac.in/', courses: ['Pharmacy', 'Engineering', 'Ayurveda', 'Design'] },
            { name: 'Galgotias University', website: 'https://www.galgotiasuniversity.edu.in/', courses: ['CSE', 'Law', 'Media', 'Business Analytics'] },
            { name: 'SVCET Chittoor', website: 'https://svcetedu.org/', courses: ['Civil', 'Mechanical', 'ECE', 'CSE'] },
            { name: 'Amrita Vishwa Vidyapeetham Coimbatore', website: 'https://www.amrita.edu/', courses: ['Cyber Security', 'Wireless Networks', 'Medicine', 'Robotics'] },
            { name: 'R.V. College of Engineering (RVCE) Bengaluru', website: 'https://rvce.edu.in/', courses: ['CSE', 'Aerospace', 'IEM', 'Biotech'] },
            { name: 'Acharya Institute of Technology Bengaluru', website: 'https://www.acharya.ac.in/', courses: ['Aeronautical', 'Mechatronics', 'AI & ML', 'Mining'] },

            // Andhra Pradesh (JNTUA Region)
            { name: 'JNTUA College of Engineering, Anantapur', website: 'https://www.jntucea.ac.in/', courses: ['Civil Engineering', 'Mechanical', 'ECE', 'CSE'] },
            { name: 'JNTUA College of Engineering, Pulivendula', website: 'https://www.jntuacep.ac.in/', courses: ['EEE', 'CSE', 'Bio-Technology', 'Mechanical'] },
            { name: 'G. Pulla Reddy Engineering College, Kurnool', website: 'https://www.gprec.ac.in/', courses: ['CSE', 'Civil', 'ECE', 'Robotics'] },
            { name: 'Rajeev Gandhi Memorial College of Engineering, Nandyal', website: 'https://www.rgmcet.edu.in/', courses: ['Data Science', 'Civil', 'Mechanical', 'MBA'] },
            { name: 'Annamacharya Institute of Technology, Rajampet', website: 'https://aitsrajampet.ac.in/', courses: ['AI & ML', 'Cyber Security', 'EEE', 'Civil'] },
            { name: 'Madanapalle Institute of Technology & Science, Madanapalle', website: 'https://www.mits.ac.in/', courses: ['CSE', 'Electronics', 'Mechanical', 'MBA'] },
            { name: 'Sree Vidyanikethan Engineering College, Tirupati', website: 'https://svec.education/', courses: ['CSSE', 'EIE', 'IT', 'Civil'] },
            { name: 'Sri Venkateswara College of Engineering, Tirupati', website: 'https://www.svce.edu.in/', courses: ['CSE', 'ECE', 'IT', 'Mechanical'] },
            { name: 'Srinivasa Ramanujan Institute of Technology, Anantapur', website: 'https://www.srit.ac.in/', courses: ['CSE', 'ECE', 'EEE', 'Civil'] },
            { name: 'Gates Institute of Technology, Gooty', website: 'https://gatesit.ac.in/', courses: ['CSE', 'AI', 'Civil', 'Management'] },
            { name: 'Intell Engineering College, Anantapur', website: 'http://www.intellengg.ac.in/', courses: ['Structural Eng', 'VLSI', 'CSE', 'Mechanical'] },
            { name: 'Chadalawada Venkata Subbaiah College of Engineering, Chittoor', website: 'http://www.cvsst.org/', courses: ['CSE', 'ECE', 'EEE', 'Mechanical'] },
            { name: 'Siddhartha Institute of Engineering & Technology, Puttur', website: 'http://www.sietk.org/', courses: ['CSE', 'ECE', 'AI & DS', 'Civil'] },
            { name: 'Anantha Lakshmi Institute of Technology, Anantapur', website: 'http://www.alits.ac.in/', courses: ['CSE', 'EEE', 'Civil', 'Electronics'] },
            { name: 'Vemu Institute of Technology, Chittoor', website: 'https://www.vemu.org/', courses: ['CSE', 'ECE', 'EEE', 'Mechanical'] },

            // Telangana (Hyderabad Region)
            { name: 'JNTUH College of Engineering, Hyderabad', website: 'https://jntuhceh.ac.in/', courses: ['CSE', 'Metallurgy', 'Chemical', 'Civil'] },
            { name: 'Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad', website: 'https://www.cbit.ac.in/', courses: ['CSE', 'Biotech', 'Chemical', 'IT'] },
            { name: 'VNR Vignana Jyothi Institute of Engineering, Hyderabad', website: 'https://www.vnrvjiet.ac.in/', courses: ['Automobile', 'CSE', 'EIE', 'Civil'] },
            { name: 'Gokaraju Rangaraju Institute of Engineering (GRIET), Hyderabad', website: 'https://www.griet.ac.in/', courses: ['Data Science', 'CSE', 'Civil', 'EEE'] },
            { name: 'Vasavi College of Engineering, Hyderabad', website: 'https://vce.ac.in/', courses: ['CSE', 'IT', 'ECE', 'Mechanical'] },
            { name: 'CVR College of Engineering, Hyderabad', website: 'https://cvr.ac.in/', courses: ['CSE', 'AI & ML', 'Civil', 'EIE'] },
            { name: 'BV Raju Institute of Technology (BVRIT), Hyderabad', website: 'https://bvrit.ac.in/', courses: ['Biomedical', 'Pharmaceutical', 'CSE', 'Chemical'] },
            { name: 'Institute of Aeronautical Engineering (IARE), Hyderabad', website: 'https://www.iare.ac.in/', courses: ['Aeronautical', 'CSE', 'Aerospace', 'IT'] },
            { name: 'Vardhaman College of Engineering, Hyderabad', website: 'https://vardhaman.org/', courses: ['CSE', 'IT', 'ECE', 'Mechanical'] },
            { name: 'Mahatma Gandhi Institute of Technology (MGIT), Hyderabad', website: 'https://mgit.ac.in/', courses: ['Mechatronics', 'Metallurgy', 'CSE', 'IT'] },
            { name: 'G. Narayanamma Institute of Technology (GNITS), Hyderabad', website: 'https://www.gnits.ac.in/', courses: ['ETE', 'CSE', 'IT', 'EEE'] },
            { name: 'Anurag University, Hyderabad', website: 'https://anurag.edu.in/', courses: ['Pharmacy', 'Engineering', 'MBA', 'Agriculture'] },

            // Karnataka (Bangalore Region)
            { name: 'Indian Institute of Science (IISc), Bengaluru', website: 'https://iisc.ac.in/', courses: ['Research', 'Physics', 'Aerospace', 'Computer Science'] },
            { name: 'BMS College of Engineering, Bengaluru', website: 'https://bmsce.ac.in/', courses: ['Medical Electronics', 'CSE', 'Civil', 'MBA'] },
            { name: 'MS Ramaiah Institute of Technology, Bengaluru', website: 'https://www.msrit.edu/', courses: ['Medical Electronics', 'Architecture', 'CSE', 'Chemical'] },
            { name: 'PES University, Bengaluru', website: 'https://pes.edu/', courses: ['CSE', 'Desgin', 'Law', 'Architecture'] },
            { name: 'Dayananda Sagar College of Engineering, Bengaluru', website: 'https://www.dsce.edu.in/', courses: ['Aeronautical', 'Automobile', 'CSE', 'Chemical'] },
            { name: 'Bangalore Institute of Technology, Bengaluru', website: 'https://bit-bangalore.edu.in/', courses: ['CSE', 'ISE', 'Civil', 'Mechanical'] },
            { name: 'NITTE Meenakshi Institute of Technology, Bengaluru', website: 'https://www.nmit.ac.in/', courses: ['Aeronautical', 'CSE', 'ISE', 'Civil'] },
            { name: 'IIIT Bangalore, Bengaluru', website: 'https://www.iiitb.ac.in/', courses: ['Integrated MTech', 'CSE', 'ECE', 'Digital Society'] },
            { name: 'New Horizon College of Engineering, Bengaluru', website: 'https://newhorizonindia.edu/', courses: ['Automobile', 'CSE', 'EEE', 'Civil'] },

            // Tamil Nadu (Chennai Region)
            { name: 'IIT Madras, Chennai', website: 'https://www.iitm.ac.in/', courses: ['Ocean Eng', 'Aerospace', 'CSE', 'Physics'] },
            { name: 'Anna University (CEG Guindy), Chennai', website: 'https://ceg.annauniv.edu/', courses: ['Printing Tech', 'Mining', 'CSE', 'Geoinformatics'] },
            { name: 'Madras Institute of Technology (MIT), Chennai', website: 'https://www.mitindia.edu/', courses: ['Aeronautical', 'Automobile', 'Rubber & Plastics', 'Electronics'] },
            { name: 'VIT Chennai, Chennai', website: 'https://chennai.vit.ac.in/', courses: ['CSE', 'Fashion Tech', 'Law', 'Electronics'] },
            { name: 'SSN College of Engineering, Chennai', website: 'https://www.ssn.edu.in/', courses: ['Chemical', 'Biomedical', 'CSE', 'IT'] },
            { name: 'Sathyabama Institute of Science and Technology, Chennai', website: 'https://www.sathyabama.ac.in/', courses: ['Dental', 'Bioinfo', 'Ocean', 'CSE'] },
            { name: 'Loyola College, Chennai', website: 'https://www.loyolacollege.edu/', courses: ['Commerce', 'Economics', 'Visual Comm', 'English'] },
            { name: 'Hindustan Institute of Technology, Chennai', website: 'https://hindustanuniv.ac.in/', courses: ['Aviation', 'Architecture', 'CSE', 'Automobile'] },

            // Maharashtra (Mumbai/Pune Region)
            { name: 'IIT Bombay, Mumbai', website: 'https://www.iitb.ac.in/', courses: ['Aerospace', 'CSE', 'Energy', 'Metallurgy'] },
            { name: 'Institute of Chemical Technology (ICT), Mumbai', website: 'https://www.ictmumbai.edu.in/', courses: ['Chemical Eng', 'Food Eng', 'Polymers', 'Pharma'] },
            { name: 'Savitribai Phule Pune University, Pune', website: 'http://www.unipune.ac.in/', courses: ['Bioinfo', 'Biotech', 'Law', 'Foreign Languages'] },
            { name: 'College of Engineering Pune (COEP), Pune', website: 'https://www.coep.org.in/', courses: ['Metallurgy', 'Production', 'CSE', 'Instrumentation'] },
            { name: 'MIT World Peace University, Pune', website: 'https://mitwpu.edu.in/', courses: ['Petroleum', 'Polymer', 'Peace Studies', 'CSE'] },
            { name: 'Symbiosis International University, Pune', website: 'https://siu.edu.in/', courses: ['Law', 'Management', 'Design', 'Media'] },
            { name: 'Narsee Monjee Institute of Management (NMIMS), Mumbai', website: 'https://www.nmims.edu/', courses: ['MBA', 'Pharmacy', 'Architecture', 'Engineering'] },

            // Delhi NCR Region
            { name: 'IIT Delhi, New Delhi', website: 'https://home.iitd.ac.in/', courses: ['Textile', 'CSE', 'Mathematics', 'Biochemical'] },
            { name: 'Delhi Technological University (DTU), New Delhi', website: 'http://dtu.ac.in/', courses: ['Software', 'Automobile', 'Biotech', 'Environmental'] },
            { name: 'Jawaharlal Nehru University (JNU), New Delhi', website: 'https://www.jnu.ac.in/', courses: ['International Relations', 'Languages', 'Life Sciences', 'Economics'] },
            { name: 'Jamia Millia Islamia, New Delhi', website: 'https://www.jmi.ac.in/', courses: ['Mass Comm', 'Dentistry', 'Law', 'Engineering'] },
            { name: 'Netaji Subhas University of Technology (NSUT), New Delhi', website: 'http://nsut.ac.in/', courses: ['MAC', 'ICE', 'CSE', 'Biotech'] },
        ],
    },
    {
        id: 'australia',
        name: 'Australia',
        flag: '/images/flags/australia.jpg',
        image: '/images/destinations/australia.jpg',
        hasUniversityData: true,
        description: 'World-class education with excellent research opportunities and high quality of life.',
        climate: "Australia falls into the southern hemisphere, meaning its seasons are opposite to those in the north. Summer starts in December and winter in June. The northern states are typically warm year-round, while southern states have cooler winters. It is known for sunny beaches and vibrant outdoor lifestyles.",
        culture: "Australian culture is laid-back, friendly, and egalitarian ('mateship'). It is highly multicultural, with significant influences from Indigenous, British, and Asian cultures. Australians value work-life balance and enjoy sports, especially cricket and rugby. The coffee culture in cities like Melbourne is world-famous.",
        professions: "Australia has a strong economy with opportunities in Mining, Healthcare, Agriculture, Tourism, and Education. Skill shortages in Engineering, IT, and Nursing have led to favourable immigration policies for qualified professionals. The Post-Study Work stream allows graduates to work for 2-4 years.",
        advantages_detailed: [
            { title: "Top Ranked Universities", content: "7 out of the top 100 universities in the world are in Australia." },
            { title: "Work Rights", content: "International students can work up to 48 hours per fortnight during semesters and full-time during breaks." },
            { title: "Quality of Life", content: "Cities like Melbourne and Sydney are consistently ranked among the world's most livable cities." },
            { title: "Post-Study Work", content: "Generous post-study work visas (Subclass 485) allow you to gain global work experience." }
        ],
        process_detailed: [
            { step: "Course Application", content: "Apply to your chosen institution. You may need an agent for some universities." },
            { step: "Offer & Acceptance", content: "Receive a Letter of Offer. Sign and return it along with the tuition deposit." },
            { step: "CoE Issuance", content: "The university issues a Confirmation of Enrolment (CoE)." },
            { step: "Visa Application", content: "Apply for the Student Visa (Subclass 500) online using your CoE and OSHC details." }
        ],
        universities: [
            { name: 'University of Sydney (USYD)', website: 'https://www.sydney.edu.au/', courses: ['Law', 'Business', 'Dentistry', 'Medicine'] },
            { name: 'University of Wollongong (UOW)', website: 'https://www.uow.edu.au/', courses: ['Engineering', 'Computer Science', 'Business', 'Nursing'] },
            { name: 'Macquarie University', website: 'https://www.mq.edu.au/', courses: ['Business Analytics', 'Media & Comm', 'Linguistics', 'Cyber Security'] },
            { name: 'University of Newcastle (UON)', website: 'https://www.newcastle.edu.au/', courses: ['Architecture', 'Medicine', 'Construction Mgmt', 'Engineering'] },
            { name: 'University of Tasmania (UTAS)', website: 'https://www.utas.edu.au/', courses: ['Marine Science', 'Antarctic Studies', 'Maritime Engineering', 'Nursing'] },
            { name: 'Griffith University', website: 'https://www.griffith.edu.au/', courses: ['Criminology', 'Tourism', 'Nursing', 'Aviation'] },
            // Top Ranked Universities
            { name: 'University of Melbourne', website: 'https://www.unimelb.edu.au/', courses: ['Biomedicine', 'Arts', 'Commerce', 'Science'] },
            { name: 'Australian National University (ANU)', website: 'https://www.anu.edu.au/', courses: ['Politics', 'Asian Studies', 'Astronomy', 'Philosophy'] },
            { name: 'University of Queensland (UQ)', website: 'https://www.uq.edu.au/', courses: ['Agriculture', 'Environmental Science', 'Engineering', 'Sports Science'] },
            { name: 'Monash University', website: 'https://www.monash.edu/', courses: ['Pharmacy', 'Nursing', 'Education', 'Chemical Engineering'] },
            { name: 'University of New South Wales (UNSW)', website: 'https://www.unsw.edu.au/', courses: ['Civil Engineering', 'Accounting', 'Law', 'Psychology'] },
            { name: 'University of Western Australia (UWA)', website: 'https://www.uwa.edu.au/', courses: ['Marine Science', 'Mining Engineering', 'Anatomy', 'Agriculture'] },
            { name: 'University of Adelaide', website: 'https://www.adelaide.edu.au/', courses: ['Dentistry', 'Petroleum Engineering', 'Wine Science', 'Nursing'] },
        ],
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        flag: '/images/flags/uk.jpg',
        image: '/images/destinations/uk.jpg',
        hasUniversityData: true,
        description: 'Historic universities with global recognition and rich academic tradition.',
        climate: "The UK offers a temperate maritime climate, meaning it is mild with temperatures not much lower than 0°C in winter and not much higher than 32°C in summer. It is known for its damp climate and changeable weather. Students should be prepared for rain but can also enjoy beautiful sunny days, especially in summer.",
        culture: "British culture is a unique blend of history, tradition, and modernity. Known for its politeness, tea culture, and love for queuing, the UK is also a diverse, multicultural society. It is the birthplace of the English language and has a rich literary and artistic heritage. Cities like London are global cultural hubs.",
        professions: "The UK has a strong job market, particularly in Finance, Healthcare (NHS), Engineering, Education, and Creative Industries. The Post-Study Work Visa (Graduate Route) allows international students to stay and work for 2 years (3 years for PhD) after graduation, making it highly attractive for career starters.",
        advantages_detailed: [
            { title: "World-Class Education", content: "Home to some of the world's oldest and most prestigious universities (Oxford, Cambridge)." },
            { title: "Short Duration Courses", content: "Undergraduate degrees are typically 3 years and Master's degrees are 1 year, saving time and money." },
            { title: "Research & Innovation", content: "The UK is a global leader in scientific research and citation impact." },
            { title: "Graduate Route Visa", content: "Stay and work for 2-3 years after completing your degree without a sponsor." }
        ],
        process_detailed: [
            { step: "Course Research", content: "Research universities and courses via UCAS (undergraduate) or directly (postgraduate)." },
            { step: "Application", content: "Prepare your personal statement and references. Apply before deadlines (Jan/Sept)." },
            { step: "CAS Letter", content: "Receive a Confirmation of Acceptance for Studies (CAS) from your chosen university." },
            { step: "Visa Application", content: "Apply for the Student Route visa with your CAS and financial documents." }
        ],
        universities: [
            { name: 'University of Oxford', website: 'https://www.ox.ac.uk', courses: ['Philosophy', 'English Literature', 'Economics', 'Medicine', 'Law', 'Computer Science', 'History'] },
            { name: 'University of Cambridge', website: 'https://www.cam.ac.uk', courses: ['Economics', 'Law', 'Natural Sciences', 'Engineering', 'Medicine', 'Computer Science'] },
            { name: 'University College London (UCL)', website: 'https://www.ucl.ac.uk', courses: ['Architecture', 'Psychology', 'Law', 'Computer Science', 'Medicine', 'Economics'] },
            { name: 'University of Manchester', website: 'https://www.manchester.ac.uk', courses: ['Business', 'Engineering', 'Computer Science', 'Nursing', 'Sociology'] },
            { name: 'University of Edinburgh', website: 'https://www.ed.ac.uk', courses: ['Artificial Intelligence', 'Linguistics', 'Medicine', 'Business', 'Literature'] },
            { name: 'University of Southampton', website: 'https://www.southampton.ac.uk', courses: ['Electronics', 'Computer Science', 'Engineering', 'Oceanography'] },
            { name: 'University of Bristol', website: 'https://www.bristol.ac.uk', courses: ['Aerospace Engineering', 'Civil Engineering', 'Medicine', 'Psychology', 'Geography'] },
        ],
    },
    {
        id: 'europe',
        name: 'Europe',
        flag: '/images/flags/europe.jpg',
        image: '/images/destinations/europe.jpg',
        hasUniversityData: true,
        description: 'Diverse educational opportunities across multiple countries with rich culture.',
        climate: "Europe enjoys a diverse climate. Southern Europe (Italy, Spain) has a warm Mediterranean climate with hot summers and mild winters. Western Europe (France, Germany, Netherlands) has a marine climate with mild summers and cool winters. Northern Europe (Scandinavia) experiences colder, snowy winters and mild summers.",
        culture: "Europe is a continent of immense cultural diversity, with each country boasting its own unique language, history, art, and traditions. Living in Europe offers the chance to experience this richness first-hand, with easy travel between countries. The lifestyle varies from the relaxed Mediterranean pace to the efficient, structured Northern European way of life.",
        professions: "Europe offers varied career opportunities. Germany is a hub for Engineering and Automobile industries. Ireland is known for IT and Pharmaceuticals. France excels in Fashion, Luxury, and Aerospace. The Netherlands is strong in Logistics and Water Management. The EU Blue Card facilitates work for highly skilled non-EU citizens.",
        advantages_detailed: [
            { title: "Affordability", content: "Many European public universities offer low or no tuition fees (e.g., Germany, public French unis)." },
            { title: "English-Taught Programs", content: "Thousands of Bachelor's and Master's programs are taught entirely in English." },
            { title: "Schengen Visa", content: "A student visa for one Schengen country allows you to travel freely to 26+ other countires." },
            { title: "History & Culture", content: "Immerse yourself in centuries of history, art, and architecture." }
        ],
        process_detailed: [
            { step: "Country Selection", content: "Decide on the country and university. Check specific entry requirements (APS for Germany, etc.)." },
            { step: "Application", content: "Apply directly to the university or through centralized portals (e.g., Uni-Assist for Germany)." },
            { step: "Admission", content: "Receive your acceptance letter. Some countries require tuition deposit payment." },
            { step: "Visa", content: "Apply for a National (Type D) student visa at the embassy." }
        ],
        universities: [
            { name: 'LMU Munich', website: 'https://www.lmu.de/en', courses: ['Data Science', 'Physics', 'Economics', 'Psychology', 'Management'] },
            { name: 'Sapienza University of Rome', website: 'https://www.uniroma1.it/en', courses: ['Classics', 'Archaeology', 'Physics', 'Astrophysics', 'Medicine'] },
            { name: 'Aarhus University', website: 'https://international.au.dk', courses: ['Environmental Science', 'Agriculture', 'Business Administration', 'Computer Science'] },
            { name: 'Leiden University', website: 'https://www.universiteitleiden.nl/en', courses: ['International Law', 'Political Science', 'Archaeology', 'History', 'Linguistics'] },
            { name: 'University of Helsinki', website: 'https://www.helsinki.fi/en', courses: ['Education', 'Philosophy', 'Atmospheric Sciences', 'Computer Science'] },
        ],
    },
    {
        id: 'bangladesh',
        name: 'Bangladesh',
        flag: '/images/flags/bangladesh.jpg',
        image: '/images/destinations/bangladesh.jpg',
        hasUniversityData: true,
        description: 'Affordable medical education with a similar curriculum to neighboring countries.',
        climate: "Bangladesh has a tropical monsoon climate with high humidity. It has a distinct rainy season (monsoon) from June to October. Winters (November to February) are mild and pleasant. Summers are hot and humid.",
        culture: "Bangladesh shares a rich Bengali culture with West Bengal (India), including language, food, and festivals. It is a country of rivers and lush greenery. People are resilient, friendly, and deeply value education. Cricket is a national passion.",
        professions: "Textiles and Garments are the backbone of the economy. For international students, Medicine (MBBS) is the biggest draw. The medical curriculum is very similar to India's, making it easier for students to clear licensing exams back home.",
        advantages_detailed: [
            { title: "Similar Curriculum", content: "MBBS syllabus and books are almost identical to those in India." },
            { title: "High Patient Flow", content: "Government medical colleges offer huge clinical exposure for practical learning." },
            { title: "Affordable Cost", content: "One of the most cost-effective options for a recognized medical degree." },
            { title: "Cultural Similarity", content: "Food, language, and culture are familiar for students from the Indian subcontinent." }
        ],
        process_detailed: [
            { step: "Eligibility Check", content: "Calculate GPA to ensure you meet the strict government criteria." },
            { step: "College Selection", content: "Choose a college and submit the application with attested documents." },
            { step: "DGHS Permission", content: "Obtain permission/equivalency certificate from the Directorate General of Health Services." },
            { step: "Visa", content: "Apply for a student visa at the Bangladesh High Commission." }
        ],
        universities: [
            { name: 'University of Dhaka', website: 'https://www.du.ac.uk/', courses: ['Medicine', 'Business', 'Microbiology', 'International Relations'] },
            { name: 'Bangladesh University of Engineering and Technology', website: 'https://www.buet.ac.bd/', courses: ['Civil Engineering', 'Computer Science', 'Electrical Engineering', 'Architecture'] },
            { name: 'North South University', website: 'http://www.northsouth.edu/', courses: ['BBA', 'Computer Science', 'Public Health', 'Economics'] },
            { name: 'BRAC University', website: 'https://www.bracu.ac.bd/', courses: ['Pharmacy', 'Biotechnology', 'Development Studies', 'Law'] },
            { name: 'Daffodil International University', website: 'https://daffodilvarsity.edu.bd/', courses: ['Software Engineering', 'Multimedia', 'Business', 'Textile Engineering'] },
        ],
    },
    {
        id: 'china',
        name: 'China',
        flag: '/images/flags/china.jpg',
        image: '/images/destinations/china.jpg',
        hasUniversityData: true,
        description: 'Ancient culture meets modern education with scholarship opportunities.',
        climate: "China's climate is extremely diverse. Northern China (Beijing) has hot, dry summers and freezing winters. Southern China (Shanghai, Guangzhou) is subtropical with hot, humid summers and mild winters. Western China can be arid. Spring and autumn are generally the most pleasant seasons across the country.",
        culture: "Chinese culture is one of the world's oldest, emphasizing respect for hierarchy, family, and education. It is a collectivist society where relationships (guanxi) are important. Modern China is a fast-paced blend of tradition and high-tech innovation. University life is vibrant, with a strong focus on academic achievement.",
        professions: "China is a global powerhouse in Manufacturing, Technology, E-commerce, and Infrastructure. Key professions include Civil Engineering, Computer Science (AI, Big Data), International Trade, and Mandarin Language education. Learning Chinese opens doors to multinational corporations.",
        advantages_detailed: [
            { title: "Scholarships", content: "The Chinese government offers generous scholarships (CSC) covering tuition and living expenses." },
            { title: "Economic Hub", content: "Study in the world's second-largest economy with vast business opportunities." },
            { title: "Affordable Cost", content: "Tuition and living costs are significantly lower than in Western countries." },
            { title: "Modern Facilities", content: "Universities have state-of-the-art campuses and laboratories." }
        ],
        process_detailed: [
            { step: "Program Search", content: "Find English-taught programs via CUCAS or university websites." },
            { step: "Application", content: "Apply online, submitting medical exam forms and notarized diplomas." },
            { step: "JW202 Form", content: "Receive the Admission Letter and JW202/JW201 Visa Application Form." },
            { step: "X Visa", content: "Apply for the X1 (long term) or X2 (short term) student visa at the Chinese embassy." }
        ],
        universities: [
            { name: 'Tsinghua University', website: 'https://www.tsinghua.edu.cn/en/', courses: ['Computer Science', 'Civil Engineering', 'Business', 'Architecture'] },
            { name: 'Peking University', website: 'https://english.pku.edu.cn/', courses: ['Chinese Language', 'Economics', 'International Relations', 'Chemistry'] },
            { name: 'Fudan University', website: 'https://www.fudan.edu.cn/en/', courses: ['Medicine', 'Business Administration', 'Journalism', 'Data Science'] },
            { name: 'Shanghai Jiao Tong University', website: 'https://en.sjtu.edu.cn/', courses: ['Mechanical Engineering', 'Naval Architecture', 'Biomedical Engineering'] },
            { name: 'Zhejiang University', website: 'https://www.zju.edu.cn/english/', courses: ['Computer Science', 'Agriculture', 'Optoelectronics', 'Mathematics'] },
        ],
    },
    {
        id: 'malaysia',
        name: 'Malaysia',
        flag: '/images/flags/malaysia.jpg',
        image: '/images/destinations/malaysia.jpg',
        hasUniversityData: true,
        description: 'Multicultural environment with quality education at affordable costs.',
        climate: "Malaysia has a tropical rainforest climate, which means it is hot and humid year-round, with average temperatures between 27°C and 32°C. There is no distinct winter. Rainfall is common throughout the year, with monsoon seasons affecting different coasts at different times.",
        culture: "Malaysia is a melting pot of Malay, Chinese, and Indian cultures, creating a diverse and food-loving society. It is known for its hospitality and festivals. English is widely spoken, making it easy for international students to adapt. The lifestyle is relaxed, affordable, and vibrant.",
        professions: "Malaysia's economy is diverse, with key sectors in Electronics, Islamic Finance, Oil & Gas, and Tourism. Professions in Engineering, IT, Accounting, and Hospitality are in high demand. It is also a regional hub for multinational companies.",
        advantages_detailed: [
            { title: "Affordability", content: "Very low tuition fees and cost of living compared to Singapore or Australia." },
            { title: "Twinning Programs", content: "Earn a degree from UK, USA, or Australia at a fraction of the cost via transfer programs." },
            { title: "No Language Barrier", content: "English is widely spoken and used as the medium of instruction in private universities." },
            { title: "Strategic Location", content: "Easy travel access to the rest of Southeast Asia." }
        ],
        process_detailed: [
            { step: "Offer Letter", content: "Apply to the university and receive a full Offer Letter." },
            { step: "EMGS Approval", content: "University applies for Visa Approval Letter (VAL) through Education Malaysia Global Services." },
            { step: "Single Entry Visa", content: "Apply for a Single Entry Visa (SEV) at the Malaysian embassy with the VAL." },
            { step: "Student Pass", content: "Upon arrival, complete medical screening to receive the Student Pass sticker." }
        ],
        universities: [
            { name: 'Universiti Malaya (UM)', website: 'https://www.um.edu.my/', courses: ['Medicine', 'Engineering', 'Law', 'Economics', 'Linguistics'] },
            { name: 'Universiti Putra Malaysia (UPM)', website: 'https://www.upm.edu.my/', courses: ['Agriculture', 'Veterinary Medicine', 'Forestry', 'Biotechnology'] },
            { name: 'Universiti Sains Malaysia', website: 'https://www.usm.my/', courses: ['Pharmacy', 'Architecture', 'Computer Science', 'Applied Sciences'] },
            { name: 'Taylor\'s University', website: 'https://university.taylors.edu.my/', courses: ['Hospitality Management', 'Culinary Arts', 'Business', 'Architecture'] },
            { name: 'Monash University Malaysia', website: 'https://www.monash.edu.my/', courses: ['Pharmacy', 'Medicine', 'Engineering', 'Business', 'IT'] },
        ],
    },
    {
        id: 'turkey',
        name: 'Turkey',
        flag: '/images/flags/turkey.jpg',
        image: '/images/destinations/turkey.jpg',
        hasUniversityData: true,
        description: 'Bridge between East and West with unique cultural and educational experience.',
        climate: "Turkey enjoys a diverse climate. The coastal areas bordering the Aegean and Mediterranean Seas have a temperate Mediterranean climate with hot, dry summers and mild, wet winters. The Black Sea coast is temperate and wet. Inner Anatolia has a continental climate with cold winters and hot summers, making it ideal for four-season activities.",
        culture: "Turkish culture is a rich tapestry weaving various ancient civilizations. It is famous for its hospitality ('misafirperverlik'), delicious cuisine (kebabs, baklava), and historic sites like Hagia Sophia. Turks are friendly and value family traditions. The blend of European and Middle Eastern influences creates a unique and vibrant atmosphere.",
        professions: "Turkey has a dynamic economy with strong sectors in Tourism, Manufacturing (Textiles, Automotive), Construction, and Healthcare. Professions in International Business, Engineering, Medicine, and Architecture are highly regarded. Istanbul is a major global business hub connecting two continents.",
        advantages_detailed: [
            { title: "Bridge of Civilizations", content: "Experience a unique blend of Eastern and Western cultures and history." },
            { title: "Affordable Education", content: "Tuition fees and living costs are lower than in many EU countries." },
            { title: "English Programs", content: "Many private and some public universities offer full degree programs in English." },
            { title: "Natural Beauty", content: "From beautiful beaches to scenic mountains, Turkey offers stunning landscapes." }
        ],
        process_detailed: [
            { step: "University Application", content: "Apply directly to universities or through the 'Türkiye Scholarships' program." },
            { step: "Acceptance", content: "Receive your official Letter of Acceptance from the university." },
            { step: "Student Visa", content: "Apply for a Student Visa at the nearest Turkish consulate with your acceptance letter." },
            { step: "Residence Permit", content: "Register for a Residence Permit within one month of arrival in Turkey." }
        ],
        universities: [
            { name: 'Koç University', website: 'https://www.ku.edu.tr/en/', courses: ['Business Administration', 'Engineering', 'Psychology', 'Medicine'] },
            { name: 'Sabanci University', website: 'https://www.sabanciuniv.edu/en', courses: ['Computer Science', 'Economics', 'Industrial Engineering', 'Visual Arts'] },
            { name: 'Middle East Technical University (METU)', website: 'https://www.metu.edu.tr/', courses: ['Architecture', 'Aerospace Engineering', 'Petroleum Engineering', 'Biology'] },
            { name: 'Bilkent University', website: 'https://w3.bilkent.edu.tr/bilkent/', courses: ['International Relations', 'Electrical Engineering', 'English Literature', 'Physics'] },
            { name: 'Boğaziçi University', website: 'http://www.boun.edu.tr/en_US', courses: ['Sociology', 'Computer Engineering', 'Translation Studies', 'Philosophy'] },
        ],
    },
    {
        id: 'cyprus',
        name: 'Cyprus',
        flag: '/images/flags/cyprus.jpg',
        image: '/images/destinations/cyprus.jpg',
        hasUniversityData: true,
        description: 'Mediterranean island offering English-taught programs and pleasant climate.',
        climate: "Cyprus has one of the warmest climates in the Mediterranean part of the European Union. It enjoys an intense Mediterranean climate with long, hot, and dry summers from mid-May to mid-October, and mild, wet winters. With over 300 days of sunshine a year, it's a sunny paradise for students.",
        culture: "Cypriot culture is known for its warm hospitality and relaxed lifestyle. It shares many cultural elements with Greece and Turkey, with a British colonial influence visible in the widespread use of English and driving on the left. Family and food are central to social life, with coffee culture being a popular pastime.",
        professions: "Cyprus is a major international business and shipping hub. Key professions include Hotel & Tourism Management, Finance, Shipping & Logistics, and Information Technology. The country is also becoming a center for higher education in the region, offering opportunities in academia and research.",
        advantages_detailed: [
            { title: "Low Crime Rate", content: "Cyprus is one of the safest countries in Europe for international students." },
            { title: "English Environment", content: "English is widely spoken, and most higher education programs are taught in English." },
            { title: "Affordable Living", content: "Reasonable cost of living compared to major European study destinations." },
            { title: "Global Recognition", content: "Degrees are recognized worldwide, and many programs have UK university partnerships." }
        ],
        process_detailed: [
            { step: "Admission", content: "Submit your application and documents to the university to receive a Conditional Offer." },
            { step: "Payment", content: "Pay the initial tuition fee deposit to confirm your seat." },
            { step: "Visa Application", content: "Apply for a visa entry permit. The university often assists with the migration department." },
            { step: "Arrival & Registration", content: "Travel to Cyprus, undergo medical checks, and complete university registration." }
        ],
        universities: [
            { name: 'University of Nicosia', website: 'https://www.unic.ac.cy/', courses: ['Medicine', 'Digital Currency', 'Law', 'Accounting'] },
            { name: 'European University Cyprus', website: 'https://euc.ac.cy/en/', courses: ['Dentistry', 'Medicine', 'Computer Engineering', 'Marketing'] },
            { name: 'Cyprus University of Technology', website: 'https://www.cut.ac.cy/', courses: ['Nursing', 'Multimedia', 'Hotel Management', 'Civil Engineering'] },
            { name: 'University of Cyprus', website: 'https://www.ucy.ac.cy/en/', courses: ['Psychology', 'Computer Science', 'Economics', 'Biological Sciences'] },
            { name: 'Frederick University', website: 'https://www.frederick.ac.cy/en/', courses: ['Pharmacy', 'Maritime Studies', 'Audio Visual Communication', 'Social Work'] },
        ],
    },
    {
        id: 'russia',
        name: 'Russia',
        flag: '/images/flags/russia.jpg',
        image: '/images/destinations/russia.jpg',
        hasUniversityData: true,
        description: 'World-renowned education in science and medicine at a low cost.',
        climate: "Russia's climate varies from steppes in the south to humid continental in much of European Russia. Winters are famous for being cold and snowy, while summers can be surprisingly warm and pleasant. St. Petersburg and Moscow experience distinct seasons.",
        culture: "Russia has a deep cultural heritage in literature (Tolstoy, Dostoevsky), ballet, classical music, and science. Russians value friendship and hospitality. The country offers a blend of imperial history and modern development. Living in Russia is an opportunity to learn a major global language.",
        professions: "Russia is a leader in Energy (Oil & Gas), Nuclear Physiology, Space Technology, and IT. Medical graduates (MBBS) are highly sought after globally. Engineering and Mathematics are also strong fields. Proficiency in Russian language opens opportunities in the CIS region.",
        advantages_detailed: [
            { title: "High Quality Education", content: "Russia has one of the best mass education systems in the world, especially in science." },
            { title: "Affordability", content: "Tuition fees for medical and engineering degrees are very low compared to the West." },
            { title: "English Medium", content: "Many universities offer MBBS and engineering programs entirely in English." },
            { title: "Global Recognition", content: "Degrees are recognized by WHO, UNESCO, and major medical councils globally." }
        ],
        process_detailed: [
            { step: "Application", content: "Apply to the university directly or via an agent. Submit passport and transcripts." },
            { step: "Invitation Letter", content: "The university issues an official Invitation Letter (takes 30-45 days)." },
            { step: "Visa Application", content: "Apply for a student visa at the Russian embassy/consulate." },
            { step: "Arrival", content: "Travel to Russia. The university will assist with registration and hostel accommodation." }
        ],
        universities: [
            { name: 'Lomonosov Moscow State University', website: 'https://www.msu.ru/en/', courses: ['Mathematics', 'Physics', 'Medicine', 'Linguistics'] },
            { name: 'Saint Petersburg State University', website: 'https://english.spbu.ru/', courses: ['International Relations', 'Management', 'Law', 'Journalism'] },
            { name: 'HSE University', website: 'https://www.hse.ru/en/', courses: ['Economics', 'Computer Science', 'Social Sciences', 'Design'] },
            { name: 'RUDN University', website: 'https://eng.rudn.ru/', courses: ['Medicine', 'Engineering', 'Agriculture', 'Environmental Sciences'] },
            { name: 'Kazan Federal University', website: 'https://kpfu.ru/eng', courses: ['Petroleum Engineering', 'Medicine', 'Chemistry', 'Geology'] },
        ],
    },
    {
        id: 'kazakhstan',
        name: 'Kazakhstan',
        flag: '/images/flags/kazakhstan.jpg',
        image: '/images/destinations/kazakhstan.jpg',
        hasUniversityData: true,
        description: 'Emerging hub for medical and technical education in Central Asia.',
        climate: "Kazakhstan has an extreme continental climate with warm summers and very cold winters. The weather is generally dry. Almaty, in the south, has milder winters compared to the capital, Astana, which is known for its chilling winds.",
        culture: "Kazakh culture is a mix of nomadic traditions and modern influences. Hospitality is paramount, and guests are treated with great respect. The country is ethnically diverse and religiously tolerant. Food plays a central role in social gatherings.",
        professions: "Kazakhstan is the largest economy in Central Asia, with booming Oil & Gas, Mining, and Finance sectors. Medical professionals are in demand. Graduates often find opportunities in multinational energy companies operating in the region.",
        advantages_detailed: [
            { title: "Affordable MBBS", content: "Kazakhstan is a top choice for medical students due to low tuition and cost of living." },
            { title: "English Programs", content: "Medical and technical courses are widely taught in English." },
            { title: "Safety", content: "Politically stable and safe for international students." },
            { title: "Modern Infrastructure", content: "Universities have modern campuses and hospitals for clinical training." }
        ],
        process_detailed: [
            { step: "Admission Letter", content: "Submit application and receive the Admission Letter from the university." },
            { step: "Visa Support", content: "University applies for Telex visa support from the Ministry of Foreign Affairs." },
            { step: "Visa Stamping", content: "Obtain the study visa from the Kazakhstan embassy in your country." },
            { step: "Onboarding", content: "Arrive in Kazakhstan, complete medical checkups, and register with local police." }
        ],
        universities: [
            { name: 'Al-Farabi Kazakh National University', website: 'https://www.kaznu.kz/en/', courses: ['Medicine', 'International Relations', 'Chemistry', 'IT'] },
            { name: 'Nazarbayev University', website: 'https://nu.edu.kz/', courses: ['Engineering', 'Data Science', 'Business', 'Public Policy'] },
            { name: 'Satbayev University', website: 'https://satbayev.university/en', courses: ['Petroleum Engineering', 'Geology', 'Architecture', 'Metallurgy'] },
            { name: 'Kazakh National Medical University', website: 'https://kaznmu.kz/eng/', courses: ['General Medicine', 'Dentistry', 'Pharmacy', 'Nursing'] },
            { name: 'KIMEP University', website: 'https://www.kimep.kz/en/', courses: ['Accounting', 'Finance', 'Marketing', 'Law'] },
        ],
    },
    {
        id: 'georgia',
        name: 'Georgia',
        flag: '/images/flags/georgia.jpg',
        image: '/images/destinations/georgia.jpg',
        hasUniversityData: true,
        description: 'Safe environment with NMC/WHO recognized medical programs.',
        climate: "Georgia has a diverse climate for its size. The west is humid subtropical, while the east ranges from dry to continental. Winters are generally mild to cool, and summers are warm. It is a very green and scenic country with fresh air.",
        culture: "Georgia is famous for its ancient wine-making tradition, polyphonic singing, and incredible hospitality. 'Supra' (feast) is a key cultural element. It is one of the oldest Christian nations. People are warm, friendly, and helpful to foreigners.",
        professions: "Tourism, Agriculture, and Logistics are key economic pillars. For international students, the primary focus is Medicine (MBBS) and Dentistry. Graduates can practice globally after clearing licensing exams (like USMLE, PLAB, NEXT).",
        advantages_detailed: [
            { title: "No Entrance Exam", content: "Direct admission for MBBS based on high school grades (Physics, Chemistry, Biology)." },
            { title: "Global Recognition", content: "Medical degrees are recognized by NMC (India), WHO, and European councils." },
            { title: "Safety & Lifestyle", content: "Extremely safe country with a European lifestyle and low cost of living." },
            { title: "Visa Ease", content: "Simple student visa process with high approval rates." }
        ],
        process_detailed: [
            { step: "Document Submission", content: "Submit passport and 12th-grade mark sheets for translation and notarization." },
            { step: "EQE Recognition", content: "Receive recognition from the National Center for Educational Quality Enhancement." },
            { step: "Offer Letter", content: "Get the official Offer Letter and pay the tuition fee." },
            { step: "Visa & Travel", content: "Apply for the D3 study visa and travel to Georgia." }
        ],
        universities: [
            { name: 'Tbilisi State Medical University', website: 'https://tsmu.edu/ts/main_page', courses: ['Medicine (MBBS)', 'Dentistry', 'Pharmacy', 'Physical Therapy'] },
            { name: 'Ilia State University', website: 'https://iliauni.edu.ge/en/', courses: ['Business Administration', 'Computer Engineering', 'Medicine', 'Ecology'] },
            { name: 'University of Georgia', website: 'https://www.ug.edu.ge/en', courses: ['Nursing', 'Business', 'IT', 'Engineering'] },
            { name: 'Ivan Javakhishvili Tbilisi State University', website: 'https://www.tsu.ge/en', courses: ['Psychology', 'Economics', 'Law', 'Humanities'] },
            { name: 'European University', website: 'https://eu.edu.ge/en', courses: ['Medicine', 'Dentistry', 'Veterinary Medicine', 'Management'] },
        ],
    },
    {
        id: 'newzealand',
        name: 'New Zealand',
        flag: '/images/flags/newzealand.jpg',
        image: '/images/destinations/newzealand.jpg',
        hasUniversityData: true,
        description: 'High-quality education in stunning natural environment with work opportunities.',
        climate: "New Zealand has a temperate maritime climate. The north is subtropical and warm, while the south is cooler. Winters (June-August) are mild, with snow in the southern mountains, perfect for skiing. Summers (December-February) are warm and pleasant, ideal for outdoor activities.",
        culture: "New Zealanders (Kiwis) are known for being friendly, easy-going, and welcoming. The culture is a unique blend of Māori indigenous heritage and European influence. They value work-life balance and have a deep respect for nature ('kaitiakitanga').",
        professions: "Key industries include Agriculture, Construction, Engineering, and Tourism. There is a high demand for skilled professionals in Civil Engineering, IT, Healthcare, and Early Childhood Education. The Green List of roles allows for fast-tracked residency.",
        advantages_detailed: [
            { title: "Post-Study Work Visa", content: "Work for up to 3 years after graduation, depending on your qualification." },
            { title: "Safe & Peaceful", content: "Consistently ranked as one of the safest and least corrupt countries in the world." },
            { title: "Research Excellence", content: "<strong>All</strong> 8 universities are ranked in the top 3% globally." },
            { title: "Supportive Environment", content: "Code of Practice ensures high standards of care for international students." }
        ],
        process_detailed: [
            { step: "Course Selection", content: "Apply to universities directly or via an agent. Qualifications are UK-comparable." },
            { step: "Offer of Place", content: "Receive a Confirmed Offer of Place from the university." },
            { step: "Tuition Payment", content: "Pay the tuition fee for the first year (held in trust)." },
            { step: "Visa Application", content: "Apply for the Fee Paying Student Visa with immigration New Zealand." }
        ],
        universities: [
            { name: 'University of Auckland', website: 'https://www.auckland.ac.nz/en.html', courses: ['Engineering', 'Psychology', 'Business', 'Computer Science'] },
            { name: 'University of Otago', website: 'https://www.otago.ac.nz/', courses: ['Medicine', 'Dentistry', 'Physiotherapy', 'Law'] },
            { name: 'Victoria University of Wellington', website: 'https://www.wgtn.ac.nz/', courses: ['Law', 'Architecture', 'Design', 'Humanities'] },
            { name: 'University of Canterbury', website: 'https://www.canterbury.ac.nz/', courses: ['Civil Engineering', 'Forestry', 'Ecology', 'Education'] },
            { name: 'Massey University', website: 'https://www.massey.ac.nz/', courses: ['Veterinary Science', 'Agriculture', 'Aviation', 'Food Technology'] },
        ],
    },
];

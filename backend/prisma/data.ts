const demandesData = [
  {
    name: 'John',
    lastName: 'Doe',
    age: 30,
    phoneNumber: 123456789,
    adress: '123 Main St, Anytown, USA',
    email: 'john.doe@example.com',
    cv: 'http://localhost:4000/upload/fa1ab81f52eea2e22f438308108eb3c12.pdf',
    note: 'Looking for a challenging role in software development.',
    type: "offre d'emploi",
    score: 85.5,
    matchedSkills: ['JavaScript', 'React', 'Node.js']
  },
  {
    name: 'Jane',
    lastName: 'Smith',
    age: 28,
    phoneNumber: 987654321,
    adress: '456 Elm St, Othertown, USA',
    email: 'jane.smith@example.com',
    cv: 'http://localhost:4000/upload/4b39da754084e100e4137e8647da4d62a.pdf',
    note: 'Interested in internship opportunities in data science.',
    type: 'offre de stage',
    score: 90.2,
    matchedSkills: ['Python', 'Data Analysis', 'Machine Learning']
  },
  {
    name: 'Alice',
    lastName: 'Johnson',
    age: 35,
    phoneNumber: 123123123,
    adress: '789 Maple St, Sometown, USA',
    email: 'alice.johnson@example.com',
    cv: 'http://localhost:4000/upload/4b39da754084e100e4137e8647da4d62a.pdf',
    note: 'Seeking a managerial position in project management.',
    type: "offre d'emploi",
    score: 88.0,
    matchedSkills: ['Project Management', 'Leadership', 'Agile']
  },
  {
    name: 'Bob',
    lastName: 'Brown',
    age: 40,
    phoneNumber: 321321321,
    adress: '101 Oak St, Newtown, USA',
    email: 'bob.brown@example.com',
    cv: 'http://localhost:4000/upload/4c1b53a810451060d9afe59429addcd545.pdf',
    note: 'Looking for a senior developer role in a tech company.',
    type: "offre d'emploi",
    score: 92.5,
    matchedSkills: ['Java', 'Spring', 'Microservices']
  },
  {
    name: 'Charlie',
    lastName: 'Davis',
    age: 22,
    phoneNumber: 456456456,
    adress: '202 Pine St, Oldtown, USA',
    email: 'charlie.davis@example.com',
    cv: 'http://localhost:4000/upload/04d63b5db51a72109bde27226dcad7aac.pdf',
    note: 'Entry-level position in marketing.',
    type: 'offre de stage',
    score: 75.0,
    matchedSkills: ['Marketing', 'Social Media', 'Content Creation']
  },
  {
    name: 'Diana',
    lastName: 'Evans',
    age: 27,
    phoneNumber: 654654654,
    adress: '303 Birch St, Smalltown, USA',
    email: 'diana.evans@example.com',
    cv: 'http://localhost:4000/upload/4ec84ab4c51109b96e317c6ec1747499.pdf',
    note: 'Interested in a role in graphic design.',
    type: "offre d'emploi",
    score: 83.3,
    matchedSkills: ['Graphic Design', 'Adobe Photoshop', 'Illustrator']
  },
  {
    name: 'Eve',
    lastName: 'Foster',
    age: 29,
    phoneNumber: 789789789,
    adress: '404 Cedar St, Bigcity, USA',
    email: 'eve.foster@example.com',
    cv: 'http://localhost:4000/upload/fe1491722adb61b101a08e4cca10a18e10.pdf',
    note: 'Seeking an HR position in a growing company.',
    type: "offre d'emploi",
    score: 80.0,
    matchedSkills: ['Human Resources', 'Recruitment', 'Employee Relations']
  },
  {
    name: 'Frank',
    lastName: 'Green',
    age: 31,
    phoneNumber: 987987987,
    adress: '505 Spruce St, Capitalcity, USA',
    email: 'frank.green@example.com',
    cv: 'http://localhost:4000/upload/fd3c50e4d6f591028408b264b96733a6e.pdf',
    note: 'Looking for a financial analyst position.',
    type: "offre d'emploi",
    score: 78.5,
    matchedSkills: ['Financial Analysis', 'Excel', 'Forecasting']
  },
  {
    name: 'Grace',
    lastName: 'Harris',
    age: 26,
    phoneNumber: 111111111,
    adress: '606 Ash St, Metropolis, USA',
    email: 'grace.harris@example.com',
    cv: 'http://localhost:4000/upload/fcd71582610af24e387f2c641099be5cda.pdf',
    note: 'Interested in software engineering internships.',
    type: 'offre de stage',
    score: 88.8,
    matchedSkills: ['Software Engineering', 'Java', 'Algorithms']
  },
  {
    name: 'Hank',
    lastName: 'Iverson',
    age: 32,
    phoneNumber: 222222222,
    adress: '707 Walnut St, Gotham, USA',
    email: 'hank.iverson@example.com',
    cv: 'http://localhost:4000/upload/f32321e109479fad75fe57c10165e816d8.pdf',
    note: 'Looking for a position as a network administrator.',
    type: "offre d'emploi",
    score: 82.7,
    matchedSkills: ['Network Administration', 'Cisco', 'Firewall']
  },
  {
    name: 'Ivy',
    lastName: 'Jackson',
    age: 24,
    phoneNumber: 333333333,
    adress: '808 Willow St, Smallville, USA',
    email: 'ivy.jackson@example.com',
    cv: 'http://localhost:4000/upload/f81a96c7eaa541076710e700dd941c5abc.pdf',
    note: 'Seeking a customer support role.',
    type: 'offre de stage',
    score: 75.5,
    matchedSkills: ['Customer Support', 'CRM', 'Communication']
  },
  {
    name: 'Jack',
    lastName: 'King',
    age: 34,
    phoneNumber: 444444444,
    adress: '909 Chestnut St, Midtown, USA',
    email: 'jack.king@example.com',
    cv: 'http://localhost:4000/upload/f81a96c7eaa541076710e700dd941c5abc.pdf',
    note: 'Looking for a project management position.',
    type: "offre d'emploi",
    score: 90.0,
    matchedSkills: ['Project Management', 'Agile', 'Scrum']
  },
  {
    name: 'Katie',
    lastName: 'Lewis',
    age: 28,
    phoneNumber: 555555555,
    adress: '1010 Poplar St, Uptown, USA',
    email: 'katie.lewis@example.com',
    cv: 'http://localhost:4000/upload/f7e09314e6aa88b61b1fed1e1c162625.pdf',
    note: 'Interested in a role in digital marketing.',
    type: "offre d'emploi",
    score: 84.6,
    matchedSkills: ['Digital Marketing', 'SEO', 'Google Analytics']
  },
  {
    name: 'Leo',
    lastName: 'Martinez',
    age: 36,
    phoneNumber: 666666666,
    adress: '1111 Cypress St, Downtow, USA',
    email: 'leo.martinez@example.com',
    cv: 'http://localhost:4000/upload/f4d0ead8e9a5ad6a71758dde6f7be80f.pdf',
    note: 'Seeking a senior accounting position.',
    type: "offre d'emploi",
    score: 91.3,
    matchedSkills: ['Accounting', 'Taxation', 'Financial Reporting']
  },
  {
    name: 'Mona',
    lastName: 'Nelson',
    age: 27,
    phoneNumber: 777777777,
    adress: '1212 Fir St, Hamlet, USA',
    email: 'mona.nelson@example.com',
    cv: 'http://localhost:4000/upload/f3c96ef10103219f08b25738496a598c50.pdf',
    note: 'Looking for a role in public relations.',
    type: "offre d'emploi",
    score: 79.9,
    matchedSkills: ['Public Relations', 'Media', 'Communication']
  },
  {
    name: 'Nate',
    lastName: 'Olsen',
    age: 23,
    phoneNumber: 888888888,
    adress: '1313 Redwood St, Village, USA',
    email: 'nate.olsen@example.com',
    cv: 'http://localhost:4000/upload/f3c96ef10103219f08b25738496a598c50.pdf',
    note: 'Interested in software development internships.',
    type: 'offre de stage',
    score: 77.0,
    matchedSkills: ['Software Development', 'Python', 'Django']
  },
  {
    name: 'Olivia',
    lastName: 'Parker',
    age: 29,
    phoneNumber: 999999999,
    adress: '1414 Pine St, Burg, USA',
    email: 'olivia.parker@example.com',
    cv: 'http://localhost:4000/upload/eff5a874e8262b464bfc7877fffac1cf.pdf',
    note: 'Looking for a position as a business analyst.',
    type: "offre d'emploi",
    score: 86.5,
    matchedSkills: ['Business Analysis', 'SQL', 'Data Visualization']
  },
  {
    name: 'Paul',
    lastName: 'Quinn',
    age: 37,
    phoneNumber: 1010101010,
    adress: '1515 Maple St, Borough, USA',
    email: 'paul.quinn@example.com',
    cv: 'http://localhost:4000/upload/ed5136797353e9697584e7702526d935.pdf',
    note: 'Seeking a role as a data scientist.',
    type: "offre d'emploi",
    score: 92.0,
    matchedSkills: ['Data Science', 'Python', 'Machine Learning']
  },
  {
    name: 'Quinn',
    lastName: 'Roberts',
    age: 33,
    phoneNumber: 1111111111,
    adress: '1616 Birch St, Township, USA',
    email: 'quinn.roberts@example.com',
    cv: 'http://localhost:4000/upload/1a994b84d23159e4f8cb59d2dd4ce5bb.pdf',
    note: 'Looking for a software engineering role.',
    type: "offre d'emploi",
    score: 87.2,
    matchedSkills: ['Software Engineering', 'Java', 'Spring Boot']
  },
  {
    name: 'Rachel',
    lastName: 'Scott',
    age: 25,
    phoneNumber: 1212121212,
    adress: '1717 Cedar St, Village, USA',
    email: 'rachel.scott@example.com',
    cv: 'http://localhost:4000/upload/fe1491722adb61b101a08e4cca10a18e10.pdf',
    note: 'Interested in human resources internships.',
    type: 'offre de stage',
    score: 80.4,
    matchedSkills: ['Human Resources', 'Recruitment', 'Training']
  },
];

export default demandesData;
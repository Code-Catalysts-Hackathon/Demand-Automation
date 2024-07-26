const demands = [
  {
    id: "1",
    businessUnit: {id:1,name:"CL"},
    platform: {id:1,name:"Homes"},
    lab: {id:1,name:"Onboarding"},
    featureTeam: {id:1,name:"Avengers"},
    primarySkill: {id:1,name:"React"},
    secondarySkill: {id:2,name:"Node Js"},
    tertiarySkill: {},
    grade: "E",
    buHeadName: "",
    department:"",
    demandDate: "",
    status: "Pending",
    comments: "",
  },
  {
    id: "2",
    businessUnit: {id:1,name:"CL"},
    platform: {id:1,name:"Homes"},
    lab: {id:1,name:"Onboarding"},
    featureTeam: {id:1,name:"Halifax"},
    primarySkill: {id:1,name:"Java"},
    secondarySkill: {id:2,name:"MySql"},
    tertiarySkill: {id:3, name:"Playwright"},
    grade: "D",
    buHeadName: "John ",
    department:"LTC HR",
    demandDate: "",
    status: "Pending",
    comments: "",
  },
  {
    id: "3",
    businessUnit: {id:1,name:"CL"},
    platform: {id:1,name:"Homes"},
    lab: {id:1,name:"Onboarding"},
    featureTeam: {id:1,name:"Avengers"},
    primarySkill: {id:1,name:"React"},
    secondarySkill: {id:2,name:"Node Js"},
    tertiarySkill: {},
    grade: "D",
    buHeadName: "",
    department:"Recruitment",
    demandDate: "",
    status: "Pending",
    comments: "",
  },
  {
    id: "4",
    businessUnit: {id:1,name:"CL"},
    platform: {id:1,name:"Homes"},
    lab: {id:1,name:"Direct & Retention"},
    featureTeam: {id:1,name:"MSP Simplification"},
    primarySkill: {id:1,name:"MainFrame"},
    secondarySkill: {id:2,name:"Db2"},
    tertiarySkill: {},
    grade: "E",
    buHeadName: "",
    department:"",
    demandDate: "",
    status: "Pending",
    comments: "",
  },
  {
    id: "5",
    businessUnit: {id:1,name:"BCB"},
    platform: {id:1,name:"Investments"},
    lab: {id:1,name:"Cards"},
    featureTeam: {id:1,name:"Cards Team"},
    primarySkill: {id:1,name:"Python"},
    secondarySkill: {id:2,name:"Javascript"},
    tertiarySkill: {},
    grade: "E",
    buHeadName: "",
    department:"",
    demandDate: "",
    status: "Pending",
    comments: "",
  },
  {
    id: "7",
    businessUnit: {id:1,name:"BCB"},
    platform: {id:1,name:"Enterprize"},
    lab: {id:1,name:"Direct Channel"},
    featureTeam: {id:1,name:"Feature team 1"},
    primarySkill: {id:1,name:"DevOps"},
    secondarySkill: {id:2,name:"Kubernetes"},
    tertiarySkill: {},
    grade: "F",
    buHeadName: "",
    department:"",
    demandDate: "",
    status: "Approved",
    comments: "",
  },
  {
    id: "8",
    businessUnit: {id:1,name:"BCB"},
    platform: {id:1,name:"Enterprize"},
    lab: {id:1,name:"Broker Channel"},
    featureTeam: {id:1,name:"Feature team 2"},
    primarySkill: {id:1,name:"GCP"},
    secondarySkill: {id:2,name:"Kubernetes"},
    tertiarySkill: {},
    grade: "F",
    buHeadName: "",
    department:"",
    demandDate: "",
    status: "Approved",
    comments: "",
  },
  {
    id: "9",
    businessUnit: {id:1,name:"CR"},
    platform: {id:1,name:"Consumer Team"},
    lab: {id:1,name:"Brokers"},
    featureTeam: {id:1,name:"Feature team 3"},
    primarySkill: {id:1,name:"Azure"},
    secondarySkill: {id:2,name:"Kubernetes"},
    tertiarySkill: {},
    grade: "E",
    buHeadName: "",
    department:"",
    demandDate: "",
    status: "Pending",
    comments: "",
  },
  {
    id: "10",
    businessUnit: {id:1,name:"BCB"},
    platform: {id:1,name:"Platform 2"},
    lab: {id:1,name:"Intermediary Channel"},
    featureTeam: {id:1,name:"Feature team 5"},
    primarySkill: {id:1,name:"AWS"},
    secondarySkill: {id:2,name:"Docker"},
    tertiarySkill: {},
    grade: "F",
    buHeadName: "",
    department:"",
    demandDate: "",
    status: "Pending",
    comments: "",
  }

];

const businessUnits = [
  {
    id: 11,
    name: "Consumer Lending",
  },
  {
    id: 1,
    name: "Consumer Relationships",
  },
  {
    id: 2,
    name: "Commercial Lending",
  },
  {
    id: 3,
    name: "Data/ML",
  },
  {
    id: 4,
    name: "Business And Commercial Bankking",
  },
];

const employees = [
  {
    "employeeId": "5608247",
    "name": "Krishna",
    "email": "Krishna@lbg.com",
    "mobile": "9966040003",
    "grade": "F",
    "JobTitle": "Lead Software Engineer"
  },
  {
    "employeeId": "5608111",
    "name": "Gautam",
    "email": "Gautam@lbg.com",
    "mobile": "9966040111",
    "grade": "E",
    "JobTitle": "Senior Software Engineer"
  },
  {
    "employeeId": "5608112",
    "name": "David",
    "email": "David@lbg.com",
    "mobile": "9966040112",
    "grade": "E",
    "jobTitle": "Senior Software Engineer"
  },
  {
    "employeeId": "5608113",
    "name": "Jenny",
    "email": "Jenny@lbg.com",
    "mobile": "9966040113",
    "grade": "D",
    "jobTitle": "Software Engineer"
  },
  {
    "employeeId": "5608114",
    "name": "John",
    "email": "John@Lbg.com",
    "mobile": "9966040114",
    "grade": "D",
    "JobTitle": "Software Engineer"
  },
  {
    "employeeId": "5608115",
    "name": "Prakash",
    "email": "Prakash@Lbg.com",
    "mobile": "9966040114",
    "grade": "E",
    "JobTitle": "Senior Quality Engineer"
  }
]

module.exports = {
  demands,
  businessUnits,
  employees
};



// search for 

// Business unit, 
// platform, 
// lab, 
// Feature team (Multi select),
// status (need enums) Draft Pending Approved Reject

// Add a Dept column in Demand table


// role  admin (whole access), BU HEAD (it's specific access)  BU-PL (it;  BU & PL)

// list api needs to send bu, platform, dept

// Employee

// 1 list view using demand entry
// 2 add employee using demand entry


// USERS Roles

// ADMIN  (whole application access)
// BUHEAD (had only BU level access to view and approve)
// BUPLEATFORMHEAD  (Recruiter) (had only BU => Platforms level access to view and approve)


// Status

// Draft
// Pending
// Approved
// Rejected

 



// Optional

// sort functionality in Table


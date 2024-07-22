const demands = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  }
];

const businessUnits = [
  {
    id: 0,
    name: "Consumer Lending",
  },
  {
    id: 1,
    name: "Consumer Finance",
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
    name: "HR dept",
  },
];

module.exports = {
  demands,
  businessUnits
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


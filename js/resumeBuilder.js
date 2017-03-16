/*
This is empty on purpose! Your code to build the resume will go here.

*/
//$("#main").append("Xuemei Wei");


var bio = {
    "name": "Xuemei Wei",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "0000000000",
        "email": "xxx@gmail.com",
        "github": "xuemeiwei",
        "twitter": "@xuemeiwei",
        "location": "San Jose"
    },
    "welcomeMessage": "Welcome to my personal webpage",
    "bioPic": "images/fry.jpg",
    "skills": [
        "java", "html", "css", "javascript"
    ]
}
var education = {
    "schools": [
        {
            "name": "Santa Clara University",
            "location": "Santa Clara, CA",
            "degree": "master",
            "majors": [
                "Computer Science",
                "Computer Engineering"
            ],
            "dates": 2018,
            "url": "http://..."
        },
        {
            "name": "University of Science and Technology of China",
            "location": "Hefei, Anhui",
            "degree": "master",
            "majors": [
                "Signal Processing",
                "InformationProcessing"
            ],
            "dates": 2014,
            "url": "http://..."
        },
        {
            "name": "Hefei University of Technology",
            "location": "Hefei, Anhui",
            "degree": "bachelor",
            "majors": [
                "Communication Engineering"
            ],
            "dates": 2011,
            "url": "http://..."
        }
    ],
    "onlineCourses": [
        {
            "title": "Full Stack Web Developer Nanodegree",
            "school": "udacity",
            "dates": 2015,
            "url": "http://udacity"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "IBM",
            "title": "Application Developer",
            "location": "Shanghai",
            "dates": "July 2014 - Feb 2015",
            "description": "Design and implement API for HSBC Core Banking Project"
        },
        {
            "employer": "USTC",
            "title": "Research Assistant",
            "location": "Hefei",
            "dates": "July 2012 - Oct 2012",
            "description": "Design and implement Algorithms for Convolutive Speech Separation"
        }
    ]
};

var projects= {
    "projects": [
        {
            "title": "Movie Trailers Website",
            "dates": "Nov. 2015",
            "description": "Implemented command line based interface using Python",
            "images": "images/fry.jpg"
        },
        {
            "title": "Tournament Results",
            "dates": "Dec. 2015",
            "description": "Designed and Implemented database schema in PostgreSQL",
            "images": "images/fry.jpg"
        }
    ]
};



bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
    var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome to my homepage");
    $("#header").append(formattedWelcomeMsg);

    var formattedContactInfo = [];
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    formattedContactInfo.push(formattedMobile);
    formattedContactInfo.push(formattedEmail);
    formattedContactInfo.push(formattedTwitter);
    formattedContactInfo.push(formattedGithub);
    formattedContactInfo.push(formattedLocation);
    formattedContactInfo.forEach(function(item){
        $("#topContacts").append(item);
        $("#footerContacts").append(item);
    });

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
}
bio.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        //var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineUrl);
    })
}
education.display();

work.display = function() {
    work.jobs.forEach(function(job){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%",job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDates.replace("%data%",job.description);
        $(".work-entry:last").append(formattedDescription);
    });
}
work.display();


projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", "images/fry.jpg");
        $(".project-entry:last").append(formattedImage);
    });
}
projects.display();

//$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);





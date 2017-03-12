/*
This is empty on purpose! Your code to build the resume will go here.

*/
//$("#main").append("Xuemei Wei");



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
var education = {
    "schools": [
        {
            "name": "Santa Clara University",
            "location": "Santa Clara, CA",
            "degree": "master",
            "date": 2018,
            "url": "http://..."
        },
        {
            "name": "University of Science and Technology of China",
            "location": "Hefei, Anhui",
            "degree": "master",
            "date": 2014,
            "url": "http://..."
        },
        {
            "name": "Hefei University of Technology",
            "location": "Hefei, Anhui",
            "degree": "bachelor",
            "date": 2011,
            "url": "http://..."
        }
    ],
    "onlineCourses": [
        {
            "title": "Full Stack Web Developer Nanodegree",
            "school": "udacity",
            "dates": "",
            "url": ""
        }
    ]
}
var bio = {
    "name": "Xuemei Wei",
    "role": "Software Engineer",
    "welcomeMessage": "Welcome to my personal webpage",
    "bioPic": "images/fry.jpg",
    "skills": [
        "java", "html", "css", "javascript"
    ],
    "contacts": {
        "mobile": "0000000000",
        "email": "xxx@gmail.com",
        "github": "xuemeiwei",
        "twitter": "@xuemeiwei",
        "location": "San Jose"
    }
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

var formattedName = HTMLheaderName.replace("%data%", "Xuemei Wei");
$("#header").append(formattedName);

var role = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
$("#header").append(formattedBioPic);




var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome to my homepage");
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
}

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

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);





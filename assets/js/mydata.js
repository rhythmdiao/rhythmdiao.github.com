define(function (require, exports) {
    var mydata = function () {
    };
    mydata.eng = {
        skills: [
            { name: "Frontend: Bootstrap/Jquery/AJAX/Backbone/Flask", rating: 80},
            { name: "Backend: Spring/SpringMVC/iBatis/Hibernate/CodeIgniter", rating: 80 },
            { name: "Database: MySQL", rating: 80},
            { name: "Others: Restful/AMQP/Activiti", rating: 80}
        ],
        experience: "<p><strong>Company:</strong> Beijing HuDongWanTong WebTech Co.,Ltd.,Beijing</p>"
            + "<p><strong>Postion:</strong> Assistant Engineer(July 2013-Present)</p>" +
            "<p><strong>Responsibilities:</strong></p>" +
            "<p>- Outsource to China Telecom System Integration Co.,Ltd.(CTSI)</p>" +
            "<p>- Resident software developer for CTSI's client, China Telecom e-Cloud Co.,Ltd.</p>" +
            "<p>- Participate software project: the second phase of the e-Cloud business management platform</p>" +
            "<p>- Develop, maintain, and upgrade systems, E-business Platform, Virtual Machine Adapter, and Integration Test by Python</p>" +
            "<p>- Design and document APIs, data structure, and work flow for the system</p>" +
            "<p>- Cooperate with other teams and departments</p>" +
            "<p>- Achieve goals with scrum, agile development, rapid iteration, and various techs</p>",
        education: "<p>2011.9-2012.12 University of Nottingham, United Kingdom<p><strong>Information Technology</strong> M.Sc</p></p>" +
            "<p>2007.9-2011.6 Capital Normal University, Beijing, China<p><strong>Intelligence Science and Technology</strong> BEng.</p>" +
            "<p>2007.9-2011.6 Capital Normal University, Beijing, China<p><strong>Minor Psychology</strong> B.S</p>",
        skill: "<p>{{#skills}}{{name}}<div class='progress'><div class='progress-bar progress-bar-primary' style='width:{{rating}}%'></div></div>{{/skills}}</p>",
        summary: "A positive, passionate and honest person with definitely full time CS academic education and work experience backgrounds. " +
            "Specialized both in front and back end object-oriented programming and system, " +
            "with professional, modern, and efficient tech skills in software engineering, including of requirement, analysis, implementation, testing and evaluation. " +
            "Pursuing solid and pure interpersonal relationship, concentrating on enhancing technical capability, and coordinately working as a team member with aspiration. " +
            "That every problem deserves one or more solutions.",
        addition: ""
    };
    exports.loaddata = mydata.prototype = {
        chart: function () {
            var options = {
                animation: true,
                segmentShowStroke: false,
                scaleBeginAtZero: true
            };
            var data = [
                {
                    value: 100,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Chinese"
                },
                {
                    value: 80,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "English"
                },
                {
                    value: 60,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Java"
                },
                {
                    value: 60,
                    color: "#B3EE3A",
                    highlight: "#ADFF2F",
                    label: "Javascript"
                },
                {
                    value: 60,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "PHP"
                },
                {
                    value: 60,
                    color: "#4D5360",
                    highlight: "#616774",
                    label: "Python"
                }
            ];
            var canvas = $('#chart');
            var context = canvas.get(0).getContext('2d');
            new Chart(context).PolarArea(data, options);
        },
        experience: function () {
            var view = Mustache.render("<h4>Experience</h4>{{&experience}}", mydata.eng);
            this._parse("#experience", view);
        },
        education: function () {
            var view = Mustache.render("<h4>Education</h4>{{&education}}", mydata.eng);
            this._parse("#education", view);
        },
        skill: function () {
            var view = Mustache.render("<h4>Technical Skills and Knowledge</h4>" + mydata.eng.skill, mydata.eng);
            this._parse("#skill", view);
        },
        summary: function () {
            var view = Mustache.render("<h4>Summary</h4>{{&summary}}", mydata.eng);
            this._parse("#summary", view);
        },
        addition: function () {
            var view = Mustache.render("<h4>Addition</h4>{{&addition}}", mydata.eng);
            this._parse("#addition", view);
        },
        _parse: function (element, view) {
            $(element).mouseenter(function () {
                    $(this).addClass("shadow")
                }
            ).mouseleave(function () {
                    $(this).removeClass("shadow")
                }
            ).html(view);
        }
    };
});
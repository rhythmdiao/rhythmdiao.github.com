define(function (require, exports) {
    var mydata = function () {
    };
    mydata.eng = {
        personals: {
            name: "Rhythmdiao",
            sex: "Male",
            age: "26",
            email: "rhythmdiao@163.com",
            cellphone: "You know"
        },
        skills: [
            { name: "HTML/CSS/Javascript", rating: 90},
            { name: "Java/J2EE", rating: 80 },
            { name: "Python", rating: 70},
            { name: "PHP", rating: 60}
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
        education: "<p>2011.9-2012.12 University of Nottingham, Nottingham<p><strong>Information Technology</strong> M.Sc</p></p>" +
            "<p>2007.9-2011.6 Capital Normal University, Beijing<p><strong>Intelligence Science and Technology</strong> BEng.</p>" +
            "<p>2007.9-2011.6 Capital Normal University, Beijing<p><strong>Minor Psychology</strong> B.S</p>",
        skill: "<p>{{#skills}}{{name}}<div class='progress'><div class='progress-bar progress-bar-primary' style='width:{{rating}}%'></div></div>{{/skills}}</p>",
        language: "",
        summary: "",
        addition: ""
    };
    mydata.chn = {
        personal: {

        },
        experience: "<p><strong>1.北京互动万通网络科技有限公司</strong></p>"
            + "<p><small>助理工程师</small>(2013.7-至今)</p>" +
            "<p>- 中国电信系统集成公司外包，在中国电信云计算公司驻场开发</p>" +
            "<p>- 参与中国电信云服务管理平台二期项目</p>" +
            "<p>- 主要经历：</p>" +
            "<p>云公司电商平台前台开发(www.ctyun.cn)，主要负责域名模块，订单模块，网络定制模块开发以及平台其它模块的维护和升级。</p>",
        education: "<p>2011.9-2012.12 诺丁汉大学 <p><strong>信息技术</strong> 理学硕士</p></p>" +
            "<p>2007.9-2011.6 首都师范大学 <p><strong>智能科学与技术</strong> 工学学士</p></p>" +
            "<p>2007.9-2011.6 首都师范大学 <p><strong>心理学</strong> 辅修学士</p></p>"
    };
    exports.loaddata = mydata.prototype = {
        chart: function () {
            //$('#contact').popover({placement: 'bottom', container: 'body', html: true, content: '<p>QQ: 36181610</p><p>微博：weibo.com/gbtags</p><p>微信：gbtags</p>'});
            //    $('#avatar').tooltip({'placement': 'bottom'});
            var zhdata = [
                {
                    label: '中文水平',
                    value: 90,
                    highlight: "#FFC870",
                    color: "#F7464A"
                },
                {
                    value: 10,
                    color: "#EEEEEE"
                }
            ]
            var zhoptions = {
                animation: true,
                segmentShowStroke: false
            };

            var c = $('#zh');
            var ct = c.get(0).getContext('2d');

            var zhChart = new Chart(ct).Doughnut(zhdata, zhoptions);


            var endata = [
                {
                    label: '英文水平',
                    value: 80,
                    highlight: "#5AD3D1",
                    color: "#4D5360"
                },
                {
                    value: 20,
                    color: "#EEEEEE"
                }
            ]

            var enoptions = {
                animation: true,
                segmentShowStroke: false
            };

            var c = $('#en');
            var ct = c.get(0).getContext('2d');

            var enchart = new Chart(ct).Doughnut(endata, enoptions);
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
        language: function () {
            var view = Mustache.render("<h4>Education</h4>{{&education}}", mydata.eng);
            this._parse("#education", view);
        },
        summary: function () {
            var view = Mustache.render("<h4>Education</h4>{{&education}}", mydata.eng);
            this._parse("#education", view);
        },
        addition: function () {
            var view = Mustache.render("<h4>Education</h4>{{&education}}", mydata.eng);
            this._parse("#education", view);
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
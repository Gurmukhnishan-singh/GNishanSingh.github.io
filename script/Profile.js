$(function() {
    $('body').terminal({
        whoami: function (){
            this.echo(`

[[b;#00FF00;]Details about me]
----------------
 [[b;#0000FF;]Name]                  : Gurmukhnishan Singh
 [[b;#0000FF;]Current Designation]   : Technical Lead (Detection Engineering)
 [[b;#0000FF;]Current Employer]      : [[b;#FFFFFF;]Securonix India PVT. LTD.]
 [[b;#0000FF;]Total Experience]      : [[b;#FFFFFF;]9 years and 3 month]
 [[b;#0000FF;]Previous Employers]    :
                       - [[b;#FFFFFF;]Netsurion Technologies PVT. LTD.] (6 years and 6 months) (June 2015 - November 2021)
                       - [[b;#FFFFFF;]Axon Network Solution PVT. LTD.] (1 year and 1 month) (December 2013 - June 2015)
                       - [[b;#FFFFFF;]IT Support Desk Limited.] (6 months) (june 2013 - november 2013)
 [[b;#0000FF;]Education]             : Bachelor of Engineering (2008-2012)
 [[b;#0000FF;]Certification]         :
                       - [[!;;;;https://mad-certified.mitre-engenuity.org/02aa55f6-287a-4299-8d47-6cd2c2c2bfae]ATT&CK Cyber Threat Intelligence Certification]
                       - [[!;;;;https://mad-certified.mitre-engenuity.org/6245378c-8b5d-4888-9246-e0b1f801590d]ATT&CK Security Operations Center Assessment Certification]
                       - [[!;;;;https://securonixacademy.northpass.com/courses/fefba1a5-03d0-425e-a77c-c4b9f8f4e26a/certificate]Certified SNYPR Content Developer]
                       - [[!;;;;https://securonixacademy.northpass.com/courses/51d09917-09e5-41ef-8bc1-97a24ff78f52/certificate]Certified SNYPR Data Integrator]
                       - [[!;;;;https://securonixacademy.northpass.com/courses/dcd6cbc2-727b-47b0-b585-3ad3fffc2f74/certificate]Certified SNYPR Security Analyst] 
 [[b;#0000FF;]Project]               :
                       - [[!;;;;https://github.com/GNishanSingh/Optm_ParserEngine]Optimized Parser Engine]
                          (Python) (PIP Module)
                       - [[!;;;;https://serverlessrepo.aws.amazon.com/applications/us-east-1/655631112574/ETS-AWS-Logforwarder]AWS Connector with SIEM]
                       - [[!;;;;https://www.netsurion.com/knowledge-packs/microsoft-azure]Azure Connector with SIEM]
                       - [[!;;;;https://www.netsurion.com/capabilities/mitre-attack]MITRE ATT&CK Integration with EventTracker]
                       - [[!;;;;https://www.netsurion.com/eventtracker-support/software-updates/v9x/et93u21-056]Vulnerability Management Integration with EventTracker]
            `);
        },
        experience: function(){
            this.echo('<p></p><p></p><div width="100%" id="timeline"></div>',{raw: true})
            var width = 1000;
            var testData =[
                {label: "Securonix India PVT LTD", fruit: "orange", times: [
                  {"starting_time": 1637419320000, "ending_time": 1665326520000}]},
                {label: "Netsurion Technologies PVT LTD", fruit: "apple", times: [
                  {"starting_time": 1433947320000, "ending_time": 1637419320000}
                ]},
                {label: "Axon Network Solution PVT LTD", fruit: "lemon", times: [
                  {"starting_time": 1384094520000, "ending_time": 1433947320000}]},
                {label: "IT Support Desk Limited", fruit: "lemon", times: [
                    {"starting_time": 1370875320000, "ending_time": 1384094520000}]}
                ];
                var chart = d3.timeline().showAxisTop().stack();
                chart.tickFormat({
                    format: d3.time.format("%Y"),
                    tickSize: 13
                })
                chart.margin({left:150, right:30, top:0, bottom:0})
                chart.beginning(1370875320000)
                chart.ending(1665326520000)
                var svg = d3.select("#timeline").append("svg").attr("width", width)
                    .datum(testData).call(chart);
        },
        help: function(){
            this.echo(`
 ▄▄ • ▄• ▄▌▄▄▄  • ▌ ▄ ·. ▄• ▄▌▄ •▄  ▄ .▄ ▐ ▄ ▪  .▄▄ ·  ▄ .▄ ▄▄▄·  ▐ ▄     .▄▄ · ▪   ▐ ▄  ▄▄ •  ▄ .▄
▐█ ▀ ▪█▪██▌▀▄ █··██ ▐███▪█▪██▌█▌▄▌▪██▪▐█•█▌▐███ ▐█ ▀. ██▪▐█▐█ ▀█ •█▌▐█    ▐█ ▀. ██ •█▌▐█▐█ ▀ ▪██▪▐█
▄█ ▀█▄█▌▐█▌▐▀▀▄ ▐█ ▌▐▌▐█·█▌▐█▌▐▀▀▄·██▀▐█▐█▐▐▌▐█·▄▀▀▀█▄██▀▐█▄█▀▀█ ▐█▐▐▌    ▄▀▀▀█▄▐█·▐█▐▐▌▄█ ▀█▄██▀▐█
▐█▄▪▐█▐█▄█▌▐█•█▌██ ██▌▐█▌▐█▄█▌▐█.█▌██▌▐▀██▐█▌▐█▌▐█▄▪▐███▌▐▀▐█ ▪▐▌██▐█▌    ▐█▄▪▐█▐█▌██▐█▌▐█▄▪▐███▌▐▀
·▀▀▀▀  ▀▀▀ .▀  ▀▀▀  █▪▀▀▀ ▀▀▀ ·▀  ▀▀▀▀ ·▀▀ █▪▀▀▀ ▀▀▀▀ ▀▀▀ · ▀  ▀ ▀▀ █▪     ▀▀▀▀ ▀▀▀▀▀ █▪·▀▀▀▀ ▀▀▀ ·
[[!;;;;https://github.com/GNishanSingh]GitHub] | [[!;;;;https://twitter.com/g_nishan_singh]Twitter] | [[!;;;;https://www.linkedin.com/in/gurmukhnishan-singh/]LinkedIn]
---------------------------

Use following command for getting details about me:
---------------------------------------------------
| [[b;#0000FF;]Command]   |          [[b;#0000FF;]Description]                |
---------------------------------------------------
| [[b;#0000FF;]whoami]     | To read something about me         |
| [[b;#0000FF;]experience] | To Read about my work experience   |
| [[b;#0000FF;]projects]   | To Read about project i have done  |
| [[b;#0000FF;]help]       | To get command helps               |
---------------------------------------------------
            `)
        }
    }, {
       greetings: 
       `
  ▄▄ • ▄• ▄▌▄▄▄  • ▌ ▄ ·. ▄• ▄▌▄ •▄  ▄ .▄ ▐ ▄ ▪  .▄▄ ·  ▄ .▄ ▄▄▄·  ▐ ▄     .▄▄ · ▪   ▐ ▄  ▄▄ •  ▄ .▄
 ▐█ ▀ ▪█▪██▌▀▄ █··██ ▐███▪█▪██▌█▌▄▌▪██▪▐█•█▌▐███ ▐█ ▀. ██▪▐█▐█ ▀█ •█▌▐█    ▐█ ▀. ██ •█▌▐█▐█ ▀ ▪██▪▐█
 ▄█ ▀█▄█▌▐█▌▐▀▀▄ ▐█ ▌▐▌▐█·█▌▐█▌▐▀▀▄·██▀▐█▐█▐▐▌▐█·▄▀▀▀█▄██▀▐█▄█▀▀█ ▐█▐▐▌    ▄▀▀▀█▄▐█·▐█▐▐▌▄█ ▀█▄██▀▐█
 ▐█▄▪▐█▐█▄█▌▐█•█▌██ ██▌▐█▌▐█▄█▌▐█.█▌██▌▐▀██▐█▌▐█▌▐█▄▪▐███▌▐▀▐█ ▪▐▌██▐█▌    ▐█▄▪▐█▐█▌██▐█▌▐█▄▪▐███▌▐▀
 ·▀▀▀▀  ▀▀▀ .▀  ▀▀▀  █▪▀▀▀ ▀▀▀ ·▀  ▀▀▀▀ ·▀▀ █▪▀▀▀ ▀▀▀▀ ▀▀▀ · ▀  ▀ ▀▀ █▪     ▀▀▀▀ ▀▀▀▀▀ █▪·▀▀▀▀ ▀▀▀ ·
 [[!;;;;https://github.com/GNishanSingh]GitHub] | [[!;;;;https://twitter.com/g_nishan_singh]Twitter] | [[!;;;;https://www.linkedin.com/in/gurmukhnishan-singh/]LinkedIn]
 ---------------------------

Use following command for getting details about me:
---------------------------------------------------
| [[b;#0000FF;]Command]   |          [[b;#0000FF;]Description]                |
---------------------------------------------------
| [[b;#0000FF;]whoami]     | To read something about me         |
| [[b;#0000FF;]experience] | To Read about my work experience   |
| [[b;#0000FF;]projects]   | To Read about project i have done  |
| [[b;#0000FF;]help]       | To get command helps               |
---------------------------------------------------
`,
    prompt:'[[;red;]g_nishan_singh] >'
    });
 });
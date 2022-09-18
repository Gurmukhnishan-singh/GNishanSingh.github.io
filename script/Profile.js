$(function() {
    $('body').terminal("Profile", {
       greetings: `
----------------------------------------------------------------------------
| [[b;#0000FF;]G] | [[b;#0000FF;]U] | [[b;#0000FF;]R] | [[b;#0000FF;]M] | [[b;#0000FF;]U] | [[b;#0000FF;]K] | [[b;#0000FF;]H] | [[b;#0000FF;]N] | [[b;#0000FF;]I] | [[b;#0000FF;]S] | [[b;#0000FF;]H] | [[b;#0000FF;]A] | [[b;#0000FF;]N] |  | [[b;#0000FF;]S] | [[b;#0000FF;]I] | [[b;#0000FF;]N] | [[b;#0000FF;]G] | [[b;#0000FF;]H] |
----------------------------------------------------------------------------
[[@;;;terminal img]images/iconphoto.jpeg]


Use following command for getting details about me
     ---------------------------------------------
     | [[b;#0000FF;]Command]   |          [[b;#0000FF;]Description]          |
     ---------------------------------------------
     | [[b;#0000FF;]whoami]    | To read something about me    |
     | [[b;#0000FF;]about]     | To read info about this site  |
     | [[b;#0000FF;]blogs]     | Read about my blogs           |
     | [[b;#0000FF;]Experience]| Read about my work experience |
     | [[b;#0000FF;]Projects]  | Read about project i have done|
     ---------------------------------------------

`,
    prompt:'g_nishan_singh >'
    });
 });
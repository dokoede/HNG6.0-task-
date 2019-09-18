Hng 6.0 Task 1 (Front End And Back End)
HNG 6.0 TASK 1:  HOW WE CREATED A SIGN Up & LOGIN PAGE BY TEAM-DOMINICANS

Github URL : https://github.com/dokoede/HNG6.0-task-
Link to our site : https://www.team-dominicans.byethost14.com/
image links : 
https://res.cloudinary.com/dthwqcdxe/image/upload/v1568826086/Screenshot_2019-09-17_Log_In_1_hiwihl.png
https://res.cloudinary.com/dthwqcdxe/image/upload/v1568826087/Screenshot_2019-09-17_Sign-Up_1_k35bnt.png
https://res.cloudinary.com/dthwqcdxe/image/upload/v1568826089/Screenshot_2019-09-17_Log_In_2_u4dff5.png
https://res.cloudinary.com/dthwqcdxe/image/upload/v1568826090/Screenshot_2019-09-17_Sign-Up_3_rtdwsv.png


The first task of HNG 6.0 was the creation of a login page using HTML, CSS, Javascript, and PHP. We were required to form a team of 10 persons.

What are the guidelines?
We were asked to design and program a login and signup page with HTML/CSS and also create a basic authentication for the login page. Multiple languages were allowed. The frontend developers were allowed to use frameworks and libraries while backend developers are to hardcode the authentication using only PHP. 

How Team-Dominicans came about?
Team Dominicans was formed by @Dennis.O. and members were selected randomly.

Who are the team members and their specialty?
The team consists of 6 front end developers, 3 back end developers, and 1 UI/UX designer.

The Front end developers are @Angela E., @Janetsomehow, @Taofeeq_deru, @Toluwa.logo @mogbonjubola and  @Dennis.O as the Team Lead. This fantastic 6 all have awesome skills in Front end web development technology (HTML, CSS, and Javascript)

The back end developers are @Weezykon, @Henny, and @Mojeed Kusimo. They are skilled in a server-side scripting language like PHP.

The UI designer; @devifymatt created the design for the team using Figma giving us a unique prototype for our login and sign up pages.

HOW THE PAGE WAS CREATED

DESIGN AND Prototype: Summary of Steps

The design prototype was achieved using Figma tools. 
Border box and curved edges design were used instead of flat edges as the former is the trending design. The border box-shadow give the design live and made it look like material design. 
Both login and register buttons are on the same page to allow users to easily switch to the necessary page. This gives a better user experience. 
The active page button is coloured green and complements the side image
A picture of two African ladies having a warm embrace was used for both the login and signup page. This   signifies the importance of love and friendship in African communities

FRONTEND: SUMMARY OF STEPS

The login and SingUp pages were created using a combination of CSS Grids, flexbox and media queries. Front-end team members initially considered using bootstrap but felt it was not necessary because the CSS grid and flexbox gave us the ability to write cleaner, flexible and easy to maintain code. It also helped team members who were not familiar with it, the opportunity to learn.

We achieved responsiveness using media queries for different screen sizes ranging within  350px to 480px to 800px and above.

We made use of javaScript to add some interactivity to the pages. Team members were allowed to use a javascript framework based on their proficiency.

Basic Html Validation was added to ensure users enter valid information in respective input fields

Various visual tweaks were applied to style  text, input field, and border areas

BACK END: SUMMARY OF STEPS

The backend developer's job was to back-up the data inputted on the sign-up form to a database and be accessible for login. 

We started with creating a database on the MySQL localhost database called Team-Dominicans. After creating the database we created a table called users with six columns. Each column represented; id, name(username), email, gender, password, and phone number.
After the database, we used PHP language to build the code for moving the data to the database. A PHP file was developed for each of the signup and login pages. However, API was used for the login page. 
Ajax was used to make a request from the frontend to the backend.While PHP?MySql for the backend.
In the backend, the header was set so as to accept JSON data and pass it back as well. header('Content-Type: application/JSON');
 Set a different folder for APIs. Md5 and sha1 were used to hash password. We also added dependency injection though mysql_real_escape_string.
Toastr was included so as to notify the user once this credential is valid or not. Jquery was used as well so as to make the page load faster.
When an error occurs header is set to 401 and the message as well echo(http_response_code(401)); to indicate credentials are wrong.
echo json_encode(array('status' => 'error','message'=> 'Invalid User Credentials'));
Success is passed this way echo json_encode(array('status' => 'success','user'=> $user, 'token' => $token ));

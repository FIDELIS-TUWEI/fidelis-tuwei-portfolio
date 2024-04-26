# Landing Page
- Craft a simple landing page with company information and a banner.

# 404 Error Page
- Design and implement a 404 error page incase a user types a url that is not found.

# Login Page
- Design a multi-tenant login page with the following: 
    - username
    - company name
    - password
- Design the login page with a banner on the side.
 
# Dashboard
- Design a great looking dashboard with the following:
    - Admin dashboard(system admin): 
        - Display work order logo on the dashboard
        - Has access to everything that entails about the application i.e
            - Register new tenant-admin
            - Modifies tenant-admin details
            - Edits tenant-admin password
            - Deletes tenant-admin
        - View system analytics i.e
            - Total number of user-tenants admin
            - Active tenant admins
    
    - Tenant Admin dashboard:
        - Display company logo
        - HAs a search icon for any service i.e work orders, users, employees, analytics, reports
        - Has ability to:
            - Create new users and assign roles depending on level of authorization
            - View and edit user details
            - Change user passwords
            - Delete/ disable a user

            - Create new employees
            - View, edit and update employee details
            - Change employee password
    
    - Users Dashboard:
        - normal user, able to create new work orders, track work details and view their profile details role = level-1
        - all supervisors, able to create new work, view, print work details and track work status, view their profile role = level-2
        - all HoDs, able to create new work, view, print work details and track work status, view their profile, view all work analytics i.e pending/not-attended, in-attendance, attended, completed work total count, generate reports. Role = level-3 
        - GM and AGM able to create new work, view, print work details and track work status, view their profile, view all work analytics i.e pending/not-attended, in-attendance, attended, completed work total count, view employee metrics, generate reports. Role = level-4
        - Engineer and maintenance supervisor, able to create new work, edit and assign work, view, print work details and track work status, view their profile, view all work analytics i.e pending/not-attended, in-attendance, attended, completed work total count, view employee metrics, generate reports. Role = level-5
        - IT/ tenant-admin, able to create new work, edit and assign work, view, print work details and track work status, view their profile, view all work analytics i.e pending/not-attended, in-attendance, attended, completed work total count, view employee metrics, generate reports. Role = level-6

    - Employee Dashboard:
        - Employee login details:
            - employee username
            - employee company name
            - employee password
        - Able to login and view the assigned work details
        - Update work tracker status only i.e from in-attendance to attended with comments, in-attendance to in-complete with comments
        - View profile and details
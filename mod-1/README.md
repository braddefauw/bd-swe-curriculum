## Agile Development Plan

### 1.1.1 Agile Development
* Opportunity: PlantShed is one of the most popular plantstores in NYC. Not only do they sell a wide variety of houseplants and flowers, they have a local coffeeshop where customers can enjoy a fresh brew before shopping. PlantShed is hoping to expand into the e-commerce space, where customers can view the inventory of plants, flowers, and coffeebeans and shop from home.

### 1.1.2 Personas
#### Persona #1
* Sarah is a secretary who is in charge of collecting data for the social care company.
* Needs: to have a well-functioning system to store data
* Frustrations: signing sheet is sometimes lost or not handed in, losing data

#### Persona #2
* Jim is a recipient of care from the social care company.
* Needs: to have a carer arrive on time daily, as his medication is needed on time
* Frustrations: sometimes carers are late

#### Persona #3
* Hailey is a nurse for the home-based health care company.
* Needs: to know where she is going and when, and to be able to log her hours
* Frustrations: sheets are sometime lost, paper sheets make it difficult to access information from home

### 1.1.3 Requirements
#### Functional Requirements
| ID | Priority | Description |
| :-----------:| :-----------: |:-----------: |
| FR1 | MUST | Admin page must show hours worked per week per employee |
| FR2 | MUST | Admin page must show schedule |
| FR3 | MUST | Admin page must be able to invoice clients |
| FR4 | MUST | User page must show schedule |
| FR5 | MUST | Employee page must have the ability to log hours |
| FR6 | MUST | Employee page must show individual employee's schedule |

#### Non-Functional Requirements
| ID | Priority | Description |
| :-----------:| :-----------: |:-----------: |
| NFR1 | MUST | The application code must be documented in a manner that it would be easy for a new developer to understand. |
| NFR2 | MUST | The application code must be written in React. |
| NFR3 | MUST | The application code must be stored in a Github reposistory. |
| NFR4 | MUST | There must be documentation which describes: * how to run the application * features of the application * design <br> decisions * team roles & responsibilities * links to UML use case, class and sequence diagrams * <br> links to the database design * links to a unit test coverage report |

### 1.1.4 User Stories
1. As an admin, I can view the daily schedule of all employees so that I know who is working where.
2. As an admin, I can show hours worked per employee so that they can get paid appropriately.
3. As an admin, I can invoice clients so that we can keep our business running.
4. As a user, I can show the schedule so I know who is seeing me today and when.
5. As a user, I can click in to a provider's profile so I know more about who is taking care of me.
6. As a user, I can view an "about" page so I know more about the company that's taking care of me.
7. As a user, I can click into a "careers" page so I can apply to work at the company.
8. As a user, I can click into a "FAQ's" page so I can common questions answered without reaching out to the company directly.
9. As a user, I can click into a "location" page to view the company's location on a map.
9. As an employee, I can log hours so I can get paid the correct amount.
10. As an employee, I can view my schedule so I know when and where I'm working.


### 1.1.5 MVP
* User can view homepage and nav bar
* User can click links in navbar to navigate to schedule, about, careers, FAQs, location
* "Employees" link to log hours and view schedule (auth added later)
* "Admin" page to view daily schedule of all employees, employee hours log page, invoice clients

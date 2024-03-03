# Welcome to TechShop Project!
An computer store e-commerce website created by using React and Springboot

# Members:
- Lê Thái Vi
- Trịnh Quang Long

# Project Features:
* App features:
  * View, search product, filter by tag and price.
  * Login, register and forget password.
  * Payment via VNPay
* User features:
  * Make purchase and manage orders.
  * Manage users information
* Admin features:
  * Statistic: order, selling
  * Manage (CRUD):
    * Product
    * Category
    * Brand
    * Order
    * User

# Project Scope:
**Database**:
  * Design: [TechShop_DB](https://dbdiagram.io/d/TechShopDb-6505391202bd1c4a5eae0bc8)
  * ORM: [FlywayDB](https://flywaydb.org/)
  * DBMS: [PostgreSQL](https://www.postgresql.org/)

**Front-End**:
   * Framework/Lib: [ReactTs](https://react.dev/)
   * State-Management: React Context

**Back-End**:
   * Framework/Lib:
     * [SpringBoot 3.0.11](https://github.com/facebook/react)
     * SpringSecurity + JWT
   * State-management:  [MobX](https://github.com/mobxjs/mobx)
   * Build tool: [Maven](https://webpack.js.org/)
   * Architecture: MVC

# Start Project:
**Important:** You will need **Docker** and **Nodejs 18.*** to run the project.
- ***Back-end server***: Open terminal at the root folder and run the command below
```sh
  docker compose up --build
```
>**Note**: you only need to use `--build` flag the first time you start the project.
- ***Back-end server***:
  - Open the terminal inside frontend folder and run the command below to install the dependencies
```sh
  npm install
```
  - Then start the front-end application:
```sh
  npm start
```

# Documentary and reference:
- Git document 
  - 👉[Even a monkey know how to use git](https://backlog.com/git-tutorial/vn/intro/intro2_1.html)
  - 👉[Git Notebook](https://rogerdudler.github.io/git-guide/index.vi.html)

# Important:
- Create branch with this format Name_Job
- If there is a new merge happened on main branch **PULL** and **REBASE** before continue coding
- There will be *conflict* happen while *rebase* with main branch, you will have to **RESOLVE CONFLICT** by yourself or ask team members
- Create **PULL REQUEST** when your task is done
- **DO NOT** merge the branch by yourself

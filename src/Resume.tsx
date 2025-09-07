import React from "react";

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg p-10 font-sans text-gray-900">
      {/* Header */}
      <div className="pb-1 mb-6 text-center">
        <h1 className="text-3xl font-bold">Matheus Alves de Miranda</h1>
        <p className="text-sm">Osasco, São Paulo - Brazil  </p>
        {/* <p className="text-sm">Osasco, São Paulo - Brasil | (XXX) XXX-XXXX | email@email.com</p> */}

        <p className="text-sm">
          <a href="https://www.linkedin.com/in/dev-matheus-miranda" className="text-blue-600" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/matheus-miranda
          </a>{" "}
          | <a href="https://github.com/MatheusMirandaHi" className="text-blue-600">github.com/matheus-miranda</a> {" "}
          | <a href="https://mttdev.vercel.app/" className="text-blue-600">vercel.com/matheus-miranda</a>
        </p>
      </div>

      {/* Education */}
      <div className="mb-3">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">EDUCATION</h2>
        <div>
           <div className="flex justify-between">
            <p className="font-semibold">
                Mackenzie Presbyterian University
          </p>
            <p className="font-semibold">
                Alphaville, São Paulo
          </p>
          </div>

          <div className="flex justify-between">
           <p className="text-sm italic">
            Bachelor's of Science in Computer Science
          </p>
            <p className="text-sm italic">
                Expected Graduation: Dec 2028
          </p>
          </div>

          {/* <p className="text-sm italic">Bachelor of Science in Computer Science | Expected Graduation: Dec 2028</p> */}
          <p className="text-sm">
            <span className="font-semibold">Concentracion:</span>  Software Engineering, Data Science, Cloud Computing
          </p>
          <p className="text-sm">
            <span className="font-semibold">Relevant Coursework: </span> Data Structures, Algorithms, Artificial Intelligence, Discrete Mathematics
          </p>
        </div>
      </div>
      
       {/* Education */}
      <div className="mb-6">
        <div>
          
          <div className="flex justify-between">
           <p className="font-semibold">
            Osasco Technological Institute Foundation (FITO)
          </p>
            <p className="font-semibold">
                Osasco, São Paulo
          </p>
          </div>


            <div className="flex justify-between">
           <p className="text-sm italic">
            Tecnical High School Degree in System Development
          </p>
            <p className="text-sm italic">
                Jan 2021 – Dec 2024
          </p>
          </div>

          
          {/* <p className="text-sm italic">College Degree in System Development</p> */}
          {/* <p className="text-sm">Cumulative GPA: 4.0/4.0</p> */}
          <p className="text-sm">
            <span className="font-semibold">Specialization: </span> Web Development, Database, Programming Lnaguages
          </p>
          <p className="text-sm">
            <span className="font-semibold">Relevant Coursework: </span> Programming Logic, Object-Oriented Programming, Database Management Systems
          </p>
        </div>
      </div>

<div className="mb-6">
  <h2 className="text-xl font-semibold border-b pb-1 mb-3">EXPERIENCE</h2>
  <div className="mb-4">


 <div className="flex justify-between">
           <p className="font-semibold">
            TÜV NORD Brazil - BRTÜV
          </p>
            <p className="font-semibold">
                Alphaville, São Paulo
          </p>
          </div>


            <div className="flex justify-between">
           <p className="text-sm italic">
            Full Stack Developer Intern
          </p>
            <p className="mb-1 text-sm italic">
                Jul 2025 – Present
          </p>
          </div>



    
    {/* <div className="flex justify-between">
    <p className="font-semibold">TÜV NORD Brazil - BRTÜV</p>
    <p className="font-semibold text-end">Jul 2025 – Present</p>
    </div>   
     <p className=" mb-1 text-sm italic"> Full Stack Developer Intern</p> */}
    {/* <p className="text-sm italic">Jul 2025 – Present</p> */}
    <ul className="list-disc list-inside text-sm">
      <li>Worked on both front-end and back-end development tasks, contributing to new features and system improvements.</li>
      <li>Maintained and updated legacy systems to ensure stability and performance.</li>
      <li>Supported database operations and data management using SQL Server.</li>
      <li>Gained hands-on experience with C#, ASP.NET (Web Forms/MVC), JavaScript, Boostrap, Kaban Methods (Trello) and DevOps practices, including CI/CD pipelines.</li>
    </ul>
  </div>

        {/* <div className="mb-4">
          <p className="font-semibold">Science Undergraduate Laboratory Intern — Argonne National Lab</p>
          <p className="text-sm italic">May 2024 – Aug 2024</p>
          <ul className="list-disc list-inside text-sm">
            <li>Increased precision by 82% using post-processing algorithm detecting unstable combustion.</li>
            <li>Implemented compression ratio detection algorithm improving accuracy by 20%.</li>
          </ul>
        </div> */}
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">PROJECTS</h2>
        <div className="mb-4">

           <div className="flex justify-between">
           <p className="font-semibold">
            Booking System for Restaurants
          </p>
            <p className="font-semibold">
              Osasco, São Paulo
          </p>
          </div>


            <div className="flex justify-between">
           <p className="text-sm italic">
            {/* Final Project Paper in System Development */}
            Team Lead and Full Stack Developer
          </p>
            <p className="mb-1 text-sm italic">
                Jun 2024 – Nov 2024
          </p>
          </div>


          {/* <p className="font-semibold">Booking System - Team Lead</p>
          <p className="text-sm italic">Jun 2024 – Nov 2024</p> */}
          <ul className="list-disc list-inside text-sm">
            <li>
        Table Reservation System for Restaurants focused on the São Paulo area. Developed using HTML5, CSS, JavaScript, Bootstrap, PHP, MySQL, and Figma. The project aimed to simplify the table reservation process, offering a practical and efficient experience for both users and restaurant owners.
      </li>
      {/* <li>
        Led a team of 7 members, delegating tasks and ensuring on-time delivery.
      </li> */}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">SKILLS</h2>
        <p className="text-sm">
          <strong>Programming:</strong> ASP.NET, C# (Sharp), Entity Framework, TailwindCSS, Git, GitHub, Figma, JavaScript, HTML, CSS, SQL, React.js, Boostrap, Python, TypeScript, Node.js, Express.js, MongoDB, MySQL, Next.js, REST APIs, ontext API, Axios, Redux, Vercel.
        </p>
        <p className="text-sm">
          <strong>Technical:</strong> Data Structures, Algorithms, Machine Learning, OOP, REST APIs, Agile Methodologies, Kanban, MVC, TDD, Microservices, CI/CD, Docker, Kubernetes, Cloud Computing (Azure), Web Development.
        </p>
        <p className="text-sm">
          <strong>Platforms:</strong> Windows, VS Code, Visual Studio, Insominia, SQL Server Management Studio, Azure, Postman, Power BI, Jupyter Notebook.
        </p>
        <p className="text-sm">
          <strong>Languages:</strong> English, Portuguese.
        </p>
      </div>

      {/* Interests */}
      <div>
        <h2 className="text-xl font-semibold border-b pb-1 mb-3">INTERESTS</h2>
        <p className="text-sm">Software Engineer, FullStack Developer.</p>
      </div>
    </div>
  );
}


//Obejtivos, titulos, cursos, certificados,  soft skills habilidades interpessoais (comunicação, trabalho em equipe), 
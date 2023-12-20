const skills = [
    {
      id: 1,
      name: "React Js",
      value: 80 ,
      image: "https://i.ibb.co/CwZf8J5/react.png",
    },
    {
      id: 2,
      name: "MongoDB Database",
      value: 70 ,
      image: "https://i.ibb.co/dcBNHJK/mongo.png",
    },
    {
      id: 3,
      name: "JavaScript",
      value: 80 ,
      image: "https://i.ibb.co/41DQhnm/js.png",
    },
    {
      id: 4,
      name: "MySQL Database",
      value: 50 ,
      image: "https://i.ibb.co/LSWJSDv/sql.png",
    },
  ];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      <div className="mb-20 text-center">
        <p className="text-xl text-headingcolor font-semibold mb-5 text-white">
          My Skills
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold text-white">My Expertise</h2>
      </div>


      {/* skillis card */}
      <div className=" grid items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            skills.map( skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
                <rect></rect>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":`${skill.value}`}} role="progressbar">{skill.value}</div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Skills;

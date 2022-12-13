const skills = [
  {id: 122500, skill: 'HTML', learned: true},
  {id: 726843, skill: 'CSS', learned: true},
  {id: 101125, skill: 'JavaScript', learned: true},
  {id: 127904, skill: 'Node', learned: true},
  {id: 587296, skill: 'cURL', learned: false},
  {id: 139608, skill: 'Python', learned: false},
  {id: 122361, skill: 'jQuery', learned: false},
  {id: 090505, skill: 'SQL', learned: false}
];
  
module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
};
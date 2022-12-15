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
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
};

function getOne(id) {
  id = parseInt(id);
  return skills.find (skill => skill.id === id);
};

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.learned = false;
  skills.push(skill);
};

function deleteOne(id){
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
};

function update(id, skill){
  console.log('before', skill)
  id = parseInt(id)
  const idx = skills.findIndex(skill => skill.id === id)
  skill.id = parseInt(id)
  console.log('after', skill)
  skills.splice(idx, 1, skill)
};
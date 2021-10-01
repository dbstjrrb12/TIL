let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const sortBy = (todos, key) =>
  [...todos].sort((previous, next) =>
    previous[key] > next[key] ? 1 : previous[key] < next[key] ? -1 : 0
  );
todos = sortBy(todos, 'id');
console.log(todos);

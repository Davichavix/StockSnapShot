export default reducer = (posts = [], action) => {
  if (action.type === 'CREATE') {
    switch (action.type) {
      case 'FETCH_ALL':
        return posts;
      case 'CREATE':
        return posts;
      default:
          return posts;
    } 
  }
}
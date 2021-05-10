import react from 'react'

const Article = () => {

  const getArticle = (e: any) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    fetch(`http://localhost:8080/api/articles`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      if (response.status === 200) {
        return response;
      }
      throw new Error('Connection failed!');
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => {
      console.log(err);
    });
    
  }
    return (
      
      <div>
      <button onClick={getArticle}>articles</button>
    </div>
  )
}
export default Article;

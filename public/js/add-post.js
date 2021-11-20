async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const postCont = document.querySelector('textarea[name="post-content"]').value;
    console.log("hello?");
    const res = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        postCont
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (res.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(res.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('click', console.log("I was clicked!!!!!"));
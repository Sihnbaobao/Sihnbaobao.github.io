var posts=["2023/09/20/new1/","2023/09/20/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
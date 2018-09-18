const http = new easyHTTP();

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(posts);
//     }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });

// Post
// Create Data
const data = {
    userId: 1,
    title: 'Custom Post',
    body: 'This is a custom post'
};
// Create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
        console.log(err);
    } else{
        console.log(post);
    }
});
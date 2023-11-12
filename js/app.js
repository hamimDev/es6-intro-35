
document.getElementById('apply-bg-btn').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue'
    }
})

document.getElementById('friend-3-btn').addEventListener('click', function(){
    const friendThree = document.getElementById('friend-3');
    friendThree.style.textAlign = 'center';
})


document.getElementById('add-friend').addEventListener('click', function(){
    console.log(12);
})


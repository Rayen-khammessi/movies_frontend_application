const movies=[
    {
        _id:"4561635fe4s563f4",
        title:"terminator",
        genre:{_id:'jdksdljklmq',name:'Action'},
        numberInStock:5,
        dailyRentalRate:4.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },
    {
        _id:"4561634fe4s563f4",
        title:"pup",
        genre:{_id:'jdksdljklmq',name:'Action'},
        numberInStock:45,
        dailyRentalRate:7.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },
    {
        _id:"456163fe48s563f4",
        title:"jk",
        genre:{_id:'jdksdljklmq',name:'Comedy'},
        numberInStock:45,
        dailyRentalRate:1.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },
    {
        _id:"456163fe4s6563f4",
        title:"kenj",
        genre:{_id:'jdksdljklmq',name:'Action'},
        numberInStock:75,
        dailyRentalRate:8.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },
    {
        _id:"4561763fe4s563f4",
        title:"nampa",
        genre:{_id:'jdksdljklmq',name:'Comedy'},
        numberInStock:455,
        dailyRentalRate:0.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },
    {
        _id:"45616389fe4s563f4",
        title:"mllm",
        genre:{_id:'jdksdljklmq',name:'Comedy'},
        numberInStock:175,
        dailyRentalRate:9.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },
    {
        _id:"456163fe4s5693f4",
        title:"jklsm",
        genre:{_id:'jdksdljklmq',name:'Comedy'},
        numberInStock:45,
        dailyRentalRate:1.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },
    {
        _id:"4561963fe4s563f4",
        title:"lmmmo",
        genre:{_id:'jdksdljklmq',name:'Comedy'},
        numberInStock:45,
        dailyRentalRate:1.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },
    {
        _id:"45612663fe4s563f4",
        title:"kompo",
        genre:{_id:'jdksdljklmq',name:'Thriller'},
        numberInStock:45,
        dailyRentalRate:6.2,
        publishDate:"2024-01-15 jsdkskl",
        liked:false
    },

]

export function getmovies(){
    return movies;
}

export function getmovie(id){
    return  movies.find(m=>m._id===id);
}
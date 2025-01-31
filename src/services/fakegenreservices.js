export const genres=[
    {_id:'',name:'All Genres'},
    {_id:'hjks45684snckl', name: "Action"},
    {_id:'jskflerglosps', name: "Comedy"},
    {_id:'jdklfbmdops48', name: "Thriller"}
];

export function getgenres(){
    return genres.filter(g=>g);
}
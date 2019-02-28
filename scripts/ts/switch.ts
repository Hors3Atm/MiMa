function switch_con(id:number):void
{
    var id_str:string = "con" + id.toString();
    var contents:HTMLCollectionOf<Element> = document.getElementsByClassName("con");
    for (var i:number = 0; i < contents.length; i++)
    {
        contents[i].classList.add("dont_show");
    }
    document.getElementById(id_str).classList.remove("dont_show");
}
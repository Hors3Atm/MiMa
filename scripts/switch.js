function switch_con(id) {
    var id_str = "con" + id.toString();
    var contents = document.getElementsByClassName("con");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.add("dont_show");
    }
    document.getElementById(id_str).classList.remove("dont_show");
}

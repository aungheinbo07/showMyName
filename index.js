let myName = "aung hein bo";

export function showUI(){
    let h1 = document.createElement("h1");
    h1.innerText = myName;
    h1.style.position = "fixed";
    h1.style.zIndex = 1000;
    h1.style.top = 0;
    h1.style.left = 0;
    h1.style.right = 0;
    h1.style.bottom = 0;
    h1.style.margin = "auto";
    document.body.append(h1);
}